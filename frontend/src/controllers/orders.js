import { semiEndpoint, defaultApiOptions } from "../utils/ApiEndpoint";

export function placeOrder(dataJson) {
  const apiEndpoint = semiEndpoint + "/placeOrder";
  const apiOptions = defaultApiOptions("POST", dataJson);
  return fetch(apiEndpoint, apiOptions);
}

export function getOrderDetailsById(orderId) {
  const apiEndpoint = semiEndpoint + "/order/details/" + orderId;
  return fetch(apiEndpoint);
}
