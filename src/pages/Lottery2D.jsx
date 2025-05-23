import { react, useEffect, useState } from "react";
import Lottery2DNumbers from "../components/Lottery2DNumbers";
import axios from "axios";

const Lottery2D = () => {
  const backgroundColor = {
    background:
      "linear-gradient(180deg, rgba(65,59,172,1) 0%, rgba(9,121,15,1) 100%, rgba(0,212,255,1) 100%)"
  };

  const topColor = {
    background:
      "linear-gradient(180deg, rgba(72,31,219,1) 0%, rgba(9,121,15,1) 100%);"
  };

  const [dateTime, setDateTime] = useState(new Date());
  const [live, setLive] = useState(null);
  const [result, setResult] = useState([]);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  const formatDateTime = date => {
    const pad = num => String(num).padStart(2, "0");

    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1); // Months are 0-based
    const year = date.getFullYear();

    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return `${day}/${month}/${year}  ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div
      className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start gap-[4px]"
      style={backgroundColor}
    >
      <div
        className="relative w-full flex flex-col justify-center items-center shadow-md shadow-green-500 text-white"
        style={topColor}
      >
        {live &&
          <h2 className=" text-6xl">
            {live.twod}
          </h2>}
        <div>
          <span className="text-2xl">
            {formatDateTime(dateTime)}
          </span>
        </div>
      </div>
      <Lottery2DNumbers />
    </div>
  );
};

export default Lottery2D;
