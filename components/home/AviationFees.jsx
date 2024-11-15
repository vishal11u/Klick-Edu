import React from "react";

const AviationFees = () => {
  const feeData = [
    {
      level: "UG",
      minPrivate: "60.00 k",
      minGovernment: "-",
      maxPrivate: "13.50 Lakhs",
      maxGovernment: "3.30 Lakhs",
    },
    {
      level: "PG",
      minPrivate: "30.00k",
      minGovernment: "-",
      maxPrivate: "16.51 Lakhs",
      maxGovernment: "6.50 Lakhs",
    },
    {
      level: "Doctoral",
      minPrivate: "6.65 Lakh",
      minGovernment: "-",
      maxPrivate: "6.65 Lakhs",
      maxGovernment: "-",
    },
    {
      level: "Diploma",
      minPrivate: "10.00k",
      minGovernment: "-",
      maxPrivate: "1.37 Lakhs",
      maxGovernment: "-",
    },
  ];

  return (
    <div className="bg-gray-50 lg:-mt-3 py-3">
      <div className="max-w-4xl my-5 mx-auto p-6">
        <div className="mb-2">
          <span className="text-pink-500 text-sm">Courses Fee</span>
        </div>

        <h2 className="text-2xl font-bold text-navy-900 mb-2">
          Aviation Course Fees
        </h2>

        <p className="text-gray-500 text-sm mb-8">
          The fees for aviation courses can vary significantly depending on the
          type of course, duration, location, and institution
        </p>

        <div className="mb-6">
          <div className="flex items-center space-x-3">
            <button className="text-black border-b-4 font-semibold border-pink-500 pb- px-2">
              India
            </button>
            <button className="text-gray-500 pb-2 font-semibold px-4">
              Abroad
            </button>
          </div>
        </div>

        <div className="overflow-x-auto border-t p-2 overflow-hidden rounded-xl shadow-xl">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="text-left py-6 px-4 w-1/5"></th>
                <th colSpan={2} className="text-center py-4 px-4">
                  <div className="text-gray-800">Minimum Fees</div>
                  <div className="flex justify-around mt-3">
                    <span className="text-gray-500 text-sm">Private</span>
                    <span className="text-gray-500 text-sm -mr-12">
                      Government
                    </span>
                  </div>
                </th>
                <th colSpan={2} className="text-center py-4 px-4">
                  <div className="text-gray-800">Maximum Fees</div>
                  <div className="flex justify-around mt-3">
                    <span className="text-gray-500 text-sm">Private</span>
                    <span className="text-gray-500 text-sm">Government</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((row, index) => (
                <tr
                  key={row.level}
                  className={` ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  <td className="py-7 px-6 font-semibold text-right border-r-2 border-dashed">
                    {row.level}
                  </td>
                  <td className="py-7 px-6 text-center font-semibold">
                    {row.minPrivate}
                  </td>
                  <td className="py-7 px-8 text-center font-semibold text-gray-500 border-r-2 border-dashed">
                    {row.minGovernment}
                  </td>
                  <td className="py-7 px-6 text-center text-gray-500 font-semibold">
                    {row.maxPrivate}
                  </td>
                  <td className="py-7 px-6 text-center text-gray-500 font-semibold">
                    {row.maxGovernment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AviationFees;
