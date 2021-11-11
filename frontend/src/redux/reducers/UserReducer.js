import {
  USER_DETAILS,
  USER_DETAILS_ERROR,
  UPDATE_USER,
  UPDATE_USER_ERROR,
} from "../constants/ActionTypes";

const initialState = {
  error: false,
  success: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_DETAILS:
      return {
        error: false,
        success: true,
      };
    case USER_DETAILS_ERROR:
      return {
        error: true,
        success: false,
      };
    case UPDATE_USER:
      return {
        error: false,
        success: true,
      };
    case UPDATE_USER_ERROR:
      return {
        error: true,
        success: false,
      };
    default:
      return state;
  }
}