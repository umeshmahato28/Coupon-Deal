import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Dropbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" ml-10 text-left">
      <div>
        <button
          type="button"
          className=" w-8 h-10 mr-3 scale-150"
          id="options-menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 m-4 mr-10 w-36 rounded-md shadow-lg  "
          role="menu"
        >
          <div className="py-1 bg-[#2a323c] text-white rounded-b-md shadow-xl ">
            <Link to="/">
              <button
                className="block  text-sm px-4 py-2 w-full hover:bg-gray-800 "
                role="menuitem"
              >
                Home
              </button>
            </Link>
            <Link to="/cardList">
              <button
                className="block w-full  text-sm px-4 py-2 hover:bg-gray-800 "
                role="menuitem"
              >
                Coupon
              </button>
            </Link>
            <Link to="/uploadCoupon">
              <button
                className="block w-full text-sm px-4 py-2 hover:bg-gray-800 "
                role="menuitem"
              >
                Sell Coupon
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropbox;
