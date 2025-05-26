import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: '#FFF2F2' }}>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-8 py-16">
        {/* Profile Illustration */}
        <div className="mb-12">
          <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-lg">
            {/* Face */}
            <ellipse cx="100" cy="90" rx="45" ry="50" fill="#fdbcad" />
            
            {/* Hair */}
            <path d="M55 70 Q55 30 100 30 Q145 30 145 70 Q145 45 140 40 Q135 35 130 40 Q125 35 120 40 Q115 35 110 40 Q105 35 100 40 Q95 35 90 40 Q85 35 80 40 Q75 35 70 40 Q65 35 60 40 Q55 45 55 70" fill="#2d2d2d" />
            <path d="M145 70 Q150 80 155 100 Q160 120 150 140 Q140 130 135 120 Q130 110 140 100 Q145 85 145 70" fill="#2d2d2d" />
            
            {/* Eyes */}
            <ellipse cx="85" cy="85" rx="3" ry="4" fill="#2d2d2d" />
            <ellipse cx="115" cy="85" rx="3" ry="4" fill="#2d2d2d" />
            
            {/* Nose */}
            <path d="M98 95 Q100 100 102 95" stroke="#e8a696" strokeWidth="1" fill="none" />
            
            {/* Mouth */}
            <path d="M92 105 Q100 110 108 105" stroke="#d4928a" strokeWidth="2" fill="none" strokeLinecap="round" />
            
            {/* Body/Clothing */}
            <path d="M70 140 Q70 135 80 135 L120 135 Q130 135 130 140 L135 200 L65 200 Z" fill="#b8777d" />
            
            {/* Collar */}
            <path d="M80 135 Q100 145 120 135" stroke="#a66b71" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-light mb-6 text-center" style={{ fontFamily: "'Instrument Serif', serif" , color: '#2d2d2d' }}>
          Hey, I'm Anupama
        </h1>

        {/* Subheading */}
        <div className="flex items-center mb-8">
          <span className="text-6xl mr-2 italic" style={{ fontFamily: "'Ingrid Darling', cursive" }}>E</span>
          <p className="text-xl" style={{ fontFamily: "'Inika', sans-serif", color: '#2d2d2d' }}>
            xploring the sweet spot between design and code.
          </p>
        </div>

        {/* Description */}
        <div className="text-center max-w-2xl leading-relaxed">
          <p className="text-lg mb-2" style={{ fontFamily: "'Instrument Sans', sans-serif", color: '#2d2d2d' }}>
            Final year Computer Science student at Kathmandu University, <br />
            passionate about designing intuitive user experiences and building <br />
            responsive frontends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
