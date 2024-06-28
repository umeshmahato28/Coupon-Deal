import React, { useContext } from "react";
import Card from "./Card";
import myContext from "../context/myContext";
import couponCategories from "../resources/CouponCategory";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { fireDb } from "../firebase";
import Shimmer from "./Shimmer";

const Cardlist = () => {
  const { loading, setLoading } = useContext(myContext);
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(fireDb, "coupons"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(items);
    };

    fetchData();
  }, []);

  // console.log("dtaaa",Data);

  const [brandname, setbrandname] = useState(""); // selected brand
  const [categoryName, setcetagoryName] = useState(""); //selected catGORY
  const [isDisable, setisDisable] = useState(true);

  const data = Data; // all data
  const CouponCategories = couponCategories; // category and brand
  const category = Object.keys(CouponCategories); // categpry
  const Brands = couponCategories[categoryName]; // brands
  // console.log("data==", data);

  setLoading(true);

  const filteredCoupons = data.filter((coupon) => {
    // console.log("coupons:", coupon);
    setLoading(false);
    return (
      (!categoryName || coupon.category === categoryName) &&
      (!brandname || coupon.brandname === brandname)
    );
  });

  console.log(!brandname, !categoryName, filteredCoupons);
  console.log(Brands);

  return (
    <>
      <div className="bg-[#181e24] w-full min-h-screen mt-24 pb-8 text-white flex flex-col lg:flex-row">
        <div className="w-full flex flex-col items-center justify-start lg:w-2/12 lg:mr-3 mt-2">
          <h1 className="text-center mt-3 w-full">Filter</h1>

          <select
            className="bg-[#2a323c] rounded-md mx-8 my-3 px-2 pb-2 text-center "
            value={categoryName}
            onChange={(e) => {
              setcetagoryName(e.target.value);
              setisDisable(false);
              setbrandname("");
            }}
            defaultValue=""
          >
            <option value="" disabled>
              By category
            </option>
            {category.map((name, index) => (
              <option key={index} value={name} className="text-left">
                {name}
              </option>
            ))}
          </select>

          {!isDisable && (
            <select
              className="bg-[#2a323c] rounded-md mx-8 my-3 px-1 pb-1 text-center "
              value={brandname}
              onChange={(e) => {
                setbrandname(e.target.value);
              }}
              defaultValue=""
            >
              <option value="" disabled>
                By Brand
              </option>
              {Brands?.map((name, index) => (
                <option key={index} value={name} className="text-left">
                  {name}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="w-full  mt-6 lg:mt-0">
          <div className="items-center ">
            <h3 className="font-medium w-full text-center md:text-start text-lg mt-4 px-2">Recommended</h3>
            <div className="flex flex-wrap justify-evenly lg:justify-start my-4">
              <button
                className="bg-[#2a323c] px-4 m-1 rounded-md"
                onClick={(e) => {
                  setcetagoryName("");
                  setbrandname("");
                }}
              >
                All
              </button>
              <button
                className="bg-[#2a323c] px-4 m-1 rounded-md"
                onClick={(e) => {
                  setisDisable(false);
                  setcetagoryName("Restaurants");
                }}
              >
                Food
              </button>
              <button
                className="bg-[#2a323c] px-4 m-1 rounded-md"
                onClick={(e) => {
                  setcetagoryName("Electronics");
                }}
              >
                Electronics
              </button>
              <button
                className="bg-[#2a323c] px-4 m-1 rounded-md"
                onClick={(e) => {
                  setcetagoryName("Clothing");
                }}
              >
                Clothing
              </button>
              <button
                className="bg-[#2a323c] px-4 m-1 rounded-md"
                onClick={(e) => {
                  setcetagoryName("Travel");
                }}
              >
                Travel
              </button>
              <button
                className="bg-[#2a323c] px-4 m-1 rounded-md"
                onClick={(e) => {
                  setcetagoryName("Subscription");
                }}
              >
                Subcription
              </button>
              <button
                className="bg-[#2a323c] px-4 m-1 rounded-md"
                onClick={(e) => {
                  setbrandname("Samsung");
                  setcetagoryName("");
                }}
              >
                Samsung
              </button>
              <button
                className="bg-[#2a323c] px-4 m-1 rounded-md"
                onClick={(e) => {
                  setbrandname("Hotstar");
                  setcetagoryName("");
                }}
              >
                Hotstar
              </button>
              <button
                className="bg-[#2a323c] px-4 m-1 rounded-md"
                onClick={(e) => {
                  setbrandname("KFC");
                  setcetagoryName("");
                }}
              >
                KFC
              </button>
              <button
                className="bg-[#2a323c] px-4 m-1 rounded-md"
                onClick={(e) => {
                  setbrandname("DMart");
                  setcetagoryName("");
                }}
              >
                DMart
              </button>
            </div>
          </div>

          <div className="flex flex-col pt-8 items-center justify-center md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading&& (
              <>
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
              </>
            )}
            {!loading &&
              filteredCoupons.map((coupon) => (
                <Card key={coupon.id} data={coupon} />
              ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Cardlist;