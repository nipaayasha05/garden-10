import React, { use, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AiFillLike, AiTwotoneLike } from "react-icons/ai";
import { AuthContext } from "../context/AuthContext";

const TipsDetails = () => {
  const { user } = use(AuthContext);
  const tips = useLoaderData();
  const { id } = useParams();
  const [count, setCount] = useState(0);

  const tipDetails = tips.find((tip) => tip._id == id);
  const {
    title,
    description,
    photo,
    difficulty,
    category,
    plant_type,
    availability,
    email,
    name,
  } = tipDetails;

  useEffect(() => {
    fetch(`https://assignment-10-server-pink-beta.vercel.app/usersTips/${id}`)
      .then((res) => res.json())
      .then((data) => setCount(data.likes || 0));
  }, [id]);

  const handleClick = () => {
    const update = count + 1;
    setCount(count + 1);

    fetch(`https://assignment-10-server-pink-beta.vercel.app/usersTips/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ likes: update }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          setCount(count + 1);
        }
      });
  };

  useEffect(() => {
    document.title = "GreenSpire || Tip Details";
  }, []);
  return (
    <div className="container mx-auto py-10">
      <div className="m-5 flex bg-lime-50 flex-col lg:flex-row justify-center items-center shadow-gray-600  shadow-md p-5 rounded-xl space-y-5 lg:gap-10">
        <div className="">
          <img
            className="shadow-gray-600 shadow-lg rounded-xl"
            src={photo}
            alt=""
          />
        </div>
        <div className="text-start lg:w-3xl ">
          <div className="flex justify-between w-[350px]">
            <p className="">
              <span className=" font-semibold text-green-800">Author :</span>
              <span className="text-gray-600">{name}</span>
            </p>
            {/* {user?.email !== email ? ( */}
            <div className="flex gap-2">
              <button
                defaultValue={count + 1}
                onClick={handleClick}
                className=" "
              >
                <AiFillLike color="green" size={25} />
              </button>
              <p className="text-gray-600">{count + 0}</p>
            </div>
            {/* ) : ( */}
            {/* <button disabled={true} onClick={handleClick} className=" ">
                <AiTwotoneLike size={25} />
              </button>
            )} */}
          </div>
          <h3 className="text-green-800 font-bold text-2xl ">{title}</h3>
          <p className="text-xl text-gray-600">{description}</p>
          <p className="text-xl ">
            <span className="text-xl font-semibold text-green-800">
              Plant Type :
            </span>
            <span className="text-gray-600">{plant_type}</span>
          </p>
          <p className="text-xl ">
            <span className="text-xl font-semibold text-green-800">
              Category :
            </span>
            <span className="text-gray-600">{category}</span>
          </p>
          <p className="text-xl ">
            <span className="text-xl font-semibold text-green-800">
              Difficulty Level:
            </span>
            <span className="text-gray-600">{difficulty}</span>
          </p>
          <div className="pt-5">
            <p className="  ">
              <span className="  font-semibold text-green-800">Email:</span>
              <span className="text-gray-600">{email}</span>
            </p>
            <p className="  ">
              <span className="  font-semibold text-green-800">
                Availability:
              </span>
              <span className="text-gray-600">{availability}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsDetails;
