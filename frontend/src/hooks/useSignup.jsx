import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    firstName,
    lastName,
    email,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      firstName,
      lastName,
      email,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // set this user to local storage
      localStorage.setItem("chat-user", JSON.stringify(data));
      // update context
      setAuthUser(data);

      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

const handleInputErrors = ({
  firstName,
  lastName,
  email,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !username ||
    !password ||
    !confirmPassword ||
    !gender
  ) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (!emailRegex.test(email)) {
    toast.error("Invalid email format");
    return false;
  }

  if (!passwordRegex.test(password)) {
    toast.error(
      "Password must contain at least one number, one lowercase and one uppercase letter, and be at least 6 characters long"
    );
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  return true;
};

// function handleInputErrors({
//   firstName,
//   lastName,
//   email,
//   username,
//   password,
//   confirmPassword,
//   gender,
// }) {
//   if (
//     !firstName ||
//     !lastName ||
//     !email ||
//     !username ||
//     !password ||
//     !confirmPassword ||
//     !gender
//   ) {
//     toast.error("Please fill in all fields");
//     return false;
//   }
//   if (password !== confirmPassword) {
//     toast.error("Passwords do not match");
//     return false;
//   }
//   if (password.length < 6) {
//     toast.error("Password must be at least 6 characters long");
//     return false;
//   }

//   return true;
// }
