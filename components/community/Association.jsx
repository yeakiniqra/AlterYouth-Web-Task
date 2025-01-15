import React from 'react'
import SvgGoogle from '@/public/Google'
import Image from 'next/image'

export default function Association() {
  return (
    <section className="py-8 px-2 max-w-5xl mx-auto">
      <h2 className="text-lg md:text-lg font-semibold text-center mb-8 text-black">
        In Association With
      </h2>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
        {/* UNDP */}
        <div className="flex flex-row items-center text-center border-b md:border-r md:border-b-0 border-gray-300 pb-4 md:pb-0 md:pr-6">
          <div className="relative h-16 w-16 md:h-20 md:w-20 mr-4">
            <Image
              src="/images/undp.jpg"
              alt="UNDP Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-semibold text-gray-800 text-left text-sm">
            "Asia Pacific<br />
            SDG Enterprise Award"
          </p>
        </div>

        {/* Expo Live */}
        <div className="flex flex-col items-center text-center border-b md:border-r md:border-b-0 border-gray-300 pb-4 md:pb-0 md:pr-6">
          <div className="relative h-16 w-16 md:h-20 md:w-20 mb-2">
            <Image
              src="/images/expo.png"
              alt="Expo Live Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Google */}
        <div className="flex flex-col items-center text-center">
          <div className="relative h-16 w-full mb-2 flex items-center justify-center">
            <SvgGoogle className="w-24 h-auto" />
          </div>
          <p className="font-semibold text-gray-800 text-sm">
            Winner of Google Business Group Stories
          </p>
        </div>
      </div>
    </section>
  )
}
