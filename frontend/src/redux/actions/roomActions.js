import apiClient from "../../helper/apiclient";
import { toast } from "react-toastify";

import {
  CREATE_ROOM,
  GET_ROOMS,
  TOGGLE_USER_AUDIO,
  TOGGLE_USER_VIDEO,
} from "./roomActionTypes";

import { create_room, get_room, invite } from "../../config/backend_api";

import { apiDispatch, getUrlFromCode } from "../../helper/helperFunctions";

export const createNewRoom = (data) => {
  const url = create_room;
  return (dispatch) => {
    apiClient
      .post(url, data)
      .then((res) => {
        dispatch(apiDispatch(CREATE_ROOM, res.data));
        navigator.clipboard.writeText(getUrlFromCode(res.data.id));
        toast.success("copied to clipboard");
      })
      .catch((err) => {
        toast.error(`error occured in creating the room`);
      });
  };
};

export const getRooms = () => {
  const url = get_room;
  return (dispatch) => {
    apiClient
      .get(url)
      .then((res) => {
        dispatch(apiDispatch(GET_ROOMS, res.data));
      })
      .catch((err) => {
        toast.error(`error occured in fetching your rooms`, {});
      });
  };
};

export const toggleAudio = () => {
  return (dispatch) => {
    dispatch(apiDispatch(TOGGLE_USER_AUDIO));
  };
};
export const toggleVideo = () => {
  return (dispatch) => {
    dispatch(apiDispatch(TOGGLE_USER_VIDEO));
  };
};

export const inviteUser = (roomId, data) => {
  const url = invite(roomId);
  return (dispatch) => {
    apiClient
      .post(url, data)
      .then((res) => {
        toast.success("user invited");
      })
      .catch((err) => {
        toast.error(err.data);
      });
  };
};
