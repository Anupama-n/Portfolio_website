import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Logo Designs');

  const filters = [
    'Logo Designs',
    'Mobile App Designs',
    'Web App Designs',
    'Other Designs',
    'Web Development Projects'
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">      
      {/* Main Content */}
      <div className="px-8 py-16 min-h-[calc(100vh-120px)]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-12">
                My Works
              </h1>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-4">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-3 rounded-full border-2 transition-all ${
                      activeFilter === filter
                        ? 'bg-gray-700 text-white border-gray-700'
                        : 'bg-transparent text-gray-600 border-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Illustration */}
            <div className="flex-shrink-0 ml-16">
              <svg width="300" height="400" viewBox="0 0 300 400" className="drop-shadow-lg">
                {/* Body */}
                <ellipse cx="150" cy="320" rx="60" ry="80" fill="#c084a1" />
                
                {/* Arms */}
                <ellipse cx="90" cy="280" rx="25" ry="50" fill="#fdbcad" />
                <ellipse cx="210" cy="280" rx="25" ry="50" fill="#fdbcad" />
                
                {/* Sleeves */}
                <ellipse cx="90" cy="290" rx="30" ry="45" fill="#c084a1" />
                <ellipse cx="210" cy="290" rx="30" ry="45" fill="#c084a1" />
                
                {/* Head */}
                <ellipse cx="150" cy="160" rx="55" ry="60" fill="#fdbcad" />
                
                {/* Hair */}
                <path d="M95 130 Q95 80 150 80 Q205 80 205 130 Q205 100 200 95 Q195 90 190 95 Q185 90 180 95 Q175 90 170 95 Q165 90 160 95 Q155 90 150 95 Q145 90 140 95 Q135 90 130 95 Q125 90 120 95 Q115 90 110 95 Q105 90 100 95 Q95 100 95 130" fill="#2d2d2d" />
                <path d="M205 130 Q215 140 220 160 Q225 180 215 200 Q205 190 200 180 Q195 170 205 160 Q210 145 205 130" fill="#2d2d2d" />
                <path d="M95 140 Q85 150 80 170 Q75 190 85 210 Q95 200 100 190 Q105 180 95 170 Q90 155 95 140" fill="#2d2d2d" />
                
                {/* Eyes */}
                <ellipse cx="135" cy="155" rx="3" ry="4" fill="#2d2d2d" />
                <ellipse cx="165" cy="155" rx="3" ry="4" fill="#2d2d2d" />
                
                {/* Nose */}
                <path d="M148 165 Q150 170 152 165" stroke="#e8a696" strokeWidth="1" fill="none" />
                
                {/* Mouth */}
                <path d="M142 175 Q150 180 158 175" stroke="#d4928a" strokeWidth="2" fill="none" strokeLinecap="round" />
                
                {/* Gesture - Hand pointing */}
                <ellipse cx="50" cy="250" rx="20" ry="15" fill="#fdbcad" />
                <rect x="30" y="245" width="25" height="8" rx="4" fill="#fdbcad" />
              </svg>
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 - Bhalam News */}
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-6 mb-6">
                <div className="relative">
                  {/* Envelope */}
                  <div className="bg-gray-300 rounded-lg p-4 transform rotate-6">
                    <div className="bg-white rounded p-3">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gray-800 mb-2">भलाम</div>
                        <div className="text-sm text-gray-600">NEWS</div>
                        <div className="border-t border-orange-400 mt-2 pt-1">
                          <div className="flex justify-center space-x-1">
                            <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Envelope flap */}
                    <div className="absolute -top-2 left-2 right-2 h-4 bg-gray-400 rounded-t-lg transform -rotate-12"></div>
                  </div>
                  
                  {/* Postal elements */}
                  <div className="absolute -right-2 -top-2">
                    <div className="w-8 h-6 bg-red-500 opacity-80 rounded-sm transform rotate-12"></div>
                    <div className="w-8 h-6 bg-blue-500 opacity-80 rounded-sm transform rotate-12 -mt-1"></div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">भलाम News</h3>
              <p className="text-gray-600 text-sm">Logo Design for Nepali News Platform</p>
            </div>
            
            {/* Placeholder for more projects */}
            <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                  </svg>
                </div>
                <p>More projects coming soon</p>
              </div>
            </div>
            
            <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                  </svg>
                </div>
                <p>More projects coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;