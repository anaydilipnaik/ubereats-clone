import { semiEndpoint, defaultApiOptions } from "../utils/ApiEndpoint";

export function getAllRestaurants(dataJson) {
  const apiEndpoint = semiEndpoint + "/restaurants/all";
  return fetch(apiEndpoint);
}
