import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className=" bg-teal-100 text-black flex justify-center border-black border-spacing-2 border-b-2 items-center  h-24 px-5 m-2 rounded-md shadow-md gap-20 text-base font-sans font-bold">
        <div>
          <img
            src={logo}
            alt="logo"
            className=" h-20 flex justify-center w-auto rounded-md shadow-xl"
          />
        </div>
        <div className="flex space-x-4">
          <a href="/" className=" text-2xl hover:text-red-300">
            Home
          </a>
          <a href="/about" className=" text-2xl hover:text-red-300">
            About
          </a>
          <a href="/FitnessVideos" className=" text-2xl hover:text-red-300">
            FitnessVideos
          </a>
          <a href="/trainer" className=" text-2xl hover:text-red-300">
            Trainer
          </a>
          <a href="/healthyliving" className=" text-2xl hover:text-red-300">
            HealthyLiving
          </a>
          <a href="/gallery" className=" text-2xl hover:text-red-300">
            Gallery
          </a>
          <a href="/login" to="/login" className=" text-2xl hover:text-red-300">
            Login
          </a>
          <a href="/Register" className=" text-2xl hover:text-red-300">
            Register
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;






