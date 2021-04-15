import React from "react";
import "./style/App.css";
import {
  Switch,
  Route,
  BrowserRouter,
  RouteComponentProps,
} from "react-router-dom";
import routes from "./files/config/route";
// import { ProtectedRoute } from "./files/config/ProtectedRoute";
// import Chatroom from "./files/pages/Chatroom";
// import HomePage from "./files/pages/HomePage";
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            );
          })}
          {/* <ProtectedRoute
            exact
            component={routes[0].component}
            authenticated={true}
            path={routes[0].path}
          /> */}
          ;
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
