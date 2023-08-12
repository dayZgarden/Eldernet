import React from "react";
import { BsHeartPulseFill } from "react-icons/bs";
import arrow from "../assets/arrow.svg";
import {
  MdOutlineReceiptLong,
  MdOutlineRateReview,
  MdMilitaryTech,
} from "react-icons/md";

const ServicesCmp = () => {
  return (
    <>
      <div className="min-h-[80vh] w-full  px-4  sm:px-6 lg:px-8">
        <div className="container max-w-[86rem] mx-auto">
          <div className="flex pt-24 flex-col justify-center items-center">
            <h1 className="text-[#8E1D1D] font-extrabold font-sans text-[1.5rem]">
              What do we offer?
            </h1>
            <h2 className="font-bold text-[2.5rem] leading-[125%] mt-4 w-[50%] text-center">
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
    </>
  );
};

export default ServicesCmp;
