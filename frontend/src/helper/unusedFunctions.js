export const updateStream = (peersRef, setPeers, userStream) => (stream) => {
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

export const switchCamera = (videoConstraints) => async (currentCameraRef) => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  const videoDevices = devices.filter((device) => device.kind === "videoinput");
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

export const shareScreen = (peersRef, userStream) => () => {
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
};
