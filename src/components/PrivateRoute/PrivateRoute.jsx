import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../../Pages/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return <Loader></Loader>;
  }
  if (!user || !user?.email) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
