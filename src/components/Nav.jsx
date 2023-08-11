import React from "react";
import logo from "../assets/logo.svg";


const Nav = () => {
  return (
    <>
      <nav className="max-h-[10vh]  px-4  sm:px-6 lg:px-8 w-full font-sans">
        <div className="container max-w-[86rem] mx-auto">
          <div className="flex p-12 mx-auto justify-between items-center max-h-[10vh]">
            <h1 className="font-extrabold flex items-center text-[1.5rem] tracking-wider">
              ELDERNET{" "}
              <img
                className="text-[#000] invert-[100%] ml-2"
                src={logo}
                alt=""
              />
            </h1>
            <ul className="w-[40%]  flex justify-between tracking-wide font-extrabold">
              <a className="text-[#8E1D1D] " href="/">
                Home
              </a>
              <a href="">Contact</a>
              <a href="">About Us</a>
              <a href="/services">Services</a>
              <a href="">FAQs</a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
