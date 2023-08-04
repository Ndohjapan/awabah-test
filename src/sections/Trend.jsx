import React from 'react'
import DoughnutChart from '../components/DoughnutChart'
import TrendBarChart from '../components/TrendBarChart'

export default function Trend() {
  return (
    <>
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-7">
        <div className="grid grid-cols-10 gap-4">
            <TrendBarChart/>
            <DoughnutChart/>
        </div>
      </div>
    </main>
  </>
  )
}
