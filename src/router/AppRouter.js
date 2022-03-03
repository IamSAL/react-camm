import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import PhotoUploadContentPage from "../pages/Landing";
import ResultList from "../pages/ResultList";

function AppRouter(props) {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={PhotoUploadContentPage} />
        <Route exact path="/upload-list" component={ResultList} />
      </Switch>
    </Fragment>
  );
}

export default AppRouter;
