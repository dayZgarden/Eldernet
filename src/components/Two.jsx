import React from 'react'; 
import two from '../assets/two.svg';

const Two = () => {
    return (
        <>
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
              <button className="bg-[#151414] hover:tracking-wide hover:w-[35%] transition-all duration-300] mt-8 text-white w-[30%] py-4 text-[1.25rem] font-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}

export default Two;
