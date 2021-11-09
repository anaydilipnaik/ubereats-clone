import {
  ORDERS_BY_RESTAURANT_ID,
  ORDERS_BY_RESTAURANT_ID_ERROR,
  FILTERED_ORDERS_BY_RESTAURANT_ID,
  FILTERED_ORDERS_BY_RESTAURANT_ID_ERROR,
  ORDER_DELIVERY_STATUS,
  ORDER_DELIVERY_STATUS_ERROR,
  ORDER_DETAILS_BY_ID,
  ORDER_DETAILS_BY_ID_ERROR,
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
    case FILTERED_ORDERS_BY_RESTAURANT_ID:
      return {
        error: false,
        success: true,
      };
    case FILTERED_ORDERS_BY_RESTAURANT_ID_ERROR:
      return {
        error: true,
        success: false,
      };
    case ORDER_DETAILS_BY_ID:
      return {
        error: false,
        success: true,
      };
    case ORDER_DETAILS_BY_ID_ERROR:
      return {
        error: true,
        success: false,
      };
    default:
      return state;
  }
}
