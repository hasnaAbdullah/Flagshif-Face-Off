import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
function MainLayout() {
  return (
    <div className="max-w-[1480px]  mx-auto">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-117px)]  bg-amber-600 py-10">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
