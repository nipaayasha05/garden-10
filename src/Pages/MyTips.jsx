import { getAuth } from "firebase/auth";
import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const MyTips = () => {
  const { user, difficulty, setDifficulty } = use(AuthContext);
  const [tips, setTips] = useState([]);
  // const [difficulty, setDifficulty] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/usersTips/email/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setTips(data);
        });
    }
  }, [user]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/usersTips/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingTip = tips.filter((diff) => diff._id !== _id);
              setTips(remainingTip);
            }
          });
      }
    });
  };
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
                    <Link to={`/updateTips/${diff._id}`}>
                      <button className="btn bg-green-800 btn-ghost rounded-full m-2 ">
                        <MdEdit color="white" size={20} />
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(diff._id)}
                      className="btn bg-green-800 rounded-full m-2"
                    >
                      <MdDeleteForever color="white" size={20} />
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
