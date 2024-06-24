import React from "react";
import logo from "./images/cd_logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-950 w-full text-white z-20">
        <div className="flex flex-col md:flex-row items-center justify-around p-4">
          <div className="mb-4 md:mb-0">
            <div className="flex p-2 font-bold items-center justify-center md:justify-between">
              <img className="w-28" src={logo} alt="Logo" />
              <div className="text-3xl ml-2 text-center md:text-left">
                <h1>COUPON</h1>
                <h1>DEAL</h1>
              </div>
            </div>
          </div>
          <div className="mb-4 md:mb-0 text-center ">
            <Link>
              {" "}
              <h1 className="hover:cursor-pointer mb-2 md:mb-0">
                KNOW MORE
              </h1>{" "}
            </Link>
            <Link to="/faq" className="hover:cursor-pointer mb-2 md:mb-0">
              FAQ
            </Link>
            <Link>
              {" "}
              <h1 to="/contact" className="hover:cursor-pointer mb-2 md:mb-0">
                CONTACT US{" "}
              </h1>
            </Link>
            <h1 className="hover:cursor-pointer">SUPPORT</h1>
          </div>
          <div className="text-end items-center justify-end md:text-end">
            <div className="space-x-5 flex md:justify-end  justify-center mb-4 md:mb-0">
              <Link to="https://github.com/umeshmahato28/Coupan-Deal">
                <i className="fab fa-github"></i>
              </Link>
              <button>
                <i className="fab fa-facebook"></i>
              </button>
              <button>
                <i className="fab fa-instagram"></i>
              </button>
              <button>
                <i className="fab fa-twitter"></i>
              </button>
              <button>
                <i className="fab fa-linkedin"></i>
              </button>
            </div>
            <div className="flex  md:justify-end  justify-center hover:text-blue-300">
              <Link to="/contact">
                <h1>GIVE US SUGGESTION</h1>
              </Link>
            </div>
            <NavLink
              className="flex md:justify-end  justify-center text-center items-center hover:underline   hover:text-blue-300  "
              to="mailto:coupondeal.info@gmail.com"
            >
              <IoMail /> <p className="ml-1"> coupondeal.info@gmail.com</p>
            </NavLink>
            <div className="flex md:justify-end  justify-center  items-center">
              <FaLocationDot /> <p> Jamshedpur, Jharkhand</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-cyan-500 text-center border-t-[1px] mt-2 py-2">
          <h1 className="shadow-xl text-black tracking-wide">
            All Rights Reserved | Copyright © 2024 CouponDeal.
          </h1>
        </div>
      </footer>
    </div>

    //     <div>
    //   <div className=""></div>
    //   <footer className="bg-slate-900 text-white">
    //     <div className="flex flex-col md:flex-row items-center justify-around p-4">
    //       <div className="mb-4 md:mb-0">
    //         <div className="flex p-2 font-bold items-center justify-between">
    //           <img className="w-28" src={logo} alt="Logo" />
    //           <div className="text-3xl ml-2">
    //             <h1>COUPON</h1>
    //             <h1>DEAL</h1>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="mb-4 md:mb-0">
    //         <h1 className="hover:cursor-pointer mb-2 md:mb-0">KNOW MORE</h1>
    //         <h1 className="hover:cursor-pointer mb-2 md:mb-0">FAQ</h1>
    //         <h1 className="hover:cursor-pointer mb-2 md:mb-0">CONTACT US</h1>
    //         <h1 className="hover:cursor-pointer">SUPPORT</h1>
    //       </div>
    //       <div>
    //         <div className="space-x-5 flex justify-center mb-4 mr-10 md:mb-0">
    //           <button>
    //             <i className="fab fa-facebook"></i>
    //           </button>
    //           <button>
    //             <i className="fab fa-instagram"></i>
    //           </button>
    //           <button>
    //             <i className="fab fa-twitter"></i>
    //           </button>
    //           <button>
    //             <i className="fab fa-linkedin"></i>
    //           </button>
    //         </div>

    //         <div className="flex flex-col mr-10 items-center">
    //           <h1>GIVE US SUGGESTION</h1>
    //           <input
    //             type="text"
    //             id="input-text"
    //             placeholder="Type something..."
    //             className="px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black mb-2"
    //           />
    //           <button
    //             type="button"
    //             className="py-1 w-24 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-green-500"
    //           >
    //             Submit
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-gradient-to-r from-green-500 to-cyan-500 text-center border-t-[1px] mt-2 py-2">
    //       <h1 className="shadow-xl  text-black tracking-wide">
    //         All Rights Reserved | Copyright © 2024 CouponDeal.
    //       </h1>
    //     </div>
    //   </footer>
    // </div>
  );
};

export default Footer;
