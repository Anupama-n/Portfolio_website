import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills and Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleNavClick = (sectionName: string, href: string) => {
    setActiveSection(sectionName);
    setIsMobileMenuOpen(false);
    
    // Extract the id from href (remove the #)
    const elementId = href.substring(1);
    smoothScrollTo(elementId);
  };

  // Fixed scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      let currentSection = 'Home';

      // Check sections from last to first to find the currently visible one
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = navItems[i].name;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    // Handle initial load
    handleScroll();
    
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []); // Remove dependencies to prevent infinite re-renders

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm" style={{ backgroundColor: '#FFF2F2' }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4">
        {/* Logo */}
        <div className="text-2xl md:text-3xl sm:text-xl font-light bg-gradient-to-r from-black to-[#666666] text-transparent bg-clip-text" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Anupama Neupane
        </div>

        {/* Desktop Navigation */}
        <div className=" hidden md:flex space-x-6 lg:space-x-8 items-center" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.name, item.href)}
              className={`px-3 lg:px-4 py-2 lg:py-3  rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ${
                activeSection === item.name
                  ? 'shadow-md'
                  : 'hover:bg-gray-800 hover:text-white hover:shadow-lg'
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

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-600 mt-1 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-600 mt-1 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: '#FFF2F2' }}
      >
        <div className="px-4 pb-4 space-y-2" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.name, item.href)}
              className={`w-full text-left px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
                activeSection === item.name
                  ? 'shadow-md'
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
