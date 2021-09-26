import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {  useSelector } from "react-redux";


// Rest means that it will take all path in parent component such as -> {path: '/admin'}
function PrivateRoute({ component: Component, ...rest }) {
  const { user: currentUser } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={props =>
        currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login"}}
          />
        )
      }
    />
  );
}

export default PrivateRoute;