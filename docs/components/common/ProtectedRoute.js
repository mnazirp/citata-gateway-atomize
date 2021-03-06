import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

var k = 1;
const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  return (
      <Route
        {...rest}
        render={(props) => {
          if (user) return <Component user={user} {...rest} {...props} />;
          else
            return (
              <Redirect
                to={{
                  pathname: "/unauthorized",
                  state: { from: props.location },
                }}
              />
            );
        }}
      />
  );
};

export default ProtectedRoute;
