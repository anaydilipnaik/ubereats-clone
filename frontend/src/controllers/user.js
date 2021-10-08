import { semiEndpoint, defaultApiOptions } from "../utils/ApiEndpoint";
import axios from "axios";

export function getUserDetails(userId) {
  const apiEndpoint = semiEndpoint + "/user/details/" + userId;
  return fetch(apiEndpoint);
}

export function updateUser(dataJson, userId) {
  const apiEndpoint = semiEndpoint + "/registerUser";
  return axios.put(semiEndpoint + "/updateUser/" + userId, dataJson);
}
