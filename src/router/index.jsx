import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Layout from "../pages/Layouts/Layout";
import Lottery2D from "./../pages/Lottery2D";
import Wallet from "../pages/Wallet";
import Lottery3D from "../pages/Lottery3D";
import History from "../pages/History";
import Register from "../pages/Register";
import TwoD_Daily_History from "../pages/TwoD_Daily_History";
import ThreeD_History from "../pages/ThreeD_History";
import Thai_Lottery from "../pages/Thai_Lottery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/thai_2D_3D",
        element: <Home />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/2d-daily-history",
        element: <TwoD_Daily_History />
      },
      {
        path: "/3d-history",
        element: <ThreeD_History />
      },
      {
        path: "/3d-lottery",
        element: <Lottery3D />
      },
      {
        path: "/thai-lottery",
        element: <Thai_Lottery />
      },
      {
        path: "/wallet",
        element: <Wallet />
      },
      {
        path: "/history",
        element: <History />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  }
]);

export default router;
