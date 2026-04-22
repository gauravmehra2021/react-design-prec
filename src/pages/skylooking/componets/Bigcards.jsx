import React from "react";

const Bigcards = () => {
  const data = [
    { day: "Mon", low: 18, high: 20 },
    { day: "Tue", low: 17, high: 22 },
    { day: "Wed", low: 19, high: 24 },
    { day: "Thu", low: 16, high: 21 },
    { day: "Fri", low: 18, high: 23 },
    { day: "Sat", low: 20, high: 26 },
    { day: "Sun", low: 21, high: 27 },
  ];

  return (
    <div className="w-full mt-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#1E1E3A] rounded-2xl pt-4 pb-4 flex flex-col items-center justify-between  gap-5 text-white shadow-md hover:scale-105 transition duration-300"
          >
            {/* Day */}
            <p className="text-sm text-gray-300">{item.day}</p>

            {/* Icon */}
            <div className="my-3">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Temps */}
            <div className="flex gap-5 text-sm">
              <span className="text-gray-300">{item.low}°</span>
              <span className="font-semibold">{item.high}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bigcards;