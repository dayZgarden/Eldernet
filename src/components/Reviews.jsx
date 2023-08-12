import React from "react";
import { AiFillStar } from "react-icons/ai";
import quote from "../assets/quote.svg";
import { useState, useEffect } from "react";
import reviewsData from '../utils/reviewsData'
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [review, setReview] = useState(1);

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
                {reviewsData.map((data) => (
                  <ReviewCard key={data.id} data={data} currentReview={currentReview} setReview={setReview} />
                ))}

              </div>
            </div>

            <div
              id="review"
              className="relative w-[45%] p-8 aspect-square shadow-dark rounded-lg"
            >
              <div className="flex flex-col items-center">
                <img
                  className="w-36 h-36 object-cover object-center absolute -top-16  rounded-full"
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
                  <p className="text-center text-[1.25rem] mt-12  font-semibold">
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
