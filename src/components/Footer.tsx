import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-2 sm:py-4" style={{ backgroundColor: '#FFEDED' }}>
      <div className="max-w-6xl mx-auto px-2 sm:px-4 sm:px-6 lg:px-8">
        <div className="text-center py-2 sm:py-3">
          {/* Designer Credit */}
          <p
            className="text-xs sm:text-base"
            style={{ fontFamily: "'Inika', serif", color: '#2d2d2d', fontWeight: 400 }}
          >
            Designed and developed by
          </p>
          <h3
            className="text-lg sm:text-2xl mt-0.5 sm:mt-1 mb-1 sm:mb-2"
            style={{ fontFamily: "'Instrument Serif', serif", color: '#2d2d2d', fontWeight: 400 }}
          >
            Anupama Neupane
          </h3>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-2 sm:mb-4">
            <div className="h-px flex-1 max-w-10 sm:max-w-16" style={{ backgroundColor: 'rgba(45, 45, 45, 0.2)' }}></div>
            <div
              className="w-1.5 h-1.5 mx-2 sm:w-2 sm:h-2 sm:mx-3 rounded-full"
              style={{ backgroundColor: '#2d2d2d' }}
            ></div>
            <div className="h-px flex-1 max-w-10 sm:max-w-16" style={{ backgroundColor: 'rgba(45, 45, 45, 0.2)' }}></div>
          </div>

          {/* Copyright */}
          <div>
            <p
              className="text-[10px] sm:text-sm opacity-80"
              style={{ fontFamily: "'Inika', serif", color: '#2d2d2d' }}
            >
              © {new Date().getFullYear()} Anupama Neupane. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
