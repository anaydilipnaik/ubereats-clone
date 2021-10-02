import { semiEndpoint, defaultApiOptions } from "../utils/ApiEndpoint";

export function getAllRestaurants() {
  const apiEndpoint = semiEndpoint + "/restaurants/all";
  return fetch(apiEndpoint);
}

export function getRestaurantDetailsById(restaurantId) {
  const apiEndpoint = semiEndpoint + "/restaurant/details/" + restaurantId;
  return fetch(apiEndpoint);
}

export function getDishesByRestaurantId(restaurantId) {
  const apiEndpoint = semiEndpoint + "/dishes/get/" + restaurantId;
  return fetch(apiEndpoint);
}
