import Image from 'next/image'
import Link from 'next/link'
import SvgDisabledFather from '@/public/DisabledFather'
import SvgSingleMother from '@/public/SingleMother'
import SvgOrphan from '@/public/Orphan'

export default function ScholarshipEligibility() {
    return (
      <section className="py-16 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-xl font-bold mb-4 text-black">
            Scholarship Eligibility
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto">
            Only students who are currently enrolled in Government Primary Schools and fall
            under any of the following criteria are eligible to apply for scholarships
          </p>
        </div>
  
        {/* Eligibility Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Disabled Father Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
            <SvgDisabledFather className="w-12 h-12 text-emerald-500" />
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">Disabled Father</h3>
              <p className="text-gray-800">
                Student's father is physically unable to work
              </p>
            </div>
          </div>
  
          {/* Single Mother Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
            <SvgSingleMother className="w-12 h-12 text-emerald-500" />
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">Single Mother</h3>
              <p className="text-gray-800">
                Student's father is deceased or has abandoned the family
              </p>
            </div>
          </div>
  
          {/* Orphan Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
            <SvgOrphan className="w-12 h-12 text-emerald-500" />
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">Orphan</h3>
              <p className="text-gray-800">
                Both parents are deceased or have abandoned the child
              </p>
            </div>
          </div>
        </div>
  
        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Teacher Card */}
          <div className="relative overflow-hidden rounded-xl aspect-[4/5] group">
            <Image
              src="/images/ht2.jpeg"
              alt="Teacher in classroom"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent p-6 flex flex-col justify-start items-start">
              <h3 className="text-white text-2xl font-bold mb-4">
                Are you a teacher?
                <br />
                Get your students listed on the platform.
              </h3>
              <Link 
                href="#" 
                className="text-white flex items-center gap-2 hover:underline"
              >
                Download the school app
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                </svg>
              </Link>
              <p className="text-white/80 text-sm mt-2">
                Only for Government Primary Schools in Bangladesh
              </p>
            </div>
          </div>
  
          {/* Anywhere Card */}
          <div className="relative overflow-hidden rounded-xl aspect-[4/5] group">
            <Image
              src="/images/person.jpg"
              alt="Professional woman"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent p-6 flex flex-col justify-start items-start">
              <h3 className="text-white text-2xl font-bold mb-4">
                You can be anywhere
                <br />
                in the world
              </h3>
              <Link 
                href="#" 
                className="text-white flex items-center gap-2 hover:underline"
              >
                See all scholarships
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                </svg>
              </Link>
            </div>
          </div>
  
          {/* Student Card */}
          <div className="relative overflow-hidden rounded-xl aspect-[4/5] group">
            <Image
              src="/images/applicant.jpg"
              alt="Student studying"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent p-6 flex flex-col justify-start items-start">
              <h3 className="text-white text-2xl font-bold mb-4">
                While students
                <br />
                get closer to their dreams
              </h3>
              <Link 
                href="#" 
                className="text-white flex items-center gap-2 hover:underline"
              >
                See all graduates
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
  