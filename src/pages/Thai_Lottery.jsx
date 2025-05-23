import React, { useState, useEffect } from 'react';

const prizeDetails = {
  first: { 
    title: 'First Prize', 
    amount: '6,000,000 Baht', 
    layout: 'single-row' 
  },
  closest_first: { 
    title: 'Closest First', 
    amount: '100,000 Baht', 
    layout: 'single-row' 
  },
  second: { 
    title: 'Second Prize', 
    amount: '200,000 Baht', 
    layout: 'two-row' 
  },
  third: { 
    title: 'Third Prize', 
    amount: '80,000 Baht', 
    layout: 'two-row' 
  },
  forth: { 
    title: 'Fourth Prize', 
    amount: '40,000 Baht', 
    layout: 'two-row' 
  },
  fifth: { 
    title: 'Fifth Prize', 
    amount: '20,000 Baht', 
    layout: 'two-row' 
  },
  first_three: { 
    title: 'First Three Digits', 
    amount: '4,000 Baht', 
    layout: 'single-row' 
  },
  last_three: { 
    title: 'Last Three Digits', 
    amount: '4,000 Baht', 
    layout: 'single-row' 
  },
  last_two: { 
    title: 'Last Two Digits', 
    amount: '2,000 Baht', 
    layout: 'single-row' 
  }
};

export default function ThaiLotteryResults() {
  const [results, setResults] = useState({ data: null, date: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLotteryResults = async () => {
      try {
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const targetUrl = encodeURIComponent('https://lotto.dumbest.app/api/latest-results');
        const response = await fetch(`${proxyUrl}${targetUrl}`);
        const { contents } = await response.json();
        const { data } = JSON.parse(contents);
        
        const date = Object.keys(data)[0];
        setResults({ date, data: data[date] });
      } catch (error) {
        console.error('Error fetching lottery results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLotteryResults();
  }, []);

  if (loading) return <div className="text-white text-center p-4">Loading...</div>;
  if (!results.data) return <div className="text-white text-center p-4">No results available</div>;

  return (
    <div className="space-y-6 p-4">
      <div className="text-white text-center text-2xl mb-8 font-bold">
        {results.date}
      </div>

      {Object.entries(prizeDetails).map(([key, { title, amount, layout }]) => {
        const prizes = results.data[key];
        if (!prizes || prizes.length === 0) return null;

        return (
          <div key={key} className="relative overflow-x-auto shadow-md sm:rounded-md mb-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th colSpan={2} className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-center">
                    {title}
                  </th>
                </tr>
              </thead>
              <tbody>
                {layout === 'single-row' ? (
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="px-6 py-4 font-medium text-white whitespace-nowrap text-xl bg-gray-50 dark:bg-gray-800 w-1/2">
                      {amount}
                    </th>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 text-red-400 text-2xl text-center">
                      {prizes.join(' ')}
                    </td>
                  </tr>
                ) : (
                  <>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th colSpan={2} className="px-6 py-4 font-medium text-white whitespace-nowrap bg-gray-50 dark:bg-gray-800 text-xl text-center">
                        {amount}
                      </th>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td colSpan={2} className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-red-400 text-2xl text-center">
                          {prizes.map((digit, index) => (
                            <div key={index}>{digit}</div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}