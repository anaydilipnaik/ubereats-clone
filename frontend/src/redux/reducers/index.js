import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";
import CartReducer from "./CartReducer";
import UserLocationReducer from "./UserLocationReducer";
import UserDeliveryTypeReducer from "./UserDeliveryTypeReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "cart", "userLocation", "userDeliveryType"],
};

const rootReducer = combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  cart: CartReducer,
  userLocation: UserLocationReducer,
  userDeliveryType: UserDeliveryTypeReducer,
});

export default persistReducer(persistConfig, rootReducer);
