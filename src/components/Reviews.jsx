import React from "react";
import randy from "../assets/randy.svg";
import { AiFillStar } from "react-icons/ai";
import quote from "../assets/quote.svg";
import { useState, useEffect } from "react";

const Reviews = () => {
  const [review, setReview] = useState(1);

  const reviewsData = [
    {
      id: 1,
      name: "Randy 1",
      stars: 4,
      content: "Review content for Randy 1...",
      picture: randy,
    },
    {
      id: 2,
      name: "Randy 2",
      stars: 5,
      content: "Review content for Randy 2...",
      picture: quote,
    },
    {
      id: 3,
      name: "Randy 3",
      stars: 5,
      content: "Review content for Randy 3...",
      picture: randy,
    },
  ];

  const currentReview = reviewsData.find((r) => r.id === review);

  return (
    <>
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
                <div
                  onClick={() => setReview(1)}
                  className="flex p-6 border-4 border-black bg-white rounded-lg cursor-pointer relative"
                >
                  {review == 1 ? (
                    <span className="w-12 h-12 bg-[#8E1D1D] rounded-full absolute -left-6 top-10 z-[-1]"></span>
                  ) : (
                    ""
                  )}

                  <div className="flex z-0 relative w-full">
                    <img className="w-[30%] h-20" src={randy} alt="" />
                    <div className="flex flex-col w-[40%]">
                      <h1 className="font-sans font-bold text-[1.25rem]">
                        Randy 1
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
                <div
                  onClick={() => setReview(2)}
                  className="flex p-6 border-4 border-black bg-white rounded-lg cursor-pointer relative"
                >
                  {review == 2 ? (
                    <span className="w-12 h-12 bg-[#8E1D1D] rounded-full absolute -left-6 top-10 z-[-1]"></span>
                  ) : (
                    ""
                  )}

                  <div className="flex z-0 relative w-full">
                    <img className="w-[30%] h-20" src={randy} alt="" />
                    <div className="flex flex-col w-[40%]">
                      <h1 className="font-sans font-bold text-[1.25rem]">
                        Randy 2
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
                <div
                  onClick={() => setReview(3)}
                  className="flex p-6 border-4 shado border-black bg-white rounded-lg cursor-pointer relative"
                >
                  {review == 3 ? (
                    <span className="w-12 h-12 bg-[#8E1D1D] rounded-full absolute -left-6 top-10 z-[-1]"></span>
                  ) : (
                    ""
                  )}

                  <div className="flex z-0 relative w-full">
                    <img className="w-[30%] h-20" src={randy} alt="" />
                    <div className="flex flex-col w-[40%]">
                      <h1 className="font-sans font-bold text-[1.25rem]">
                        Randy 3
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

            <div
              id="review"
              className="card1 relative p-8 aspect-square shadow-dark rounded-lg"
            >
              <div className="flex flex-col items-center">
                <img
                  className="w-36 h-36 absolute -top-16 border-[8px] border-black rounded-full"
                  src={currentReview.picture}
                  alt=""
                />
                <div className="flex flex-col">
                  <h1 className="font-bold font-sans text-[1.75rem] mt-24">
                    {currentReview.name}
                  </h1>
                  <div className="flex mt-1">
                    {Array(currentReview.stars)
                      .fill()
                      .map((_, idx) => (
                        <AiFillStar
                          key={idx}
                          className="text-[#FFD700] w-8 h-8"
                        />
                      ))}
                  </div>
                </div>
                <div className="flex flex-col px-2 ">
                  <img className="mt-12 w-16 h-16" src={quote} alt="" />
                  <p className="text-center text-[2rem] mt-12  font-semibold">
                    {currentReview.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
