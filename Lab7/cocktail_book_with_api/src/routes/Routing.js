import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../view/Home";
import { Recipe } from "../view/Recipe";
import { LogIn } from "../view/LogIn";
import { User } from "../view/User";

export const Routing = (props) => {
  return (
    <Router>
      <Suspense fallback={<h1>LOADING!!!!</h1>}>
        {props.children}
        <Switch>
          <Route exact path="/recipe/:id" component={Recipe} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/user" component={User} />
          <Route component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
};
