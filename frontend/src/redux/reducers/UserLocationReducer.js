import { SET_USER_LOCATION } from "../constants/ActionTypes";

const initialState = {
  userLocation: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_LOCATION:
      return {
        userLocation: action.payload,
      };
    default:
      return state;
  }
}
