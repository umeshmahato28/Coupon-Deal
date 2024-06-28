import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dropbox = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-left">
      {isOpen && (
        <div className="origin-top-right absolute right-0 m-4 mr-10 w-36 rounded-md shadow-lg">
          <div className="py-1 bg-[#2a323c] text-white rounded-lg shadow-xl">
            <Link to="/" onClick={handleLinkClick}>
              <button
                className="block text-sm px-4 py-2 w-full hover:bg-gray-800"
                role="menuitem"
              >
                Home
              </button>
            </Link>
            <Link to="/cardList" onClick={handleLinkClick}>
              <button
                className="block w-full text-sm px-4 py-2 hover:bg-gray-800"
                role="menuitem"
              >
                Coupon
              </button>
            </Link>
            <Link to="/uploadCoupon" onClick={handleLinkClick}>
              <button
                className="block w-full text-sm px-4 py-2 hover:bg-gray-800"
                role="menuitem"
              >
                Sell Coupon
              </button>
            </Link>
            <Link to="/contact" onClick={handleLinkClick}>
              <button
                className="block w-full text-sm px-4 py-2 hover:bg-gray-800"
                role="menuitem"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropbox;
