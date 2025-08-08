import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills and Projects', href: '#projects' },
    { name: 'Case Study', href: '#education' },
    { name: 'Hobbies', href: '#hobbies' },
    { name: 'Contact', href: '#contact' }
  ];

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Get the navbar height to offset the scroll position
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;

      // Calculate the target position
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      // For the contact section, scroll to the bottom of the page
      if (elementId === 'contact') {
        window.scrollTo({
          top: document.documentElement.scrollHeight - window.innerHeight,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      console.warn(`Element with id "${elementId}" not found`);
    }
  };

  const handleNavClick = (sectionName: string, href: string) => {
    setActiveSection(sectionName);
    setIsMobileMenuOpen(false);

    const elementId = href.substring(1);
    console.log(`Scrolling to: ${elementId}`); // Debug log
    smoothScrollTo(elementId);
  };

  // Updated scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let currentSection = 'Home';

      // Get all section elements
      const homeElement = document.getElementById('home');
      const aboutElement = document.getElementById('about');
      const projectsElement = document.getElementById('projects');
      const educationElement = document.getElementById('education');
      const hobbiesElement = document.getElementById('hobbies');
      const contactElement = document.getElementById('contact');

      // Create an array of sections with their positions
      const sections = [];

      if (homeElement) {
        sections.push({
          name: 'Home',
          start: homeElement.offsetTop,
          end: homeElement.offsetTop + homeElement.offsetHeight
        });
      }

      if (aboutElement) {
        sections.push({
          name: 'About',
          start: aboutElement.offsetTop,
          end: aboutElement.offsetTop + aboutElement.offsetHeight
        });
      }

      if (projectsElement) {
        sections.push({
          name: 'Skills and Projects',
          start: projectsElement.offsetTop,
          end: projectsElement.offsetTop + projectsElement.offsetHeight
        });
      }

      if (educationElement) {
        sections.push({
          name: 'Case Study',
          start: educationElement.offsetTop,
          end: educationElement.offsetTop + educationElement.offsetHeight
        });
      }

      if (hobbiesElement) {
        sections.push({
          name: 'Hobbies', // Fixed: Changed from 'Case Study' to 'Hobbies'
          start: hobbiesElement.offsetTop,
          end: hobbiesElement.offsetTop + hobbiesElement.offsetHeight
        });
      }

      if (contactElement) {
        sections.push({
          name: 'Contact',
          start: contactElement.offsetTop,
          end: contactElement.offsetTop + contactElement.offsetHeight
        });
      }

      // Check each section to see which one we're currently in
      for (const section of sections) {
        if (scrollPosition >= section.start && scrollPosition < section.end) {
          currentSection = section.name;
          break;
        }
      }

      // Special case: Check if we're near the bottom of the page for Contact
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      if (scrollTop + windowHeight >= documentHeight - 300) {
        currentSection = 'Contact'; // Fixed: Changed from 'Home' to 'Contact'
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
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm" 
      style={{ backgroundColor: '#FFF2F2' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4">
        {/* Logo */}
        <div 
          className="text-3xl md:text-4xl sm:text-xl font-light bg-gradient-to-r from-black to-[#666666] text-transparent bg-clip-text" 
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Anupama Neupane
        </div>

        {/* Desktop Navigation */}
        <div 
          className="hidden md:flex space-x-4 lg:space-x-6 items-center" 
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.name, item.href)}
              className={`px-2 lg:px-3 py-2 lg:py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 text-sm lg:text-base ${
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
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
