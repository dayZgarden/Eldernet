import React from "react";
import hero from "../assets/hero.svg";

import one from "../assets/one.svg";
import two from "../assets/two.svg";
import { useState, useEffect } from "react";

import phone from "../assets/phone.svg";
import ServicesCmp from "../components/Services.cmp";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

const Landing = () => {
  return (
    <>
      <div className="w-full">
        <Nav />
        <div className="w-full  px-4  sm:px-6 lg:px-8 h-[90vh] text-white bg-[#151414]">
          <div className="container max-w-[86rem] mx-auto">
            <div className="flex p-12 py-24 justify-center items-center">
              <div className="w-[50%] flex flex-col">
                <h1 className="font-sans leading-none w-[90%] font-black text-[3rem]">
                  Helping to avoid mistakes and surprises in retirement
                </h1>
                <h2 className=" text-[1.25rem] w-[90%] mt-6 ">
                  Our resources to ensure you are equipped to minimize stress
                  and maximize your benefits. After years of dedicated service,
                  you only get to retire once
                </h2>
                <div className="mt-6 w-[30%] items-center flex flex-col">
                  <button className="bg-[#8E1D1D] hover:tracking-widest hover:w-[95%] transition-all duration-300 w-full py-4 text-[1.25rem] font-bold">
                    Get Started
                  </button>
                  <span className="h-[3rem] mt-6  w-2 rounded-lg bg-[#79A7D6]"></span>
                </div>
                <div className="flex mt-6 items-center space-x-4">
                  <h3 className="font-bold text-[1.25rem]">Call us anytime!</h3>
                  <span className="h-[3rem] w-2 rounded-lg bg-[#79A7D6]"></span>
                  <h3 className="font-bold text-[1.25rem]">1-800-555-5555</h3>
                </div>
              </div>
              <div className="w-[50%] flex items-center  justify-center">
                <img
                  className="scale-[.8] rotate-2 translate-y-[-3%]"
                  src={hero}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesCmp />


      <div className="bg-[#151414] group w-[80vw] translate-y-[-100%] h-[20vh] p-8 rounded-r-full">
        <div className="flex justify-between items-center h-full">
          <div className="w-[30%]"></div>
          <div className="w-[30%]">
            <h1 className="text-white text-[2.5rem] font-sans font-bold">Call Us Today!</h1>
          </div>
          <div className="bg-white hover:cursor-pointer w-[30%] scale-90 rounded-full flex space-x-4">
            <img className=" group-hover:animate-rotate transition-all duration-300" src={phone} alt="" />
            <div className="flex flex-col items-center leading-none justify-center text-[2rem] font-sans font-bold">
              <h1>
              111-102-8000
              </h1>
              <h1>7 days a week</h1>
            </div>
          </div>
        </div>
      </div>

      

      <div className="min-h-[80vh] w-full  px-4  sm:px-6 lg:px-8">
        <div className="container max-w-[86rem] mx-auto">
          <div className="flex p-12 py-24  md:flex-row flex-col justify-center items-center">
            <div className="w-1/2 flex flex-col">
              <h1 className="text-[#164371] font-extrabold font-sans text-[1.5rem]">
                Best time to retire?
              </h1>
              <h2 className="font-extrabold text-[2.5rem] mt-4 leading-[125%] w-[80%]">
                Eldernet Will Walk You Through Every Step
              </h2>
              <p className="mt-4 text-[1.5rem] w-[85%]">
                {" "}
                The choice to retire is a significant milestone that deserves
                substantial consideration. The last thing you want to do is be
                forced to return back to work after underestimating your
                retirement income!
              </p>
              <button className="bg-[#8E1D1D] hover:tracking-widest hover:w-[25%] transition-all duration-300 mt-8 text-white w-[30%] py-4 text-[1.25rem] font-bold">
                Learn More
              </button>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <img src={one} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className=" h-[1px] bg-gray-100 my-12"></div>

      <div className="min-h-[80vh] w-full  px-4  sm:px-6 lg:px-8">
        <div className="container max-w-[86rem] mx-auto">
          <div className="flex p-12 py-24  md:flex-row flex-col space-x-8 justify-center items-center">
            <div className="w-1/2 flex items-center">
              <img src={two} alt="" />
            </div>
            <div className="w-1/2 flex flex-col">
              <h1 className="text-[#8E1D1D] font-extrabold font-sans text-[1.5rem]">
                Thrift Savings Plan
              </h1>
              <h2 className="font-extrabold text-[2.5rem] mt-4 leading-[125%] w-[80%]">
                Our defined contribution plan for employees
              </h2>
              <p className="mt-4 text-[1.5rem] w-[95%]">
                {" "}
                Although most workers are aware of what the TSP is, most are
                unaware of how it affects their retirement. The amount you
                should pay into your TSP and the amounts you should use from it
                depend on a variety of criteria that vary from one employee to
                the next.
              </p>
              <button className="bg-[#151414] hover:tracking-widest hover:w-[26%] transition-all duration-300] mt-8 text-white w-[30%] py-4 text-[1.25rem] font-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-[1px] bg-gray-100 my-12"></div>

      <Reviews />

      <div className="w-[80%] h-4 mx-auto my-32"></div>

      <Footer />
     
    </>
  );
};

export default Landing;
