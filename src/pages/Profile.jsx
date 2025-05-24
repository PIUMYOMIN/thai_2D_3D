import React from "react";
import profile from "../assets/img/profile.jpg";
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
  FaUser,
  FaUserCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Profile = () => {
  const cardColor = {
    background:
      "linear-gradient(180deg, rgba(3,29,3,1) 0%, rgba(16,188,19,1) 100%, rgba(0,0,0,1) 100%)"
  };
  return (
    <>
      <div className="relative self-stretch overflow-hidden shrink-0">
        <div className="flex text-white py-3">
          <div className="flex items-center gap-3">
            <div>
              <FaUserCircle className="text-5xl" />
            </div>
            <div className="flex flex-col text-xl">
              <div>Aung Khaing</div>
              <div>09792115547</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to="#!"
            className="flex flex-row items-center py-1 px-4 rounded text-slate-300 bg-slate-900 hover:bg-gray-800 no-underline"
          >
            <FaKey />
            <span className="mt-1 ml-2">လျို့ဝှတ်နံပါတ်ပြောင်းရန်</span>
          </Link>
          <Link
            to="#!"
            className="flex flex-row items-center py-1 px-4 rounded text-slate-300 bg-slate-900 hover:bg-gray-800 no-underline"
          >
            <FaTag />
            <span className="mt-1 ml-2">ပရိုမိုးရှင်း</span>
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
      </div>
    </>
  );
};

export default Profile;
