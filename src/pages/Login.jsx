import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginIcon from "../assets/LoginIcon.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section id="login">
      <div className="mx-auto container p-6 ">
        <div className="bg-white p-4 w-full max-w-sm mx-auto rounded">
          <div className="w-20 h-20 mx-auto">
            <img src={LoginIcon} alt="login-icon" />
          </div>

          <form className="pt-6">
            <div className="grid">
              <label className="text-indigo-500">Email: </label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="mt-2">
              <label className="text-indigo-500">Password: </label>
              <div className="bg-slate-100 p-2 rounded flex ">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setShowPassword((previousValue) => !previousValue)
                  }
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to={"/forgotPassword"}
                className="block w-fit ml-auto mt-1 hover:underline hover:text-indigo-600"
              >
                Forgot Password?
              </Link>
            </div>

            <button className="bg-indigo-600 text-white px-6 py-2 w-full max-w-[150px] rounded hover:bg-indigo-700 transition-all mt-4 block mx-auto">
              Log in
            </button>
          </form>
          <p className="my-4 text-sm">Don't have an account? <Link to={"/sign-up"} className="text-indigo-600 hover:text-indigo-800 hover:underline">Sign up</Link></p>
        </div>
      </div>
    </section>
  );
};

export default Login;
