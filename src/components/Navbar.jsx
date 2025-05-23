import React from "react";
import { Link } from "react-router-dom";
import { FaAlignLeft, FaSyncAlt } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";

const Navbar = ({ toggleSidebar }) => {
  const cardColor = {
    background:
      "linear-gradient(0deg, rgb(61,63,162) 0%, rgba(9,121,15,1) 100%)"
  };

  return (
    <div
      className="m-auto w-full absolute top-0 overflow-hidden flex flex-row items-center justify-between py-4 px-[21px] box-border text-center text-white font-inter shadow-sm"
      style={cardColor}
    >
      <FaAlignLeft
        className="relative cursor-pointer w-7 h-7"
        onClick={toggleSidebar}
      />
      <div className="relative text-xl font-bold">Lucky Day</div>
      <Link to="/thai_2D_3D">
        <FaRotate className="cursor-pointer w-7 h-7 text-white" />
      </Link>
    </div>
  );
};

export default Navbar;
