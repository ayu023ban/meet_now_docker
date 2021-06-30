import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";

const Home = React.lazy(() => import("../views/HomeView.js"));
const LoginView = React.lazy(() => import("../views/LoginView.js"));
const RoomView = React.lazy(() => import("../views/RoomView.js"));

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
    component: () => <RoomView />,
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
