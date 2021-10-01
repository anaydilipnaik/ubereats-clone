import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from "../constants/ActionTypes";

const initialState = {
  user: {},
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        user: action.payload,
        error: false,
      };
    case LOGIN_USER_ERROR:
      return {
        user: {},
        error: true,
      };
    case LOGOUT_USER:
      return {
        user: {},
        error: false,
      };
    default:
      return state;
  }
}
