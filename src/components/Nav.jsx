import React from "react";
import logo from "../assets/logo.svg";

const Nav = () => {
  const currentPage = window.location.pathname;
  console.log(currentPage);

  return (
    <>
      <nav className="max-h-[10vh]  px-4  sm:px-6 lg:px-8 w-full font-sans">
        <div className="container max-w-[86rem] mx-auto">
          <div className="flex p-12 mx-auto justify-between items-center max-h-[10vh]">
            <h1 className="font-extrabold flex items-center text-[1.5rem] tracking-wider">
               <a href="/">ELDERNET</a>
              <img
                className="text-[#000] invert-[100%] ml-2"
                src={logo}
                alt=""
              />
            </h1>
            <ul className="w-[40%]  flex justify-between tracking-wide font-extrabold">
              <div className="group relative">
                <a className={`${currentPage == '/' ? 'text-[#8E1D1D]' : ''}`} href="/">
                  Home
                </a>
                {currentPage == "/" && (
                  <span className="absolute -bottom-[2.15rem] left-0 bg-[#8E1D1D] h-[.5rem] w-full"></span>
                )}
              </div>
              <div className="group relative">
                <a className={`${currentPage == '/contact' ? 'text-[#8E1D1D]' : ''}`} href="/contact">Contact</a>
                {currentPage == "/contact" && (
                  <span className="absolute -bottom-[2.15rem] left-0 bg-[#8E1D1D] h-[.5rem] w-full"></span>
                )}
              </div>
              <div className="group relative">
                <a className={`${currentPage == '/about' ? 'text-[#8E1D1D]' : ''}`} href="/about">About Us</a>
                {currentPage == "/about" && (
                  <span className="absolute -bottom-[2.15rem] left-0 bg-[#8E1D1D] h-[.5rem] w-full"></span>
                )}
              </div>
              <div className="group relative">
                <a className={`${currentPage == '/services' ? 'text-[#8E1D1D]' : ''}`} href="/services">Services</a>
                {currentPage == "/services" && (
                  <span className="absolute -bottom-[2.15rem] left-0 bg-[#8E1D1D] h-[.5rem] w-full"></span>
                )}
              </div>
              <div className="group relative">
                <a className={`${currentPage == '/FAQs' ? 'text-[#8E1D1D]' : ''}`} href="/FAQs">FAQs</a>
                {currentPage == "/FAQs" && (
                  <span className="absolute -bottom-[2.15rem] left-0 bg-[#8E1D1D] h-[.5rem] w-full"></span>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
