import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto bg-white">
     
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black">
          The Uber for Scholarships
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
          A platform connecting the world with financially struggling students
          in Government Primary Schools of Bangladesh
        </p>

        
        <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
          <a href="#" className="transition-opacity hover:opacity-80">
            <Image
              src="/appstore_small.png"
              alt="Download on App Store"
              width={120}
              height={36}
              className="h-[36px] w-auto md:h-[42px]"
            />
          </a>
          <a href="#" className="transition-opacity hover:opacity-80">
            <Image
              src="/playstore_small.png"
              alt="Get it on Google Play"
              width={120}
              height={36}
              className="h-[36px] w-auto md:h-[42px]"
            />
          </a>
        </div>
      </div>

   
      <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mt-12 md:mt-16 overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory scroll-smooth">
        
        <div className="flex flex-col items-center text-center min-w-[240px] md:min-w-[280px] snap-start">
          <div className="relative w-[240px] md:w-[280px] h-[480px] md:h-[560px] mb-4 md:mb-6">
            <Image
              src="/images/app_scholarship.jpg"
              alt="Transfer directly feature screenshot"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black">Transfer directly</h3>
          <p className="text-gray-600 text-xs md:text-sm">
            Your scholarship is transferred directly to your student's family on their mobile bank account.
          </p>
        </div>

       
        <div className="flex flex-col items-center text-center min-w-[240px] md:min-w-[280px] snap-start">
          <div className="relative w-[240px] md:w-[280px] h-[480px] md:h-[560px] mb-4 md:mb-6">
            <Image
              src="/images/app_school.png"
              alt="School reports feature screenshot"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black">Get school reports</h3>
          <p className="text-gray-600 text-xs md:text-sm">
            View attendance data and report cards from your student's school, until completion of Class 5.
          </p>
        </div>

    
        <div className="flex flex-col items-center text-center min-w-[240px] md:min-w-[280px] snap-start">
          <div className="relative w-[240px] md:w-[280px] h-[480px] md:h-[560px] mb-4 md:mb-6">
            <Image
              src="/images/app_graduation.png"
              alt="Literacy tracking feature screenshot"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black">Ensure a literate citizen</h3>
          <p className="text-gray-600 text-xs md:text-sm">
            Your scholarship continues until completion of class 5, when your student achieves literacy.
          </p>
        </div>
      </div>
    </section>
  );
}