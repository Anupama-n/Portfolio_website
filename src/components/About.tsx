import React from 'react';

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="w-full"
      style={{ backgroundColor: '#FFF2F2' }}
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-8 lg:pt-20">
        {/* Introduction Heading - Outside everything */}
        <div className="text-center lg:text-left mb-3 sm:mb-6 lg:mb-12">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl bg-gradient-to-b from-black to-[#666666] bg-clip-text text-transparent"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
          >
            Introduction
          </h2>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden">
          {/* Outer Container - #FFEDED */}
          <div 
            className="w-full rounded-lg p-3 sm:p-4 mb-4"
            style={{ backgroundColor: '#FFEDED' }}
          >
            {/* Inner Text Box - #FFE4E4 */}
            <div
              className="w-full border-2 rounded-lg p-3 sm:p-4 shadow-sm transition-all duration-300"
              style={{
                backgroundColor: '#FFE4E4',
                borderColor: '#f5c2c2',
                fontFamily: "'Inika', serif",
                color: '#666161',
                boxShadow: '0px 2px 10px rgba(137, 137, 137, 0.15)',
              }}
            >
              <p className="text-xs sm:text-sm leading-snug">
                <span
                  className="text-xl sm:text-2xl mr-1.5 italic leading-none float-left"
                  style={{ fontFamily: "'Ingrid Darling'" }}
                >
                  I
                </span>
                'm passionate about designing digital experiences that feel thoughtful and intuitive. I love simplifying complexity turning ideas into clear, functional interfaces that people enjoy using.
              </p>
              
              <p className="text-xs sm:text-sm leading-snug mt-2">
                I enjoy the entire design process: understanding user needs, sketching ideas, and crafting clean, user-friendly interfaces. I'm always exploring new tools and design trends to grow my perspective.
              </p>
              
              <p className="text-xs sm:text-sm leading-snug mt-2">
                Above all, I solve problems creatively and I'm excited by opportunities where good design can make everyday interactions better.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:block">
          {/* Outer Container - #FFEDED */}
          <div 
            className="w-full rounded-[8px] xl:rounded-[10px] p-8 xl:p-12"
            style={{ backgroundColor: '#FFEDED' }}
          >
            <div className="flex items-center justify-between gap-12 xl:gap-20">
              {/* Inner Text Box - #FFE4E4 */}
              <div className="flex-1">
                <div
                  className="p-10 xl:p-16 rounded-[5px] xl:rounded-[7px] shadow-lg hover:shadow-xl transition-all duration-300 border-2"
                  style={{
                    backgroundColor: '#FFE4E4',
                    borderColor: '#f5c2c2',
                    boxShadow: '0px 4px 20px rgba(137, 137, 137, 0.25)',
                  }}
                >
                  <p
                    className="text-lg xl:text-xl leading-relaxed"
                    style={{
                      fontFamily: "'Inika', serif",
                      color: '#666161',
                      lineHeight: '1.8',
                    }}
                  >
                    <span
                      className="text-6xl xl:text-8xl mr-4 italic leading-none float-left"
                      style={{ fontFamily: "'Ingrid Darling'" }}
                    >
                      I
                    </span>
                    'm passionate about designing digital experiences that are thoughtful, intuitive, and genuinely helpful.<br />
                    What excites me most about UI/UX design is the ability to take complex problems and shape them into simple, beautiful, and functional solutions. I enjoy the entire process from understanding user behavior and needs, to sketching ideas, wireframing flows, and crafting clean, user-friendly interfaces.<br />
                    I believe good design is more than just how it looks it's how it works, feels, and fits into people's lives.
                  </p>
                  <p
                    className="text-lg xl:text-xl leading-relaxed mt-6"
                    style={{
                      fontFamily: "'Inika', serif",
                      color: '#666161',
                      lineHeight: '1.8',
                    }}
                  >
                    I'm always curious and eager to learn whether that's exploring new tools, diving into design trends, or observing how people interact with everyday technology.<br />
                    With every project, I try to bring empathy, clarity, and creativity into the work I do. I'm excited by opportunities where design can make small everyday moments smoother, smarter, and more delightful.
                  </p>
                </div>
              </div>

              {/* Profile Image - Desktop */}
              <div
                className="flex-shrink-0 relative hover:scale-105 transition-transform duration-300"
                style={{ width: '320px', height: '480px' }}
              >
                {/* Profile Image inside the frame */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="relative z-50 w-full h-full flex items-center justify-center">
                    {/* Border wrapper */}
                    <div
                      className="rounded-xl border-2 border-[#f5c2c2] p-6"
                      style={{
                        width: '94%',
                        height: '94%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {/* Actual image */}
                      <img
                        src="/images/About.jpg?height=400&width=280&text=Profile+Photo"
                        alt="Profile illustration"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator for Desktop */}
        <div className="hidden lg:flex justify-center mt-12 xl:mt-16 pb-20"></div>

        {/* Scroll Indicator for Mobile */}
        <div className="flex lg:hidden justify-center mt-3 pb-6">
          <button
            onClick={() => {
              const skillsSection = document.getElementById('projects');
              if (skillsSection) {
                skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"
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
  );
};

function App() {
  return <About />;
}

export default App;
