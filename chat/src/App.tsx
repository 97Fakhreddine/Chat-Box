import React from "react";
import Spinner from "./components/spinner/Spinner";
import "./style/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  RouteComponentProps,
} from "react-router-dom";
import routes from "./components/config/route";
const App: React.FC = () => {
  return (
    <div className="App">
      Typescript
      <div>
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
    </div>
  );
};

export default App;
