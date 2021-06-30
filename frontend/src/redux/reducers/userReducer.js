import {
  GET_USER,
  LOGIN_PENDING,
  SET_TOKEN,
  LOGGEDINORNOT,
  SET_ID,
  GET_ALL_USERS,
  GET_USER_PENDING,
} from "../actions/userActionTypes";

const initialPendingState = {
  loginPending: false,
  getUserPending: false,
};

const initialState = {
  ...initialPendingState,
  user: {},
  token: "",
  isLoggedIn: false,
};

export default function userReducer(
  state = initialState,
  { type, payload, error }
) {
  switch (type) {
    case GET_ALL_USERS:
      return { ...state, AllUsers: payload };
    case SET_TOKEN:
      return { ...state, token: payload };
    case LOGGEDINORNOT:
      return { ...state, isLoggedIn: payload };
    case GET_USER:
      return { ...state, user: payload };
    case SET_ID:
      return { ...state, _id: payload };
    case LOGIN_PENDING:
      return { ...state, loginPending: payload };
    case GET_USER_PENDING:
      return { ...state, getUserPending: payload };
    default:
      return state;
  }
}
