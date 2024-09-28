import React from "react";
import logo from "../assets/Logo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="size-40 mx-2  " />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/daniel-dhaini-284279289/">
          {" "}
          <FaLinkedin />
        </a>
        <a href="https://github.com/danidh05">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/danieldhainy/">
          {" "}
          <FaInstagram />
        </a>
        {/* <FaSquareXTwitter /> */}
      </div>
    </nav>
  );
};

export default Navbar;
