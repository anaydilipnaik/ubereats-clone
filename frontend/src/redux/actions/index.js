import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_ERROR,
} from "../constants/ActionTypes";
import { loginUser } from "../../controllers/login";
import { registerUser } from "../../controllers/register";

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
