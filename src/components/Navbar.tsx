import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

// Luxury Color Palette (matching Hero & About)
const COLORS = {
  bg: "#F5EDE4",
  burgundy: "#2D161A",
  rose: "#FF4D6D",
  roseSoft: "#FFB3C1",
  roseGold: "#B76E79",
  gold: "#C9A961",
  goldLight: "#D4B896",
  cream: "#F5EDE4",
};

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpeningResume, setIsOpeningResume] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isPortfolioPage = location.pathname === '/portfolio';

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Beyond Work', href: '#beyond-work' },
  ];

  const handleViewResume = () => {
    setIsOpeningResume(true);
    window.open('/resume.pdf', '_blank');
    setTimeout(() => setIsOpeningResume(false), 2000);
  };

  const smoothScrollTo = (elementId: string) => {
    const scrollToTarget = () => {
        const element = document.getElementById(elementId);
        if (element) {
          // Offset for sticky navbar
          const navbarHeight = 80;
          const elementPosition = element.offsetTop;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else if (elementId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    if (location.pathname !== '/') {
        navigate('/');
        // Allow time for route transition and component mount
        setTimeout(scrollToTarget, 100);
    } else {
        scrollToTarget();
    }
  };

  const handleNavClick = (sectionName: string, href: string) => {
    setActiveSection(sectionName);
    setIsMobileMenuOpen(false);
    smoothScrollTo(href.substring(1));
  };

  useEffect(() => {
    const handleScroll = () => {
      // Threshold for visual change
      setIsScrolled(window.scrollY > 50);

      // If not on home page, we can't really track home sections
      if (location.pathname !== '/') {
        setActiveSection('');
        return;
      }

      // Active section detection
      const scrollPosition = window.scrollY + 150;
      let currentSection = 'Home';
      const sections = ['home', 'about', 'experience', 'beyond-work'];
      const sectionNames = ['Home', 'About', 'Experience', 'Beyond Work'];

      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionNames[i];
            break;
          }
        }
      }

      // Override for very top of page
      if (window.scrollY < 100) currentSection = 'Home';

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount/route change to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Dynamic padding classes to handle responsive compactness
  // Mobile: py-3 (scrolled) / py-4 (top) -> Very compact
  // Desktop: py-4 (scrolled) / py-7 (top) -> Spacious
  const paddingClass = isScrolled 
    ? 'py-3 lg:py-4' 
    : 'py-4 lg:py-7';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${paddingClass}`}
        style={{
          backgroundColor: isScrolled || isPortfolioPage ? `rgba(245, 237, 228, 0.95)` : 'transparent',
          backdropFilter: isScrolled || isPortfolioPage ? 'blur(12px)' : 'none',
          borderBottom: `1px solid ${(isScrolled && !isPortfolioPage) ? 'rgba(201, 169, 97, 0.15)' : 'transparent'}`,
          boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.03)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
          <div className="flex justify-between items-center relative">

            {/* Logo */}
            <button
              onClick={() => handleNavClick('Home', '#home')}
              className="group flex items-center gap-1.5 focus:outline-none"
            >
              <div className="flex flex-col items-start leading-none">
                <span
                  className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-300"
                  style={{
                    color: COLORS.burgundy,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Anupama
                </span>
              </div>
              <span
                className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-300 group-hover:text-rose-500"
                style={{
                  color: COLORS.roseGold,
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Neupane
              </span>
            </button>

            {/* Right Side Container */}
            <div className="flex items-center gap-8 md:gap-12">

              {/* Navigation or Back Button */}
              {isPortfolioPage ? (
                 // Portfolio: Back to Home (Desktop)
                 <button
                   onClick={() => navigate('/')}
                   className="hidden lg:flex items-center gap-2 group"
                 >
                    <ArrowLeft size={16} className="text-[#2D161A] group-hover:-translate-x-1 transition-transform" />
                    <span 
                      className="text-sm tracking-wider uppercase font-medium transition-colors duration-300 group-hover:text-[#B76E79]"
                      style={{
                        color: COLORS.burgundy,
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      Back to Home
                    </span>
                 </button>
              ) : (
                // Home: Standard Navigation (Desktop)
                <div className="hidden lg:flex items-center gap-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.name, item.href)}
                      className="relative group py-1"
                    >
                      <span
                        className="text-sm tracking-wider uppercase font-medium transition-colors duration-300"
                        style={{
                          color: activeSection === item.name ? COLORS.gold : COLORS.burgundy,
                          fontWeight: activeSection === item.name ? 600 : 400,
                          fontFamily: "'Raleway', sans-serif",
                        }}
                      >
                        {item.name}
                      </span>
                      {/* Active Underline */}
                      {activeSection === item.name && (
                        <motion.span
                          layoutId="activeSection"
                          className="absolute -bottom-1 left-0 w-full h-[1.5px]"
                          style={{ backgroundColor: COLORS.gold }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      {/* Hover Line */}
                      <span
                        className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full opacity-50"
                        style={{ backgroundColor: COLORS.roseGold }}
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Action Button (Resume) - Desktop */}
              <div className="flex items-center">
                <button
                  onClick={handleViewResume}
                  disabled={isOpeningResume}
                  className="
                    hidden sm:flex items-center gap-2
                    px-4 py-2
                    text-xs tracking-wider uppercase font-medium
                    rounded-sm
                    transition-colors duration-200
                    hover:brightness-95
                    disabled:opacity-60 disabled:cursor-wait
                  "
                  style={{
                    backgroundColor: COLORS.roseGold,
                    color: "#FFFFFF",
                    fontFamily: "'Raleway', sans-serif",
                  }}
                >
                  <span>
                    {isOpeningResume ? "Opening…" : "View Resume"}
                  </span>
                </button>
              </div>

              {/* Mobile Controls */}
              <div className="lg:hidden flex items-center">
                {isPortfolioPage ? (
                  // Portfolio: Mobile Back Button
                  <button
                    onClick={() => navigate('/')}
                    className="p-1 text-[#2D161A] hover:text-[#B76E79] transition-colors"
                    aria-label="Back to Home"
                  >
                    <ArrowLeft size={22} />
                  </button>
                ) : (
                  // Home: Mobile Menu Toggle
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-1 text-gray-800 transition-transform duration-300 hover:rotate-90 active:scale-95"
                    aria-label="Toggle mobile menu"
                  >
                    {isMobileMenuOpen ? <X size={22} color={COLORS.burgundy} /> : <Menu size={22} color={COLORS.burgundy} />}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

      {/* Mobile Menu Overlay - Compact Box on Right */}
      <AnimatePresence>
        {isMobileMenuOpen && !isPortfolioPage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden absolute top-full right-4 sm:right-12 mt-2 w-44 rounded-xl shadow-2xl overflow-hidden border border-white/40 origin-top-right"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="flex flex-col py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name, item.href)}
                  className="w-full text-center py-2 text-sm tracking-widest uppercase transition-colors hover:bg-stone-50"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: activeSection === item.name ? COLORS.gold : COLORS.burgundy,
                    fontWeight: activeSection === item.name ? 600 : 500,
                  }}
                >
                  {item.name}
                </button>
              ))}
              
              <div className="mx-8 my-1.5 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />

              <div className="px-3 pb-2 pt-1">
                <button
                  onClick={handleViewResume}
                  className="w-full py-2.5 text-white text-xs tracking-[0.15em] uppercase font-medium rounded-sm shadow-md active:scale-95 transition-all hover:brightness-105"
                  style={{ backgroundColor: COLORS.roseGold }}
                >
                  View Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav >
    </>
  );
};

export default Navbar;