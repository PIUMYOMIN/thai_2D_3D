import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowUp,
  FaArrowDown,
  FaWallet,
  FaHistory,
  FaCreditCard
} from "react-icons/fa";

function Wallet() {
  return <div className="w-full box-border self-stretch text-white">
      <div className="flex justify-center items-end">
        <p className="text-23xl">
          12000.00 <sub>
            <small className="text-xl">Balance (ks)</small>
          </sub>
        </p>
      </div>
      <div className="flex items-center justify-between px-2 py-4 rounded-b-3xl shadow-md shadow-slate-700">
        <Link to="/deposite" className="overflow-hidden flex flex-col items-center justify-center gap-1 w-20 no-underline text-white">
          <FaArrowDown className="relative w-[36.1px] h-[37px]" />
          <div>ငွေသွင်း</div>
        </Link>
        <Link to="#!" className="overflow-hidden flex flex-col items-center justify-center gap-1 w-20 no-underline text-white">
          <FaArrowUp className="relative w-[36.1px] h-[37px]" />
          <div>ငွေထုတ်</div>
        </Link>
        <Link to="#!" className="overflow-hidden flex flex-col items-center justify-center gap-1 w-20 no-underline text-white">
          <FaCreditCard className="relative w-[36.1px] h-[37px]" />
          <div>ဘဏ်</div>
        </Link>
        <Link to="#!" className="overflow-hidden flex flex-col items-center justify-center gap-1 w-20 no-underline text-white">
          <FaHistory className="relative w-[36.1px] h-[37px]" />
          <div>မှတ်တမ်း</div>
        </Link>
      </div>
      <div className="relative overflow-x-hidden mt-2">
        <table className="table-auto w-full text-sm text-center text-dark">
          <tbody>
            <tr className="bordered border-gray-200 bg-green-200">
              <td className="px-6 py-4">+4000</td>
              <td className="px-6 py-4">2D</td>
              <td className="px-6 py-4">Win</td>
              <td className="px-6 py-4">2-12-2023</td>
            </tr>
            <tr className="bordered border-gray-200 bg-green-200">
              <td className="px-6 py-4">-1000</td>
              <td className="px-6 py-4">2D</td>
              <td className="px-6 py-4">Lose</td>
              <td className="px-6 py-4">3-12-2023</td>
            </tr>
            <tr className="bordered border-gray-200 bg-green-200">
              <td className="px-6 py-4">7000</td>
              <td className="px-6 py-4">3D</td>
              <td className="px-6 py-4  ">Win</td>
              <td className="px-6 py-4">4-12-2023</td>
            </tr>
            <tr className="bordered border-gray-200 bg-green-200">
              <td className="px-6 py-4">-1000</td>
              <td className="px-6 py-4">2D</td>
              <td className="px-6 py-4">Lose</td>
              <td className="px-6 py-4">3-12-2023</td>
            </tr>
            <tr className="bordered border-gray-200 bg-green-200">
              <td className="px-6 py-">7000</td>
              <td className="px-6 py-4">3D</td>
              <td className="px-6 py-4 ">Win</td>
              <td className="px-6 py-4">4-12-2023</td>
            </tr>
            <tr className="bordered border-gray-200 bg-green-200">
              <td className="px-6 py-4">-1000</td>
              <td className="px-6 py-4">2D</td>
              <td className="px-6 py-4">Lose</td>
              <td className="px-6 py-4">3-12-2023</td>
            </tr>
            <tr className="border-b bordered border-gray-200 bg-green-200">
              <td className="px-6 py-4">7000</td>
              <td className="px-6 py-4">3D</td>
              <td className="px-6 py-4 ">Win</td>
              <td className="px-6 py-4">4-12-2023</td>
            </tr>
            <tr className="bordered border-gray-200 bg-green-200">
              <td className="px-6 py-4 font-medium ">-1000</td>
              <td className="px-6 py-4">2D</td>
              <td className="px-6 py-4">Lose</td>
              <td className="px-6 py-4">3-12-2023</td>
            </tr>
            <tr className="bordered border-gray-200 bg-green-200">
              <td className="px-6 py-4">7000</td>
              <td className="px-6 py-4">3D</td>
              <td className="px-6 py-4">Win</td>
              <td className="px-6 py-4">4-12-2023</td>
            </tr>
            <tr className="bordered border-gray-200 bg-green-200">
              <td className="px-6 py-4 font-medium ">-1000</td>
              <td className="px-6 py-4">2D</td>
              <td className="px-6 py-4">Lose</td>
              <td className="px-6 py-4">3-12-2023</td>
            </tr>
            <tr className="bordered border-gray-200 bg-green-200">
              <td className="px-6 py-4">7000</td>
              <td className="px-6 py-4">3D</td>
              <td className="px-6 py-4">Win</td>
              <td className="px-6 py-4">4-12-2023</td>
            </tr>
            <tr className="bordered border-gray-200 bg-green-200">
              <td className="px-6 py-4">-1000</td>
              <td className="px-6 py-4">2D</td>
              <td className="px-6 py-4">Lose</td>
              <td className="px-6 py-4">3-12-2023</td>
            </tr>
            <tr className="bordered border-gray-200 bg-green-200">
              <td className="px-6 py-4">7000</td>
              <td className="px-6 py-4">3D</td>
              <td className="px-6 py-4">Win</td>
              <td className="px-6 py-4">4-12-2023</td>
            </tr>
            <tr className="bordered border-gray-200 bg-green-200">
              <td className="px-6 py-4">7000</td>
              <td className="px-6 py-4">3D</td>
              <td className="px-6 py-4">Win</td>
              <td className="px-6 py-4">4-12-2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>;
}

export default Wallet;
