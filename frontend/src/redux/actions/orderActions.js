import {
  ORDER_DELIVERY_STATUS,
  ORDER_DELIVERY_STATUS_ERROR,
  ORDERS_BY_RESTAURANT_ID,
  ORDERS_BY_RESTAURANT_ID_ERROR,
  FILTERED_ORDERS_BY_RESTAURANT_ID,
  FILTERED_ORDERS_BY_RESTAURANT_ID_ERROR,
  ORDER_DETAILS_BY_ID,
  ORDER_DETAILS_BY_ID_ERROR,
} from "../constants/ActionTypes";
import {
  updateOrderDeliveryStatus,
  getOrdersByRestaurantId,
  getFilteredOrdersByRestaurantId,
  getOrderDetailsById,
} from "../../controllers/orders";

export const updateOrderDeliveryStatusFunc =
  (payload, orderId, token, onHide) => (dispatch) => {
    updateOrderDeliveryStatus(payload, orderId, token)
      .then((res) => {
        if (res.data) {
          dispatch({
            type: ORDER_DELIVERY_STATUS,
          });
          onHide();
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: ORDER_DELIVERY_STATUS_ERROR,
        });
      });
  };

export const getOrdersByRestaurantIdFunc =
  (restaurantId, token, setOrders) => (dispatch) => {
    getOrdersByRestaurantId(restaurantId, token)
      .then((res) => {
        if (res.data) {
          setOrders(res.data);
          dispatch({
            type: ORDERS_BY_RESTAURANT_ID,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: ORDERS_BY_RESTAURANT_ID_ERROR,
        });
      });
  };

export const getFilteredOrdersByRestaurantIdFunc =
  (payload, token, setOrders) => (dispatch) => {
    getFilteredOrdersByRestaurantId(payload, token)
      .then((res) => {
        if (res.data) {
          setOrders(res.data);
          dispatch({
            type: FILTERED_ORDERS_BY_RESTAURANT_ID,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FILTERED_ORDERS_BY_RESTAURANT_ID_ERROR,
        });
      });
  };

export const getOrderDetailsByIdFunc =
  (orderId, token, setOrderDetails, setViewReceiptModal) => (dispatch) => {
    getOrderDetailsById(orderId, token)
      .then((res) => {
        if (res.data) {
          setOrderDetails(res.data);
          setViewReceiptModal(true);
          dispatch({
            type: ORDER_DETAILS_BY_ID,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: ORDER_DETAILS_BY_ID_ERROR,
        });
      });
  };
