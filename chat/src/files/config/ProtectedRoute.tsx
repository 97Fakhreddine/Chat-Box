import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";
export const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props: any) => {
        if (auth.authenticated) {
          return <Component />;
        } else {
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location,
              },
            }}
          />;
        }
      }}
    />
  );
};
