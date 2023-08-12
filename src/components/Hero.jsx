import React from "react";


const Hero = () => {
  return (
    <>
      <div className="w-full  px-4  sm:px-6 lg:px-8 h-[90vh] text-white bg-[#151414]">
        <div className="container max-w-[86rem] mx-auto">
          <div className="flex p-12 py-24 justify-center items-center">
            <div className="w-[50%] flex flex-col">
              <h1 className="font-sans leading-none w-[90%] font-black text-[3rem]">
                Helping to avoid mistakes and surprises in retirement
              </h1>
              <h2 className=" text-[1.25rem] w-[90%] mt-6 ">
                Our resources to ensure you are equipped to minimize stress and
                maximize your benefits. After years of dedicated service, you
                only get to retire once
              </h2>
              <div className="mt-6 w-[30%] items-center flex flex-col">
                <button className="bg-[#8E1D1D] hover:tracking-wide hover:w-[110%] transition-all duration-300 w-full py-4 text-[1.25rem] font-bold">
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
                src=""
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
