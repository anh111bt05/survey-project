import React from "react";
import { Switch, Route, } from "react-router-dom";
import Home from "../components/PublicPage/Home";
import Login from "../components/PublicPage/Login";
import Register from "../components/PublicPage/Register";

const PublicRoute = () => (
    <Switch>
      <Route exact path={["/", '/home']} component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
);
export default PublicRoute;
