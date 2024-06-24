import React, { useContext } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/signUpSchema";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, fireDb } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../context/myContext";
import toast from "react-hot-toast";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Loader from "./Loader";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const Signup = () => {
  const { loading, setLoading } = useContext(myContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      if (values.password !== values.confirmpassword) {
        return toast.error("Passwords do not match");
      }
      
      setLoading(true);
      try {
        const users = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        const user = {
          name: values.name,
          email: users.user.email,
          uid: users.user.uid,
          time: Timestamp.now(),
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
        };

        const userRefrence = collection(fireDb, "user");
        await addDoc(userRefrence, user);

        formik.resetForm();
        toast.success("Signup Successfully");
        navigate("/login");
      } catch (error) {
        console.error(error);
        toast.error("Signup Failed");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="bg-[#181e24] pt-24 flex items-center justify-center min-h-screen ">
      {loading && <Loader />}
      <form
        onSubmit={formik.handleSubmit}
        className="bg-gradient-to-tl from-cyan-500 to-green-500 h-full max-w-96 p-6 rounded-lg shadow-inner-outer"
      >
        <h1 className="flex font-bold text-white text-2xl drop-shadow-lg justify-center p-4">
          SIGN UP
        </h1>
        <div className="mb-2">
          <label htmlFor="name" className="text-white font-semibold mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {formik.errors.name && formik.touched.name ? (
            <p className="text-white">{formik.errors.name}</p>
          ) : null}
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="text-white font-semibold mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="text-white">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="text-white font-semibold mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {formik.errors.password && formik.touched.password ? (
            <p className="text-white">{formik.errors.password}</p>
          ) : null}
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirmpassword"
            className="text-white font-semibold mb-2"
          >
            Confirm Password
          </label>
          <input
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {formik.errors.confirmpassword && formik.touched.confirmpassword ? (
            <p className="text-white">{formik.errors.confirmpassword}</p>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-full h-10 text-center text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700"
        >
          Sign Up
        </button>
        {/* <hr className="mt-3 mx-10" />
        <div className="flex justify-around bg-slate-300/30 hover:bg-slate-800/40 hover:text-white border rounded-full m-4 p-1 mx-12">
          <button type="button" className="flex" onClick={signupWithGoogle}>
            <img
              className="h-6"
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="google"
            />
            Continue with Google
          </button>
        </div> */}
        <hr className="mt-5 mx-10" />
        <div>
          <h1 className="flex justify-center tracking-wider text-black p-2 mt-4">
            Already User? <Link className="font-semibold ml-1 hover:text-gray-200" to="/login"> Login Now </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Signup;