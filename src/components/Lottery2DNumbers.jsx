import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FilledRangeBar({ min = 50, max = 5000, value = 1500, label = "01" }) {
  const percentage = (value - min) / (max - min) * 100;

  return (
    <Link
      to="#!"
      className="rounded-md bg-white overflow-hidden flex flex-col justify-center items-center no-underline p-2 shadow"
    >
      <span className="mb-2 text-3xl">
        {label}
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        disabled
        style={{
          background: `linear-gradient(to right, #4ade80 ${percentage}%, #d1d5db ${percentage}%)`
        }}
        className="w-full h-1 rounded-lg appearance-none cursor-default
          [&::-webkit-slider-thumb]:appearance-none
          [&::-moz-range-thumb]:appearance-none"
      />
      <span className="text-sm text-gray-600 mt-1">
        {value}
      </span>
    </Link>
  );
}

function Lottery2DNumbers() {
  const backgroundColor = {
    background:
      "linear-gradient(180deg, rgba(65,59,172,1) 0%, rgba(9,121,15,1) 100%, rgba(0,212,255,1) 100%)"
  };

  const min = 50;
  const max = 5000;
  const [value, setValue] = useState(1500); // Backend-driven value

  return (
    <div className="w-full mb-5">
      <div className="p-2">
        <div className="overflow-hidden shrink-0 grid lg:grid-cols-10 grid-cols-5 gap-1 py-2 px-2 mt-5 mb-3 box-border text-center">
          <FilledRangeBar min={min} max={max} value={value} label="01" />
          <FilledRangeBar min={min} max={max} value={2450} label="02" />
          <FilledRangeBar min={min} max={max} value={3700} label="03" />
          <FilledRangeBar min={min} max={max} value={3700} label="04" />
          <FilledRangeBar min={min} max={max} value={3700} label="05" />
          <FilledRangeBar min={min} max={max} value={3700} label="06" />
          <FilledRangeBar min={min} max={max} value={3700} label="07" />
          <FilledRangeBar min={min} max={max} value={3700} label="08" />
          <FilledRangeBar min={min} max={max} value={3700} label="09" />
          <FilledRangeBar min={min} max={max} value={3700} label="10" />
          <FilledRangeBar min={min} max={max} value={3700} label="11" />
          <FilledRangeBar min={min} max={max} value={3700} label="12" />
          <FilledRangeBar min={min} max={max} value={3700} label="13" />
          <FilledRangeBar min={min} max={max} value={3700} label="14" />
          <FilledRangeBar min={min} max={max} value={3700} label="15" />
          <FilledRangeBar min={min} max={max} value={3700} label="16" />
          <FilledRangeBar min={min} max={max} value={3700} label="17" />
          <FilledRangeBar min={min} max={max} value={3700} label="18" />
          <FilledRangeBar min={min} max={max} value={3700} label="19" />
          <FilledRangeBar min={min} max={max} value={3700} label="20" />
          <FilledRangeBar min={min} max={max} value={3700} label="21" />
          <FilledRangeBar min={min} max={max} value={3700} label="22" />
          <FilledRangeBar min={min} max={max} value={3700} label="23" />
          <FilledRangeBar min={min} max={max} value={3700} label="24" />
          <FilledRangeBar min={min} max={max} value={3700} label="25" />
          <FilledRangeBar min={min} max={max} value={3700} label="26" />
          <FilledRangeBar min={min} max={max} value={3700} label="27" />
          <FilledRangeBar min={min} max={max} value={3700} label="28" />
          <FilledRangeBar min={min} max={max} value={3700} label="29" />
          <FilledRangeBar min={min} max={max} value={3700} label="30" />
        </div>
        <div className="my-5 text-white">
          <div className="flex">
            <span>အရောင်ရှင်းလင်းချက်</span>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded ml-2">
              အမြန်ရွေး
            </button>
          </div>
          <div className="flex flex-wrap">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded m-2">
              150MMK
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded m-2">
              200MMK
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded m-2">
              250MMK
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded m-2">
              300MMK
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded m-2">
              350MMK
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded m-2">
              500MMK
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded m-2">
              1000MMK
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded m-2">
              1500MMK
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded m-2">
              2000MMK
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded m-2">
              2500MMK
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded m-2">
              3000MMK
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded m-2">
              5000MMK
            </button>
          </div>
        </div>
        <div class="text-white p-2">
          <div>
            <label
              class="block text-white text-sm font-bold mb-2"
              for="username"
            >
              ရွေးချယ်ထားသောဂဏန်းများ
            </label>
            <input
              class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[96%]"
              id="username"
              type="text"
              placeholder=""
            />
          </div>
          <div className="my-5">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="username"
            >
              စုစုပေါင်း ထိုးကြေး
            </label>
            <input
              class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[96%]"
              id="username"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-2 rounded ml-2">
            ထိုးမည်
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lottery2DNumbers;
