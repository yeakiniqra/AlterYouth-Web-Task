'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react'
import schools from '@/data/schools.json'

export default function Schools() {
  const [selectedSchool, setSelectedSchool] = useState(null)
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-left mb-12">
        <h2 className="text-xl md:text-xl font-bold mb-4 text-black">
          Students from Government Primary Schools Nationwide
        </h2>
      </div>

      {/* Gallery Container */}
      <div className="relative">
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

        {/* Schools Grid */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-6 -mx-4 px-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {schools.map((school, index) => (
            <div 
              key={index}
              className="flex-none w-[400px] snap-start cursor-pointer"
              onClick={() => setSelectedSchool(school)}
            >
              <div className="relative aspect-[16/10] mb-4">
                <Image
                  src={`/images/school${school.school_img_id}.jpeg`}
                  alt={school.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-medium text-lg mb-2 text-black">{school.name}</h3>
              <div className="flex items-center gap-1 text-emerald-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm text-gray-700">{school.location}, Bangladesh</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSchool && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSchool(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={`/images/school${selectedSchool.school_img_id}.jpeg`}
                alt={selectedSchool.name}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedSchool(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-black">{selectedSchool.name}</h3>
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-block px-2 py-1 text-sm bg-green-100 text-green-600 rounded-full font-semibold">
                  {selectedSchool.total_applicants} Scholarship Applicants
                </span>
              </div>
              <div className="flex items-center gap-1 text-emerald-600 mb-4">
                <MapPin className="w-4 h-4" />
                <span className='text-gray-400'>{selectedSchool.location}, Bangladesh</span>
              </div>

              <p className="text-gray-700 mb-4">
                Established in {selectedSchool.year_established} in {selectedSchool.location}, Bangladesh. It now hosts {selectedSchool.total_students} Students taught by {selectedSchool.total_teachers} Teachers.
              </p>

              <div className="border-t pt-4">
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={`/images/ht${selectedSchool.ht_img_id}.jpeg`}
                      alt={selectedSchool.ht_name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-black">{selectedSchool.ht_name}</h4>
                     <p className="text-gray-900">Class Teacher</p>
                    <p className="text-gray-600 italic mt-4">"{selectedSchool.ht_quote}"</p>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      )}
    </section>
  )
}