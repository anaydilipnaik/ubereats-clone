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
} from "../constants/ActionTypes";
import { loginUser, loginRestaurant } from "../../controllers/login";
import { registerUser, registerRestaurant } from "../../controllers/register";

export const loginUserFunc = (payload) => (dispatch) => {
  loginUser(payload)
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        dispatch({
          type: LOGIN_USER,
          payload: data[0],
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      } else
        dispatch({
          type: LOGIN_USER_ERROR,
          payload: {},
        });
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
        setTimeout(() => {
          window.location.href = "/userlogin";
        }, 3000);
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
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        dispatch({
          type: LOGIN_RESTAURANT,
          payload: data[0],
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
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
        setTimeout(() => {
          window.location.href = "/restaurantlogin";
        }, 3000);
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: REGISTER_RESTAURANT_ERROR,
      });
    });
};
