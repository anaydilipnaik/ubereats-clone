import {
  REGISTER_USER,
  REGISTER_USER_ERROR,
  REGISTER_RESTAURANT,
  REGISTER_RESTAURANT_ERROR,
} from "../constants/ActionTypes";

const initialState = {
  error: false,
  success: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        error: false,
        success: true,
      };
    case REGISTER_USER_ERROR:
      return {
        error: true,
        success: false,
      };
    case REGISTER_RESTAURANT:
      return {
        error: false,
        success: true,
      };
    case REGISTER_RESTAURANT_ERROR:
      return {
        error: true,
        success: false,
      };
    default:
      return state;
  }
}
