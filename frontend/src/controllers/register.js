import { semiEndpoint, defaultApiOptions } from "../utils/ApiEndpoint";

export function registerUser(dataJson) {
  const apiEndpoint = semiEndpoint + "/registerUser";
  const apiOptions = defaultApiOptions("POST", dataJson);
  return fetch(apiEndpoint, apiOptions);
}
