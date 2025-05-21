import React from 'react'
import { Link } from 'react-router-dom';
import {
  FaWallet,
  FaHistory,
  FaRocketchat,
  FaCalendarAlt,
  FaGlobeAmericas
} from "react-icons/fa";

function personal_actions() {
  const cardColor = {
    background:
      "radial-gradient(circle, rgba(43,142,38,0.7030461842940301) 0%, rgba(46,80,52,1) 100%)"
  };
  return <div className="grid grid-cols-2 gap-2 my-2 box-border text-center">
      <Link to="/wallet" className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400" style={cardColor}>
        <FaWallet className="text-2xl" />
        <div className="relative flex items-center shrink-0">Wallet</div>
      </Link>
      <Link to="history" className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400" style={cardColor}>
        <FaHistory className="text-2xl" />
        <div className="relative flex items-center justify-center shrink-0">
          History
        </div>
      </Link>
      <Link to="#!" className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400" style={cardColor}>
        <FaRocketchat className="text-2xl" />
        <div className="relative flex items-center shrink-0">Chat Box</div>
      </Link>
      <Link to="/2d-lottery" className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400" style={cardColor}>
        <img className="relative" alt="" src="/vector4.svg" />
        <div className="relative flex items-center shrink-0">2D</div>
      </Link>
      <Link to="#!" className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400" style={cardColor}>
        <FaCalendarAlt className="text-2xl" />
        <div className="relative flex items-center shrink-0">Calendar</div>
      </Link>
      <Link to="/3d-lottery" className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400" style={cardColor}>
        <img className="relative" alt="" src="/vector6.svg" />
        <div className="relative flex items-center justify-center shrink-0">
          3D
        </div>
      </Link>
      <Link to="#!" className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400" style={cardColor}>
        <FaGlobeAmericas className="text-2xl" />
        <div className="relative flex items-center shrink-0">
          Thaiwan Lottery
        </div>
      </Link>
      <Link to="#!" className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400" style={cardColor}>
        <FaGlobeAmericas className="text-2xl" />
        <div className="relative flex items-center shrink-0">
          Thai Lottery
        </div>
      </Link>
    </div>;
}

export default personal_actions