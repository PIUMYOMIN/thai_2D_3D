import React from 'react'

export default function 
() {
  return <div>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-md">
          <div className="text-white text-xl text-center">
            <div>2025-05-24</div>
          </div>
          <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-2 bg-gray-50 dark:bg-gray-800">
                  Date
                </th>
                <th scope="col" className="px-6 py-2 bg-gray-50 dark:bg-gray-800">
                  Number
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                  2025-05-24
                </th>
                <td className="px-6 py-2 bg-gray-50 text-red-400 text-2xl text-center">
                  309
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>;
}
