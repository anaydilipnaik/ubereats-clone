import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserLogin from "./views/layouts/UserLogin";
import UserRegister from "./views/layouts/UserRegister";
import RestaurantLogin from "./views/layouts/RestaurantLogin";
import RestaurantRegister from "./views/layouts/RestaurantRegister";
import UserHome from "./views/layouts/UserHome";
import Checkout from "./views/layouts/Checkout";
import UserProfile from "./views/layouts/UserProfile";
import RestaurantPage from "./views/layouts/RestaurantPage";
import UserFavourites from "./views/layouts/UserFavourites";
import UserOrders from "./views/layouts/UserOrders";
import RestaurantOrders from "./views/layouts/RestaurantOrders";
import RestaurantHome from "./views/layouts/RestaurantHome";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/userlogin">
          <UserLogin />
        </Route>
        <Route path="/userregister">
          <UserRegister />
        </Route>
        <Route path="/restaurantlogin">
          <RestaurantLogin />
        </Route>
        <Route path="/restaurantregister">
          <RestaurantRegister />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/userprofile">
          <UserProfile />
        </Route>
        <Route path="/restaurantpage">
          <RestaurantPage />
        </Route>
        <Route path="/favourites">
          <UserFavourites />
        </Route>
        <Route path="/restaurantorders">
          <RestaurantOrders />
        </Route>
        <Route path="/restauranthome">
          <RestaurantHome />
        </Route>
        <Route path="/userorders">
          <UserOrders />
        </Route>
        <Route path="/">
          <UserHome />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
