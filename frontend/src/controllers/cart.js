import { semiEndpoint, defaultApiOptions } from "../utils/ApiEndpoint";

export function addToCart(dataJson) {
  const apiEndpoint = semiEndpoint + "/addToCart";
  const apiOptions = defaultApiOptions("POST", dataJson);
  return fetch(apiEndpoint, apiOptions);
}

export function getCartCount(userId) {
  const apiEndpoint = semiEndpoint + "/cart/count/" + userId;
  return fetch(apiEndpoint);
}

export function getCartItems(userId) {
  const apiEndpoint = semiEndpoint + "/cart/get/" + userId;
  return fetch(apiEndpoint);
}

export function updateCart(cartId, dataJson) {
  const apiEndpoint = semiEndpoint + "/updateCart/" + cartId;
  const apiOptions = defaultApiOptions("PUT", dataJson);
  return fetch(apiEndpoint, apiOptions);
}
