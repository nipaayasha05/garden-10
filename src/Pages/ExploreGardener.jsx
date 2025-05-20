import React from "react";
import { useLoaderData } from "react-router";
import Gardeners from "./Gardeners";

const ExploreGardener = () => {
  const gardener = useLoaderData();
  console.log(gardener);
  return (
    <div className="container mx-auto  py-10">
      <h3 className="text-3xl font-bold text-green-900 text-center">
        Meet the Garden Whisperers
      </h3>
      <div className=" m-5 grid  md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {gardener.map((garden) => (
          <Gardeners garden={garden} key={garden._id}></Gardeners>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardener;
