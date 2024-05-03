import React from "react";
import profile from "../assets/img/profile.jpg"
import {
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
const Profile = () => {
  const cardColor = { background: "linear-gradient(180deg, rgba(3,29,3,1) 0%, rgba(16,188,19,1) 100%, rgba(0,0,0,1) 100%)" };
  return (
    <>
    <div className="relative self-stretch overflow-hidden shrink-0 flex flex-col items-center justify-between">
        <div className="relative flex flex-col justify-between items-center rounded-t-none rounded-b-31xl w-full h-[372px] overflow-hidden shrink-0 mix-blend-normal text-white py-3 shadow-sm shadow-slate-200" style={cardColor}>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center rounded-full bg-white w-[161px] h-[157px] overflow-hidden">
              <img className="w-[183px] h-[157px] object-cover" alt="user_profile" src={profile} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2>Aung Khaing</h2>
              <small>Premium account</small>
            </div>
          </div>
          <div className="absolute top-[274.7px] w-full px-10 overflow-hidden flex flex-row items-center justify-between box-border">
            <div className="relative h-[68px] overflow-hidden shrink-0">
              <div className="flex flex-row items-center gap-1 justify-center border-l-2">
                <h2>
                  <b>120000 </b>
                </h2>
                <span className="mt-2">(ks)</span>
              </div>
            </div>
            <div className="relative h-[68px] overflow-hidden shrink-0">
              <div className="flex flex-row items-center gap-1 justify-center">
                <h2>
                  <b>30000 </b>
                </h2>
                <span className="mt-2"> (ks)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-screen mt-5 gap-4 text-white">
          <div className="overflow-hidden flex flex-row items-start justify-start gap-2 px-5">
            <FaPhoneAlt className="relative w-[42px] h-[41px] overflow-hidden shrink-0" />
            <div className="overflow-hidden shrink-0 flex flex-col items-center justify-start">
              <div className="relative flex items-center w-[172px]">
                Mobile Number
              </div>
              <div className="relative flex items-center w-[166px] h-5 shrink-0">
                09-845184547
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start gap-2 px-5">
            <FaEnvelope className="relative w-[42px] h-[41px] overflow-hidden shrink-0" />
            <div className="w-[172px] h-16 overflow-hidden shrink-0 flex flex-col items-center justify-start">
              <div className="relative flex items-center w-[172px]">
                Email
              </div>
              <div className="relative flex items-center w-[166px] h-5 shrink-0">
                useremail@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
};

export default Profile;
