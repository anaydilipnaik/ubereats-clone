import { semiEndpoint, defaultApiOptions } from "../utils/ApiEndpoint";
import axios from "axios";

export function getUserDetails(userId) {
  const apiEndpoint = semiEndpoint + "/user/details/" + userId;
  return fetch(apiEndpoint);
}

export function updateUser(dataJson, userId) {
  return axios.put(semiEndpoint + "/updateUser/" + userId, dataJson);
}

export function getUserFavourites(userId) {
  const apiEndpoint = semiEndpoint + "/favourites/" + userId;
  return fetch(apiEndpoint);
}

export function addToFavourite(dataJson) {
  const apiEndpoint = semiEndpoint + "/addToFavourites";
  const apiOptions = defaultApiOptions("POST", dataJson);
  return fetch(apiEndpoint, apiOptions);
}
