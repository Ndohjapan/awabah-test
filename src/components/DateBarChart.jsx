import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "M",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "T",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "W",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Th",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "F",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "S",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Su",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class DateBarChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/tiny-bar-chart-35meb";

  // Helper function to format the uv data as a percentage
  formatPercentage = (value) => {
    const maxUv = 4000;
    const percentage = (value / maxUv) * 100;
    return `${percentage.toFixed(0)}`;
  };

  render() {
    return (
      <ResponsiveContainer
        width="100%"
        height={300}
        className="shadow-3xl mt-5"
      >
        <BarChart
          data={data}
          margin={{ top: 50, right: 30, left: -20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="0" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={this.formatPercentage}
          />
          <Tooltip />

          {/* Define the gradient */}
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="53.48%" stopColor="rgba(73, 183, 127, 0.25)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>

          {/* Apply the custom gradient */}
          <Bar
            dataKey="uv"
            fill="url(#colorUv)" // Use the defined gradient here
            barSize={25}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
