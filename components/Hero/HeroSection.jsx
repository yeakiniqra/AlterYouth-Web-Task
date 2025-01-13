import React from 'react';
import ScholarshipCard from './ScholarshipCard';

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Desktop background image */}
      <div
        className="hidden md:block bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/images/hero_pc.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="flex items-center justify-center h-full space-x-8">
            <div className="max-w-lg text-white">
              <h1 className="text-5xl font-bold mb-4">Start your scholarship</h1>
              <p className="text-lg mb-8">Directly for students in Government Primary Schools throughout Bangladesh</p>
            </div>
            <ScholarshipCard />
          </div>
        </div>
      </div>

      {/* Mobile background image */}
      <div
        className="block md:hidden bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/images/hero_home_phone.jpg')" }}
      >
        <div className="flex items-center justify-center h-2/3">
          <div className="text-white text-center max-w-md">
            <h1 className="text-4xl font-bold mb-4">Start your scholarship</h1>
            <p className="text-base mb-8">Directly for students in Government Primary Schools throughout Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Scholarship card for mobile */}
      <div className="block md:hidden px-4 sm:px-6 lg:px-8">
        <ScholarshipCard />
      </div>
    </div>
  );
}