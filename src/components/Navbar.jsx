import React, { use, useContext } from "react";
import { Link, NavLink } from "react-router";
import UserContext from "../provider/AuthContext";

const Navbar = () => {
  const { user, userSignOut } = useContext(UserContext);
  const userEmail = user?.email;
  const handleSignOut = () => {
    userSignOut()
      .then((res) => alert("user sign out"))
      .cath((error) => console.log("error"));
  };
  const link = [
    <div className="flex">
      <li>
        <NavLink to={"/"}>DashBoard</NavLink>
      </li>
      <li>
        <NavLink to={"/allPosts"}>All Post</NavLink>
      </li>
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
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
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
              className="menu lg:flex  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">{userEmail}</a>
        </div>
        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>

        <div className="navbar-end ">
          {user ? (
            <div className="flex gap-4 ">
              <div className="avatar cursor-pointer">
                <div className="w-12 rounded-full">
                  <img src={`${user?.photoURL}`} />
                </div>
              </div>
              <Link onClick={handleSignOut} className="btn">
                SignOut
              </Link>
            </div>
          ) : (
            <Link to={"/signUp"} className="btn">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
