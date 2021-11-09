import {
  DISHES_BY_RESTAURANT,
  DISHES_BY_RESTAURANT_ERROR,
  DISH_CATEGORIES,
  DISH_CATEGORIES_ERROR,
  ADD_DISH,
  ADD_DISH_ERROR,
  UPDATE_DISH,
  UPDATE_DISH_ERROR,
} from "../constants/ActionTypes";
import {
  getDishesByRestaurantId,
  getDishCategories,
  addDish,
  updateDish,
} from "../../controllers/restaurants";

export const getDishesByRestaurantIdFunc =
  (payload, token, setDishes) => (dispatch) => {
    getDishesByRestaurantId(payload, token)
      .then((res) => {
        if (res.data) {
          setDishes(res.data);
          dispatch({
            type: DISHES_BY_RESTAURANT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: DISHES_BY_RESTAURANT_ERROR,
        });
      });
  };

export const getDishCategoriesFunc =
  (token, setDishCategories) => (dispatch) => {
    getDishCategories(token)
      .then((res) => {
        if (res.data) {
          setDishCategories(res.data);
          dispatch({
            type: DISH_CATEGORIES,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: DISH_CATEGORIES_ERROR,
        });
      });
  };

export const addDishFunc = (payload, token, callback) => (dispatch) => {
  addDish(payload, token)
    .then((res) => {
      if (res.data)
        dispatch({
          type: ADD_DISH,
        });
      callback();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ADD_DISH_ERROR,
      });
    });
};

export const updateDishFunc =
  (payload, dishId, token, callback) => (dispatch) => {
    updateDish(payload, dishId, token)
      .then((res) => {
        if (res.data)
          dispatch({
            type: UPDATE_DISH,
          });
        callback();
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: UPDATE_DISH_ERROR,
        });
      });
  };
