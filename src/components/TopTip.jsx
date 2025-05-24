import React from "react";
import { AiFillLike, AiTwotoneLike } from "react-icons/ai";

const TopTip = ({ top }) => {
  return (
    <div className="card bg-base-100 m-3   border-lime-700 shadow-md shadow-lime-700">
      <figure>
        <img src={top.photo} />
      </figure>
      <div className="card-body bg-amber-50 rounded-2xl">
        <div
          className="flex
        "
        >
          <p className="">
            <span className=" font-semibold text-green-800">Author :</span>
            <span className="text-gray-600">{top.name}</span>
          </p>
          <div className="flex gap-2 items-center">
            <button className=" ">
              <AiFillLike size={25} color="green" />
            </button>
            <p className="text-gray-600">{top.likes}</p>
          </div>
        </div>

        <h3 className="text-green-800 font-bold text-xl ">{top.title}</h3>
        <p className="text-xl text-gray-600">{top.description}</p>
        <p className="text-xl ">
          <span className="  font-semibold text-green-800">Plant Type :</span>
          <span className="text-gray-600">{top.plant_type}</span>
        </p>
        <p className="text-xl ">
          <span className="text-xl font-semibold text-green-800">
            Category :
          </span>
          <span className="text-gray-600">{top.category}</span>
        </p>
        <p className="text-xl ">
          <span className="text-xl font-semibold text-green-800">
            Difficulty Level:
          </span>
          <span className="text-gray-600">{top.difficulty}</span>
        </p>
      </div>
    </div>
  );
};

export default TopTip;
