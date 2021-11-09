import {
  ORDERS_BY_RESTAURANT_ID,
  ORDERS_BY_RESTAURANT_ID_ERROR,
  ORDER_DELIVERY_STATUS,
  ORDER_DELIVERY_STATUS_ERROR,
} from "../constants/ActionTypes";

const initialState = {
  error: false,
  success: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ORDER_DELIVERY_STATUS:
      return {
        error: false,
        success: true,
      };
    case ORDER_DELIVERY_STATUS_ERROR:
      return {
        error: true,
        success: false,
      };
    case ORDERS_BY_RESTAURANT_ID:
      return {
        error: false,
        success: true,
      };
    case ORDERS_BY_RESTAURANT_ID_ERROR:
      return {
        error: true,
        success: false,
      };
    default:
      return state;
  }
}