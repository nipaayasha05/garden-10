import React, { use, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase/firebase.init";
import toast from "react-hot-toast";

const SignIn = () => {
  const { signInUser, googleSignIn, provider } = use(AuthContext);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // signInUser
    signInUser(email, password)
      .then((userCredential) => {
        // console.log(userCredential.user);
        navigate(from);
        toast.success("User LogIn Successfully");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(auth, provider)
      .then((result) => {
        const currentUser = result.user;
        navigate(from ? from : "/");
        toast.success("User LogIn Successfully");
      })
      .catch((error) => {});
  };

  useEffect(() => {
    document.title = "GreenSpire || LogIn";
  }, []);

  return (
    <div className="card bg-base-100 m-5 mb-15 border border-green-300 shadow-lime-600  mx-auto mt-10 max-w-sm shrink-0 shadow-md">
      <div className="card-body">
        <h1 className="text-5xl text-green-800 font-bold">LogIn now!</h1>
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="btn mt-2 w-[320px] mr-5  mx-auto
             "
          >
            <FcGoogle size={24} /> Login with Google
          </button>
          <button className="btn  bg-green-800 text-white rounded-full mr-4 mt-4">
            LogIn
          </button>
          <p className="font-semibold text-center pt-5">
            Don’t Have An Account ?
            <NavLink className="text-green-800" to="/signup">
              Register
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
