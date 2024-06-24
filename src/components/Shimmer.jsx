import React from 'react';
// import './Shimmer.css'; // Make sure to import the CSS file for shimmer effect styles

function Shimmer() {
  return (
    <div className=" h-80 w-64 items-center ">
      <div className="bg-[#2a323c] p-2 pl-5 text-white w-56 mx-4 rounded-md animate-pulse duration-200  rounded-t-xl">
        <div className="flex mt-5 space-x-4">
          <div className="h-10 w-14 bg-gray-700 rounded-md shimmer"></div>
          <div className="flex flex-col justify-center">
            <div className="h-4 bg-gray-700 w-24 mb-2 rounded shimmer"></div>
            <div className="h-4 bg-gray-700 w-16 rounded shimmer"></div>
          </div>
        </div>
        
        <div className="mt-3 text-sm">
          <div className="h-4 bg-gray-700 w-32 mb-2 rounded shimmer"></div>
          <ol className="mt-2 mr-3 text-xs space-y-2">
            <li className="h-4 bg-gray-700 rounded shimmer"></li>
            <li className="h-4 bg-gray-700 rounded shimmer"></li>
            <li className="h-4 bg-gray-700 rounded shimmer"></li>
            <li className="h-4 bg-gray-700 rounded shimmer"></li>
          </ol>
        </div>
      </div>

      <div className="flex w-[248px] bg-[#2a323c] rounded-full mx-1  animate-pulse duration-200 ">
        <div className="bg-[#181e24] h-8 w-8 rounded-full"></div>
        <div className="text-[#2a323c] text-center w-48">----------------------</div>
        <div className="bg-[#181e24] h-8 w-8 rounded-full items-end"></div>
      </div>

      <div className="bg-[#2a323c] h-16 w-56 ml-4 rounded-md rounded-b-xl py-2 px-12  animate-pulse duration-200">
        <div className="h-8 bg-gray-700 rounded-xl shimmer"></div>
      </div>
    </div>
  );
}

export default Shimmer;