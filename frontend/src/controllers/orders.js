import { semiEndpoint, defaultApiOptions } from "../utils/ApiEndpoint";
import axios from "axios";

export function placeOrder(dataJson) {
  const apiEndpoint = semiEndpoint + "/placeOrder";
  const apiOptions = defaultApiOptions("POST", dataJson);
  return fetch(apiEndpoint, apiOptions);
}

export function updateOrderDeliveryStatus(dataJson, orderId) {
  const apiEndpoint = semiEndpoint + "/updateOrderDeliveryStatus/" + orderId;
  const apiOptions = defaultApiOptions("PUT", dataJson);
  return fetch(apiEndpoint, apiOptions);
}

export function getOrderDetailsById(orderId) {
  const apiEndpoint = semiEndpoint + "/order/details/" + orderId;
  return fetch(apiEndpoint);
}

export function getOrdersByUserId(userId, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.get(semiEndpoint + "/orders/get/user/" + userId);
}

export function getOrdersByRestaurantId(restaurantId) {
  const apiEndpoint = semiEndpoint + "/orders/get/restaurant/" + restaurantId;
  return fetch(apiEndpoint);
}

export function getUserAddresses(userId) {
  const apiEndpoint = semiEndpoint + "/addresses/get/" + userId;
  return fetch(apiEndpoint);
}

export function addAddress(dataJson) {
  const apiEndpoint = semiEndpoint + "/addUserAddress";
  const apiOptions = defaultApiOptions("POST", dataJson);
  return fetch(apiEndpoint, apiOptions);
}
