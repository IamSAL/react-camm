import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import PhotoUploadContentPage from "../pages/PhotoUploadContentPage";
import PhotoUploadListPage from "../pages/PhotoUploadListPage";

function AppRouter(props) {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={PhotoUploadContentPage} />
        <Route exact path="/upload-list" component={PhotoUploadListPage} />
      </Switch>
    </Fragment>
  );
}

export default AppRouter;
