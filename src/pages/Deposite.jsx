import React from "react";
import Kpay from "../assets/Kpay.jpeg";
import Wave from "../assets/Wave_pay.png";
import Ayeyar from "../assets/Ayeyar_pay.png";
import CB from "../assets/CB_pay.png";
import Telegram from "../assets/telegram.png";
import Phone from "../assets/phone.png";
import Viber from "../assets/viber.png";

export default function Deposite() {
  return <div className="w-full min-h-screen mt-5 flex justify-center items-start">
      <div className="w-96 p-3 rounded-md bg-slate-800 text-white ">
        <div className="text-center border-b-slate-300">
          ငွေသွင်းရန် ဘဏ်အမျိုးစားရွေးပါ
        </div>
        <div className="flex flex-row justify-center items-center gap-3 my-5">
          <div>
            <img src={Kpay} alt="" className="w-14 rounded-lg" />
          </div>
          <div>
            <img src={Wave} alt="" className="w-14 rounded-lg" />
          </div>
          <div>
            <img src={Ayeyar} alt="" className="w-14 rounded-lg" />
          </div>
          <div>
            <img src={CB} alt="" className="w-14 rounded-lg" />
          </div>
        </div>
        <div className="mt-5 text-left">
          * ဖုန်းဘေလ်ဖြင့်ပေးချေခြင်း လက်မခံပါ။
        </div>
        <div className="my-5">
          <div className="text-center">တိုက်ရိုက်ဆက်သွယ်ရန်</div>
          <div className="flex justify-center items-center gap-2">
            <div>
              <a href="https://t.me/MyYangon" target="_blank" rel="noopener noreferrer">
                <img src={Telegram} alt="Telegram" className="w-8" />
              </a>
            </div>
            <div>
              <a href="tel:09792115547" target="_blank" rel="noopener noreferrer">
                <img src={Phone} alt="Telegram" className="w-8" />
              </a>
            </div>
            <div>
              <a href="viber://chat?number=+959792115547" target="_blank" rel="noopener noreferrer">
                <img src={Viber} alt="Telegram" className="w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
