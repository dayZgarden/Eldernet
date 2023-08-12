import React from 'react';
import one from '../assets/one.svg';

const One = () => {
    return (
        <>
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
              <button className="bg-[#8E1D1D] hover:tracking-wide hover:w-[35%] transition-all duration-300 mt-8 text-white w-[30%] py-4 text-[1.25rem] font-bold">
                Learn More
              </button>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <img src={one} alt="" />
            </div>
          </div>
        </div>
      </div>  
        </>
    );
}

export default One;
