import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GenderCheckbox from "./GenderCheckbox";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    // Add logic to handle registration submission
    console.log("Registering with:", username, password);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="main-content py-5 ">
          <div className="container mx-auto px-5">
            <Header />
            <form
              className="form-container max-w-sm mx-auto my-20"
              onSubmit={handleSubmit}
            >
              <div className="card bg-form text-white shadow-md rounded-lg p-5 mb-5">
                <h1 className="text-2xl mb-5">Register</h1>
                <div className="form-group mb-5">
                  <label className="label block mb-1" htmlFor="username">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="input w-11/12 px-2.5 py-2.5 border border-gray-300 rounded-lg text-letterboxd"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-5">
                  <label className="label block mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="input w-11/12 px-2.5 py-2.5 border border-gray-300 rounded-lg text-letterboxd"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-5">
                  <label className="label block mb-1">Email</label>
                  <input
                    type="text"
                    placeholder="John.Doe@gmail.com"
                    className="input w-11/12 px-2.5 py-2.5 border border-gray-300 rounded-lg text-letterboxd"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-5">
                  <label className="label block mb-1">Username</label>
                  <input
                    type="text"
                    placeholder="johndoe"
                    className="input w-11/12 px-2.5 py-2.5 border border-gray-300 rounded-lg text-letterboxd"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group mb-5">
                  <label className="label block mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input w-11/12 px-2.5 py-2.5 border border-gray-300 rounded-lg text-letterboxd"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group mb-5">
                  <label className="label block mb-1">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input w-11/12 px-2.5 py-2.5 border border-gray-300 rounded-lg text-letterboxd"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <GenderCheckbox />

                <button
                  type="submit"
                  className="button bg-green-600 text-white px-5 py-2.5 border-none cursor-pointer text-lg uppercase rounded-lg font-bold hover:bg-green-500"
                >
                  Register
                </button>
              </div>
              <p className="reg-p text-white">
                Already have an account?{" "}
                <Link to="/" className="text-green-600 no-underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RegisterPage;
