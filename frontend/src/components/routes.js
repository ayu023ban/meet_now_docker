import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";

const Home = React.lazy(() => import("../views/HomeView.js"));
const LoginView = React.lazy(() => import("../views/LoginView.js"));
const View = React.lazy(() => import("../views/View.js"));
export const protectedRoutes = [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Home />,
    strictlyPublic: false,
  },
  {
    path: "/room/:roomID",
    exact: true,
    layout: DefaultLayout,
    component: () => <View />,
    strictlyPublic: false,
  },
];

export const publicRoutes = [
  {
    path: "/login",
    exact: true,
    layout: DefaultLayout,
    component: () => <LoginView />,
    strictlyPublic: true,
  },
];
