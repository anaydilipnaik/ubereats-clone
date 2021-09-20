import { semiEndpoint, defaultApiOptions } from "../utils/ApiEndpoint";

export function loginUser(dataJson) {
  const apiEndpoint = semiEndpoint + "/loginUser";
  const apiOptions = defaultApiOptions("POST", dataJson);
  return fetch(apiEndpoint, apiOptions);
}
