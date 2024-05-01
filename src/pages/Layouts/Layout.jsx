import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout () {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const backgroundColor = { background: "linear-gradient(180deg, rgba(65,59,172,1) 0%, rgba(9,121,15,1) 100%, rgba(0,212,255,1) 100%)" };

  return <div className="relative max-w-[744px] pt-16 m-auto overflow-hidden text-left text-black font-inter box-border" style={backgroundColor}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <Outlet />
      <Footer />
    </div>;
};
