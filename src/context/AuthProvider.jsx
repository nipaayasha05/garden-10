import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import toast from "react-hot-toast";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user);
  const [difficulty, setDifficulty] = useState([]);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("User LogOut Successfully");
      })
      .catch((error) => {});
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const userInfo = {
    createUser,
    signInUser,
    provider,
    googleSignIn,
    user,
    setUser,
    handleLogOut,
    updateUser,
    difficulty,
    setDifficulty,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log(user);
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
