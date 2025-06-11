import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="bg-white">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="w-11/12 mx-auto min-h-screen mt-20 ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
