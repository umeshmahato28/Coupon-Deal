import React, { useContext } from "react";
import Card from "./Card";
// import JsonDATA from "../resources/Data";
import myContext from "../context/myContext";
import couponCategories from "../resources/CouponCategory";
import { useState,useEffect } from "react";
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

  setLoading(true)

  const filteredCoupons = data.filter((coupon) => {
    console.log("coupons:",coupon);
    setLoading(false)
    return (
      (!categoryName || coupon.category === categoryName) &&
      (!brandname || coupon.brand === brandname)
      
    );
  });

  console.log(!brandname, !categoryName, filteredCoupons);
  console.log(Brands);

  return (
    <>
      <div className="bg-[#181e24] min-h-screen pt-24
      
      
       text-white flex w-full ">
        <div className=" w-3/12  mr-3 mt-2">
          <h1 className="text-center mt-3">Filter</h1>

          <select
            className="bg-[#2a323c] rounded-md  mx-8 my-3 px-2 pb-2  text-center"
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

          {isDisable ? null : (
            <select
              className="bg-[#2a323c] rounded-md w-36 mx-8 my-3 px-1 pb-1  text-center"
              value={brandname}
              onChange={(e) => {
                setbrandname(e.target.value);
              }}
              defaultValue=""
            >
              <option value="" disabled>
                By Brand
              </option>
              {Brands?.map((name) => (
                <option value={name} className="text-left">
                  {name}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="ml-60">
          <div className="pl-8 items-center">
            <h3 className="font-medium text-lg mt-4 px-2 "> Recommended</h3>
            <div className="flex justify-around">
              <button
                className="bg-[#2a323c] px-4  m-1 rounded-md"
                onClick={(e) => {
                  setcetagoryName("");
                  setbrandname("");
                }}
              >
                All
              </button>
              <button
                className="bg-[#2a323c] px-4  m-1 rounded-md"
                onClick={(e) => {
                  setisDisable(false)
                  setcetagoryName("Restaurants");
                }}
              >
                Food
              </button>
              <button
                className="bg-[#2a323c] px-4  m-1 rounded-md"
                onClick={(e) => {
                  setcetagoryName("Electronics");
                }}
              >
                Electronics
              </button>
              <button
                className="bg-[#2a323c] px-4  m-1 rounded-md"
                onClick={(e) => {
                  setcetagoryName("Clothing");
                }}
              >
                Clothing
              </button>
              <button
                className="bg-[#2a323c] px-4  m-1 rounded-md"
                onClick={(e) => {
                  setcetagoryName("Travel");
                }}
              >
                Travel
              </button>
              <button
                className="bg-[#2a323c] px-4  m-1 rounded-md"
                onClick={(e) => {
                  setcetagoryName("Subcription");
                }}
              >
                Subcription
              </button>

              <button
                className="bg-[#2a323c] px-4  m-1 rounded-md"
                onClick={(e) => {
                  setbrandname("Samsung");
                  setcetagoryName("");
                }}
              >
                Samsung
              </button>
              <button
                className="bg-[#2a323c] px-4  m-1 rounded-md"
                onClick={(e) => {
                  setbrandname("Hotstar");
                  setcetagoryName("");
                }}
              >
                Hotstar
              </button>
              <button
                className="bg-[#2a323c] px-4  m-1 rounded-md"
                onClick={(e) => {
                  setbrandname("KFC");
                  setcetagoryName("");
                }}
              >
                KFC
              </button>
              <button
                className="bg-[#2a323c] px-4  m-1 rounded-md"
                onClick={(e) => {
                  setbrandname("DMart");
                  setcetagoryName("");
                }}
              >
                DMart
              </button>
            </div>
          </div>
          <div>
            <div className="">
            {loading && <Shimmer />}
            {loading && <Shimmer />}
            {loading && <Shimmer />}
            {loading && <Shimmer />}
            {loading && <Shimmer />}
            {loading && <Shimmer />}
            {loading && <Shimmer />}
            {loading && <Shimmer />}
              {filteredCoupons.map((coupon) => (
                <Card data={coupon} />
                
              ))}
            </div>
            
          </div>
        </div>

      </div>
    </>
  );
};

export default Cardlist;
