import {
  USER_DETAILS,
  USER_DETAILS_ERROR,
  UPDATE_USER,
  UPDATE_USER_ERROR,
} from "../constants/ActionTypes";
import { getUserDetails, updateUser } from "../../controllers/user";

export const getUserDetailsFunc =
  (userId, token, setUserDetails) => (dispatch) => {
    getUserDetails(userId, token)
      .then((res) => {
        if (res.data) {
          setUserDetails(res.data);
          dispatch({
            type: USER_DETAILS,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: USER_DETAILS_ERROR,
        });
      });
  };

export const updateUserFunc =
  (data, userId, token, setUserDetails) => (dispatch) => {
    updateUser(data, userId, token)
      .then((res) => {
        if (res.data) {
          setUserDetails(res.data);
          alert("Success");
          dispatch({
            type: UPDATE_USER,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: UPDATE_USER_ERROR,
        });
      });
  };
