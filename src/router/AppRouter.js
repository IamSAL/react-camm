import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../pages/Landing";
import ResultList from "../pages/ResultList";

function AppRouter(props) {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/upload-list" component={ResultList} />
      </Switch>
    </Fragment>
  );
}

export default AppRouter;
