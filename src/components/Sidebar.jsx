// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import {
  FaListOl,
  FaSun,
  FaList,
  FaPiggyBank,
  FaKey,
  FaTag,
  FaQuestion,
  FaRegTimesCircle,
  FaDownload,
  FaSignOutAlt,
  FaHome,
  FaUser
} from "react-icons/fa";
import Profile from "../assets/profile.jpg";

function Sidebar({ isSidebarOpen, closeSidebar }) {
  const cardColor = {
    background:
      "radial-gradient(circle, rgba(43,142,38,0.7030461842940301) 0%, rgba(46,80,52,1) 100%)"
  };
  return (
    <div
      className={`absolute bg-dark text-white w-64 h-[85%] p-4 z-10 transition-all duration-300 top-16 rounded-r-lg ${isSidebarOpen
        ? "left-0"
        : "left-[-100%]"}`}
    >
      <div className="relative">
        <div className="flex flex-col gap-2">
          <div className="py-2 px-4 text-slate-300 flex flex-col justify-center items-center overflow-hidden rounded-full">
            <div className="w-24 h-24 rounded-full flex justify-center items-center overflow-hidden border-2 border-white ">
              <img
                src={Profile}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h2>Aung Khaing</h2>
            <a href="/profile" className="text-blue-300">
              Edit
            </a>
          </div>
          <Link
            to="/thai_2D_3D"
            className="flex flex-row items-center py-1 px-4 rounded text-slate-300 hover:bg-gray-800 no-underline"
            style={cardColor}
          >
            <FaHome />
            <span className="mt-1 ml-2">Home</span>
          </Link>
          <Link
            to="#!"
            className="flex flex-row items-center py-1 px-4 rounded text-slate-300 hover:bg-gray-800 no-underline"
            style={cardColor}
          >
            <FaSun />
            <span className="mt-1 ml-2">Winners</span>
          </Link>
          <Link
            to="/history"
            className="flex flex-row items-center py-1 px-4 rounded text-slate-300 hover:bg-gray-800 no-underline"
            style={cardColor}
          >
            <FaListOl />
            <span className="mt-1 ml-2">2D History</span>
          </Link>
          <Link
            to="#!"
            className="flex flex-row items-center py-1 px-4 rounded text-slate-300 hover:bg-gray-800 no-underline"
            style={cardColor}
          >
            <FaList />
            <span className="mt-1 ml-2">Morning Result</span>
          </Link>
          <Link
            to="#!"
            className="flex flex-row items-center py-1 px-4 rounded text-slate-300 hover:bg-gray-800 no-underline"
            style={cardColor}
          >
            <FaList />
            <span className="mt-1 ml-2">Evening Result</span>
          </Link>
          <Link
            to="#!"
            className="flex flex-row items-center py-1 px-4 rounded text-slate-300 hover:bg-gray-800 no-underline"
            style={cardColor}
          >
            <FaPiggyBank />
            <span className="mt-1 ml-2">Bank Account</span>
          </Link>
          <Link
            to="#!"
            className="flex flex-row items-center py-1 px-4 rounded text-slate-300 hover:bg-gray-800 no-underline"
            style={cardColor}
          >
            <FaKey />
            <span className="mt-1 ml-2">Password</span>
          </Link>
          <Link
            to="#!"
            className="flex flex-row items-center py-1 px-4 rounded text-slate-300 hover:bg-gray-800 no-underline"
            style={cardColor}
          >
            <FaTag />
            <span className="mt-1 ml-2">Promo Code</span>
          </Link>
          <Link
            to="/register"
            className="flex flex-row items-center py-1 px-4 rounded text-slate-300 hover:bg-gray-800 no-underline"
            style={cardColor}
          >
            <FaUser />
            <span className="mt-1 ml-2">Register</span>
          </Link>
          <Link
            to="#!"
            className="flex flex-row items-center py-1 px-4 rounded text-slate-300 bg-slate-900 hover:bg-gray-800 no-underline"
          >
            <FaQuestion />
            <span className="mt-1 ml-2">အကြံပြုရန်</span>
          </Link>
          <Link
            to="#!"
            className="flex flex-row items-center py-1 px-4 rounded text-slate-300 bg-slate-900 hover:bg-gray-800 no-underline"
          >
            <FaDownload />
            <span className="mt-1 ml-2">ဗားရှင်း - 1.0.0</span>
          </Link>
          <Link
            to="#!"
            className="flex flex-row items-center py-1 px-4 rounded text-slate-300 bg-slate-900 hover:bg-gray-800 no-underline"
          >
            <FaSignOutAlt />
            <span className="mt-1 ml-2">အကောင့်ထွက်ရန်</span>
          </Link>
        </div>
        <div>
          <button
            className={`absolute flex justify-center items-center w-6 h-6 rounded-full text-black top-[-20px] right-[-20px] cursor-pointer`}
            onClick={closeSidebar}
          >
            <FaRegTimesCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
