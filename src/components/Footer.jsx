import React from "react";
import logo from "../assets/logo.svg";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineGoogle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="min-h-[70vh]  bg-[#151414] w-full text-white  px-4  sm:px-6 lg:px-8">
        <div className="container max-w-[86rem] mx-auto ">
          <div className="flex p-12 pt-24 flex-col md:flex-row justify-between">
            <div className="w-[20%] flex flex-col justify-between h-[50vh]">
              <h1 className="font-extrabold flex items-center text-[1.5rem] tracking-wider">
                ELDERNET <img className="text-[#000] ml-2" src={logo} alt="" />
              </h1>
              <div className="">
                <div className="flex space-x-6">
                  <AiFillFacebook className="w-16 h-16" />
                  <AiOutlineTwitter className="w-16 h-16" />
                  <AiOutlineGoogle className="w-16 h-16" />
                </div>
                <p className="font-semibold mt-8">
                  Privacy Policy | Nondiscrimination
                </p>
              </div>
            </div>
            <div className="w-[40%] h-[50vh] flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="flex flex-col space-y-8">
                  <a className="font-bold" href="">
                    Home
                  </a>
                  <a href="">Home</a>
                  <a href="">Home</a>
                  <a href="">Home</a>
                </div>
                <div className="flex flex-col space-y-8">
                  <a className="font-bold" href="">
                    About Us
                  </a>
                  <a href="">About Us</a>
                  <a href="">About Us</a>
                </div>
                <div className="flex flex-col space-y-8">
                  <a className="font-bold" href="">
                    Services
                  </a>
                  <a href="">Home</a>
                  <a href="">Home</a>
                </div>
                <div className="flex flex-col space-y-8">
                  <a className="font-bold" href="">
                    FAQs
                  </a>
                  <a href="">Home</a>
                </div>
              </div>
              <div>
                <h1 className="font-semibold text-right">
                  Copyright © 2022. All Rights Reserved.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
