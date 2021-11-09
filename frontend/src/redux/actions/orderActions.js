import {
  ORDER_DELIVERY_STATUS,
  ORDER_DELIVERY_STATUS_ERROR,
  ORDERS_BY_RESTAURANT_ID,
  ORDERS_BY_RESTAURANT_ID_ERROR,
} from "../constants/ActionTypes";
import {
  updateOrderDeliveryStatus,
  getOrdersByRestaurantId,
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
