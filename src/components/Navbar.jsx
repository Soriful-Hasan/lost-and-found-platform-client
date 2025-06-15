import React, { use, useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import UserContext from "../provider/AuthContext";
import { RxExit } from "react-icons/rx";
import { GoHomeFill } from "react-icons/go";
import { MdSelectAll } from "react-icons/md";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { RiDeviceRecoverFill } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import Swal from "sweetalert2";
import ButtonAnimation from "./animation/ButtonAnimation";

const Navbar = () => {
  const { user, userSignOut, loading } = useContext(UserContext);
  const [dropDown, setDropDown] = useState(false);

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
  const link = [
    <div className="flex flex-col gap-4 lg:flex-row">
      <li>
        <NavLink
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to={"/"}
          className={({ isActive }) =>
            ` 
           flex items-center
          ${
            isActive ? "bg-[#D8D8DC] text-[#443dff] font-bold" : "font-semibold"
          }`
          }
        >
          <GoHomeFill />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to={"/allPosts"}
          className={({ isActive }) =>
            ` 
           flex items-center
          ${
            isActive ? "bg-[#D8D8DC] text-[#443dff] font-bold" : "font-semibold"
          }`
          }
        >
          {" "}
          <MdSelectAll /> Lost & Found Items
        </NavLink>
      </li>
    </div>,
  ];

  const dropDownLink = [
    <div className="">
      <li>
        <NavLink
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            ` 
           flex items-center
          ${
            isActive ? "bg-[#D8D8DC] text-[#443dff] font-bold" : "font-semibold"
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
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            ` 
           flex items-center
          ${
            isActive ? "bg-[#D8D8DC] text-[#443dff] font-bold" : "font-semibold"
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
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            ` 
           flex items-center
          ${
            isActive ? "bg-[#D8D8DC] text-[#443dff] font-bold" : "font-semibold"
          }`
          }
          to={"/myPost"}
        >
          <BsPersonFill />
          My Posts
        </NavLink>
      </li>
    </div>,
  ];
  return (
    <div className="">
      <div
        className="navbar 
       fixed bg-white border-b border-gray-200 top-0 z-50 "
      >
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center font-bold gap-2 ">
              <img width="30" height="30" src="/logo.png" alt="logo" />
              <h1 className="">
                <span className="text-blue-800 text-xl">FindIt</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>

        <div className="navbar-end ">
          <div className="relative mr-4 ">
            <ul
              className="dropdown menu mt-3  rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <div className="ml-2 p-2 border-b border-gray-200">
                <p className="font-semibold">{user?.displayName}</p>
              </div>
              {dropDownLink}
            </ul>
          </div>
          {user ? (
            <div>
              {loading ? (
                <span className="loading loading-ring loading-lg"></span>
              ) : (
                <div className="flex gap-4 ">
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={user?.displayName}
                  >
                    <div className="avatar cursor-pointer">
                      <div className="w-12 rounded-full">
                        <button
                          className="cursor-pointer"
                          popoverTarget="popover-1"
                          style={
                            {
                              anchorName: "--anchor-1",
                            } /* as React.CSSProperties */
                          }
                        >
                          <img src={`${user?.photoURL}`} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <Link
                    onClick={handleSignOut}
                    className="flex items-center hover:bg-blue-500 btn rounded-sm bg-[#443dff] text-white mt-1"
                  >
                    Sign out <RxExit />
                  </Link>
                </div>
              )}
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
  );
};

export default Navbar;
