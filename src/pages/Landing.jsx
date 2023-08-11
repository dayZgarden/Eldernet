import React from "react";
import hero from "../assets/hero.svg";

import one from "../assets/one.svg";
import two from "../assets/two.svg";
import randy from "../assets/randy.svg";
import { AiFillStar } from "react-icons/ai";
import quote from "../assets/quote.svg";
import { useState, useEffect } from "react";

import phone from "../assets/phone.svg";
import ServicesCmp from "../components/Services.cmp";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

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
                  <button className="bg-[#8E1D1D] w-full py-4 text-[1.25rem] font-bold">
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


      <div className="bg-[#151414] w-[80vw] translate-y-[-100%] h-[20vh] p-8 rounded-r-full">
        <div className="flex justify-between items-center h-full">
          <div className="w-[30%]"></div>
          <div className="w-[30%]">
            <h1 className="text-white text-[2.5rem] font-sans font-bold">Call Us Today!</h1>
          </div>
          <div className="bg-white w-[30%] scale-90 rounded-full flex space-x-4">
            <img src={phone} alt="" />
            <div className="flex flex-col items-center justify-center text-[1.75rem] font-sans font-bold">
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
              <button className="bg-[#8E1D1D] mt-8 text-white w-[30%] py-4 text-[1.25rem] font-bold">
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
              <button className="bg-[#151414] mt-8 text-white w-[30%] py-4 text-[1.25rem] font-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-[1px] bg-gray-100 my-12"></div>

      <div className="min-h-[100vh] w-full  px-4  sm:px-6 lg:px-8">
        <div className="container max-w-[86rem] mx-auto">
          <div className="flex p-12 py-24  md:flex-row flex-col justify-between items-center">
            <div className="w-[35%] flex flex-col">
              <h1 className="text-[#164371] font-extrabold font-sans text-[1.5rem]">
                Don't Listen to Us -
              </h1>
              <h2 className=" font-semibold text-[2rem] mt-4 leading-[125%] w-[80%]">
                Here are some words from people like you!
              </h2>
              <div className="flex flex-col space-y-8 z-0 mt-10 w-full">
                <div className="flex p-6 border-4 border-black bg-white rounded-lg relative">
                  <span className="w-12 h-12 bg-[#8E1D1D] rounded-full absolute -left-6 top-10 z-[-1]"></span>

                  <div className="flex z-0 relative w-full">
                    <img className="w-[30%] h-20" src={randy} alt="" />
                    <div className="flex flex-col w-[40%]">
                      <h1 className="font-sans font-bold text-[1.25rem]">
                        Randy Randy
                      </h1>
                      <div className="flex mt-1">
                        <AiFillStar className="text-[#FFD700] w-8 h-8" />
                        <AiFillStar className="text-[#FFD700] w-8 h-8" />
                        <AiFillStar className="text-[#FFD700] w-8 h-8" />
                        <AiFillStar className="text-[#FFD700] w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex p-6 border-4 border-black bg-white rounded-lg relative">
                  <span className="w-12 h-12 bg-[#8E1D1D] rounded-full absolute -left-6 top-10 z-[-1]"></span>

                  <div className="flex z-0 relative w-full">
                    <img className="w-[30%] h-20" src={randy} alt="" />
                    <div className="flex flex-col w-[40%]">
                      <h1 className="font-sans font-bold text-[1.25rem]">
                        Randy Randy
                      </h1>
                      <div className="flex mt-1">
                        <AiFillStar className="text-[#FFD700] w-8 h-8" />
                        <AiFillStar className="text-[#FFD700] w-8 h-8" />
                        <AiFillStar className="text-[#FFD700] w-8 h-8" />
                        <AiFillStar className="text-[#FFD700] w-8 h-8" />
                        <AiFillStar className="text-[#FFD700] w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex p-6 border-4 shado border-black bg-white rounded-lg relative">
                  <span className="w-12 h-12 bg-[#8E1D1D] rounded-full absolute -left-6 top-10 z-[-1]"></span>

                  <div className="flex z-0 relative w-full">
                    <img className="w-[30%] h-20" src={randy} alt="" />
                    <div className="flex flex-col w-[40%]">
                      <h1 className="font-sans font-bold text-[1.25rem]">
                        Randy Randy
                      </h1>
                      <div className="flex mt-1">
                        <AiFillStar className="text-[#FFD700] w-8 h-8" />
                        <AiFillStar className="text-[#FFD700] w-8 h-8" />
                        <AiFillStar className="text-[#FFD700] w-8 h-8" />
                        <AiFillStar className="text-[#FFD700] w-8 h-8" />
                        <AiFillStar className="text-[#FFD700] w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card1 relative p-8 aspect-square w-full md:w-[50%] scale-[.75] shadow-dark rounded-lg">
              <div className="flex flex-col items-center">
                <img
                  className="w-36 h-36 absolute -top-16 border-[8px] border-black rounded-full"
                  src={randy}
                  alt=""
                />
                <div className="flex flex-col">
                  <h1 className="font-bold font-sans text-[1.75rem] mt-24">
                    Randy Randy
                  </h1>
                  <div className="flex mt-1">
                    <AiFillStar className="text-[#FFD700] w-8 h-8" />
                    <AiFillStar className="text-[#FFD700] w-8 h-8" />
                    <AiFillStar className="text-[#FFD700] w-8 h-8" />
                    <AiFillStar className="text-[#FFD700] w-8 h-8" />
                    <AiFillStar className="text-[#FFD700] w-8 h-8" />
                  </div>
                </div>
                <div className="flex flex-col px-2 ">
                  <img className="mt-12 w-16 h-16" src={quote} alt="" />
                  <p className="text-center text-[2rem] mt-12  font-semibold">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] h-4 mx-auto my-32"></div>

      <Footer />
     
    </>
  );
};

export default Landing;
