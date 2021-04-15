import IRoute from "../interfaces/route";
import Chatroom from "../pages/Chatroom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
    exact: true,
    authenticated: true,
  },
  {
    path: "/signup",
    name: "signup Page",
    component: Signup,
    exact: true,
    authenticated: true,
  },
  {
    path: "/chatroom",
    name: "chatroom Page",
    component: Chatroom,
    exact: true,
    authenticated: true,
  },
  {
    path: "/login",
    name: "login Page",
    component: Login,
    exact: true,
    authenticated: true,
  },
];

export default routes;
