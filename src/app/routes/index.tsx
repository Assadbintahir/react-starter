import React, { ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { About, Home, Users } from "../containers/demo";

export const Routes = (): ReactElement => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
