import { semiEndpoint } from "../utils/ApiEndpoint";
import axios from "axios";

export function placeOrder(dataJson, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.post(semiEndpoint + "/placeOrder", dataJson);
}

export function updateOrderDeliveryStatus(dataJson, orderId, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.put(
    semiEndpoint + "/updateOrderDeliveryStatus/" + orderId,
    dataJson
  );
}

export function getOrderDetailsById(orderId, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.get(semiEndpoint + "/order/details/" + orderId);
}

export function getOrdersByUserId(userId, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.get(semiEndpoint + "/orders/get/user/" + userId);
}

export function getOrdersByRestaurantId(restaurantId, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.get(semiEndpoint + "/orders/get/restaurant/" + restaurantId);
}

export function getFilteredOrdersByRestaurantId(dataJson, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.post(semiEndpoint + "/filteredorders/get/restaurant", dataJson);
}

export function getFilteredOrdersByUserId(dataJson, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.post(semiEndpoint + "/filteredorders/get/user", dataJson);
}

export function getUserAddresses(userId, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.get(semiEndpoint + "/addresses/get/" + userId);
}

export function addAddress(dataJson, token) {
  axios.defaults.headers.common["authorization"] = token;
  return axios.post(semiEndpoint + "/addUserAddress", dataJson);
}
