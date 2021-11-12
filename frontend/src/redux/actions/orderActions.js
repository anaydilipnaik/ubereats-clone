import {
  ORDER_DELIVERY_STATUS,
  ORDER_DELIVERY_STATUS_ERROR,
  ORDERS_BY_RESTAURANT_ID,
  ORDERS_BY_RESTAURANT_ID_ERROR,
  ORDERS_BY_USER_ID,
  ORDERS_BY_USER_ID_ERROR,
  FILTERED_ORDERS_BY_RESTAURANT_ID,
  FILTERED_ORDERS_BY_RESTAURANT_ID_ERROR,
  FILTERED_ORDERS_BY_USER_ID,
  FILTERED_ORDERS_BY_USER_ID_ERROR,
  ORDER_DETAILS_BY_ID,
  ORDER_DETAILS_BY_ID_ERROR,
  PLACE_ORDER,
  PLACE_ORDER_ERROR,
} from "../constants/ActionTypes";
import {
  updateOrderDeliveryStatus,
  getOrdersByRestaurantId,
  getFilteredOrdersByRestaurantId,
  getOrderDetailsById,
  getOrdersByUserId,
  getFilteredOrdersByUserId,
  placeOrder,
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
          setOrders(res.data.reverse());
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
          setOrders(res.data.reverse());
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

export const getOrdersByUserIdFunc =
  (userId, token, setOrders, setPageCount, records) => (dispatch) => {
    getOrdersByUserId(userId, token)
      .then((res) => {
        if (res.data) {
          setOrders(res.data.reverse());
          setPageCount(Math.ceil(res.data.length / parseInt(records)));
          dispatch({
            type: ORDERS_BY_USER_ID,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: ORDERS_BY_USER_ID_ERROR,
        });
      });
  };

export const getFilteredOrdersByUserIdFunc =
  (payload, token, setOrders, setPageCount, records) => (dispatch) => {
    getFilteredOrdersByUserId(payload, token)
      .then((res) => {
        if (res.data) {
          setOrders(res.data.reverse());
          setPageCount(Math.ceil(res.data.length / parseInt(records)));
          dispatch({
            type: FILTERED_ORDERS_BY_USER_ID,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FILTERED_ORDERS_BY_USER_ID_ERROR,
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

export const placeOrderFunc =
  (
    payload,
    token,
    setParentOrderDetails,
    setPlacedOrderDetails,
    setOrderPlacedStatus
  ) =>
  (dispatch) => {
    placeOrder(payload, token)
      .then((res) => {
        if (res.data) {
          setParentOrderDetails(res.data);
          dispatch({
            type: PLACE_ORDER,
          });
          return getOrderDetailsById(res.data._id, token);
        }
      })
      .then((res) => {
        if (res.data) {
          setPlacedOrderDetails(res.data);
          setOrderPlacedStatus(true);
          dispatch({
            type: ORDER_DETAILS_BY_ID,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: PLACE_ORDER_ERROR,
        });
      });
  };
