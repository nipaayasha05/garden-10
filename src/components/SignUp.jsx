import React, { use, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router";
import { auth } from "../firebase/firebase.init";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, googleSignIn, provider, updateUser, setUser } =
    useContext(AuthContext);

  const from = location?.state?.from;
  const navigate = useNavigate();
  //   console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (password.length < 8) {
      toast.error("Password must be greater than 8");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("password must contain at least one lower case letter");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("password must contain at least one upper case letter");
      return;
    }

    if (!/[@#$]/.test(password)) {
      toast.error("password must contain at least one  special character");
      return;
    }

    // create user in firebase
    createUser(email, password)
      .then((res) => {
        const user = res.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            setUser(user);
          });
        navigate(from ? from : "/");
        toast.success("User register successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(auth, provider)
      .then((result) => {
        const currentUser = result.user;
        updateUser({ displayName: name, photoURL: photo });

        setUser({ ...currentUser, displayName: name, photoURL: photo });
        navigate(from ? from : "/");
        toast.success("User LogIn Successfully");
      })
      .catch((error) => {});
  };

  useEffect(() => {
    document.title = "GreenSpire || Register";
  }, []);

  return (
    <div className="card bg-base-100 m-5  border  mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl text-green-800 font-bold">Register now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Name"
            required
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
            required
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
          <button className="btn btn-neutral mt-4 bg-green-800 text-white rounded-full mr-4">
            Register
          </button>
          <p className="font-semibold text-center pt-5">
            Already Have An Account ?
            <NavLink className="text-green-800" to="/signin">
              LogIn
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
