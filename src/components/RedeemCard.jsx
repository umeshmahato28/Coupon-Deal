import React, { useState } from "react";
import logo from "./images/cd_logo.png";

const RedeemCard = ({ data }) => {
  const [Ccode, setCcode] = useState("XXXXXXXXXX");
  const [payment, setpayment] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // const shipping_address = {
    //     first_name: formData.fname,
    //     last_name: formData.lname,
    //     address: formData.address,
    //     email: formData.email,
    //     country: formData.country,
    //     state: formData.state,
    //     city: formData.city,
    //     postcode: formData.pincode,
    //     phone_number: formData.mobile,
    //     date: new Date().toLocaleString("en-US", {
    //         month: "short",
    //         day: "2-digit",
    //         year: "numeric",
    //     }),
    // };
    var options = {
      key: "rzp_test_oBE4QaC9eyjz3H",
      key_secret: "rBtkDdVPtbqnPmBohEHJzxl1",
      amount: parseInt(data.price) * 100,
      currency: "INR",
      name: "CouponDeal",
      description: "for testing purpose",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("paymant id", paymentId);
        setCcode(data.code);
        setpayment(true);
        alert("Payment Succesfull!!!");
      },
      theme: {
        color: "#07a291db",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className="bg-[#181e24] h-[100vh] w-screen overflow-x-hidden flex justify-center  items-center mt-[30px] ">
      <div className="bg-[#2a323c] relative md:h-10/12  md:w-3/4 w-full flex md:flex-row flex-col py-14 text-white  rounded-md  ">
        <div className="md:mx-10  md:w-1/2 w-full ml-8 flex items-start border-r-2 justify-center flex-col">
          <div className="flex mt-5 h-12  ">
            <img
              src={logo}
              alt="bg"
              className="object-cover h-10 w-14  rounded-md"
            />
            <div>
              <h1 className="font-bold">Offer {data.offer} off</h1>
              <h1 className=" pl-2 text-sm">on {data.brandname}</h1>
            </div>
          </div>
          <hr className="m-2" />
          <h1 className="font-medium mt-4">Terms and conditions</h1>
          <ol className=" mt-6 mr-3 text-xl">
            <li>1. Offer Valid on offcial sites only</li>
            <li>2. This offer cannot be clubbed with any other offer </li>
            <li>3. Minimum spend {data.minimumAmt}Rs.</li>
            <li>4. Validity {data.validity}</li>
          </ol>
        </div>
        <div className="  h-full md:w-1/2 w-full flex flex-col pt-6 items-center justify-center gap-y-4 ">
          <h1 className="text-center  text-3xl  ">Code</h1>
          <input
            disabled
            type="text"
            value={Ccode}
            className="w-1/3 p-1 rounded-lg text-center bg-[#181e24]"
          />
          {payment ? (
            <h1 className="text-center text-2xl  ">Congratulation 🎉 </h1>
          ) : (
            <div>
              <h1 className="text-center py-5 text-2xl  ">
                Price: {data.price}rs{" "}
              </h1>
              <button
                onClick={handleSubmit}
                className="px-6 mb-6 h-10 text-center font-semibold text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700   "
              >
                Pay Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RedeemCard;
