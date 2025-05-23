import React, { useState, useEffect } from "react";

const formatTime = timeStr => {
  const [hours, minutes, seconds] = timeStr.split(":");
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const twelveHour = hour % 12 || 12;
  return `${twelveHour}:${minutes} ${ampm}`;
};

export default function TwoD_Daily_History() {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchDailyResults = async () => {
      try {
        const response = await fetch("https://api.thaistock2d.com/2d_result");
        const data = await response.json();
        setDailyData(data);
      } catch (error) {
        console.error("Error fetching daily results:", error);
      }
    };

    fetchDailyResults();
  }, []);

  return (
    <div>
      {dailyData.map((dateEntry, index) =>
        <div key={index} className="mb-8">
          <div className="relative overflow-x-auto shadow-md sm:rounded-md">
            <div className="text-white text-xl text-center p-4 bg-gray-800">
              {dateEntry.date}
            </div>
            <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-2 bg-gray-50 dark:bg-gray-800"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 bg-gray-50 dark:bg-gray-800"
                  >
                    Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 bg-gray-50 dark:bg-gray-800"
                  >
                    Set
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 bg-gray-50 dark:bg-gray-800"
                  >
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {dateEntry.child.map((entry, childIndex) =>
                  <tr
                    key={childIndex}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    <td className="px-6 py-2 font-medium whitespace-nowrap bg-gray-50 dark:bg-gray-800">
                      {formatTime(entry.time)}
                    </td>
                    <td className="px-6 py-2 bg-gray-50 text-red-400 text-2xl text-center dark:bg-gray-800">
                      {entry.twod}
                    </td>
                    <td className="px-6 py-2 bg-gray-50 dark:bg-gray-800">
                      {entry.set.replace(/,/g, "")}
                    </td>
                    <td className="px-6 py-2 bg-gray-50 dark:bg-gray-800">
                      {entry.value}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
