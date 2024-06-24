import React, { useState } from "react";

const FAQ = () => {
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const [show4, setshow4] = useState(false);

  return (
    <div className="bg-[#181e24] pt-24 font-custom min-h-screen py-4 text-white ">
      <h1 className="bg-[#2a323c] text-center text-5xl font-medium p-2">
        FAQs
      </h1>
      <div className="bg-[#2a323c] rounded-md shadow-lg   w-3/4 mx-48  my-4 mt-12 px-3">
        <h2
          className="text-2xl font-medium p-2 cursor-pointer "
          onClick={(e) => {
            setshow(!show);
          }}
        >
          1. What is CouponDeal and how does it work?
        </h2>
        {show ? (
          <p className="text-lg p-2 px-8 ">
            Answer: CouponDeal is an online platform that provides users with
            the latest and most valuable coupons and promo codes for a wide
            range of products and services. Simply search for the store or
            product you are interested in, and we will display a list of
            available deals. Click on the desired coupon to reveal the code and
            instructions on how to apply it during checkout.
          </p>
        ) : null}
      </div>

      <div className="bg-[#2a323c] rounded-md shadow-lg   w-3/4 mx-48  my-4  px-3">
        <h2
          className="text-2xl font-medium p-2 cursor-pointer "
          onClick={(e) => {
            setshow1(!show1);
          }}
        >
          2. Are the coupons and promo codes on CouponDeal free to use?
        </h2>
        {show1 ? (
          <p className="text-lg p-2 px-8 ">
            Answer: no, the coupons and promo codes listed on CouponDeal are not
            free to use. Our goal is to help seller make money on your
            purchases.
          </p>
        ) : null}
      </div>

      <div className="bg-[#2a323c] rounded-md shadow-lg   w-3/4 mx-48  my-4 px-3">
        <h2
          className="text-2xl font-medium p-2 cursor-pointer "
          onClick={(e) => {
            setshow2(!show2);
          }}
        >
          3. How often are new coupons and promo codes added to CouponDeal?
        </h2>
        {show2 ? (
          <p className="text-lg p-2 px-8 ">
            Answer: We update our coupon listings regularly to ensure you have
            access to the latest deals. New coupons and promo codes are added
            daily, so be sure to check back frequently for the newest discounts
            and offers.
          </p>
        ) : null}
      </div>

      <div className="bg-[#2a323c] rounded-md shadow-lg   w-3/4 mx-48  my-4  px-3">
        <h2
          className="text-2xl font-medium p-2 cursor-pointer "
          onClick={(e) => {
            setshow3(!show3);
          }}
        >
          4. What should I do if a coupon code from CouponDeal doesn't work?
        </h2>
        {show3 ? (
          <p className="text-lg p-2 px-8 ">
            Answer: If a coupon code does not work, please check the following:
            Ensure the code was entered correctly without any typos. Check the
            coupon's expiration date to make sure it is still valid. Review the
            coupon's terms and conditions to ensure your purchase meets the
            requirements (e.g., minimum spend, specific products, etc.). If the
            code still doesn't work, please contact us through our customer
            support, and we will assist you in finding a solution or an
            alternative coupon.
          </p>
        ) : null}
      </div>

      <div className="bg-[#2a323c] rounded-md shadow-lg   w-3/4 mx-48  my-4  px-3">
        <h2
          className="text-2xl font-medium p-3 cursor-pointer "
          onClick={(e) => {
            setshow4(!show4);
          }}
        >
          {" "}
          HAVE MORE QUERY?
        </h2>
        {show4 ? (
          <div className=" justify-start  ">
            <input
              className=" text-black w-3/4 text-lg ml-4 mb-4 rounded-l-xl px-8  h-8 "
              type="text"
              placeholder="Ask Here"
            />
            <button className="bg-blue-500 hover:bg-blue-700 rounded-r-xl h-8  px-4 pt-[2px]">
              SEND
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FAQ;
