import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Inactive", value: 70 },
  { name: "Lost", value: 200 },
  { name: "Active", value: 400 },
];

const COLORS = ["#49B77F66", "#49B77F40", "#49B77F"];

export default class DoughnutChart extends PureComponent {
  renderCustomizedLabel = ({ cx, cy }) => {
    // Position the larger yellow circle at the center of the PieChart
    return <circle cx={cx} cy={cy} r={20} fill="#F3DD1D" />;
  };

  render() {
    const totalSum = data.reduce((sum, entry) => sum + entry.value, 0);

    const dataWithPercentage = data.map((entry) => ({
      ...entry,
      percentage: ((entry.value / totalSum) * 100).toFixed(2),
    }));

    return (
      <div className="min-h-full w-full bg-gray-50 col-span-10 lg:col-span-3 p-4">
        <div className="sm:flex sm:items-center mb-10 w-full">
          <div className="flex justify-between w-full">
            <h1 className="text-base font-bold text-gray-900">
              Beneficiary count
            </h1>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={dataWithPercentage}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label={this.renderCustomizedLabel}
              labelLine={false} // Set labelLine to false to remove the label lines
            >
              {dataWithPercentage.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              align="center"
              verticalAlign="bottom"
              layout="vertical"
              wrapperStyle={{ padding: "10px" }}
              content={({ payload }) => (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {payload.map((entry, index) => (
                    <li
                      key={`item-${index}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 5,
                      }}
                    >
                      <svg width="12" height="12" style={{ marginRight: 5 }}>
                        <circle cx="6" cy="6" r="5" fill={entry.color} />
                      </svg>
                      <span style={{ color: "black" }}>
                        {entry.payload.name} {entry.payload.percentage}%
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
