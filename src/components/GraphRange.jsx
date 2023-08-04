import React from "react";

const range = [
  { name: "Hour", unit: "H", selected: false },
  { name: "Day", unit: "D", selected: true },
  { name: "Week", unit: "W", selected: false },
  { name: "Month", unit: "M", selected: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// eslint-disable-next-line react/prop-types
export default function GraphRange({ data }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="shadow-3xl min-h-full p-2 px-4 rounded-md">{data}</div>
        <div className="flex justify-around">
          {range.map((each, index) => (
            <button
              key={index}
              className={classNames(
                each.selected
                  ? "bg-awabah-400 text-awabah-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                "ml-3 shadow-3xl group flex items-center px-2 py-2 text-base font-medium rounded-lg"
              )}
            >
              {each.unit}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
