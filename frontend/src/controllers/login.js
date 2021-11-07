import { semiEndpoint, defaultApiOptions } from "../utils/ApiEndpoint";
import axios from "axios";

export function loginUser(dataJson) {
  return axios.post(semiEndpoint + "/loginUser/", dataJson);
}

export function loginRestaurant(dataJson) {
  const apiEndpoint = semiEndpoint + "/loginRestaurant";
  const apiOptions = defaultApiOptions("POST", dataJson);
  return fetch(apiEndpoint, apiOptions);
}
