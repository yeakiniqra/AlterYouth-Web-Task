'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import leaderboard from '@/data/leaderboard.json';
import { FiArrowRight } from 'react-icons/fi';

const Community = () => {
    const [visibleCards, setVisibleCards] = useState(6);

    const handleSeeMore = () => {
        setVisibleCards((prev) => prev + 6);
    };

    return (
        <section className="py-12 px-3 max-w-6xl mx-auto">
          
            <div className="text-center mb-10">
                <span className="text-emerald-500 text-center text-lg font-medium mb-4">#alteryouthrevolution</span>
                <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-black">
                    The Scholarship Community
                </h2>
                <p className="text-black max-w-xl mx-auto text-sm">
                    Despite public primary schools being free of cost in Bangladesh, many students still drop out of school to work and earn in order to support their families. Your scholarship helps a child attend school and support their families at the same time.
                </p>
            </div>

            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {leaderboard.slice(0, visibleCards).map((entry, index) => (
                    <div key={index} className="bg-white shadow-md rounded-md p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-black text-sm">@{entry.invite_code}</span>
                                <span className="text-xs">{entry.country_code}</span>
                            </div>
                            <span className="text-xs text-gray-500">Joined today</span>
                        </div>
                        <div className="mt-2">
                            <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full font-medium">
                                {entry.count} Scholarship{entry.count > 1 ? 's' : ''}
                            </span>
                        </div>
                        <div className="flex items-center gap-4 mt-3">
                            <Image
                                src={entry.student_imgs[0]}
                                alt={`Student image 1`}
                                width={48}
                                height={48}
                                className="rounded-full object-cover"
                            />
                            <div className="text-sm">
                                <p className="font-semibold text-black">{entry.name}</p>
                                <p className="text-gray-500 text-xs">XYZ Primary School</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        
            {visibleCards < leaderboard.length && (
                <div className="text-center mt-6">
                    <button
                        onClick={handleSeeMore}
                        className="px-4 py-2 text-green-400 rounded hover:text-green-500 font-semibold"
                    >
                        See more
                    </button>
                </div>
            )}

           
            <div className="text-center mt-8 sm:hidden">
                <button
                    className="w-full max-w-md px-6 py-4 bg-emerald-500 text-white rounded-full flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors font-medium"
                >
                    Join the community
                    <FiArrowRight />
                </button>
            </div>
        </section>
    );
};

export default Community;
