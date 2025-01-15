'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, X } from 'lucide-react'

export default function Explainer() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Video Thumbnail */}
        <div className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setIsModalOpen(true)}>
          <Image
            src="/images/ay_video_poster.jpg"
            alt="AlterYouth Scholarship App Explainer"
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white translate-x-0.5" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-6 text-black">
            The scholarship app
          </h2>
          <p className="text-md leading-relaxed text-gray-900 font-thin">
            In Bangladesh, while 98% of children enroll in school, 2 million children drop out to work before achieving literacy in order to support their families financially. On the flipside, Bangladesh has a diaspora population of 10 million in advanced economies who wish to make an impact on their homeland. AlterYouth, imagine Uber for scholarships, is a C2C scholarship app enabling users from around the world to start scholarships directly for financially struggling students in Government Primary Schools of Bangladesh, through digital banking.
          </p>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>
            <video
              src="/video/ay_explainer.mp4"
              poster="/images/ay_video_poster.jpg"
              controls
              className="w-full h-full rounded-lg"
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  )
}

