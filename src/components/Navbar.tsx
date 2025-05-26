import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (sectionName: string) => {
    setActiveSection(sectionName);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm" style={{ backgroundColor: '#FFF2F2' }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <div className="text-xl font-light text-gray-700" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Anupama Neupane
        </div>
        <div className="flex space-x-8 items-center" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.name)}
              className={`px-4 py-3 text-sm rounded-full transition-colors ${
                activeSection === item.name
                  ? ''
                  : 'hover:bg-gray-800 hover:text-white'
              }`}
              style={{
                backgroundColor: activeSection === item.name ? '#423E3E' : 'transparent',
                color: activeSection === item.name ? '#FFF2F2' : '#6B7280',
                fontFamily: "'Instrument Sans', sans-serif"
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
