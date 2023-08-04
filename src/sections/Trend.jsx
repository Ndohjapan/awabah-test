import React from 'react'
import DoughnutChart from '../components/DoughnutChart'
import TrendBarChart from '../components/TrendBarChart'

export default function Trend() {
  return (
    <>
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-7">
        <div className="px-8 pl-10 md:px-6 md:pl-14 lg:px-8 lg:pl-16 grid grid-cols-10 gap-4">
            <TrendBarChart/>
            <DoughnutChart/>
        </div>
      </div>
    </main>
  </>
  )
}
