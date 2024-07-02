import React from "react";
import Logo from "./Logo";

import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Link to={"/"}>
            <Logo width={90} height={50} />
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-4">
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Search products here..."
          />
          <div className="flex items-center justify-center rounded-r-full text-lg text-white min-w-[50px] bg-indigo-500 h-8 cursor-pointer hover:bg-indigo-600 transition-all duration-200 ease-in-out">
            <GrSearch />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-3xl cursor-pointer">
            <FaRegCircleUser />
          </div>

          <div className="text-3xl cursor-pointer relative">
            <span>
              <FaShoppingCart />
            </span>
            <div className="bg-red-600 text-white w-5 h-5 p-1 flex items-center justify-center rounded-full absolute -top-2 -right-2">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div className="">
            <Link
              to={"/login"}
              className="px-4 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-all duration-200 ease-in-out"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
