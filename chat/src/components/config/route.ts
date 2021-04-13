import IRoute from "../interfaces/route";
import HomePage from "../pages/HomePage";
import Signup from "../pages/Signup";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
    exact: true,
  },
  {
    path: "/signup",
    name: "signup Page",
    component: Signup,
    exact: true,
  },
];

export default routes;
