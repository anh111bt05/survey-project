import React from 'react';
import { Route, Redirect } from 'react-router-dom';


// Rest means that it will take all path in parent component such as -> {path: '/admin'}
function PermissionRoute({ component: Component, isAdmin, ...rest }) {

  return (
    <Route
      {...rest}
      render={props =>
        isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/mainquiz"}}
          />
        )
      }
    />
  );
}

export default PermissionRoute;