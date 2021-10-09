import { semiEndpoint, defaultApiOptions } from "../utils/ApiEndpoint";

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