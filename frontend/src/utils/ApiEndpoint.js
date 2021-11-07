export const semiEndpoint =
  process.env.REACT_APP_PROTOCOL +
  "://" +
  process.env.REACT_APP_HOST +
  ":" +
  process.env.REACT_APP_BACKEND_PORT;

// for fetch
export function defaultApiOptions(apiMethod, apiDataJson = {}) {
  return {
    method: apiMethod,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(apiDataJson),
  };
}
