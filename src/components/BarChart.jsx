import { React } from "react";

const bars = [
  { hieght: "28px" },
  { hieght: "40px" },
  { hieght: "49px" },
  { hieght: "28px" },
  { hieght: "40px" },
  { hieght: "68px" },
  { hieght: "49px" },
  { hieght: "92px" },
  { hieght: "112px" },
  { hieght: "76px" },
  { hieght: "99px" },
  { hieght: "130px" },
  { hieght: "106px" },
  { hieght: "60px" },
  { hieght: "122px" },
  { hieght: "151px" },
  { hieght: "122px" },
  { hieght: "92px" },
  { hieght: "60px" },
  { hieght: "76px" },
  { hieght: "40px" },
  { hieght: "49px" },
  { hieght: "68px" },
  { hieght: "49px" },
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
        <div>
          <div className="absolute bottom-2 -left-6 w-8 flex flex-col justify-between text-center">
            {/* Y-axis labels */}
            <span className="text-sm">100</span>
            <span className="text-sm mt-[33px]">75</span>
            <span className="text-sm mt-[33px]">50</span>
            <span className="text-sm mt-[33px]">25</span>
            <span className="text-sm mt-[33px]">0</span>
          </div>
          <div className="relative flex flex-col items-end justify-end h-56 overflow-x-auto">
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
              <div className="h-1 text-sm border-b border-l-awabah-gray-400 mt-12"></div>
              <div className="h-1 text-sm border-b border-l-awabah-gray-400 mt-12"></div>
              <div className="h-1 text-sm border-b border-l-awabah-gray-400 mt-12"></div>
              <div className="h-1 text-sm  mt-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
