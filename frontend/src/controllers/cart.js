import { semiEndpoint } from "../utils/ApiEndpoint";
import axios from "axios";

export function addToCart(dataJson, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.post(semiEndpoint + "/addToCart", dataJson);
}

export function getCartCount(userId, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.get(semiEndpoint + "/cart/count/" + userId);
}

export function getCartItems(userId, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.get(semiEndpoint + "/cart/get/" + userId);
}

export function updateCart(cartId, dataJson, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.put(semiEndpoint + "/updateCart/" + cartId, dataJson);
}
