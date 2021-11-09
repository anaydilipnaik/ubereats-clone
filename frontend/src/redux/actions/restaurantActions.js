import {
  RESTAURANT_DETAILS,
  RESTAURANT_DETAILS_ERROR,
} from "../constants/ActionTypes";
import {
  getRestaurantDetailsById,
  updateRestaurant,
} from "../../controllers/restaurants";

export const getRestaurantDetailsByIdFunc =
  (payload, token, setRestaurantDetails, setIsDelivery, setIsPickup) =>
  (dispatch) => {
    getRestaurantDetailsById(payload, token)
      .then((res) => {
        if (res.data) {
          setRestaurantDetails(res.data);
          if (res.data.isDelivery === "1") setIsDelivery(true);
          if (res.data.isPickup === "1") setIsPickup(true);
          dispatch({
            type: RESTAURANT_DETAILS,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: RESTAURANT_DETAILS_ERROR,
        });
      });
  };

export const updateRestaurantFunc =
  (
    payload,
    restaurantId,
    token,
    setRestaurantDetails,
    setIsDelivery,
    setIsPickup
  ) =>
  (dispatch) => {
    updateRestaurant(payload, restaurantId, token)
      .then((res) => {
        if (res.data) {
          setRestaurantDetails(res.data);
          if (res.data.isDelivery === "1") setIsDelivery(true);
          if (res.data.isPickup === "1") setIsPickup(true);
          alert("Success");
          dispatch({
            type: RESTAURANT_DETAILS,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: RESTAURANT_DETAILS_ERROR,
        });
      });
  };
