import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";
import CartReducer from "./CartReducer";
import UserLocationReducer from "./UserLocationReducer";
import UserDeliveryTypeReducer from "./UserDeliveryTypeReducer";
import DishReducer from "./DishReducer";
import RestaurantReducer from "./RestaurantReducer";
import OrderReducer from "./OrderReducer";
import UserReducer from "./UserReducer";

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
  dish: DishReducer,
  restaurant: RestaurantReducer,
  order: OrderReducer,
  user: UserReducer,
});

export default persistReducer(persistConfig, rootReducer);
