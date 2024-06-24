import React, { useContext, useState } from "react";
import myContext from "../context/myContext";
import { useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDb } from "../firebase";
import Loader from "./Loader";

const Contact = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const navigate = useNavigate();

  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addMessage = async (e) => {
    if (message.name === "" || message.email === "" || message.message === "") {
      return toast.error("All fields are required");
    }

    setLoading(true);
    e.preventDefault();

    try {
      const messageRef = collection(fireDb, "ContactUS");
      await addDoc(messageRef, message);
      toast.success("Submitted successfully");

      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Failed, Try  Again..");
    }
  };
  return (
    <>
      <div className="h-20"></div>
      <div className="bg-[#181e24]  flex items-center justify-center min-h-screen ">
        {loading && <Loader />}
        <form
          onSubmit={addMessage}
          className="bg-gradient-to-tl from-cyan-500 to-green-500  h-full max-w-96 p-6 rounded-lg shadow-inner-outer"
        >
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
              value={message.name}
              onChange={(e) => {
                setMessage({ ...message, name: e.target.value });
              }}
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
            value={message.email}
            onChange={(e) => {
              setMessage({ ...message, email: e.target.value });
            }}
            placeholder="Enter Email"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <label className="p-1 text-white font-semibold mb-2">Message</label>

          <textarea
            name="message"
            id="message"
            value={message.message}
            onChange={(e) => {
              setMessage({ ...message, message: e.target.value });
            }}
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
