import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  LOGIN_RESTAURANT,
  LOGIN_RESTAURANT_ERROR,
  LOGOUT_RESTAURANT,
} from "../constants/ActionTypes";

const initialState = {
  user: {},
  restaurant: {},
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
    case LOGIN_RESTAURANT:
      return {
        restaurant: action.payload,
        error: false,
      };
    case LOGIN_RESTAURANT_ERROR:
      return {
        restaurant: {},
        error: true,
      };
    case LOGOUT_RESTAURANT:
      return {
        restaurant: {},
        error: false,
      };
    default:
      return state;
  }
}
