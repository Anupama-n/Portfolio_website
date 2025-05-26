import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: '#FFF2F2' }}>      
      {/* Main Content */}
      <div className="flex items-center justify-center px-8 py-16 min-h-[calc(100vh-120px)]">
        <div className="max-w-6xl w-full flex items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <h2 
              className="text-4xl md:text-5xl mb-4" 
              style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
            >
              Introduction
            </h2>
            
            <div 
              className="space-y-8 text-lg leading-relaxed" 
              style={{ fontFamily: "'Inika', serif", color: '#2d2d2d' }}
            >
              <div className="flex items-start">
                
                <p className="pt-2">
                <span 
                  className="text-6xl mr-4 italic leading-none" 
                  style={{ fontFamily: "'Ingrid Darling" }}
                >
                  I
                </span> 
                  'm a final-year Computer Science student at Kathmandu University with a strong interest in UI/UX design and graphic design. I enjoy creating user-centered designs that are both functional and visually engaging. <br /> <br />
                While I've studied web development and worked on personal and academic projects, my true passion lies in designing intuitive interfaces and crafting seamless digital experiences. I'm always exploring new design trends, tools, and ideas to refine my skills and grow as a designer.
              </p>
              </div>  
            </div>
          </div>
          
          {/* Profile Illustration */}
          <div className="flex-shrink-0">
            <div 
              className="w-80 h-96 bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
              style={{
                boxShadow: '0px 0px 20px rgba(137, 137, 137, 0.25)'
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 280 320" className="drop-shadow-lg">
                {/* Body/Blazer */}
                <path d="M90 200 Q90 190 100 190 L180 190 Q190 190 190 200 L200 320 L80 320 Z" fill="#4a5568" />
                
                {/* Shirt/Collar */}
                <path d="M100 190 Q140 200 180 190" stroke="#e2e8f0" strokeWidth="3" fill="none" />
                <rect x="130" y="190" width="20" height="40" fill="#e2e8f0" />
                
                {/* Face */}
                <ellipse cx="140" cy="120" rx="50" ry="55" fill="#fdbcad" />
                
                {/* Hair */}
                <path d="M90 90 Q90 50 140 50 Q190 50 190 90 Q190 65 185 60 Q180 55 175 60 Q170 55 165 60 Q160 55 155 60 Q150 55 145 60 Q140 55 135 60 Q130 55 125 60 Q120 55 115 60 Q110 55 105 60 Q100 55 95 60 Q90 65 90 90" fill="#2d2d2d" />
                <path d="M190 90 Q195 100 200 120 Q205 140 195 160 Q185 150 180 140 Q175 130 185 120 Q190 105 190 90" fill="#2d2d2d" />
                <path d="M85 110 Q80 120 75 140 Q70 160 80 180 Q90 170 95 160 Q100 150 90 140 Q85 125 85 110" fill="#2d2d2d" />
                
                {/* Eyes */}
                <ellipse cx="125" cy="115" rx="3" ry="4" fill="#2d2d2d" />
                <ellipse cx="155" cy="115" rx="3" ry="4" fill="#2d2d2d" />
                
                {/* Nose */}
                <path d="M138 125 Q140 130 142 125" stroke="#e8a696" strokeWidth="1" fill="none" />
                
                {/* Mouth */}
                <path d="M132 135 Q140 140 148 135" stroke="#d4928a" strokeWidth="2" fill="none" strokeLinecap="round" />
                
                {/* Arms */}
                <ellipse cx="70" cy="240" rx="15" ry="40" fill="#fdbcad" />
                <ellipse cx="210" cy="240" rx="15" ry="40" fill="#fdbcad" />
                
                {/* Blazer Arms */}
                <ellipse cx="70" cy="250" rx="18" ry="45" fill="#4a5568" />
                <ellipse cx="210" cy="250" rx="18" ry="45" fill="#4a5568" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
