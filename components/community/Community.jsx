'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

export default function CommunityImpact() {
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 max-w-3xl mx-auto md:mx-0 md:text-left">
        <h2 className="text-xl md:text-4xl font-bold mb-4 text-black">
          Community Impact
        </h2>
        <p className="text-gray-900">
          Every scholarship begins with shipping a mobile phone to the parent of the student. Then they create their own mobile bank account using that phone, to start receiving their child's scholarships directly, every month.
        </p>
      </div>

      {/* Gallery Container */}
      <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>

        {/* Images Grid */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory pb-6 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {[...Array(18)].map((_, i) => (
            <div 
              key={i} 
              className="flex-none w-full h-full md:w-96 md:h-96 aspect-square relative snap-start"
            >
              <Image
                src={`/images/community_${i + 1}.jpg`}
                alt={`Community impact photo ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}