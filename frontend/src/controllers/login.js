import { semiEndpoint } from "../utils/ApiEndpoint";
import axios from "axios";

export function loginUser(dataJson) {
  return axios.post(semiEndpoint + "/loginUser/", dataJson);
}

export function loginRestaurant(dataJson) {
  return axios.post(semiEndpoint + "/loginRestaurant/", dataJson);
}
