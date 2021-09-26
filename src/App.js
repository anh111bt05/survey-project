import React from "react";
import { Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import MainQuiz from "./components/PrivatePage/MainQuiz";

import { history } from "./helpers/history";

import PrivateRoute from "./routing/PrivateRoute";
import PublicRoute from "./routing/PublicRoute";



function App() {
  const dotenv = require("dotenv");
  dotenv.config();
  return (
    <Router history={history}>
      <Route path="/" component={PublicRoute} />
      <PrivateRoute path="/mainquiz" component={MainQuiz} />
    </Router>
  );
}

export default App;
