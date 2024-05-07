import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="main-content py-5 bg-mainBG">
          <Header />
          <div className="container mx-auto">
            <div className="form-container max-w-sm mx-auto my-20">
              <div className="card bg-form text-white shadow-md rounded-lg p-5 mb-5">
                <h2 className="text-2xl mb-5">Login</h2>
                <form>
                  <div className="form-group mb-5">
                    <label className="label block mb-1" htmlFor="username">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="input w-11/12 px-2.5 py-2.5 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="form-group mb-5">
                    <label className="label block mb-1" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="input w-11/12 px-2.5 py-2.5 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <button
                    type="submit"
                    className="button bg-green-600 text-white px-5 py-2.5 border-none cursor-pointer text-lg uppercase rounded-lg font-bold hover:bg-green-500 btn-block"
                  >
                    Login
                  </button>
                </form>
              </div>
              <p className="reg-p text-white">
                Don't have an account?{" "}
                <Link to="/register" className="text-green-600 no-underline">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
