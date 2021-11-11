import {
  RESTAURANT_DETAILS,
  RESTAURANT_DETAILS_ERROR,
  ALL_RESTAURANTS,
  ALL_RESTAURANTS_ERROR,
} from "../constants/ActionTypes";

const initialState = {
  error: false,
  success: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RESTAURANT_DETAILS:
      return {
        error: false,
        success: true,
      };
    case RESTAURANT_DETAILS_ERROR:
      return {
        error: true,
        success: false,
      };
    case ALL_RESTAURANTS:
      return {
        error: false,
        success: true,
      };
    case ALL_RESTAURANTS_ERROR:
      return {
        error: true,
        success: false,
      };
    default:
      return state;
  }
}
