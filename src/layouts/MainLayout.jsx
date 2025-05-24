import React from "react";
import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../Pages/Loader";

const MainLayout = () => {
  const { state } = useNavigate();
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-288px)] ">
        {state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
