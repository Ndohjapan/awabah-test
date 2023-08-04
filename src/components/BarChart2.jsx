import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { height: 48, date: "May 1" },
  { height: 68, date: "May 2" },
  { height: 84, date: "May 3" },
  { height: 48, date: "May 4" },
  { height: 68, date: "May 5" },
  { height: 116, date: "May 6" },
  { height: 84, date: "May 7" },
  { height: 158, date: "May 8" },
  { height: 193, date: "May 9" },
  { height: 130, date: "May 10" },
  { height: 170, date: "May 11" },
  { height: 223, date: "May 12" },
  { height: 182, date: "May 13" },
  { height: 102, date: "May 14" },
  { height: 209, date: "May 15" },
  { height: 258, date: "May 16" },
  { height: 209, date: "May 17" },
  { height: 158, date: "May 18" },
  { height: 102, date: "May 19" },
  { height: 130, date: "May 20" },
  { height: 68, date: "May 21" },
  { height: 84, date: "May 22" },
  { height: 116, date: "May 23" },
  { height: 84, date: "May 24" },
];

export default class BarChart2 extends PureComponent {
  // Helper function to format the height data (you can modify this if needed)

  formatPercentage = (value) => {
    const maxUv = 260; // Assuming this is the maximum height value in pixels.
    const percentage = (value / maxUv) * 100;
    return `${percentage.toFixed(0)}`;
  };

  render() {
    const isMobile = window.innerWidth <= 768;
    const xDomain = isMobile ? [4, data.length - 1] : undefined;
    return (
      <>
        <div className="relative col-span-10 lg:col-span-7 p-3">
          <div className="sm:flex sm:items-center mb-10 w-full">
            <div className="flex justify-between w-full">
              <h1 className="text-base font-bold text-gray-900">
                Top performing Enterprise
              </h1>
              <h1 className="text-xs text-gray-900">May 2023</h1>
            </div>
          </div>
          <div className="h-full">
            <div
              className="h-full"
              style={{ width: "100%", overflowX: "scroll" }}
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={data}
                  margin={{ top: 50, right: 30, left: -30, bottom: 5 }}
                  barCategoryGap="90%"
                  barGap="90%"
                >
                  <CartesianGrid strokeDasharray="0" vertical={false} />
                  <XAxis dataKey="date" interval={isMobile ? 7 : 4} />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={this.formatPercentage}
                  />
                  <Tooltip />

                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#49B77F" stopOpacity={1} />{" "}
                      {/* Update the stopColor value */}
                      <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1} />
                    </linearGradient>
                  </defs>

                  {/* Apply the custom gradient */}
                  <Bar
                    dataKey="height"
                    fill="url(#colorUv)" // Use the defined gradient here
                    barSize={25}
                    margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
