import React, { useState, useEffect } from "react";

const formatDate = dateStr => {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
};

const formatTime = timeStr => {
  const [hours, minutes, seconds] = timeStr.split(":");
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const twelveHour = hour % 12 || 12;
  return `${twelveHour
    .toString()
    .padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;
};

export default function History() {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch("https://api.thaistock2d.com/history");
        const data = await response.json();
        setHistoryData(data);
      } catch (error) {
        console.error("Error fetching history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return <div>
      <h2 className="text-lg font-bold mb-4 text-white text-center">
        Today’s 2D History
      </h2>

      {loading ? <p className="text-white text-center">
            Loading...
          </p> : historyData.length === 0 ? <p className="text-white text-center">
              No data for today
            </p> : <div className="relative overflow-x-auto shadow-md sm:rounded-md">
              <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-2 bg-gray-50 dark:bg-gray-800">
                      Date
                    </th>
                    <th scope="col" className="px-2 py-2 bg-gray-50 dark:bg-gray-800">
                      Time
                    </th>
                    <th scope="col" className="p-2 bg-gray-50 dark:bg-gray-800">
                      Number
                    </th>
                    <th scope="col" className="p-2 bg-gray-50 dark:bg-gray-800">
                      Set
                    </th>
                    <th scope="col" className="p-2 bg-gray-50 dark:bg-gray-800">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {historyData.map(dateEntry =>
                    dateEntry.child.map((entry, index) =>
                      <tr
                        key={index}
                        className="border-b border-gray-200 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="p-2 font-medium text-xs text-gray-100 whitespace-nowrap bg-gray-50 dark:bg-gray-800"
                        >
                          {formatDate(dateEntry.date)}
                        </th>
                        <td className="p-2 bg-gray-50 text-xs dark:bg-gray-800">
                          {formatTime(entry.time)}
                        </td>
                        <td className="p-2 bg-gray-50 text-red-400 text-xl text-center dark:bg-gray-800">
                          {entry.twod}
                        </td>
                        <td className="p-2 bg-gray-50 text-xs dark:bg-gray-800">
                          {entry.set}
                        </td>
                        <td className="p-2 bg-gray-50 text-xs dark:bg-gray-800">
                          {Number(entry.value).toLocaleString("en-US", {
                            minimumFractionDigits: 2
                          })}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>}
    </div>;
}
