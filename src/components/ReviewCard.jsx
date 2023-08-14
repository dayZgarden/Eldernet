import React from "react";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = ({ setReview, currentReview, data }) => {
  return (
    <>
      <div
        onClick={() => setReview(data.id)}
        className="flex p-6 border-4 border-black bg-white rounded-lg cursor-pointer relative"
      >
        {currentReview.id == data.id && (
          <span className="w-12 h-12 bg-[#8E1D1D] rounded-full absolute -left-6 top-10 z-[-1]"></span>
        )}

        <div className="flex z-0 relative w-full space-x-6">
          <img className="w-[20%] aspect-square object-cover object-center rounded-full" src={data.picture} alt="" />
          <div className="flex flex-col w-[40%]">
            <h1 className="font-sans font-bold text-[1.25rem]">{data.name}</h1>
            <div className="flex mt-1">
              {Array(4)
                .fill()
                .map((_, idx) => (
                  <AiFillStar key={idx} className="text-[#FFD700] w-8 h-8" />
                ))}
            </div>
          </div>
          <div className="w-[20%] flex items-center justify-between">
            <div className="h-full w-1 bg-black"></div>
                <h1 className=" font-bold text-[2rem] font-sans text-[#000000]">{data.age}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
