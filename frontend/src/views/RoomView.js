import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import WebsocketService from "../components/WebsocketService";
import { useHistory, useParams } from "react-router";
import Video from "../components/common/Video";
import Controls from "../components/Room/Controls";
import { split } from "../helper/utilFunctions";
import Chat from "../components/Room/Chat";
import { makeStyles } from "@material-ui/core";
import {
  all_users_listener,
  user_joined_listener,
  user_left_listener,
  receive_returned_signal,
  videoMediaListener,
  audioMediaListener,
} from "../helper/socketListeners";

let videoConstraints = {
  height: window.innerHeight / 2,
  width: window.innerWidth / 2,
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    background: theme.palette.background.default,
  },
}));

const socketFunctions = (
  peersRef,
  myID,
  stream,
  setPeers,
  isUserAudioOn,
  isUserVideoOn
) => {
  WebsocketService.on(
    "all users",
    all_users_listener(peersRef, myID, stream, setPeers)
  );
  WebsocketService.on(
    "user joined",
    user_joined_listener(
      myID,
      peersRef,
      stream,
      setPeers,
      isUserAudioOn,
      isUserVideoOn
    )
  );

  WebsocketService.on(
    "receiving returned signal",
    receive_returned_signal(myID, peersRef)
  );

  WebsocketService.on("user left", user_left_listener(peersRef, setPeers));

  WebsocketService.on("videoMedia", videoMediaListener(peersRef, setPeers));

  WebsocketService.on("audioMedia", audioMediaListener(peersRef, setPeers));
};

const Room = () => {
  const { roomID } = useParams();
  const [peers, setPeers] = useState({});
  const userVideo = useRef();
  const socketRef = useRef(WebsocketService);
  const peersRef = useRef({});
  const myID = useSelector((state) => state.userReducer.user.pk);
  const [userStream, setUserStream] = useState();
  const currentCameraRef = useRef(0);
  let sizeMap = split(Object.keys(peers).length + 1);
  const [chatOpen, setChatOpen] = useState(false);
  const isUserAudioOn = useSelector(
    (state) => state.roomReducer.userVideo.audioOn
  );
  const isUserVideoOn = useSelector(
    (state) => state.roomReducer.userVideo.videoOn
  );
  const history = useHistory();
  const classes = useStyles();
  const me = useSelector((state) => state.userReducer.user);

  const setCameraStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: videoConstraints,
      audio: true,
    });
    setUserStream(stream);
    if (userVideo && userVideo.current) {
      userVideo.current.srcObject = stream;
    }
  };

  const updateStream = (stream) => {
    for (let key in peersRef.current) {
      // peersRef.current[key].removeTrack(
      //   // userStream.getVideoTracks()[0],
      //   peersRef.current[key].streams[0].getVideoTracks()[0],
      //   userStream
      // );
      // peersRef.current[key].addTrack(stream.getVideoTracks()[0], userStream);
      // peersRef.current[key]._pc.getSenders().forEach((sender) => {
      //   if (sender.track.type === "video") {
      //     sender.replaceTrack(userStream.getVideoTracks()[0]);
      //   }
      // });
      peersRef.current[key].peer.streams.forEach((stream) => {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      });
    }
    setPeers({ ...peersRef.current });
    userStream.removeTrack(userStream.getVideoTracks()[0]);
    userStream.addTrack(stream.getVideoTracks()[0]);
  };

  const switchCamera = async (currentCameraRef) => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(
      (device) => device.kind === "videoinput"
    );
    currentCameraRef.current =
      (currentCameraRef.current + 1) % videoDevices.length;

    const updatedConstraints = {
      ...videoConstraints,
      deviceId: {
        exact: videoDevices[currentCameraRef.current].deviceId,
      },
    };
    videoConstraints = updatedConstraints;

    const stream = await navigator.mediaDevices.getUserMedia({
      video: videoConstraints,
      audio: true,
    });
    updateStream(stream);
  };

  function shareScreen() {
    navigator.mediaDevices
      .getDisplayMedia({ cursor: true })
      .then((screenStream) => {
        // const temp = {};
        Object.keys(peersRef.current).forEach((key) => {
          // let peer = peersRef.current[key];
          peersRef.current[key].replaceTrack(
            userStream.getVideoTracks()[0],
            screenStream.getVideoTracks()[0],
            userStream
          );
          // temp[key] = peer;
        });
      });
  }

  const socketConnect = async () => {
    socketRef.current.refresh();
    socketRef.current.connect(
      `ws://${window.location.hostname}/ws/room/${roomID}/`,
      // `ws://localhost:7000/ws/room/${roomID}/`,
      (e) => {
        console.log(e);
        history.replace("/", {
          message: "the url entered is incorrect.",
          type: "error",
        });
      }
    );
    await setCameraStream();
    socketRef.current.sendMessage("join room", roomID);
  };

  useEffect(() => {
    let websocketRef = socketRef.current;
    socketConnect();
    return () => {
      if (websocketRef) {
        websocketRef.close();
      }
    };
  }, []);

  useEffect(() => {
    let userStreamRef = userStream;
    socketFunctions(
      peersRef,
      myID,
      userStream,
      setPeers,
      isUserAudioOn,
      isUserVideoOn
    );
    return () => {
      if (userStreamRef) {
        userStreamRef.getVideoTracks().forEach((track) => {
          track.stop();
        });
        userStreamRef.getAudioTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [userStream, isUserAudioOn, isUserVideoOn, myID]);

  useEffect(() => {
    if (userStream) {
      userStream.getAudioTracks()[0].enabled = isUserAudioOn;
      if (socketRef.current.state() === 1) {
        socketRef.current.sendMessage("audioMedia", {
          userID: myID,
          audioOn: isUserAudioOn,
        });
      }
    }
  }, [userStream, isUserAudioOn, myID]);

  useEffect(() => {
    if (userStream) {
      userStream.getVideoTracks()[0].enabled = isUserVideoOn;
      if (socketRef.current.state() === 1) {
        socketRef.current.sendMessage("videoMedia", {
          userID: myID,
          videoOn: isUserVideoOn,
        });
      }
    }
  }, [userStream, isUserVideoOn, myID]);

  useEffect(() => {
    sizeMap = split(Object.keys(peers).length + 1);
  }, [peers]);

  return (
    <div className={classes.container}>
      <div
        style={{
          display: "flex",
          width: "100%",
          maxHeight: "calc(100vh - 7rem)",
          margin: "auto",
          flexGrow: "1",
          flexWrap: "wrap",
        }}
      >
        <Video
          muted
          ref={userVideo}
          user={{ ...me, videoOn: isUserVideoOn, audioOn: isUserAudioOn }}
          autoPlay
          playsInline
          size={sizeMap[1]}
          rows={sizeMap["rows"]}
          isUserVideo
        />
        {Object.values(peersRef.current).map((item, index) => {
          return (
            <Video
              key={index}
              peer={item.peer}
              user={item.user}
              muted
              size={sizeMap[index + 2]}
              rows={sizeMap["rows"]}
            />
          );
        })}
      </div>
      <Controls
        switchc={() => {
          switchCamera(currentCameraRef);
        }}
        toggleChat={() => {
          setChatOpen((open) => !open);
        }}
      />
      <Chat open={chatOpen} setOpen={setChatOpen} />
    </div>
  );
};

export default Room;
