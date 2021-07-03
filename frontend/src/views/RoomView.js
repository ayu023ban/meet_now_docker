import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WebsocketService from "../helper/WebsocketService";
import { useParams } from "react-router";
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
  getPermissionRequestListener,
} from "../helper/socketListeners";
import JoinModal from "../components/Room/JoinModal";
import { switchCamera } from "../helper/unusedFunctions";
import { getIsUserCreator, getRoom } from "../redux/actions/roomActions";

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
  isUserVideoOn,
  setWaitingUsers
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

  WebsocketService.on(
    "user left",
    user_left_listener(myID, peersRef, setPeers)
  );

  WebsocketService.on("videoMedia", videoMediaListener(peersRef, setPeers));

  WebsocketService.on("audioMedia", audioMediaListener(peersRef, setPeers));
  WebsocketService.on(
    "user want to join",
    getPermissionRequestListener(myID, setWaitingUsers)
  );
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
  const classes = useStyles();
  const me = useSelector((state) => state.userReducer.user);
  const [waitingUsers, setWaitingUsers] = useState([]);
  const dispatch = useDispatch();

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

  const socketConnect = async () => {
    await setCameraStream();
    socketRef.current.sendMessage("join room", roomID);
  };

  useEffect(() => {
    dispatch(getIsUserCreator(roomID));
    dispatch(getRoom(roomID));
    socketConnect();
  }, []);

  useEffect(() => {
    socketFunctions(
      peersRef,
      myID,
      userStream,
      setPeers,
      isUserAudioOn,
      isUserVideoOn,
      setWaitingUsers
    );
  }, [userStream, isUserAudioOn, isUserVideoOn, myID]);

  useEffect(() => {
    let userStreamRef = userStream;
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
  }, [userStream]);

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
              size={sizeMap[index + 2]}
              rows={sizeMap["rows"]}
            />
          );
        })}
      </div>
      <JoinModal
        waitingUsers={waitingUsers}
        setWaitingUsers={setWaitingUsers}
      />
      <Controls
        switchc={() => {
          switchCamera(videoConstraints)(currentCameraRef);
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
