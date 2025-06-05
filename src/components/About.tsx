import React from 'react';

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="w-full"
      style={{ backgroundColor: '#FFF2F2' }}
    >
      {/* Main Content */}
      <div className="flex items-center justify-center px-2 sm:px-4 md:px-8 py-4 sm:py-6 md:py-24 -mt-[94px] sm:mt-0 min-h-screen lg:min-h-auto lg:py-24">


        <div className="max-w-6xl w-full">
          {/* Mobile Layout - Stacked */}
          <div className="flex flex-col lg:hidden items-center justify-start gap-4 sm:gap-6 px-2">
            {/* Text Content - Mobile */}
            <div className="w-full text-center">
              <h2
                className="text-3xl mb-4 sm:text-3xl sm:mb-5 bg-gradient-to-b from-black to-[#666666] bg-clip-text text-transparent"
                style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
              >
                Introduction
              </h2>

              <div
                className="space-y-4 text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "'Inika', serif", color: '#666161' }}
              >
                <div
                  className="flex items-start p-4 sm:p-6 rounded-[30px] sm:rounded-[40px] shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    backgroundColor: '#FFEDED',
                    boxShadow: '0px 4px 20px rgba(137, 137, 137, 0.25)',
                  }}
                >
                  <p className="pt-1 text-left">
                    <span
                      className="text-3xl sm:text-4xl mr-2 italic leading-none float-left"
                      style={{ fontFamily: "'Ingrid Darling'" }}
                    >
                      I
                    </span>
                    'm a final-year Computer Science student at Kathmandu University with a strong
                    interest in UI/UX design and graphic design. I enjoy creating user-centered designs
                    that are both functional and visually engaging. <br /> <br />
                    While I've studied web development and worked on personal and academic projects, my
                    true passion lies in designing intuitive interfaces and crafting seamless digital
                    experiences. I'm always exploring new design trends, tools, and ideas to refine my
                    skills and grow as a designer.
                  </p>
                </div>
              </div>
            </div>
          </div>




          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:flex items-center justify-between gap-16">
            {/* Text Content - Desktop */}
            <div className="flex-1 max-w-3xl">
              <h2
                className="text-4xl xl:text-5xl mb-6"
                style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
              >
                Introduction
              </h2>

              <div
                className="space-y-8 text-lg xl:text-xl leading-relaxed"
                style={{ fontFamily: "'Inika', serif", color: '#666161' }}
              >
                <div
                  className="flex items-start p-10 xl:p-12 rounded-[60px] xl:rounded-[70px] shadow-lg hover:shadow-xl transition-all duration-300 "
                  style={{
                    backgroundColor: '#FFEDED',
                    boxShadow: '0px 4px 20px rgba(137, 137, 137, 0.25)',
                    maxWidth: '900px', // increase max width
                    width: '110%',
                    transform: 'translateX(-15px)',
                  }}
                >
                  <p
                    className="pt-2"
                    style={{
                      fontSize: '20px', // or '1.25rem', '24px', etc.
                      lineHeight: '1.6',
                    }}
                  >
                    <span
                      className="text-5xl xl:text-7xl mr-4 italic leading-none"
                      style={{ fontFamily: "'Ingrid Darling'" }}
                    >
                      I
                    </span>
                    'm a final-year Computer Science student at Kathmandu University with a strong
                    interest in UI/UX design and graphic design. I enjoy creating user-centered designs
                    that are both functional and visually engaging. <br /> <br />
                    While I've studied web development and worked on personal and academic projects, my
                    true passion lies in designing intuitive interfaces and crafting seamless digital
                    experiences. I'm always exploring new design trends, tools, and ideas to refine my
                    skills and grow as a designer.
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Image - Desktop */}
            <div
              className="flex-shrink-0 relative hover:scale-105 transition-transform duration-300"
              style={{ width: '300px', height: '470px' }}
            >
              {/* Border / Frame Image */}
              <img
                src="/images/Rectangle 3.png"
                alt="Decorative border"
                className="absolute top-8 left-0 w-full h-full object-contain z-20 pointer-events-none"
              />
              {/* Profile Image inside the frame */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src="/images/About.jpg"
                  alt="Profile illustration"
                  className="w-[95%] h-[95%] object-contain rounded-3xl -translate-x-[2px] -translate-y-[-24px]"
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator for Desktop */}
          <div className="hidden lg:flex justify-start mt-12 pb-56">
            <button
              onClick={() => {
                const skillsSection = document.getElementById('projects');
                if (skillsSection) {
                  skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"
              style={{
                backgroundColor: '#423E3E',
                color: '#FFF2F2',
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: '16px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              View My Work
            </button>
          </div>

          {/* Scroll Indicator for Mobile */}
<div className="flex lg:hidden justify-center mt-6 sm:mt-8 pb-20">
  <button
    onClick={() => {
      const skillsSection = document.getElementById('projects');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }}
    className="px-5 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"
    style={{
      backgroundColor: '#423E3E',
      color: '#FFF2F2',
      fontFamily: "'Instrument Sans', sans-serif",
      fontSize: '13px',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    View My Work
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default About;