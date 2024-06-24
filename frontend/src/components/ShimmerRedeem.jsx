import React from "react";
import Shimmer from "./Shimmer";

const ShimmerRedeem = () => {
  return (
    <div>
      <div className="bg-[#2a323c] relative md:w-3/4 w-full flex md:flex-row flex-col py-10   text-white rounded-md">
        <div className="absolute transform translate-y-32 w-full flex items-center  justify-between">
          <div className="bg-[#181e24] h-16 w-16 rounded-full -translate-x-8 shimmer"></div>
          <div className="bg-[#181e24] h-16 w-16 rounded-full translate-x-8 shimmer"></div>
        </div>
        <div className="mx-10 md:w-1/2 w-full ml-20 flex items-start border-r-2 justify-center flex-col">
          <div className="flex mt-5 h-12">
            <div className="object-cover h-10 w-14 rounded-md shimmer"></div>
            <div className="flex flex-col justify-center ml-4">
              <div className="h-4 w-24 shimmer mb-2"></div>
              <div className="h-3 w-32 shimmer"></div>
            </div>
          </div>
          <hr className="m-2 shimmer" />
          <div className="h-6 w-48 shimmer mt-4"></div>
          <ol className="mt-6 mr-3 text-xl space-y-4">
            <li className="h-4 w-60 shimmer"></li>
            <li className="h-4 w-72 shimmer"></li>
            <li className="h-4 w-48 shimmer"></li>
            <li className="h-4 w-56 shimmer"></li>
          </ol>
        </div>
        <div className="h-full md:w-1/2 w-full flex flex-col items-center justify-center gap-y-4">
          <div className="h-8 w-24 shimmer mb-4"></div>
          <div className="w-1/2 h-10 bg-[#181e24] shimmer"></div>
          <div className="h-6 w-32 shimmer mt-4"></div>
          <button className="w-1/2 mb-6 h-10 bg-[#181e24] rounded-md shadow-sm shimmer"></button>
        </div>
      </div>
    </div>
  );
};

export default ShimmerRedeem;
