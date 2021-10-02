import { GET_CART_COUNT, CART_COUNT_ERROR } from "../constants/ActionTypes";

const initialState = {
  count: 0,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART_COUNT:
      return {
        count: action.payload,
        error: false,
      };
    case CART_COUNT_ERROR:
      return {
        error: true,
      };
    default:
      return state;
  }
}
