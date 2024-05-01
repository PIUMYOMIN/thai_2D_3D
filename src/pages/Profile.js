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
    <div className="relative self-stretch h-[961.7px] overflow-hidden shrink-0 flex flex-col items-center justify-between">
        <div className="relative flex flex-col justify-between items-center rounded-t-none rounded-b-31xl w-[744px] h-[372px] overflow-hidden shrink-0 mix-blend-normal text-white py-3 shadow-sm shadow-slate-200" style={cardColor}>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center rounded-full bg-white w-[161px] h-[157px] overflow-hidden">
              <img className="w-[183px] h-[157px] object-cover" alt="user_profile" src={profile} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2>Aung Myint Thu</h2>
              <small>Premium account</small>
            </div>
          </div>
          <div className="absolute top-[274.7px] left-[27px] w-[654px] overflow-hidden flex flex-row items-center justify-between py-0 px-[51px] box-border">
            <div className="relative w-[258px] h-[68px] overflow-hidden shrink-0">
              <div className="flex flex-row items-center gap-1 justify-center">
                <h2>
                  <b>120000 </b>
                </h2>
                <span className="mt-2">Balance (ks)</span>
              </div>
            </div>
            <div className="relative w-[258px] h-[68px] overflow-hidden shrink-0">
              <div className="flex flex-row items-center gap-1 justify-center">
                <h2>
                  <b>30000 </b>
                </h2>
                <span className="mt-2">Margin (ks)</span>
              </div>
            </div>
          </div>
          <div className="absolute top-[273.2px] left-[354.5px] box-border w-px h-[70px] border-r-[1px] border-solid border-silver" />
        </div>
        <div className="relative w-[744px] h-[626px] overflow-hidden shrink-0 text-left text-white">
          <div className="absolute top-[43.7px] left-[55px] w-[396px] overflow-hidden flex flex-row items-start justify-start py-[3px] px-[7px] box-border gap-[10px]">
            <FaPhoneAlt className="relative w-[42px] h-[41px] overflow-hidden shrink-0" />
            <div className="overflow-hidden shrink-0 flex flex-col items-center justify-start py-[3px] box-border gap-[10px]">
              <div className="relative flex items-center w-[172px]">
                Mobile Number
              </div>
              <div className="relative flex items-center w-[166px] h-5 shrink-0">
                09-845184547
              </div>
            </div>
          </div>
          <div className="absolute top-[139.7px] left-[55px] w-[396px] overflow-hidden flex flex-row items-start justify-start py-[3px] px-[7px] box-border gap-[10px]">
            <FaEnvelope className="relative w-[42px] h-[41px] overflow-hidden shrink-0" />
            <div className="w-[172px] h-16 overflow-hidden shrink-0 flex flex-col items-center justify-start py-[3px] px-0 box-border gap-[10px]">
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
