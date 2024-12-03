/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className=" min-h-screen bg-[#F6F6F6]  flex flex-col justify-between font-sans">
      <Navbar />
      <div className=" relative ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
