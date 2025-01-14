'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ScholarshipCard() {
  const [scholarships, setScholarships] = useState(1)
  const maxScholarships = 3
  const scholarshipAmount = 1650

  const handleIncrease = () => {
    if (scholarships < maxScholarships) {
      setScholarships(scholarships + 1)
    }
  }

  const handleDecrease = () => setScholarships(scholarships > 1 ? scholarships - 1 : 1)

  const totalAmount = (scholarships * scholarshipAmount).toLocaleString()

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4 md:mb-6 text-black">
        Join the <span className="text-emerald-500">#alteryouthrevolution</span>
      </h2>
      
      <div className="space-y-3 md:space-y-4">
        <input 
          type="text" 
          placeholder="Your name" 
          className="w-full p-2 md:p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 text-black" 
        />
        
        <input 
          type="email" 
          placeholder="Your email" 
          className="w-full p-2 md:p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 text-black" 
        />
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-2 py-2 md:px-3 md:py-2.5 border border-gray-200 rounded-lg min-w-[70px] md:min-w-[90px]">
            <Image
              src="/images/bd.png"
              alt="Bangladesh flag"
              width={28}
              height={20}
              className="rounded"
            />
            <span className="text-gray-600">+88</span>
          </div>
          <input 
            type="tel" 
            placeholder="Your number" 
            className="flex-1 p-2 md:p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 text-black" 
          />
        </div>

        <div className="space-y-2 md:space-y-3">
          <p className="text-gray-900 font-semibold text-sm">Number of Scholarships</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={handleDecrease}
                className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center ${scholarships > 1 ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600'} rounded-lg hover:bg-emerald-600 transition-colors`}
              >
                -
              </button>
              <span className="w-10 md:w-12 text-center text-black">{scholarships}</span>
              <button 
                onClick={handleIncrease}
                className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center ${scholarships < maxScholarships ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600'} rounded-lg hover:bg-gray-200 transition-colors`}
              >
                +
              </button>
            </div>
            <div className="text-right">
              <span className="text-lg md:text-xl font-bold text-black">BDT {totalAmount}</span>
              <span className="text-gray-900 text-xs md:text-sm font-semibold" >/month</span>
            </div>
          </div>
        </div>

        <button 
          className="w-full py-2 md:py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
        >
          START NOW
        </button>
      </div>
    </div>
  )
}