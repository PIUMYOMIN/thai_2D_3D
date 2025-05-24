import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
// import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function Layout() {
  // const [isSidebarOpen, setSidebarOpen] = useState(false);
  // const location = useLocation();

  // useEffect(
  //   () => {
  //     setSidebarOpen(false);
  //   },
  //   [location.pathname]
  // );

  // const toggleSidebar = () => {
  //   setSidebarOpen(!isSidebarOpen);
  // };

  // const closeSidebar = () => {
  //   setSidebarOpen(false);
  // };

  const backgroundColor = { background: "linear-gradient(180deg, rgba(65,59,172,1) 0%, rgba(9,121,15,1) 100%, rgba(0,212,255,1) 100%)" };

  return <div className="relative max-w-[744px] mx-auto flex flex-col min-h-screen" style={backgroundColor}>
      <ScrollToTop />
      {/* <Navbar toggleSidebar={toggleSidebar} /> */}
      <Navbar />
      {/* <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} /> */}
      <main className="flex-1 px-2">
        <Outlet />
      </main>
      <Footer />
    </div>;
}
