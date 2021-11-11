import {
  RESTAURANT_DETAILS,
  RESTAURANT_DETAILS_ERROR,
  ALL_RESTAURANTS,
  ALL_RESTAURANTS_ERROR,
} from "../constants/ActionTypes";
import {
  getRestaurantDetailsById,
  updateRestaurant,
  getAllRestaurants,
} from "../../controllers/restaurants";

export const getRestaurantDetailsByIdFunc =
  (
    payload,
    token,
    setRestaurantDetails,
    setIsDelivery,
    setIsPickup,
    isRestaurant = false
  ) =>
  (dispatch) => {
    getRestaurantDetailsById(payload, token)
      .then((res) => {
        if (res.data) {
          setRestaurantDetails(res.data);
          if (isRestaurant) {
            if (res.data.isDelivery === "1") setIsDelivery(true);
            if (res.data.isPickup === "1") setIsPickup(true);
          }
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

export const getAllRestaurantsFunc =
  (payload, token, setRestaurants) => (dispatch) => {
    getAllRestaurants(payload, token)
      .then((res) => {
        if (res.data) {
          setRestaurants(res.data);
          dispatch({
            type: ALL_RESTAURANTS,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: ALL_RESTAURANTS_ERROR,
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
