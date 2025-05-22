import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import ExploreGardener from "../Pages/ExploreGardener";
import BrowseTips from "../Pages/BrowseTips";
import ShareAGardenTip from "../Pages/ShareAGardenTip";
import MyTips from "../Pages/MyTips";
import Loader from "../Pages/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/gardener6"),

        hydrateFallbackElement: <Loader />,
        Component: Home,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/exploreGarden",
        loader: () => fetch("http://localhost:3000/gardeners"),
        hydrateFallbackElement: <Loader />,
        Component: ExploreGardener,
      },
      {
        path: "/browseTips",
        loader: () => fetch("http://localhost:3000/usersTips"),
        hydrateFallbackElement: <Loader />,
        Component: BrowseTips,
      },
      {
        path: "/shareAGardenTip",
        Component: ShareAGardenTip,
      },
      {
        path: "/myTips",
        Component: MyTips,
      },
    ],
  },
]);

export default router;
