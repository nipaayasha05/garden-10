import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router";
import { FaEye } from "react-icons/fa";
// import Easy from "./Easy";
// import Medium from "./Medium";
// import Hard from "./Hard";
// import diff from "daisyui/components/diff";

const BrowseTips = () => {
  const categories = useLoaderData();
  console.log(categories);
  const [difficulty, setDifficulty] = useState([]);

  console.log(difficulty);
  const handleEasy = () => {
    const easyLevel = categories.filter(
      (category) => category.difficulty == "easy"
    );
    setDifficulty(easyLevel);
  };
  const handleMedium = () => {
    const mediumLevel = categories.filter(
      (category) => category.difficulty == "medium"
    );
    setDifficulty(mediumLevel);
  };
  const handleHard = () => {
    const hardLevel = categories.filter(
      (category) => category.difficulty == "hard"
    );
    setDifficulty(hardLevel);
  };
  return (
    <div className="container text-3xl mx-auto py-10">
      <h3 className="text-green-900 font-bold text-center py-10">
        Garden Wisdom from the Community
      </h3>

      <div className="text-center ">
        <NavLink
          onClick={handleEasy}
          className={` btn bg-green-800 text-white rounded-full hover:bg-lime-600 focus:outline-2 focus:outline-offset-2 focus:outline-lime-500 active:bg-lime-500 m-2`}
        >
          Easy
        </NavLink>
        <NavLink
          onClick={handleMedium}
          className={` btn bg-green-800 text-white rounded-full hover:bg-lime-600 focus:outline-2 focus:outline-offset-2 focus:outline-lime-500 active:bg-lime-500 m-2`}
        >
          Medium
        </NavLink>
        <button
          onClick={handleHard}
          className={` btn bg-green-800 text-white rounded-full hover:bg-lime-600 focus:outline-2 focus:outline-offset-2 focus:outline-lime-500 active:bg-lime-500 m-2`}
        >
          Hard
        </button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="sm:text-xl ">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Title</th>
                <th>Category</th>
                <th> Details</th>
              </tr>
            </thead>
            <tbody difficulty={difficulty}>
              {difficulty.map((diff, index) => (
                <tr diff={diff} index={index} key={diff._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask rounded-xl  h-12 w-12 sm:w-20 sm:h-20">
                          <img
                            src={diff?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold sm:text-xl ">
                          {diff.title}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sm:text-xl ">{diff.category}</td>

                  <th>
                    <button className="btn btn-ghost  ">
                      <FaEye size={16} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BrowseTips;
