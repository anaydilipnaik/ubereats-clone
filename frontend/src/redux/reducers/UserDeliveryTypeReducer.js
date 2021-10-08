import { SET_USER_DELIVERY_TYPE } from "../constants/ActionTypes";

const initialState = {
  userDeliveryType: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_DELIVERY_TYPE:
      return {
        userDeliveryType: action.payload,
      };
    default:
      return state;
  }
}
