import {
  CREATE_ROOM,
  GET_ROOMS,
  TOGGLE_USER_AUDIO,
  TOGGLE_USER_VIDEO,
} from "../actions/roomActionTypes";

const initialPendingState = {
  createRoomPending: false,
  getRoomsPending: false,
};

const initialState = {
  ...initialPendingState,
  rooms: [],
  currentRoom: {},
  userVideo: {
    audioOn: true,
    videoOn: true,
  },
};

export default function roomReducer(
  state = initialState,
  { type, payload, error }
) {
  switch (type) {
    case CREATE_ROOM:
      return {
        ...state,
        currentRoom: payload,
        rooms: [payload, ...state.rooms],
      };
    case GET_ROOMS:
      return { ...state, rooms: payload };
    case TOGGLE_USER_AUDIO:
      return {
        ...state,
        userVideo: { ...state.userVideo, audioOn: !state.userVideo.audioOn },
      };
    case TOGGLE_USER_VIDEO:
      return {
        ...state,
        userVideo: { ...state.userVideo, videoOn: !state.userVideo.videoOn },
      };
    default:
      return state;
  }
}
