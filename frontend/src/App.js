import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserLogin from "./views/layouts/UserLogin";
import UserRegister from "./views/layouts/UserRegister";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <UserLogin />
        </Route>
        <Route path="/register">
          <UserRegister />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
