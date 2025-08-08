"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Palette, Brush, Eye, ExternalLink, Heart, Lightbulb, ArrowRight } from 'lucide-react'

const HobbiesPage: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const artworks = [
    {
      id: 1,
      title: "Abstract Art",
      medium: "Colored Sketch",
      image: "/images/1.jpg"
    },
    {
      id: 2,
      title: "Landscape Painting",
      medium: "Acrylic Painting",
      image: "/images/2.jpg"
    },
    {
      id: 3,
      title: "Anime Art",
      medium: "Colored Sketch",
      image: "/images/3.jpg"
    },
    {
      id: 4,
      title: "Portrait Painting",
      medium: "Acrylic Painting",
      image: "/images/4.jpg"
    }
  ];

  const designSkillsFromArt = [
    {
      skill: "Composition & Layout",
      description: "Understanding visual hierarchy and balance from traditional art principles",
      icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
    },
    {
      skill: "Color Theory",
      description: "Mastering color relationships, contrast, and emotional impact through painting",
      icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
    },
    {
      skill: "Attention to Detail",
      description: "Developing precision and patience through intricate sketching work",
      icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
    },
    {
      skill: "User Empathy",
      description: "Creating emotional connections through visual storytelling and expression",
      icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
    }
  ];

  // Image visibility logic similar to skills page
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const coveragePercentage = visibleHeight / viewportHeight;
        
        const sectionBottomFromScreenBottom = viewportHeight - rect.bottom;
        const hideThreshold = viewportHeight * 0.05;
        
        const shouldShowImage = coveragePercentage >= 0.95 && sectionBottomFromScreenBottom < hideThreshold;
        setIsImageVisible(shouldShowImage);
      }
    };

    const observer = new IntersectionObserver(
      ([]) => {
        handleScroll();
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    handleScroll();

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Custom CSS for animations and scrollbars */}
      <style>{`
        .hide-scrollbar {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .floating-image {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.02);
          }
        }
        .image-glow {
          filter: drop-shadow(0 10px 30px rgba(255, 182, 193, 0.3));
        }
        @media (max-width: 1536px) {
          .floating-image {
            animation: float 8s ease-in-out infinite;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        id='hobbies'
        className="bg-[#FFF2F2] min-h-screen px-3 sm:px-6 md:px-8 lg:px-32 py-6 sm:py-16 text-gray-800 relative overflow-hidden"
      >
        <h2
          className="text-2xl sm:text-4xl md:text-5xl font-medium bg-gradient-to-b from-black to-[#666666] text-transparent bg-clip-text mb-4 sm:mb-10 mx-auto text-center lg:text-right lg:mr-24"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          My Creative Hobbies
        </h2>

        {/* Main Hobbies Section */}
        <div className="relative bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-2xl sm:rounded-[40px] p-3 sm:p-8 md:p-10 transition-shadow duration-300 max-w-5xl mb-6 sm:mb-16 mx-auto lg:ml-auto lg:mr-24 hover:shadow-[0_10px_40px_rgba(137,137,137,0.2)]">
          <div className="grid gap-4 sm:gap-8 md:gap-10">
            <div className="group">
              {/* Category Header with Icon */}
              <div className="border-2 border-[#f5c2c2] bg-[#FFE4E4] rounded-xl sm:rounded-2xl p-3 sm:p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
                  <Brush className="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" />
                  <h3
                    className="text-base sm:text-2xl font-semibold text-gray-700 tracking-wide"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    Sketching & Painting
                  </h3>
                  <div className="bg-[#FFE4E4] border border-[#f5c2c2] flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-2 sm:ml-4"></div>
                </div>

                {/* Hobby Description */}
                <div className="mb-6 sm:mb-8">
                  <div className="border-2 border-[#f5c2c2] bg-[#FFE4E4] px-3 sm:px-6 py-4 sm:py-6 rounded-xl transition-all duration-300 hover:shadow-md">
                    <p
                      className="text-sm sm:text-lg text-gray-700 leading-relaxed"
                      style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                    >
                      I enjoy sketching and painting in my free time, which not only fuel my creativity but also help me develop a strong eye for composition, color, and intricate details. These artistic skills translate directly into my work as a UI/UX designer, allowing me to craft visually appealing, user-friendly, and detail-oriented designs that create engaging digital experiences.
                    </p>
                  </div>
                </div>

                {/* How Art Enhances Design Skills */}
                <div className="mb-6 sm:mb-8">
                  <h4
                    className="text-lg sm:text-xl font-semibold text-gray-700 mb-4"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    How Art Enhances My Design Work
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4">
                    {designSkillsFromArt.map((item, idx) => (
                      <div
                        key={idx}
                        className="border-2 border-[#f5c2c2] bg-[#FFE4E4] px-3 sm:px-4 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-default transform group-hover:translate-y-[-2px]"
                        style={{
                          fontFamily: "'Instrument Sans', sans-serif",
                          animationDelay: `${idx * 100}ms`
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            {item.icon}
                          </div>
                          <div>
                            <h5 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                              {item.skill}
                            </h5>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Artwork Showcase Section */}
        <div className="relative bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-2xl sm:rounded-[40px] p-3 sm:p-8 md:p-10 transition-shadow duration-300 max-w-5xl mx-auto lg:ml-auto lg:mr-24 hover:shadow-[0_10px_40px_rgba(137,137,137,0.2)]">
          <div className="grid gap-4 sm:gap-8 md:gap-10">
            <div className="group">
              {/* Artwork Header */}
              <div className="border-2 border-[#f5c2c2] bg-[#FFE4E4] rounded-xl sm:rounded-2xl p-3 sm:p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
                  <Palette className="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" />
                  <h3
                    className="text-base sm:text-2xl font-semibold text-gray-700 tracking-wide"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    Featured Artworks
                  </h3>
                  <div className="bg-[#FFE4E4] border border-[#f5c2c2] flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-2 sm:ml-4"></div>
                </div>

                {/* Artwork Grid - Responsive Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-6 mb-6 sm:mb-8">
                  {artworks.map((artwork, idx) => (
                    <div
                      key={artwork.id}
                      className="bg-[#FFE4E4] border border-[#f5c2c2] rounded-xl sm:rounded-3xl p-2 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group border-2 hover:border-orange-200 cursor-pointer"
                      style={{ animationDelay: `${idx * 100}ms` }}
                      onClick={() => setSelectedArtwork(selectedArtwork === artwork.id ? null : artwork.id)}
                    >
                      {/* Mobile Layout - Compact */}
                      <div className="flex gap-2 sm:hidden items-start">
                        <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-md border">
                          <img
                            src={artwork.image || "/placeholder.svg"}
                            alt={artwork.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div>
                            <h3
                              className="text-xs font-semibold text-gray-800 mb-0.5 line-clamp-1"
                              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                            >
                              {artwork.title}
                            </h3>
                            <p className="text-[10px] text-orange-600 font-medium">
                              {artwork.medium}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Desktop/Tablet Layout */}
                      <div className="hidden sm:flex gap-4 items-center">
                        <div className="w-20 sm:w-24 max-w-full h-auto max-h-36 sm:max-h-40 flex-shrink-0 overflow-hidden">
                          <img
                            src={artwork.image || "/placeholder.svg"}
                            alt={artwork.title}
                            className="h-full w-auto object-cover rounded-lg border group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex flex-col justify-between min-h-[6rem]">
                          <div>
                            <h3
                              className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 text-gray-800"
                              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                            >
                              {artwork.title}
                            </h3>
                            <p
                              className="text-sm sm:text-base text-orange-600 font-medium mb-2 sm:mb-3"
                              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                            >
                              {artwork.medium}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View More Link */}
                <div className="text-center">
                  <button
                    className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                    onClick={() => window.open('https://drive.google.com/file/d/1bkrOYfpYt8UP7pgAYAQ5Pua8m3MTZeTb/view?usp=drive_link', '_blank')}
                  >
                    <span className="text-sm sm:text-base font-medium">View My Complete Portfolio</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Button for Mobile */}
        <div className="flex justify-center mt-6 sm:mt-16 lg:hidden">
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"
            style={{
              backgroundColor: '#423E3E',
              color: '#FFF2F2',
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '12px',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* Enhanced Fixed Image - XL screens */}
      <div
        className={`hidden xl:block fixed bottom-20 left-0 pointer-events-none select-none z-20 transition-all duration-700 ease-out ${
          isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <img
          src="/images/hobbies.png"
          alt="Creative Hobbies Illustration"
          className="w-[34rem] h-auto floating-image image-glow object-contain max-w-none"
          style={{
            transformOrigin: 'center bottom',
            mixBlendMode: 'multiply',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF2F2] via-transparent to-transparent opacity-20 rounded-t-full blur-lg -z-10"></div>
      </div>

      {/* Responsive version for large screens (but not xl+) */}
      <div
        className={`hidden lg:block xl:hidden fixed bottom-20 left-4 pointer-events-none select-none z-20 transition-all duration-700 ease-out ${
          isImageVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
        }`}
      >
        <img
          src="/images/hobbies.png"
          alt="Creative Hobbies Illustration"
          className="w-[28rem] h-auto floating-image image-glow object-contain"
          style={{
            transformOrigin: 'center bottom',
            mixBlendMode: 'multiply',
          }}
        />
      </div>
    </>
  );
};

export default HobbiesPage;
