import { semiEndpoint, defaultApiOptions } from "../utils/ApiEndpoint";
import axios from "axios";

export function getAllRestaurants(dataJson) {
  const apiEndpoint = semiEndpoint + "/restaurants/all";
  const apiOptions = defaultApiOptions("POST", dataJson);
  return fetch(apiEndpoint, apiOptions);
}

export function getRestaurantDetailsById(restaurantId) {
  const apiEndpoint = semiEndpoint + "/restaurant/details/" + restaurantId;
  return fetch(apiEndpoint);
}

export function getDishesByRestaurantId(restaurantId) {
  const apiEndpoint = semiEndpoint + "/dishes/get/" + restaurantId;
  return fetch(apiEndpoint);
}

export function getDishCategories() {
  const apiEndpoint = semiEndpoint + "/dishes/category/";
  return fetch(apiEndpoint);
}

export function addDish(dataJson) {
  return axios.post(semiEndpoint + "/addDish/", dataJson);
}

export function updateDish(dataJson, dishId) {
  return axios.put(semiEndpoint + "/updateDish/" + dishId, dataJson);
}
