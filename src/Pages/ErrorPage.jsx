import React from "react";
import error from "../assets/green-error-page.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex m-5   py-20 flex-col justify-center items-center">
      <img src={error} alt="" />
      <div className="py-5">
        <Link to="/">
          <button className="btn text-xl rounded-full bg-green-800 text-white">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
