import React, { use } from "react";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const ShareAGardenTip = () => {
  const { user } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const shareTip = Object.fromEntries(formData.entries());
    console.log(shareTip);
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const email = user.email;
      const name = user.displayName;
      // console.log(email);
      // console.log(name);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // ...
    } else {
      // No user is signed in.
    }

    fetch("https://assignment-10-server-pink-beta.vercel.app/usersTips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(shareTip),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Your work has been saved",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="container lg:w-8/12  mx-auto py-10">
      <form
        onSubmit={handleSubmit}
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
              className="input w-full"
              placeholder="Title"
            />
          </fieldset>
          <fieldset className="fieldset bg-lime-100 border-base-300 rounded-box border p-4">
            <label className="label">Plant Type/Topic</label>
            <input
              type="text"
              name="plant_type"
              className="input w-full"
              placeholder="Plant Type/Topic"
            />
          </fieldset>

          <fieldset className="fieldset bg-lime-100 border-base-300 rounded-box border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              className="input w-full"
              placeholder="Description"
            />
          </fieldset>
          <fieldset className="fieldset bg-lime-100 border-base-300 rounded-box border p-4">
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
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
                  className="radio radio-neutral"
                  value="easy"
                  defaultChecked
                />
                <p>Easy</p>
              </div>

              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="difficulty"
                  className="radio radio-neutral"
                  value="medium"
                  defaultChecked
                />
                <p>Medium</p>
              </div>
              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="difficulty"
                  className="radio radio-neutral"
                  value="hard"
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
                  className="radio radio-neutral"
                  value="composting"
                  defaultChecked
                />
                <p>Composting</p>
              </div>

              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="category"
                  className="radio radio-neutral"
                  value="plant-care"
                  defaultChecked
                />
                <p>Plant Care</p>
              </div>
              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="category"
                  className="radio radio-neutral"
                  value="vertical-gardening"
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
                  className="radio radio-neutral"
                  value="public"
                  defaultChecked
                />
                <p>Public</p>
              </div>

              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="availability"
                  className="radio radio-neutral"
                  value="hidden"
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
          value="Submit"
        />
      </form>
    </div>
  );
};

export default ShareAGardenTip;
