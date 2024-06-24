import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDb } from "../firebase";
import { Link } from "react-router-dom";
import myContext from "../context/myContext";
import toast from "react-hot-toast";
import Loader from "./Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { loading, setLoading } = useContext(myContext);
  

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  });

 

  const loginFunction = async () => {
    if (userLogin.email === "" && userLogin.password === "") {
      toast.error("All Fields are required");
      return;
    }

    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
      const q = query(
        collection(fireDb, "user"),
        where('uid', '==', users?.user?.uid)
      );
     
    
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let user;
        querySnapshot.forEach((doc) => user = doc.data());
        localStorage.setItem("users", JSON.stringify(user));
        setUserLogin({
          email: "",
          password: ""
        });
        toast.success("Login Successfully");
        setLoading(false);
        window.location.href = '/'; 
      });
      return () => unsubscribe();
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login Failed");
    }
  };
  


    


  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      setUserLogin(values); // Update state before calling login function
      loginFunction();
    },
  });

  return (
    <div className="bg-[#181e24] pt-24 flex items-center justify-center min-h-screen">
      {loading && <Loader />}
      <form
        onSubmit={formik.handleSubmit}
        className="bg-gradient-to-tl from-cyan-500 to-green-500 h-full max-w-96 p-6 rounded-lg shadow-inner-outer"
      >
        <h1 className="flex font-bold text-white text-2xl drop-shadow-lg justify-center p-4">
          LOGIN
        </h1>
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
        <div className="mb-6">
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
        <button
          type="submit"
          className="w-full h-10 text-center text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700"
        >
          Login
        </button>
        <hr className="mt-4 mx-10" />
        <div>
          <h1 className="flex justify-center tracking-wider text-black p-2 mt-2">
            New to CouponDeal? <Link className="font-semibold ml-1 hover:text-gray-200" to="/signup">Sign Up Now</Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Login;
