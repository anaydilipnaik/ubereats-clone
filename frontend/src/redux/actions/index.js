import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_ERROR,
  LOGIN_RESTAURANT,
  LOGIN_RESTAURANT_ERROR,
  LOGOUT_RESTAURANT,
  REGISTER_RESTAURANT,
  REGISTER_RESTAURANT_ERROR,
  GET_CART_COUNT,
  SET_USER_DELIVERY_TYPE,
  SET_USER_LOCATION,
} from "../constants/ActionTypes";
import { loginUser, loginRestaurant } from "../../controllers/login";
import { registerUser, registerRestaurant } from "../../controllers/register";

export const loginUserFunc = (payload) => (dispatch) => {
  loginUser(payload)
    .then((res) => {
      if (res.data) {
        dispatch({
          type: LOGIN_USER,
          payload: res.data,
        });
        window.location.href = "/";
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: {},
      });
    });
};

export const logoutUserFunc = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
  window.location.href = "/userlogin";
};

export const registerUserFunc = (payload) => (dispatch) => {
  registerUser(payload)
    .then((data) => {
      if (data.status === 200) {
        dispatch({
          type: REGISTER_USER,
        });
        window.location.href = "/userlogin";
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: REGISTER_USER_ERROR,
      });
    });
};

export const loginRestaurantFunc = (payload) => (dispatch) => {
  loginRestaurant(payload)
    .then((res) => {
      if (res.data) {
        dispatch({
          type: LOGIN_RESTAURANT,
          payload: res.data,
        });
        window.location.href = "/restauranthome";
      } else
        dispatch({
          type: LOGIN_RESTAURANT_ERROR,
          payload: {},
        });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: LOGIN_RESTAURANT_ERROR,
        payload: {},
      });
    });
};

export const logoutRestaurantFunc = () => (dispatch) => {
  dispatch({
    type: LOGOUT_RESTAURANT,
  });
  window.location.href = "/restaurantlogin";
};

export const registerRestaurantFunc = (payload) => (dispatch) => {
  registerRestaurant(payload)
    .then((data) => {
      if (data.status === 200) {
        dispatch({
          type: REGISTER_RESTAURANT,
        });
        window.location.href = "/restaurantlogin";
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: REGISTER_RESTAURANT_ERROR,
      });
    });
};

export const getUserCartCount = () => (dispatch) => {
  if (sessionStorage.getItem("userCart"))
    dispatch({
      type: GET_CART_COUNT,
      payload: JSON.parse(sessionStorage.getItem("userCart")).length,
    });
  else
    dispatch({
      type: GET_CART_COUNT,
      payload: 0,
    });
};

export const setUserDeliveryType = (payload) => (dispatch) => {
  dispatch({
    type: SET_USER_DELIVERY_TYPE,
    payload: payload,
  });
};

export const setUserLocation = (payload) => (dispatch) => {
  dispatch({
    type: SET_USER_LOCATION,
    payload: payload,
  });
};
