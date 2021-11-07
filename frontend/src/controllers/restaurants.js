import { semiEndpoint } from "../utils/ApiEndpoint";
import axios from "axios";

export function getAllRestaurants(dataJson, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.post(semiEndpoint + "/restaurants/all", dataJson);
}

export function getRestaurantDetailsById(restaurantId, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.get(semiEndpoint + "/restaurant/details/" + restaurantId);
}

export function getDishesByRestaurantId(restaurantId, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.get(semiEndpoint + "/dishes/get/" + restaurantId);
}

export function getDishCategories(token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.get(semiEndpoint + "/dishes/category");
}

export function addDish(dataJson, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.post(semiEndpoint + "/addDish/", dataJson);
}

export function updateDish(dataJson, dishId, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.put(semiEndpoint + "/updateDish/" + dishId, dataJson);
}

export function updateRestaurant(dataJson, restaurantId, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.put(
    semiEndpoint + "/updateRestaurant/" + restaurantId,
    dataJson
  );
}
