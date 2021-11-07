import { semiEndpoint } from "../utils/ApiEndpoint";
import axios from "axios";

export function registerUser(dataJson) {
  return axios.post(semiEndpoint + "/registerUser/", dataJson);
}

export function registerRestaurant(dataJson) {
  return axios.post(semiEndpoint + "/registerRestaurant/", dataJson);
}
