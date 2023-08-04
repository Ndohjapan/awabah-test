import React from 'react'
import images from "../assets/images.json"

export default function CountryView() {
  return (
    <>
    <div className="relative col-span-10 lg:col-span-7 p-3">
        <div className='h-full flex items-center justify-center'id='country-map' >
        <img src={images.nigeria} alt="Nigerian Image" />
        </div>
    </div>
    
    </>
  )
}