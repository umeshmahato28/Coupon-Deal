import React from "react";

const Contact = () => {
  return (
    <>

   <div className="h-20"></div>
    <div className="bg-[#181e24]  flex items-center justify-center min-h-screen ">
      <form className="bg-gradient-to-tl from-cyan-500 to-green-500  h-full max-w-96 p-6 rounded-lg shadow-inner-outer">
        <h1 className="flex font-bold text-white  text-2xl drop-shadow-lg justify-center p-4">
          CONTACT US
        </h1>
        <div className=" mb-2">
          <label htmlFor="name" className=" text-white font-semibold  m-2">
            Name
          </label>

          <input
            id="name"
            autoComplete="off"
            name="name"
            type="text"
            placeholder="Enter Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <label className="p-1 text-white font-semibold mb-2">Email</label>
        <input
          id="Email"
          autoComplete="Email"
          name="Email"
          type="Email"
          placeholder="Enter Email"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <label className="p-1 text-white font-semibold mb-2">Message</label>

        <textarea
          name="message"
          id="message"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></textarea>

        <button className="w-full mb-6 h-10 text-center font-semibold text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700   ">
          Send
        </button>
      </form>
    </div>
    </>
  );
};

export default Contact;
