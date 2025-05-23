import React from "react";

const Active6 = ({ act }) => {
  const {
    name,
    age,
    image,
    gender,
    experiences,
    specialty,
    status,
    totalSharedTips,
  } = act;
  // console.log(act);
  return (
    <div className="card bg-lime-50 border border-lime-300 shadow-green-900 shadow-md">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-[350px] h-[230px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{name}</h2>
        <div className="flex gap-5">
          <div className="text-start">
            <p>
              <span className="font-bold text-xl ">Age :</span>
              <span className="font-semibold text-xl text-gray-600">
                {" "}
                {age}
              </span>
            </p>
            <p>
              <span className="font-bold text-xl ">Gender :</span>
              <span className="font-semibold text-xl text-gray-600">
                {gender}
              </span>
            </p>
            <p>
              <span className="font-bold text-xl ">Total Shared Tips :</span>
              <span className="font-semibold text-xl text-gray-600">
                {totalSharedTips}
              </span>
            </p>
            <p>
              <span className="font-bold text-xl ">Specialty :</span>
              <span className="font-semibold text-xl text-gray-600">
                {specialty}
              </span>
            </p>
            <p>
              <span className="font-bold text-xl ">Experience :</span>
              <span className="font-semibold text-xl text-gray-600">
                {experiences}
              </span>
            </p>
          </div>
          <div>
            {status === "Active" ? (
              <p className="bg-green-800 border-2 border-lime-300 btn rounded-full  font-bold   text-white ">
                {status}
              </p>
            ) : (
              <p className="bg-red-300 border-2 border-red-200 btn rounded-full  font-bold   text-red-950 ">
                {status}
              </p>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Active6;
