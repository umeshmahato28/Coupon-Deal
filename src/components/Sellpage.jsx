import React, { useContext, useEffect, useState } from "react";
import couponCategories from "../resources/CouponCategory";
import { useNavigate } from "react-router-dom";
import myContext from "../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDb } from "../firebase";
import Loader from "./Loader";
import Login from "./Login";

const Sellpage = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  //Upload Coupon State

  const [coupon, setCoupon] = useState({
    category: "",
    brandname: "",
    validity: "",
    offer: "",
    price: "",
    minimumAmt: "",
    code: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Add coupon Function
  const addCouponFunction = async (e) => {
    if (
      coupon.validity === "" ||
      coupon.price === "" ||
      coupon.offer === "" ||
      coupon.minimumAmt === "" ||
      coupon.code === ""
    ) {
      return toast.error("all fields are required");
    }

    setLoading(true);
    e.preventDefault();
    try {
      const couponRef = collection(fireDb, "coupons");
      await addDoc(couponRef, coupon);
      toast.success("Add Coupon successfully");

      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Add Coupon failed");
    }
  };
  const CouponCategories = couponCategories;

  const category = Object.keys(couponCategories);

  const [brandname, setbrandname] = useState(""); //FOR INPUT BOX FILL WITH SUGGETION
  const [categoryName, setcetagoryName] = useState("Electronics"); //for all catGORY
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [para, setpara] = useState(false);
  const [islog, setislog] = useState(false);

  useEffect(() => {
    console.log("hello");
    const user = JSON.parse(localStorage.getItem("users"));

    if (user == null) {
      setislog(false);
    } else {
      setislog(true);
    }
  }, []);
  const Brands = CouponCategories[categoryName];

  return (
    <>
      {islog ? (
        <div className="bg-[#181e24] pt-24 flex items-center justify-center min-h-screen ">
          {loading && <Loader />}
          <form
            onSubmit={addCouponFunction}
            className="bg-gradient-to-tl from-cyan-500 to-green-500  h-full max-w-96 p-6 rounded-lg shadow-inner-outer"
          >
            <h1 className="flex font-bold text-white  text-2xl drop-shadow-lg justify-center p-4">
              UPLOAD COUPON
            </h1>
            <div className=" mb-2">
              <select
                className="mx-1 w-[47%] p-2  my-1 mr-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent  text-center"
                value={para ? categoryName : null}
                name="category"
                onChange={(e) => {
                  setcetagoryName(e.target.value);
                  setCoupon({ ...coupon, category: e.target.value });
                  setShowSuggestions(true);
                  setpara(true);
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Select category
                </option>
                {category.map((name, index) => (
                  <option key={index} value={name} className="text-left">
                    {name}
                  </option>
                ))}
              </select>

              {/* for brand  */}

              <select
                className="mx-1 w-[47%] p-2 my-1 mt-3  rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
                value={brandname}
                name="brandname"
                disabled={!showSuggestions}
                onChange={(e) => {
                  setbrandname(e.target.value);
                  setCoupon({ ...coupon, brandname: e.target.value });
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Brand
                </option>
                {Brands.map((s, index) => (
                  <option key={index} value={s} className="text-left  m-4">
                    {s}
                  </option>
                ))}
              </select>
            </div>
                  
            <div className="mb-2">
              <label
                htmlFor="Validity"
                className="p-1 text-white font-semibold mb-2"
              >
                Validity
              </label>
              <input
                id="validity"
                autoComplete="off"
                name="validity"
                type="date"
                value={coupon.validity}
                onChange={(e) => {
                  setCoupon({ ...coupon, validity: e.target.value });
                }}
                placeholder="DD--MM--YYYY"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* offer  & price*/}
            <label htmlFor="offer" className=" text-white font-semibold mb-2">
              Offer and Price
            </label>
            <div className=" mb-2 flex">
              <input
                id="offer"
                autoComplete="off"
                name="offer"
                type="offer"
                value={coupon.offer}
                onChange={(e) => {
                  setCoupon({ ...coupon, offer: e.target.value });
                }}
                placeholder="Enter offer"
                className="w-[47%] px-3  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <input
                id="price"
                autoComplete="off"
                name="price"
                type="number"
                value={coupon.price}
                onChange={(e) => {
                  setCoupon({ ...coupon, price: e.target.value });
                }}
                placeholder="Enter Selling Price"
                className="w-[47%] px-3 py-2 ml-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <label
              htmlFor="minimumAmt"
              className="p-1 text-white font-semibold mb-2"
            >
              Minimum Purchase
            </label>
            <input
              id="minimumAmt"
              autoComplete="off"
              name="minimumAmt"
              type="number"
              value={coupon.minimumAmt}
              onChange={(e) => {
                setCoupon({ ...coupon, minimumAmt: e.target.value });
              }}
              placeholder="Enter Minimum Purchase"
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <label
              htmlFor="Couponcode"
              className="p-1 text-white font-semibold mb-2"
            >
              Coupon Code
            </label>
            <input
              id="code"
              autoComplete="off"
              name="code"
              type="code"
              value={coupon.code}
              onChange={(e) => {
                setCoupon({ ...coupon, code: e.target.value });
              }}
              placeholder="Enter Coupon Code"
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <button
              type="submit"
              className="w-full mt-3 mb-4 h-10 text-center font-semibold text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700   "
            >
              Upload
            </button>
          </form>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </>
  );
};

export default Sellpage;
