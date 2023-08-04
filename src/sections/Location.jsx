import React from 'react'
import StateSelector from '../components/StateSelector'
import CountryView from '../components/CountryView'

export default function Location() {
  return (
    <main>
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-7">
      <div className='px-4 md:px-6 md:pl-6 lg:px-8 lg:pl-16'>
      <h1 className="text-base font-bold text-gray-900 px-3">Beneficiaries by Location</h1>
      <div className="grid grid-cols-10 gap-4">
        <StateSelector/>
        <CountryView/>
      </div>
      </div>
    </div>
  </main>
  )
}