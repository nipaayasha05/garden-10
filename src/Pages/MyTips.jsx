import { getAuth } from "firebase/auth";
import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const MyTips = () => {
  const { user } = use(AuthContext);
  const [tips, setTips] = useState([]);
  // const data = useLoaderData();
  // console.log(data);
  // const [email, setEmail] = useState([]);

  // const auth = getAuth();
  // const user = auth.currentUser;

  // if (user) {
  // const email = user.email;
  //   // const name = user.displayName;
  //   setEmail(user.email);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/usersTips/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setTips(data);
        });
    }
  }, [user]);

  // } else {
  //   // No user is signed in.
  // }

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold text-green-900 text-center py-10">
        My Blog Posts
      </h3>
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
              <th>Name</th>
            </tr>
          </thead>
          {/* {tips.map((tip) => (
            <p tip={tip} key={tip._id}>
              {tip.email}
              {tip.title}
            </p>
          ))} */}
          <tbody difficulty={tips}>
            {tips.map((diff, index) => (
              <tr diff={diff} index={index} key={diff._id}>
                <>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
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
                  <td className="sm:text-xl ">{diff.name}</td>

                  <th className=" ">
                    <button className="btn btn-ghost m-2 ">
                      <MdEdit size={20} />
                    </button>
                    <button className="btn m-2">
                      <MdDeleteForever size={20} />
                    </button>
                  </th>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTips;
