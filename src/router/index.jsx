import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Layout from "../pages/Layouts/Layout";
import Lottery2D from './../pages/Lottery2D';
import Wallet from "../pages/Wallet";
import Lottery3D from "../pages/Lottery3D";
import History from "../pages/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/2d-lottery",
        element: <Lottery2D />
      },
      {
        path: "/3d-lottery",
        element: <Lottery3D />
      },
      {
        path: "/wallet",
        element: <Wallet />
      },
      {
        path: "/history",
        element: <History />
      }
    ]
  }
]);

export default router;
