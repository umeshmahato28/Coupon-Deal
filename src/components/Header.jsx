import React, { useState, useEffect, useRef } from "react";
import logo from "./images/cd_logo.png";
import { Link, NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Dropbox from "./Dropbox.jsx";

const Header = () => {
  const [islog, setislog] = useState(false);
  const [users, setUsers] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropboxOpen, setDropboxOpen] = useState(false);
  const dropboxRef = useRef(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("users"));
    setislog(!!user);
    setUsers(user);

    const handleClickOutside = (event) => {
      if (dropboxRef.current && !dropboxRef.current.contains(event.target)) {
        setDropboxOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear("users");
    window.location.reload();
  };

  const toggleDropbox = () => {
    setDropboxOpen(!dropboxOpen);
  };

  return (
    <header className="font-custom bg-gradient-to-tl from-cyan-500 to-green-500 pt-3 pb-1 fixed top-0 left-0 w-full z-50 h-24">
      <nav className="flex text-white border-1 mt-0 bg-black/30 rounded-full m-3 items-center justify-between">
        <Link to="/">
          <div className="flex p-2 font-bold items-center">
            <img className="h-14 w-20" src={logo} alt="Logo" />
            <div className="text-xl ml-2">
              <h1>COUPON</h1>
              <h1>DEAL</h1>
            </div>
          </div>
        </Link>
        <div className="md:flex justify-between items-center gap-x-6 text-md p-2 hidden">
          <NavLink
            to="/"
            exact
            className={({ isActive }) =>
              isActive
                ? "text-white text-lg font-bold"
                : "text-white hover:text-gray-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cardList"
            className={({ isActive }) =>
              isActive
                ? "text-white text-lg font-bold"
                : "text-white hover:text-gray-400"
            }
          >
            Coupons
          </NavLink>
          {islog ? (
            <NavLink
              to="/uploadCoupon"
              className={({ isActive }) =>
                isActive
                  ? "text-white text-lg font-bold"
                  : "text-white hover:text-gray-400"
              }
            >
              Sell Coupon
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-white text-lg font-bold"
                  : "text-white hover:text-gray-400"
              }
            >
              Sell Coupon
            </NavLink>
          )}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white text-lg font-bold"
                : "text-white hover:text-gray-400"
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="flex justify-end md:gap-x-2 md:p-4">
          {islog ? (
            <button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="m-2"
            >
              <i className="fas fa-user"></i>
            </button>
          ) : (
            <Link to="/login" className="bg-blue-500 p-1 px-2  rounded-md">
              Login
            </Link>
          )}
        </div>
        <div ref={dropboxRef}>
        <button
          type="button"
          className="md:hidden w-8 h-10 mr-3 scale-150"
          id="options-menu"
          
          onClick={toggleDropbox}
        >
          <i class="fas fa-bars"></i>
        </button>
          {dropboxOpen && <Dropbox />}
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {users ? (
            <MenuItem className="w-56 flex flex-col items-center">
              <img
                src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
                alt="user"
                className="h-10 w-10 rounded-full mb-2"
              />
              <h1 className="text-center">{users.name}</h1>
              <h2 className="text-center">{users.email}</h2>
              <hr className="w-full my-2" />
              <Link to="/user" className="text-md font-medium mb-2">
                Manage Profile
              </Link>
              <Link
                to="/"
                onClick={logout}
                className="bg-red-600 text-md font-bold px-4 mt-4 py-1 rounded-lg hover:bg-red-700"
              >
                Logout
              </Link>
            </MenuItem>
          ) : null}
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
