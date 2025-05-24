import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import Gardeners from "./Gardeners";
import { Bounce } from "react-awesome-reveal";

const ExploreGardener = () => {
  const gardener = useLoaderData();

  useEffect(() => {
    document.title = "GreenSpire || Explore Gardeners";
  }, []);
  return (
    <div className="container mx-auto  py-5">
      <Bounce
        delay={500} // Wait 200ms before starting
        duration={1000} // Animation lasts 1 second
        // triggerTwice // Only animate once
        fraction={0.5} // Start animation when element is 50% visible
      >
        <h3 className="text-3xl font-bold text-green-900 text-center pt-10">
          Meet the Garden Whisperers
        </h3>
      </Bounce>
      <div className=" m-5 grid  md:grid-cols-2 lg:grid-cols-3 gap-7 py-10">
        {gardener.map((garden) => (
          <Gardeners garden={garden} key={garden._id}></Gardeners>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardener;
