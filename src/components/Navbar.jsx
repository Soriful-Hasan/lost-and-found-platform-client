import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import UserContext from "../provider/AuthContext";
import { GoHomeFill } from "react-icons/go";
import { MdSelectAll } from "react-icons/md";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { RiDeviceRecoverFill } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import Swal from "sweetalert2";
import DropDown from "./dropdown/DropDown";
import ToggleDarkMode from "./darkMode/ToggleDarkMode";

const Navbar = () => {
  const { user, userSignOut, loading } = useContext(UserContext);

  const handleSignOut = () => {
    userSignOut()
      .then((res) =>
        Swal.fire({
          title: "Sign out successfully",
          icon: "success",
          draggable: true,
        })
      )
      .catch((error) =>
        Swal.fire({
          title: "Something was wrong",
          icon: "error",
          draggable: true,
        })
      );
  };

  const handleNavClick = () => {
    const drawerCheckbox = document.getElementById("drawer-toggle");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };
  const link = [
    <div className="flex  flex-col gap-4 lg:flex-row">
      <li>
        <NavLink
          onClick={
            (() => window.scrollTo({ top: 0, behavior: "smooth" }),
            handleNavClick)
          }
          to={"/"}
          className={({ isActive }) =>
            ` 
           flex items-center
          ${
            isActive
              ? "bg-gray-200 dark:text-dark-primary-text dark:bg-gray-600 text-[#443dff] font-semibold"
              : ""
          }`
          }
        >
          <GoHomeFill />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          onClick={
            (() => window.scrollTo({ top: 0, behavior: "smooth" }),
            handleNavClick)
          }
          to={"/allPosts"}
          className={({ isActive }) =>
            ` 
           flex items-center
          ${
            isActive
              ? "bg-gray-200 dark:text-dark-primary-text  dark:bg-gray-600 text-[#443dff] font-semibold"
              : ""
          }`
          }
        >
          {" "}
          <MdSelectAll /> All Posts
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={
            (() => window.scrollTo({ top: 0, behavior: "smooth" }),
            handleNavClick)
          }
          to={"/contact-us"}
          className={({ isActive }) =>
            ` 
           flex items-center
          ${
            isActive
              ? "bg-gray-200 dark:text-dark-primary-text dark:bg-gray-600 text-[#443dff] font-semibold"
              : ""
          }`
          }
        >
          <SiMinutemailer />
         Our Vision
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              onClick={
                (() => window.scrollTo({ top: 0, behavior: "smooth" }),
                handleNavClick)
              }
              className={({ isActive }) =>
                ` 
           flex items-center
          ${
            isActive
              ? "bg-gray-200 dark:text-dark-primary-text dark:bg-gray-600 text-[#443dff] font-semibold"
              : ""
          }`
              }
              to={"/addItem"}
            >
              <RiStickyNoteAddFill />
              Add Post
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={
                (() => window.scrollTo({ top: 0, behavior: "smooth" }),
                handleNavClick)
              }
              className={({ isActive }) =>
                ` 
           flex items-center
          ${
            isActive
              ? "bg-gray-200 dark:text-dark-primary-text dark:bg-gray-600 text-[#443dff] font-semibold"
              : ""
          }`
              }
              to={"/recoveredItems"}
            >
              <RiDeviceRecoverFill />
              Recovered Items
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={
                (() => window.scrollTo({ top: 0, behavior: "smooth" }),
                handleNavClick)
              }
              className={({ isActive }) =>
                ` 
           flex items-center
          ${
            isActive
              ? "bg-gray-200 dark:text-dark-primary-text dark:bg-gray-600 text-[#443dff] font-semibold"
              : ""
          }`
              }
              to={"/myPost"}
            >
              <BsPersonFill />
              My Posts
            </NavLink>
          </li>
        </>
      )}
    </div>,
  ];

  return (
    <div className="">
      <div className="navbar dark:border-gray-700 fixed dark:bg-dark-primary-bg bg-white border-b border-gray-200 top-0 z-50">
        <div className="w-full xl:w-10/12 mx-auto flex justify-between items-center">
          {/* Navbar Start */}
          <div className="navbar-start">
            <Link
              to={"/"}
              onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer hidden lg:flex items-center font-bold gap-2"
            >
              <img
                width="30"
                className="dark:bg-white rounded-full "
                height="30"
                src="/logo.png"
                alt="logo"
              />
              <h1>
                <span className="text-primary-text dark:text-white text-xl uppercase">
                  Find <span className="">It</span>
                </span>
              </h1>
            </Link>
            <div className="drawer drawer-start lg:hidden">
              <input
                id="drawer-toggle"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label htmlFor="drawer-toggle" className="btn btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-50">
                <label
                  htmlFor="drawer-toggle"
                  className="drawer-overlay"
                ></label>
                <ul className="menu  pt-8 w-72 min-h-full bg-base-200 text-base-content">
                  {/* Sidebar Links */}
                  {link}
                </ul>
              </div>
            </div>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end gap-4">
            <div className="mt-1">
              <ToggleDarkMode />
            </div>
            {loading ? (
              <span className="loading loading-ring loading-lg"></span>
            ) : user ? (
              <div className="flex gap-4 items-center">
                <DropDown user={user} handleSignOut={handleSignOut} />
              </div>
            ) : (
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={"/signIn"}
                className="btn rounded-sm hover:bg-blue-500 bg-[#443dff] text-white mt-1"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
