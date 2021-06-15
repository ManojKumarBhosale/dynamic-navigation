import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Office from "./office";
import Employee from "./employee";
import Company from "./company";
import Customer from "./customer";
import { getDefaultSubNavMap } from "./../containers/App/menuItems";

const App = () => {
  const defaultSubNavMap = getDefaultSubNavMap();
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/employee" />
      </Route>
      <Route exact path="/employee/:subNav?">
        <Employee defaultSubNavKey={defaultSubNavMap.employee} />
      </Route>
      <Route exact path="/office/:subNav?">
        <Office defaultSubNavKey={defaultSubNavMap.office} />
      </Route>
      <Route exact path="/company/:subNav?">
        <Company defaultSubNavKey={defaultSubNavMap.company} />
      </Route>
      <Route exact path="/customer/:subNav?">
        <Customer defaultSubNavKey={defaultSubNavMap.customer} />
      </Route>
      <Route path="*">{() => <h1>404 : Page Not Found</h1>}</Route>
    </Switch>
  );
};

export default App;
