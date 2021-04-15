import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import auth from "./auth";

interface PrivateRouteProps extends RouteProps {
  component: any;
  authenticated: boolean;
}

export const ProtectedRoute = ({
  component: Component,
  authenticated,
  ...rest
}: PrivateRouteProps) => {  
  return (
    <Route
      {...rest}
      render={(props: any) => {
        if (auth.authenticated) {
          return <Component {...props} />;
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
