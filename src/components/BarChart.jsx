import { React } from "react";

const bars = [
  { hieght: "48px" },
  { hieght: "68px" },
  { hieght: "84px" },
  { hieght: "48px" },
  { hieght: "68px" },
  { hieght: "116px" },
  { hieght: "84px" },
  { hieght: "158px" },
  { hieght: "193px" },
  { hieght: "130px" },
  { hieght: "170px" },
  { hieght: "223px" },
  { hieght: "182px" },
  { hieght: "102px" },
  { hieght: "209px" },
  { hieght: "258px" },
  { hieght: "209px" },
  { hieght: "158px" },
  { hieght: "102px" },
  { hieght: "130px" },
  { hieght: "68px" },
  { hieght: "84px" },
  { hieght: "116px" },
  { hieght: "84px" },
];

export default function BarChart() {
  return (
    <>
      <div className="relative col-span-10 lg:col-span-7 p-3">
        <div className="sm:flex sm:items-center mb-10 w-full">
          <div className="flex justify-between w-full">
            <h1 className="text-base font-bold text-gray-900">
              Top performing Enterprise
            </h1>
            <h1 className="text-xs text-gray-900">
              May 2023
            </h1>

          </div>
        </div>
        <div className="h-full">
          <div className="absolute bottom-2 -left-6 w-8 flex flex-col justify-between text-center">
            {/* Y-axis labels */}
            <span className="text-sm">100</span>
            <span className="text-sm mt-[60px]">75</span>
            <span className="text-sm mt-[71px]">50</span>
            <span className="text-sm mt-[71px]">25</span>
            <span className="text-sm mt-[71px]">0</span>
          </div>
          <div className="relative flex flex-col items-end justify-end h-96 overflow-x-auto">
            <div className="w-full p-1 flex justify-evenly items-end">
              {bars.map((bar, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-awabah-400 to-white w-full mr-2"
                  style={{ height: bar.hieght, minWidth: "21px" }}
                ></div>
              ))}
            </div>

            <div className="absolute w-full grid grid-cols-4 text-sm font-medium text-gray-600 mt-6">
              <div className="text-xs">May 5</div>
              <div className="text-xs text-center">May 12</div>
              <div className="text-xs text-center">May 17</div>
              <div className="text-xs text-right">May 24</div>
            </div>

            <div className="absolute w-full -left-6 flex flex-col justify-between text-center">
              {/* Y-axis labels */}
              <div className="h-1 text-sm border-b border-l-awabah-gray-400"></div>
              <div className="h-1 text-sm border-b border-l-awabah-gray-400 mt-[75px]"></div>
              <div className="h-1 text-sm border-b border-l-awabah-gray-400 mt-[88px]"></div>
              <div className="h-1 text-sm border-b border-l-awabah-gray-400 mt-[80px]"></div>
              <div className="h-1 text-sm  mt-[94px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
