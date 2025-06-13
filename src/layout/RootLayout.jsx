import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="bg-[#FBFBFE]">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className=" mx-auto min-h-screen  mt-18">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
