import React from "react";
import { Link } from "react-router-dom";

const Lottery3D = () => {
  const cardColor = {
    background:
      "radial-gradient(circle, rgba(43,142,38,0.7030461842940301) 0%, rgba(46,80,52,1) 100%)"
  };
  return <div className="flex flex-col justify-center items-center h-[82vh]">
      <div className="lg:w-96 w-80 flex flex-col items-center pl-3 pr-5 py-5 text-white rounded-md bg-slate-800">
        <form className="w-full flex flex-col justify-center items-center">
          <div className="w-full">
            <input type="number" name="" className="w-full py-2 pl-2 text-lg mx-auto my-1 rounded-md focus:outline-none" placeholder="ထိုးမည့် (၃လုံး) ဂဏန်း ထည့်ပါ" />
          </div>
          <div className="w-full">
            <input type="number" name="" className="w-full py-2 pl-2 text-lg mx-auto my-1 rounded-md focus:outline-none" placeholder="အနည်းဆုံး (ကျပ် ၁၀၀)ဖိုးထိုးပါ" />
          </div>
          <div className="text-center">
            <button type="submit" className="text-center px-5 py-1 rounded-lg bg-blue-500 text-white mt-5">
              ထိုးမည်
            </button>
          </div>
          <div className="w-full flex flex-col sm:flex-row justify-between gap-2 mt-2">
            <Link to="/thai_2D_3D" type="button" className="w-full sm:w-1/2 py-3 rounded-md bg-red-600 hover:bg-red-700 transition-colors cursor-pointer no-underline text-center text-white">
              မထိုးတော့ပါ
            </Link>
            <button type="button" className="w-full sm:w-1/2 py-3 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer text-white">
              ငွေချေမည်
            </button>
          </div>
        </form>
      </div>
    </div>;
};

export default Lottery3D;
