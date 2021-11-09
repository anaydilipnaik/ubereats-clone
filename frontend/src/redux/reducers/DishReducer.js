import {
  ADD_DISH,
  ADD_DISH_ERROR,
  UPDATE_DISH,
  UPDATE_DISH_ERROR,
  DISHES_BY_RESTAURANT,
  DISHES_BY_RESTAURANT_ERROR,
  DISH_CATEGORIES,
  DISH_CATEGORIES_ERROR,
} from "../constants/ActionTypes";

const initialState = {
  error: false,
  success: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_DISH:
      return {
        error: false,
        success: true,
      };
    case ADD_DISH_ERROR:
      return {
        error: true,
        success: false,
      };
    case UPDATE_DISH:
      return {
        error: false,
        success: true,
      };
    case UPDATE_DISH_ERROR:
      return {
        error: true,
        success: false,
      };
    case DISHES_BY_RESTAURANT:
      return {
        error: false,
        success: true,
      };
    case DISHES_BY_RESTAURANT_ERROR:
      return {
        error: true,
        success: false,
      };
    case DISH_CATEGORIES:
      return {
        error: false,
        success: true,
      };
    case DISH_CATEGORIES_ERROR:
      return {
        error: true,
        success: false,
      };
    default:
      return state;
  }
}
