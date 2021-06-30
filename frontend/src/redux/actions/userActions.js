import apiClient from "../../helper/apiclient";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import {
  GET_USER_ERROR,
  GET_USER,
  SET_TOKEN,
  LOGGEDINORNOT,
  GET_USER_PENDING,
} from "./userActionTypes";

import {
  googleLogin,
  facebookLogin,
  get_user,
  logout,
} from "../../config/backend_api";
import { apiDispatch, apiError } from "../../helper/helperFunctions";

const userErrorDispatch = apiError(GET_USER_ERROR);

export const getUser = () => {
  let url = get_user;
  return (dispatch) => {
    dispatch(apiDispatch(GET_USER_PENDING, true));
    apiClient
      .get(url)
      .then((res) => {
        dispatch(apiDispatch(LOGGEDINORNOT, true));
        dispatch(apiDispatch(GET_USER, res.data));
        dispatch(apiDispatch(GET_USER_PENDING, false));
      })
      .catch((error) => {
        dispatch(apiDispatch(LOGGEDINORNOT, false));
        dispatch(apiDispatch(GET_USER_PENDING, false));

        dispatch(userErrorDispatch(error));
      });
  };
};

export const GoogleLoginFtn = (data) => {
  let url = googleLogin;
  return (dispatch) => {
    apiClient
      .post(url, data)
      .then((res) => {
        dispatch(apiDispatch(SET_TOKEN, res.data.key));
        dispatch(apiDispatch(LOGGEDINORNOT, true));
        dispatch(getUser());
        toast.success("Logged In Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        Cookies.set("token", res.data.key, { expires: 7 });
      })
      .catch((error) => {
        dispatch(userErrorDispatch(error));
        // toast.error(
        //   `User is already signed In with this email, try to login with either facebook or fill the form`,
        //   {
        //     // position: "top-center",
        //     autoClose: 5000,
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //   }
        // );
      });
  };
};

export const FacebookLoginFtn = (data) => {
  let url = facebookLogin;
  return (dispatch) => {
    apiClient
      .post(url, data)
      .then((res) => {
        dispatch(apiDispatch(SET_TOKEN, res.data.key));
        dispatch(apiDispatch(LOGGEDINORNOT, true));
        let data = {
          bio: "",
          phone_number: "",
        };
        dispatch(getUser(data));
        toast.success("Welcome back, Logged In Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        Cookies.set("token", res.data.key, { expires: 7 });
      })
      .catch((error) => {
        dispatch(userErrorDispatch(error));
        toast.error(
          `User is already signed In with this email, try to login with either google or fill the form`,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      });
  };
};

export const LogOut = () => {
  return (dispatch) => {
    const url = logout;
    apiClient.post(url).then((res) => {
      dispatch(apiDispatch(LOGGEDINORNOT, false));
    });
  };
};
