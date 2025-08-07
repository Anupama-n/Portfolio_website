import React from 'react';

const About: React.FC = () => {
  return (
    
    <div
      id="about"
      className="w-full"
      style={{ backgroundColor: '#FFF2F2' }}
    >
      <div>


      </div>
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20">
        
         {/* Introduction Heading - Outside everything */}
        <div className="text-center lg:text-left mb-8 lg:mb-12">
          <div>

          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-b from-black to-[#666666] bg-clip-text text-transparent"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
          >
            Introduction
          </h2>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden">
          {/* Outer Container - #FFEDED */}
          <div 
            className="w-full rounded-[10px] p-6 sm:p-8 mb-8"
            style={{ backgroundColor: '#FFEDED' }}
          >
            {/* Inner Text Box - #FFE4E4 */}
            <div
              className="w-full border-2 rounded-[10px] sm:rounded-[10px] p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
              style={{
                backgroundColor: '#FFE4E4',
                borderColor: '#f5c2c2',
                fontFamily: "'Inika', serif",
                color: '#666161',
                boxShadow: '0px 4px 20px rgba(137, 137, 137, 0.25)',
              }}
            >
              <div className="flex items-start">
                <p className="pt-1 text-left text-sm sm:text-base leading-relaxed">
                  <span
                    className="text-3xl sm:text-4xl mr-2 italic leading-none float-left"
                    style={{ fontFamily: "'Ingrid Darling'" }}
                  >
                    I
                  </span>
                  ’m passionate about designing digital experiences that feel thoughtful, intuitive, and genuinely useful. What draws me to UI/UX design is the ability to simplify complexity turning ideas into clear, functional, and visually engaging interfaces that people enjoy using.

Over time, I’ve worked on a variety of design projects, from personal explorations to real-world applications, where I’ve learned how important it is to balance aesthetics with usability. I love the process of understanding user needs, sketching out ideas, building wireframes, and refining details to create designs that not only look good but also make sense.

I’m always exploring new tools, design trends, and ways of thinking to grow my perspective. Whether it's experimenting with layout systems, learning from great product design, or simply observing how people interact with technology, I try to bring intention and empathy into everything I design.

Above all, I enjoy solving problems creatively and I’m excited by opportunities where good design can make everyday interactions a little bit better.

                </p>
              </div>
            </div>

            {/* Profile Image - Mobile */}
            <div className="hidden">
              <div
                className="relative hover:scale-105 transition-transform duration-300"
                style={{ width: '280px', height: '420px' }}
              >
                {/* Border / Frame Image */}
                <img
                  src="/images/Rectangle 3.png"
                  alt="Decorative border"
                  className="absolute top-8 left-0 w-full h-full object-cover z-20 pointer-events-none rounded-3xl opacity-20"
                />
                {/* Profile Image inside the frame */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src="/images/About.jpg"
                    alt="Profile illustration"
                    className="w-[90%] h-[90%] object-cover rounded-3xl"
                  />
                </div>
              </div>
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
  ’m passionate about designing digital experiences that are thoughtful, intuitive, and genuinely helpful.<br />
  What excites me most about UI/UX design is the ability to take complex problems and shape them into simple, beautiful, and functional solutions. I enjoy the entire process from understanding user behavior and needs, to sketching ideas, wireframing flows, and crafting clean, user-friendly interfaces.<br />
  I believe good design is more than just how it looks it’s how it works, feels, and fits into people’s lives.
</p>

<p
  className="text-lg xl:text-xl leading-relaxed mt-6"
  style={{
    fontFamily: "'Inika', serif",
    color: '#666161',
    lineHeight: '1.8',
  }}
>
  I’m always curious and eager to learn whether that’s exploring new tools, diving into design trends, or observing how people interact with everyday technology.<br />
  With every project, I try to bring empathy, clarity, and creativity into the work I do. I’m excited by opportunities where design can make small everyday moments smoother, smarter, and more delightful.
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
                  <div
  className="relative z-50 w-full h-full flex items-center justify-center"
>
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
      src="/images/About.jpg"
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
        <div className="hidden lg:flex justify-center mt-12 xl:mt-16 pb-20">
          
        </div>

        {/* Scroll Indicator for Mobile */}
        <div className="flex lg:hidden justify-center mt-6 pb-20">
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
              fontSize: '14px',
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