import React, { useState, useEffect, useRef } from "react";

export default function Register() {
  const [countryCode, setCountryCode] = useState("+33");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handlePhoneChange = e => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 12);
  };

  return <div className="flex flex-col justify-center items-center h-[82vh]">
      <div className="my-5">
        <form>
          <div className="w-80 flex flex-col items-center text-white p-4 rounded-md bg-slate-800">
            {/* Name */}
            <div className="w-full flex flex-col my-2">
              <label htmlFor="name">နာမည်</label>
              <input type="text" id="name" placeholder="username" className="p-2 outline-none rounded-md text-black" />
            </div>

            {/* Phone */}
            <div className="w-full flex flex-col my-2">
              <label htmlFor="phone">ဖုန်းနံပါတ်</label>
              <div className="w-full relative" ref={dropdownRef}>
                <div className="absolute top-1 left-0 flex items-center">
                  <button type="button" className="h-full text-sm flex items-center bg-transparent text-slate-700 focus:outline-none" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <span>
                      {countryCode}
                    </span>
                    <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <div className="h-6 border-l border-slate-200 ml-2" />
                </div>

                <input type="tel" id="phone" className="w-60 overflow-hidden bg-white text-black placeholder:text-slate-400 text-sm border border-slate-200 rounded-md pr-3 pl-16 py-2 focus:outline-none" placeholder="324-456-2323" onInput={handlePhoneChange} />

                {dropdownOpen && <div className="absolute left-0 w-full bg-white border border-slate-200 rounded-md shadow-lg z-10">
                    <ul className="text-sm text-slate-600">
                      {[{ code: "+95", name: "Myanmar" }, { code: "+66", name: "Thailand" }, { code: "+60", name: "Malaysia" }, { code: "+65", name: "Singapore" }].map(
                        item =>
                          <li
                            key={item.code}
                            className="py-2 hover:bg-slate-100 cursor-pointer"
                            onClick={() => {
                              setCountryCode(item.code);
                              setDropdownOpen(false);
                            }}
                          >
                            {item.name} ({item.code})
                          </li>
                      )}
                    </ul>
                  </div>}
              </div>
            </div>

            {/* Email */}
            <div className="w-full flex flex-col my-2">
              <label htmlFor="email">အီးမေးလ်</label>
              <input type="text" id="email" placeholder="jhondoe@gmail.com" className="p-2 outline-none rounded-md text-black" />
            </div>

            {/* Submit */}
            <div className="p-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-2 cursor-pointer rounded ml-2">
                ထိုးမည်
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>;
}
