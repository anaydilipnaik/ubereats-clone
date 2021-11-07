import { semiEndpoint } from "../utils/ApiEndpoint";
import axios from "axios";

export function getUserDetails(userId, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.get(semiEndpoint + "/user/details/" + userId);
}

export function updateUser(dataJson, userId, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.put(semiEndpoint + "/updateUser/" + userId, dataJson);
}

export function getUserFavourites(userId, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.get(semiEndpoint + "/favourites/" + userId);
}

export function addToFavourite(dataJson, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.post(semiEndpoint + "/addToFavourites", dataJson);
}
