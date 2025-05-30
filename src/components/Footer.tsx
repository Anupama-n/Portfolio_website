import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 sm:py-12" style={{ backgroundColor: '#FFEDED' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="p-6 sm:p-8 lg:p-10 text-center">
          {/* Designer Credit */}
          <div className="mb-6 sm:mb-8">
            <p 
              className="text-base sm:text-lg lg:text-xl leading-relaxed" 
              style={{ 
                fontFamily: "'Inika', serif", 
                color: '#2d2d2d',
                fontWeight: 400
              }}
            >
              Designed and developed by
            </p>
            <h3 
              className="text-xl sm:text-2xl lg:text-3xl mt-2 mb-4" 
              style={{ 
                fontFamily: "'Instrument Serif', serif", 
                color: '#2d2d2d',
                fontWeight: 400
              }}
            >
              Anupama Neupane
            </h3>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div 
              className="h-px flex-1 max-w-24 sm:max-w-32"
              style={{ backgroundColor: 'rgba(45, 45, 45, 0.2)' }}
            ></div>
            <div 
              className="w-2 h-2 mx-4 rounded-full"
              style={{ backgroundColor: '#2d2d2d' }}
            ></div>
            <div 
              className="h-px flex-1 max-w-24 sm:max-w-32"
              style={{ backgroundColor: 'rgba(45, 45, 45, 0.2)' }}
            ></div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            {/* Facebook */}
            <a 
              href="#" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 focus:scale-110 focus:outline-none"
              style={{ 
                backgroundColor: '#2d2d2d',
                color: 'white',
                boxShadow: '0 4px 12px rgba(45, 45, 45, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1a1a1a';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(45, 45, 45, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2d2d2d';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 45, 45, 0.2)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            {/* GitHub */}
            <a 
              href="#" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 focus:scale-110 focus:outline-none"
              style={{ 
                backgroundColor: '#2d2d2d',
                color: 'white',
                boxShadow: '0 4px 12px rgba(45, 45, 45, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1a1a1a';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(45, 45, 45, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2d2d2d';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 45, 45, 0.2)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="#" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 focus:scale-110 focus:outline-none"
              style={{ 
                backgroundColor: '#2d2d2d',
                color: 'white',
                boxShadow: '0 4px 12px rgba(45, 45, 45, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1a1a1a';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(45, 45, 45, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2d2d2d';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 45, 45, 0.2)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Email */}
            <a 
              href="mailto:contact@example.com" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 focus:scale-110 focus:outline-none"
              style={{ 
                backgroundColor: '#2d2d2d',
                color: 'white',
                boxShadow: '0 4px 12px rgba(45, 45, 45, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1a1a1a';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(45, 45, 45, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2d2d2d';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 45, 45, 0.2)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.81L12 10.773l9.554-6.952h.81c.904 0 1.636.732 1.636 1.636z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t pt-4 sm:pt-6" style={{ borderColor: 'rgba(45, 45, 45, 0.1)' }}>
            <p 
              className="text-sm sm:text-base opacity-80" 
              style={{ 
                fontFamily: "'Inika', serif", 
                color: '#2d2d2d'
              }}
            >
              © {new Date().getFullYear()} Anupama Neupane. All rights reserved.
            </p>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-3 sm:mt-4">
              <a 
                href="#about" 
                className="text-xs sm:text-sm transition-all hover:scale-105 focus:scale-105 focus:outline-none"
                style={{ 
                  fontFamily: "'Inika', serif", 
                  color: '#2d2d2d',
                  opacity: 0.7
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
              >
                About
              </a>
              <span style={{ color: '#2d2d2d', opacity: 0.3 }}>•</span>
              <a 
                href="#projects" 
                className="text-xs sm:text-sm transition-all hover:scale-105 focus:scale-105 focus:outline-none"
                style={{ 
                  fontFamily: "'Inika', serif", 
                  color: '#2d2d2d',
                  opacity: 0.7
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
              >
                Projects
              </a>
              <span style={{ color: '#2d2d2d', opacity: 0.3 }}>•</span>
              <a 
                href="#contact" 
                className="text-xs sm:text-sm transition-all hover:scale-105 focus:scale-105 focus:outline-none"
                style={{ 
                  fontFamily: "'Inika', serif", 
                  color: '#2d2d2d',
                  opacity: 0.7
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div 
            className="w-16 h-1 rounded-full"
            style={{ 
              background: 'linear-gradient(90deg, transparent, #2d2d2d, transparent)',
              opacity: 0.3
            }}
          ></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
