import { react, useState, useEffect } from "react";
import axios from "axios";

const Thailand2DSection = () => {
  const [live, setLive] = useState(null);
  const [result, setResult] = useState([]);
  const cardColor = {
    background:
      "radial-gradient(circle, rgba(43,142,38,0.7030461842940301) 0%, rgba(46,80,52,1) 100%)"
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.thaistock2d.com/live");
        setLive(res.data.live);
        setResult(res.data.result);
      } catch (error) {
        console.error("Error fetching live data:", error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(fetchData);
  }, []);
  return (
    <div>
      {live && (
        <div className="overflow-hidden flex flex-row items-center justify-between rounded-8xs text-center font-mono text-white shadow-sm shadow-white">
          <div
            className="w-[50%] overflow-hidden shrink-0 flex flex-col items-center justify-between box-border text-xl py-5"
            style={cardColor}
          >
            <div className="relative flex items-center justify-between shrink-0">
              Live
            </div>
            <div className="relative flex items-center justify-center shrink-0 font-bold">
              { live.twod }
            </div>
          </div>
          <div
            className="w-[50%] box-border overflow-hidden shrink-0 flex flex-col items-center justify-between border-l-[1px] border-solid border-black text-xl py-5"
            style={cardColor}
          >
            <div className="flex justify-between items-start">
              <div className="relative">Set</div>
              <div className="relative ml-3 font-bold">
                {live.set}
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div className="relative">Value</div>
              <div className="relative ml-3 font-bold">
                {live.value}
              </div>
            </div>
          </div>
        </div>
      )};

      <div className="flex flex-wrap gap-2 justify-between my-2 text-white font-mono">
        {[result[0], result[1]].map((item, idx) =>
          <div
            key={idx}
            className="rounded-8xs w-[48%] py-5 overflow-hidden shrink-0 flex flex-col items-center justify-center box-border shadow-sm shadow-slate-400"
            style={cardColor}
          >
            <div>
            {item?.open_time || "--"}
            </div>
            <div className="relative text-center flex items-center justify-center shrink-0 text-11xl font-bold">
            {item?.twod !== "--" ? item?.twod : "Coming"}
            </div>
          </div>
        )}
        {/* 15:00PM and 16:30PM */}
        {[result[2], result[3]].map((item, idx) =>
        <div
          className="rounded-8xs w-[48%] py-5 overflow-hidden shrink-0 flex flex-col items-center justify-center box-border shadow-sm shadow-slate-400"
          style={cardColor}
        >
          <div>
          {item?.open_time || "--"}
          </div>
          <div className="relative text-center flex items-center justify-center shrink-0 text-11xl font-bold">
          {item?.twod !== "--" ? item?.twod : "Coming"}
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Thailand2DSection;
