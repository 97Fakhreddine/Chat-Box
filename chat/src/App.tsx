import React from "react";
import "./style/App.css";
import {
  Switch,
  Route,
  BrowserRouter,
  RouteComponentProps,
} from "react-router-dom";
import routes from "./components/config/route";
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
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
