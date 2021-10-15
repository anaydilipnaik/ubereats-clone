import React from "react";
import ReactDOM from "react-dom";
import RestaurantHome from "./views/layouts/RestaurantHome";
import Checkout from "./views/layouts/Checkout";
import UserHome from "./views/layouts/UserHome";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RestaurantHome />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Checkout />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserHome />, div);
  ReactDOM.unmountComponentAtNode(div);
});
