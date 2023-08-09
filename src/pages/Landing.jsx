import React from "react";
import hero from "../assets/hero.svg";
import { BsHeartPulseFill } from "react-icons/bs";
import arrow from "../assets/arrow.svg";
import {
  MdOutlineReceiptLong,
  MdOutlineRateReview,
  MdMilitaryTech,
} from "react-icons/md";
import one from "../assets/one.svg";
import two from "../assets/two.svg";

const Landing = () => {
  return (
    <>
      <div className="w-full">
        <nav className="max-h-[10vh]  px-4  sm:px-6 lg:px-8 w-full font-sans">
          <div className="container max-w-[86rem] mx-auto">
            <div className="flex p-12 mx-auto justify-between items-center max-h-[10vh]">
              <h1 className="font-extrabold text-[1.5rem] tracking-wider">
                ELDERNET
              </h1>
              <ul className="w-[40%]  flex justify-between font-bold">
                <a className="text-[#8E1D1D] " href="">
                  Home
                </a>
                <a href="">Contact</a>
                <a href="">About Us</a>
                <a href="">Services</a>
                <a href="">FAQs</a>
              </ul>
            </div>
          </div>
        </nav>
        <div className="w-full  px-4  sm:px-6 lg:px-8 h-[90vh] text-white bg-[#164371]">
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

      <div className="min-h-[80vh] w-full  px-4  sm:px-6 lg:px-8">
        <div className="container max-w-[86rem] mx-auto">
          <div className="flex p-12 pt-24 flex-col justify-center items-center">
            <h1 className="text-[#8E1D1D] font-extrabold font-sans text-[1.5rem]">
              What do we offer?
            </h1>
            <h2 className="font-extrabold text-[2.5rem] leading-[125%] mt-4 w-[50%] text-center">
              A Toolkit to Enhance You Retirement Efficieny & Lifestyle
            </h2>
            <div className="flex flex-col md:flex-row md:flex-wrap w-full scale-75 translate-y-[-10%]">
              <div className="card1 p-8 aspect-square w-full md:w-[50%] scale-[.8] shadow-light rounded-lg">
                <div className="flex flex-col ">
                  <div className="flex bg-[#D8B2b2] items-center p-8 rounded-lg justify-between">
                    <BsHeartPulseFill className="w-[40%] h-20" />
                    <div className="flex flex-col">
                      <h1 className="font-bold font-sans text-[1.75rem]">
                        FEGLI (Life Insurance)
                      </h1>
                      <h2 className="text-[1.25rem] font-semibold">
                        FEGLI changes dramatically as you move through your
                        career.
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col px-2 ">
                    <div className="w-6 h-1 bg-black mt-12"></div>
                    <p className="mt-8 text-[1.5rem] font-semibold">
                      FEGLI changes dramatically as you move through your
                      career. Its important you keep up with these changes and
                      make informed decisions that are best for you and your
                      family.
                    </p>
                    <div className="flex space-x-4 items-center absolute bottom-12">
                      <h1 className="text-[2rem] font-sans font-bold ">
                        Explore FEGLI help
                      </h1>
                      <img className="scale-90" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card1 p-8 aspect-square w-full md:w-[50%] scale-[.8] shadow-light rounded-lg">
                <div className="flex flex-col ">
                  <div className="flex bg-[#b2c2da] items-center p-8 rounded-lg justify-between">
                    <MdOutlineReceiptLong className="w-[40%] h-20" />
                    <div className="flex flex-col">
                      <h1 className="font-bold font-sans text-[1.75rem]">
                        Codes on your paycheck
                      </h1>
                      <h2 className="text-[1.25rem] font-semibold">
                        We run into federal employees all the time who are
                        paying for benefits they don’t need
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col px-2 ">
                    <div className="w-6 h-1 bg-black mt-12"></div>
                    <p className="mt-8 text-[1.5rem] font-semibold">
                      It is important to keep up to date on what benefits you
                      have and what you are paying for them. As you age, some of
                      these benefits change and need to be reviewed annually.
                    </p>
                    <div className="flex space-x-4 items-center absolute bottom-12">
                      <h1 className="text-[2rem] font-sans font-bold ">
                        Explore paycheck codes
                      </h1>
                      <img className="scale-90" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card1 p-8 aspect-square w-full md:w-[50%] scale-[.8] shadow-light rounded-lg">
                <div className="flex flex-col ">
                  <div className="flex bg-[#bcd4eb] items-center p-8 rounded-lg justify-between">
                    <MdMilitaryTech className="w-[40%] h-20" />
                    <div className="flex flex-col">
                      <h1 className="font-bold font-sans text-[1.75rem]">
                        Military Time Buyback
                      </h1>
                      <h2 className="text-[1.25rem] font-semibold">
                        Numerous workers in the force have a history of military
                        service.
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col px-2 ">
                    <div className="w-6 h-1 bg-black mt-12"></div>
                    <p className="mt-8 text-[1.5rem] font-semibold">
                      A little-known fact: Veterans are frequently eligible to
                      buy back military service time, maximizing their monthly
                      retirement in the process.
                    </p>
                    <div className="flex space-x-4 items-center absolute bottom-12">
                      <h1 className="text-[2rem] font-sans font-bold ">
                        Explore military buyback
                      </h1>
                      <img className="scale-90" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card1 p-8 aspect-square w-full md:w-[50%] scale-[.8] shadow-light rounded-lg">
                <div className="flex flex-col ">
                  <div className="flex bg-[#a3aacc] items-center p-8 rounded-lg justify-between">
                    <MdOutlineRateReview className="w-[40%] h-20" />
                    <div className="flex flex-col">
                      <h1 className="font-bold font-sans text-[1.75rem]">
                        Free Benefit Review
                      </h1>
                      <h2 className="text-[1.25rem] font-semibold">
                        If you aren’t sure about when or if you should retire we
                        can help
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col px-2 ">
                    <div className="w-6 h-1 bg-black mt-12"></div>
                    <p className="mt-8 text-[1.5rem] font-semibold">
                      We offer a free retirement review for all postal and
                      federal employees. Our reviews are typically conducted
                      over the phone and can take less than an hour to review
                      all aspects.
                    </p>
                    <div className="flex space-x-4 items-center absolute bottom-12">
                      <h1 className="text-[2rem] font-sans font-bold ">
                        Explore benefit review
                      </h1>
                      <img className="scale-90" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#A3AACC] w-[80vw] translate-y-[-100%] h-[20vh] p-8 rounded-r-full"></div>

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
              <button className="bg-[#164371] mt-8 text-white w-[30%] py-4 text-[1.25rem] font-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[100vh] w-full  px-4  sm:px-6 lg:px-8">
        <div className="container max-w-[86rem] mx-auto">
          <div className="flex p-12 py-24  md:flex-row flex-col justify-center items-center">
            <div className="w-[35%] flex flex-col">
              <h1 className="text-[#164371] font-extrabold font-sans text-[1.5rem]">
                Don't Listen to Us -
              </h1>
              <h2 className=" font-semibold text-[2rem] mt-4 leading-[125%] w-[80%]">
                Here are some words from people like you!
              </h2>
              <div className="flex flex-col">
                <div>
                    <img src="" alt="" />
                    <div>
                        <h1></h1>
                        <div>

                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="w-[65%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
