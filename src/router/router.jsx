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
import TipsDetails from "../Pages/TipsDetails";
import UpdateTips from "../Pages/UpdateTips";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://assignment-10-server-pink-beta.vercel.app/gardener6"),

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
        loader: () =>
          fetch("https://assignment-10-server-pink-beta.vercel.app/gardeners"),
        hydrateFallbackElement: <Loader />,
        Component: ExploreGardener,
      },
      {
        path: "/browseTips",
        loader: () =>
          fetch("https://assignment-10-server-pink-beta.vercel.app/usersTips"),
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
      {
        path: "/browseTips/:id",
        loader: () =>
          fetch(`https://assignment-10-server-pink-beta.vercel.app/usersTips`),
        Component: TipsDetails,
      },
      {
        path: "/updateTips/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-pink-beta.vercel.app/usersTips/${params.id}`
          ),
        Component: UpdateTips,
      },
    ],
  },
]);

export default router;
