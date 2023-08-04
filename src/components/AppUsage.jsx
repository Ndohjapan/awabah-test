import React from "react";
import GraphRange from "./GraphRange";
import DateBarChart from "./DateBarChart";

export default function AppUsage() {
  return (
    <>
      <div className="relative col-span-2 md:col-span-1">
        <GraphRange data={"App Usage"}/>
        <DateBarChart/>
      </div>
    </>
  );
}
