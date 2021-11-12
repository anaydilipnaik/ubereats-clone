import {
  USER_DETAILS,
  USER_DETAILS_ERROR,
  UPDATE_USER,
  UPDATE_USER_ERROR,
  ADD_TO_FAVOURITE,
  ADD_TO_FAVOURITE_ERROR,
  GET_USER_FAVOURITES,
  GET_USER_FAVOURITES_ERROR,
  USER_ADDRESSES,
  USER_ADDRESSES_ERROR,
  ADD_ADDRESS,
  ADD_ADDRESS_ERROR,
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
    case ADD_TO_FAVOURITE:
      return {
        error: false,
        success: true,
      };
    case ADD_TO_FAVOURITE_ERROR:
      return {
        error: true,
        success: false,
      };
    case GET_USER_FAVOURITES:
      return {
        error: false,
        success: true,
      };
    case GET_USER_FAVOURITES_ERROR:
      return {
        error: true,
        success: false,
      };
    case USER_ADDRESSES:
      return {
        error: false,
        success: true,
      };
    case USER_ADDRESSES_ERROR:
      return {
        error: true,
        success: false,
      };
    case ADD_ADDRESS:
      return {
        error: false,
        success: true,
      };
    case ADD_ADDRESS_ERROR:
      return {
        error: true,
        success: false,
      };
    default:
      return state;
  }
}
