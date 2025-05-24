import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateTips = () => {
  const {
    _id,
    title,
    description,
    topic,
    plant_type,
    difficulty,
    photo,
    category,
    availability,
  } = useLoaderData();
  //   console.log(userTips);
  const { user } = use(AuthContext);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const update = Object.fromEntries(formData.entries());
    console.log(update);

    fetch(
      `https://assignment-10-server-pink-beta.vercel.app/usersTips/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(update),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Blog updated successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="container lg:w-8/12  mx-auto py-10">
      <form
        onSubmit={handleUpdate}
        className="fieldset shadow-sm rounded-box shadow-gray-700 p-3 "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-lime-100 border-base-300 rounded-box border p-4">
            <label className="label">Email</label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              className="input w-full border border-green-900"
              placeholder="Email"
              readOnly
            />
          </fieldset>
          <fieldset className="fieldset bg-lime-100 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="Name"
              readOnly
            />
          </fieldset>
          <fieldset className="fieldset bg-lime-100 border-base-300 rounded-box border p-4">
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              className="input w-full"
              placeholder="Title"
            />
          </fieldset>
          <fieldset className="fieldset bg-lime-100 border-base-300 rounded-box border p-4">
            <label className="label">Plant Type/Topic</label>
            <input
              type="text"
              name="plant_type"
              defaultValue={plant_type}
              className="input w-full"
              placeholder="Plant Type/Topic"
            />
          </fieldset>

          <fieldset className="fieldset bg-lime-100 border-base-300 rounded-box border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              className="input w-full"
              placeholder="Description"
            />
          </fieldset>
          <fieldset className="fieldset bg-lime-100 border-base-300 rounded-box border p-4">
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input w-full"
              placeholder="Photo URL"
            />
          </fieldset>
        </div>
        <div className="flex flex-col sm:flex-row  py-2 gap-5 justify-between">
          <fieldset className="fieldset bg-lime-100 border-base-300 rounded-box border w-full p-5">
            <label className="label">Difficulty Level</label>
            <div className="flex justify-between">
              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="difficulty"
                  defaultValue={difficulty}
                  className="radio radio-neutral"
                  //   value="easy"
                  defaultChecked
                />
                <p>Easy</p>
              </div>

              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="difficulty"
                  defaultValue={difficulty}
                  className="radio radio-neutral"
                  //   value="medium"
                  defaultChecked
                />
                <p>Medium</p>
              </div>
              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="difficulty"
                  defaultValue={difficulty}
                  className="radio radio-neutral"
                  //   value="hard"
                  defaultChecked
                />
                <p>Hard</p>
              </div>
            </div>
          </fieldset>
          <fieldset className="fieldset bg-lime-100 border-base-300 rounded-box w-full border p-5">
            <label className="label">Category</label>
            <div className="flex justify-between">
              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="category"
                  defaultValue={category}
                  className="radio radio-neutral"
                  //   value="composting"
                  defaultChecked
                />
                <p>Composting</p>
              </div>

              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="category"
                  defaultValue={category}
                  className="radio radio-neutral"
                  //   value="plant-care"
                  defaultChecked
                />
                <p>Plant Care</p>
              </div>
              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="category"
                  defaultValue={category}
                  className="radio radio-neutral"
                  //   value="vertical-gardening"
                  defaultChecked
                />
                <p>Vertical Gardening</p>
              </div>
            </div>
          </fieldset>
          <fieldset className="fieldset bg-lime-100 border-base-300 w-full rounded-box border p-5">
            <label className="label">Availability</label>
            <div className="flex justify-between">
              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="availability"
                  defaultValue={availability}
                  className="radio radio-neutral"
                  //   value="public"
                  defaultChecked
                />
                <p>Public</p>
              </div>

              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="availability"
                  defaultValue={availability}
                  className="radio radio-neutral"
                  //   value="hidden"
                  defaultChecked
                />
                <p>Hidden</p>
              </div>
            </div>
          </fieldset>
        </div>

        <input
          type="submit"
          className="btn w-full text-white bg-green-800"
          value="Update"
        />
      </form>
    </div>
  );
};

export default UpdateTips;
