import React from "react";
import WebUsage from "../components/WebUsage";
import AppUsage from "../components/AppUsage";

export default function Usage() {
  return (
    <>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-7">
            <div className="grid grid-cols-2 gap-4">
              <WebUsage />
              <AppUsage />
            </div>
        </div>
      </main>
    </>
  );
}
