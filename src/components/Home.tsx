import React from 'react';

const Home: React.FC = () => {
  return (
    <div id='home' className="w-full min-h-screen" style={{ backgroundColor: '#FFF2F2' }}>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-2 sm:px-6 md:px-8 py-10 sm:py-20 md:py-24">

        {/* Profile Illustration replaced with Image */}
        <div className="mb-4 sm:mb-10 md:mb-12">
          <img
            src="/images/Home.jpg"
            alt="Profile Illustration"
            className="w-[120px] h-[180px] sm:w-[180px] sm:h-[270px] md:w-[200px] md:h-[300px] object-cover rounded-[15px] sm:rounded-[25px] md:rounded-[30px] transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* Text Block with marginTop to move downward 5px */}
        <div className="flex flex-col items-center text-center" style={{ marginTop: 5 }}>
          {/* Main Heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light bg-gradient-to-r from-black to-[#666666] text-transparent bg-clip-text mb-3 sm:mb-5 md:mb-6 leading-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Hey I'm Anupama
          </h1>

          {/* Subheading */}
          <div className="flex flex-row items-center justify-center mb-3 sm:mb-5 md:mb-6 px-2">
            <span
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl italic leading-none mr-1 sm:mr-3"
              style={{
                fontFamily: "'Ingrid Darling', cursive",
                color: 'rgba(0, 0, 0, 0.6)',
                letterSpacing: '-0.05em',
              }}
            >
              E
            </span>

            <p
              className="text-base sm:text-xl md:text-2xl font-normal m-0 leading-relaxed"
              style={{
                fontFamily: "'Inika', serif",
                color: 'rgba(0, 0, 0, 0.6)',
                letterSpacing: '-0.05em',
              }}
            >
              xploring the sweet spot between design and code.
            </p>
          </div>

          {/* Description */}
          <div className="text-center max-w-xs sm:max-w-lg md:max-w-2xl leading-relaxed px-2">
            <p
              className="text-sm sm:text-lg md:text-xl mb-0 leading-relaxed"
              style={{ fontFamily: "'Instrument Sans', sans-serif", color: 'rgba(0, 0, 0, 0.6)' }}
            >
              Combining a love for thoughtful design with technical skills to build{' '}
              <span className="hidden sm:inline"><br /></span>
              engaging and responsive user interfaces.
              <span className="hidden md:inline"><br /></span>
            </p>
          </div>

          {/* Optional Call-to-Action Button for better mobile UX */}
          <div className="mt-6 sm:mt-10 md:mt-12">
            <button
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="px-4 py-2 sm:px-8 sm:py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95 text-[12px] sm:text-base md:text-lg"
              style={{
                backgroundColor: '#423E3E',
                color: '#FFF2F2',
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Learn More About Me
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
