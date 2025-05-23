import React from 'react'
import { Link } from 'react-router-dom';
import {
  FaWallet,
  FaHistory,
  FaRocketchat,
  FaCalendarAlt,
  FaGlobeAmericas
} from "react-icons/fa";
import thailand from "../assets/thailand1.png";
import taiwan from "../assets/taiwan.png";

function personal_actions() {
  const cardColor = {
    background:
      "radial-gradient(circle, rgba(43,142,38,0.7030461842940301) 0%, rgba(46,80,52,1) 100%)"
  };
  return (
    <div className="grid grid-cols-2 gap-2 my-2 box-border text-center">
      <Link
        to="/wallet"
        className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400"
        style={cardColor}
      >
        <FaWallet className="text-2xl" />
        <div className="relative flex items-center shrink-0">ပိုက်ဆံအိတ်</div>
      </Link>
      <Link
        to="/2d-history"
        className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400"
        style={cardColor}
      >
        <FaHistory className="text-2xl" />
        <div className="relative flex items-center justify-center shrink-0">
          ယနေ့ 2D
        </div>
      </Link>
      <Link
        to="#!"
        className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400"
        style={cardColor}
      >
        <FaRocketchat className="text-2xl" />
        <div className="relative flex items-center shrink-0">စကားပြောခန်း</div>
      </Link>
      <Link
        to="/2d-lottery"
        className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400"
        style={cardColor}
      >
        <img className="relative" alt="" src="/vector4.svg" />
        <div className="relative flex items-center shrink-0">2D ထိုးမည်</div>
      </Link>
      <Link
        to="#!"
        className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400"
        style={cardColor}
      >
        <FaCalendarAlt className="text-2xl" />
        <div className="relative flex items-center shrink-0">ပြက္ခဒိန်</div>
      </Link>
      <Link
        to="/3d-lottery"
        className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400"
        style={cardColor}
      >
        <img className="relative" alt="" src="/vector6.svg" />
        <div className="relative flex items-center justify-center shrink-0">
          3D ထိုးမည်
        </div>
      </Link>
      <Link
        to="#!"
        className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400"
        style={cardColor}
      >
        <img src={taiwan} alt="" className="w-8" />
        <div className="relative flex items-center shrink-0">
          Thaiwan Lottery
        </div>
      </Link>
      <Link
        to="/thai-lottery"
        className="rounded-8xs overflow-hidden shrink-0 flex flex-row items-center justify-between p-2 box-border w-full no-underline text-white shadow-sm shadow-slate-400"
        style={cardColor}
      >
        <img src={thailand} alt="" className="w-8" />
        <div className="relative flex items-center shrink-0">ထိုင်းထီ</div>
      </Link>
    </div>
  );
}

export default personal_actions