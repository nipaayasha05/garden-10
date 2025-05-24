import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import logo from "../assets/simple-plant-logo.png";

const Navbar = () => {
  const { user, handleLogOut } = use(AuthContext);
  // console.log(user);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="bg-lime-200 border-b-2 border-b-green-950">
      <div className="navbar container mx-auto   ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost bg-lime-200 border-none lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-green-800 font-semibold rounded-full"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/exploreGarden"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-green-800 font-semibold rounded-full"
                      : ""
                  }
                >
                  Explore Gardener
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/browseTips"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-green-800 font-semibold rounded-full"
                      : ""
                  }
                >
                  Browse Tips
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shareAGardenTip"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-green-800 font-semibold rounded-full"
                      : ""
                  }
                >
                  Share a Garden Tip
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myTips"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-green-800 font-semibold rounded-full"
                      : ""
                  }
                >
                  My Tips
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-14" src={logo} alt="" />
            <h3 className=" font-bold text-2xl text-green-950 ">GreenSpire</h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-green-950">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-green-800 font-semibold rounded-full"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/exploreGarden"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-green-800 font-semibold rounded-full"
                    : ""
                }
              >
                Explore Gardener
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/browseTips"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-green-800 font-semibold rounded-full"
                    : ""
                }
              >
                Browse Tips
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shareAGardenTip"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-green-800 font-semibold rounded-full"
                    : ""
                }
              >
                Share a Garden Tip
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myTips"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-green-800 font-semibold rounded-full"
                    : ""
                }
              >
                My Tips
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
          <div className="relative group">
            {user && (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    className={`w-13 rounded-full  `}
                    referrerPolicy="no-referrer"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-25 p-2 shadow-sm"
                >
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn rounded-full bg-green-800 text-white border-none"
                    >
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
            )}

            <p className="absolute -mt-3 -mr-10 invisible md:group-hover:visible">
              {user?.displayName}
            </p>
          </div>
          {user ? (
            ""
          ) : (
            <button
              onClick={() => navigate("/signin")}
              className="btn rounded-full bg-green-800 text-white border-none"
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
