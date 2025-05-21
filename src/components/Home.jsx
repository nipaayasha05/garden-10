import React from "react";
import { useLoaderData } from "react-router";
import Active6 from "./Active6";
import Slider from "./Slider";

const Home = () => {
  const active = useLoaderData();
  console.log(active);
  return (
    <div className="container mx-auto">
      <div className="py-10">
        <Slider></Slider>
      </div>
      <h3 className="text-3xl font-bold text-green-900 text-center pt-10">
        Meet the Garden Whisperers
      </h3>
      <div className="  m-5 grid  md:grid-cols-2 lg:grid-cols-3 gap-7 py-10">
        {active.map((act) => (
          <Active6 act={act} key={active._id}></Active6>
        ))}
      </div>{" "}
    </div>
  );
};

export default Home;
