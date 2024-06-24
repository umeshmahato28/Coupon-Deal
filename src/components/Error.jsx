/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "./Footer";

const Error = () => {
  //     const error = useRouteError();
  //     if(error.status === 404){
  return <>
    <div className="grid min-h-[100vh] pt-24 place-items-center text-white bg-[#181e24] px-8 ">
      <div className="text-center">
        <p className="text-9xl font-semibold text-primary">404 Error</p>
        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-9 text-lg leading-8 ">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <button
          type="button"
          className="py-2 px-3 mt-8 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-green-500"
        >
          Go Back to Home
        </button>
      </div>
    </div>
    </>
};

export default Error;
