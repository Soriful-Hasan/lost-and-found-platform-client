import React from "react";
import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const RootLayout = () => {
  const { state } = useNavigate();
 
  return (
    <div className="bg-[#FBFBFE] dark:bg-dark-primary-bg">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className=" mx-auto min-h-screen pt-20">
        {state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
