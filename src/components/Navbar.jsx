import React, { use, useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import UserContext from "../provider/AuthContext";

const Navbar = () => {
  const { user, userSignOut } = useContext(UserContext);
  const [dropDown, setDropDown] = useState(false);
  const userEmail = user?.email;
  const handleSignOut = () => {
    userSignOut()
      .then((res) => alert("user sign out from navbar"))
      .catch((error) => console.log("error"));
  };
  const link = [
    <div className="flex flex-col gap-4 lg:flex-row">
      <li>
        <NavLink to={"/"}>DashBoard</NavLink>
      </li>
      <li>
        <NavLink to={"/allPosts"}>All Post</NavLink>
      </li>
    </div>,
  ];

  const dropDownLink = [
    <div className="">
      <li>
        <NavLink to={"/addItem"}>Add Post</NavLink>
      </li>
      <li>
        <NavLink to={"/recoveredItems"}>Recovered Items</NavLink>
      </li>
      <li>
        <NavLink to={"/myPost"}>My Posts</NavLink>
      </li>
    </div>,
  ];
  return (
    <div className="">
      <div
        className="navbar 
       fixed bg-[#EEEEF2] top-0 z-50 "
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
              <img
                width="50"
                height="30"
                src="https://img.icons8.com/stickers/100/smartthings-find.png"
                alt="smartthings-find"
              />
              <h1>Here is it</h1>
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
            <div className="flex gap-4 ">
              <div className="avatar cursor-pointer">
                <div className="w-12 rounded-full">
                  <button
                    className="cursor-pointer"
                    popoverTarget="popover-1"
                    style={
                      { anchorName: "--anchor-1" } /* as React.CSSProperties */
                    }
                  >
                    <img src={`${user?.photoURL}`} />
                  </button>
                </div>
              </div>

              <Link
                onClick={handleSignOut}
                className="btn rounded-sm bg-[#443dff] text-white mt-1"
              >
                Sign out
              </Link>
            </div>
          ) : (
            <Link
              to={"/signUp"}
              className="btn rounded-sm bg-[#443dff] text-white mt-1"
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
