import { toast } from "react-toastify";
import WebsocketService from "../components/WebsocketService";
import { getFullName } from "../helper/utilFunctions";
import { addPeer, createPeer } from "./peers";

export const all_users_listener =
  (peersRef, myID, stream, setPeers) => (users) => {
    peersRef.current = {};
    const temp = {};
    users.forEach((user) => {
      if (myID !== user.id) {
        const peer = createPeer(user.id, myID, stream);

        peersRef.current[user.id] = { user, peer };
        temp[user.id] = {
          user: user,
          peer: peer,
        };
      }
    });
    setPeers(temp);
  };

export const user_joined_listener =
  (myID, peersRef, stream, setPeers, isUserAudioOn, isUserVideoOn) =>
  (payload) => {
    const user = payload.callerUser;
    if (payload.usable_id === myID) {
      const peer = addPeer(payload.signal, user.id, stream);
      if (!Boolean(peersRef.current[user.id])) {
        peersRef.current[user.id] = { user, peer };
        setPeers((peers) => ({
          ...peers,
          [user.id]: {
            user: user,
            peer: peer,
          },
        }));
      }
      WebsocketService.sendMessage("audioMedia", {
        userID: myID,
        audioOn: isUserAudioOn,
      });
      WebsocketService.sendMessage("videoMedia", {
        userID: myID,
        videoOn: isUserVideoOn,
      });
      toast.info(`${getFullName(user.first_name, user.last_name)} joined`);
    }
  };

export const receive_returned_signal = (myID, peersRef) => (payload) => {
  if (payload.usable_id === myID) {
    const { peer } = peersRef.current[payload.id];
    peer.signal(payload.signal);
  }
};

export const user_left_listener = (peersRef, setPeers) => (payload) => {
  const user = payload.user;
  if (peersRef.current[user.id]) {
    peersRef.current[user.id].peer.destroy();
  }
  delete peersRef.current[user.id];
  setPeers((peers) => {
    const { [payload.user.id]: remove, ...rest } = peers;
    return rest;
  });
  toast.info(`${getFullName(user.first_name, user.last_name)} left`);
};

export const videoMediaListener = (peersRef, setPeers) => (payload) => {
  const userID = payload.userID;
  if (peersRef.current[userID]) {
    peersRef.current[userID].user.videoOn = payload.videoOn;
    setPeers((peers) => {
      const { user, peer } = peers[userID];
      return {
        ...peers,
        [userID]: { peer, user: { ...user, videoOn: payload.videoOn } },
      };
    });
  }
};

export const audioMediaListener = (peersRef, setPeers) => (payload) => {
  const userID = payload.userID;
  if (peersRef.current[userID]) {
    peersRef.current[userID].user.audioOn = payload.audioOn;
    setPeers((peers) => {
      const { user, peer } = peers[userID];
      return {
        ...peers,
        [userID]: { peer, user: { ...user, audioOn: payload.audioOn } },
      };
    });
  }
};

