import React, { use } from "react";
import { Bounce } from "react-awesome-reveal";
import TopTip from "./TopTip";

const TopTips = ({ topTipsPromise }) => {
  const topTips = use(topTipsPromise);
  console.log(topTips);
  return (
    <div>
      <Bounce
        delay={500} // Wait 200ms before starting
        duration={1000} // Animation lasts 1 second
        // triggerTwice // Only animate once
        fraction={0.1} // Start animation when element is 50% visible
      >
        <h3 className="text-3xl font-bold drop-shadow-emerald-200 drop-shadow-sm text-green-900 text-center pt-10">
          The Green Journal
        </h3>
      </Bounce>

      <div className="container mx-auto  m-5 grid  md:grid-cols-2 lg:grid-cols-3 gap-7 py-10">
        {topTips.map((top) => (
          <TopTip top={top} key={top._id}></TopTip>
        ))}
      </div>
    </div>
  );
};

export default TopTips;
