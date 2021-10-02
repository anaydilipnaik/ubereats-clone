import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";
import CartReducer from "./CartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "cart"],
};

const rootReducer = combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  cart: CartReducer,
});

export default persistReducer(persistConfig, rootReducer);
