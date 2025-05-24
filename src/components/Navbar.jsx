import React from "react";
import { Link } from "react-router-dom";
import { FaAlignLeft, FaHome, FaSyncAlt } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";

const Navbar = ({ toggleSidebar }) => {
  const cardColor = {
    background:
      "linear-gradient(0deg, rgb(61,63,162) 0%, rgba(9,121,15,1) 100%)"
  };

  return (
    <div
      className="sticky top-0 w-full z-50 shadow-md text-white"
      style={cardColor}
    >
      <div className="max-w-[744px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* <FaAlignLeft className="cursor-pointer w-7 h-7" onClick={toggleSidebar} /> */}
        <FaHome className="w-7 h-7" />
        <div className="text-xl font-bold">Lucky Day</div>
        <Link to="/thai_2D_3D">
          <FaRotate className="cursor-pointer w-7 h-7 text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
