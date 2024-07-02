import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginIcon from "../assets/LoginIcon.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import imageToBase64 from "../helpers/imageToBase64";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];

    // Convert image file to base64 string
    const profilePicture = await imageToBase64(file);

    // Update state with base64 encoded image
    setData((previousData) => {
      return {
        ...previousData,
        profilePic: profilePicture,
      };
    });
  };

  return (
    <section id="signup">
      <div className="mx-auto container p-6 ">
        <div className="bg-white p-4 w-full max-w-sm mx-auto rounded">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || LoginIcon} alt="login-icon" />
            </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-75 bg-slate-200 pb-5 pt-1 text-center absolute bottom-0 w-full cursor-pointer">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadImage}
                />
              </label>
            </form>
          </div>

          <form
            className="pt-6 flex flex-col gap-2"
            onSubmit={handleFormSubmit}
          >
            <div className="grid">
              <label className="text-indigo-500">Name: </label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  required
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  placeholder="Enter your username"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="grid">
              <label className="text-indigo-500">Email: </label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  required
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  placeholder="Enter your email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="mt-2">
              <label className="text-indigo-500">Password: </label>
              <div className="bg-slate-100 p-2 rounded flex ">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
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
            </div>

            <div className="mt-2">
              <label className="text-indigo-500">Confirm Password: </label>
              <div className="bg-slate-100 p-2 rounded flex ">
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Retype Password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setShowConfirmPassword((previousValue) => !previousValue)
                  }
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-indigo-600 text-white px-6 py-2 w-full max-w-[150px] rounded hover:bg-indigo-700 transition-all mt-4 block mx-auto">
              Sign up
            </button>
          </form>
          <p className="my-4 text-sm">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-indigo-600 hover:text-indigo-800 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
