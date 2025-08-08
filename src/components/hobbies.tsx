"use client"

import React, { useState } from 'react'
import { Palette, Brush, Eye, ExternalLink, Heart, Lightbulb, ArrowRight } from 'lucide-react'

const HobbiesPage: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);

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
      
      image:"/images/2.jpg"
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
      icon: <Eye className="w-5 h-5 text-orange-600" />
    },
    {
      skill: "Color Theory",
      description: "Mastering color relationships, contrast, and emotional impact through painting",
      icon: <Palette className="w-5 h-5 text-orange-600" />
    },
    {
      skill: "Attention to Detail",
      description: "Developing precision and patience through intricate sketching work",
      icon: <Lightbulb className="w-5 h-5 text-orange-600" />
    },
    {
      skill: "User Empathy",
      description: "Creating emotional connections through visual storytelling and expression",
      icon: <Heart className="w-5 h-5 text-orange-600" />
    }
  ];

  return (
    <>
      {/* Custom CSS for hiding scrollbars */}
      <style>{`
        .hide-scrollbar {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <section
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
        <div className="relative bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-lg sm:rounded-[32px] lg:rounded-[40px] p-3 sm:p-6 lg:p-10 transition-shadow duration-300 max-w-5xl mb-8 mx-auto lg:ml-auto lg:mr-24">
          <div className="grid gap-3 lg:gap-10">
            <div className="group">
              {/* Category Header with Icon */}
              <div className="border-2 border-[#f5c2c2] bg-[#FFE4E4] rounded-lg lg:rounded-2xl p-3 lg:p-6 transition-all duration-300">
                <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-6">
                  <Brush className="w-4 h-4 lg:w-6 lg:h-6 text-orange-600" />
                  <h3
                    className="text-base sm:text-xl lg:text-2xl font-semibold text-gray-700 tracking-wide"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    Sketching & Painting
                  </h3>
                  <div className="bg-[#FFE4E4] border border-[#f5c2c2] flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-2 lg:ml-4"></div>
                </div>

                {/* Hobby Description */}
                <div className="mb-6 lg:mb-8">
                  <div className="border-2 border-[#f5c2c2] bg-[#FFE4E4] px-3 lg:px-6 py-4 lg:py-6 rounded-lg lg:rounded-xl">
                    <p
                      className="text-sm lg:text-lg text-gray-700 leading-relaxed"
                      style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                    >
                      I enjoy sketching and painting in my free time, which not only fuel my creativity but also help me develop a strong eye for composition, color, and intricate details. These artistic skills translate directly into my work as a UI/UX designer, allowing me to craft visually appealing, user-friendly, and detail-oriented designs that create engaging digital experiences.
                    </p>
                  </div>
                </div>

                {/* How Art Enhances Design Skills */}
                <div className="mb-6 lg:mb-8">
                  <h4
                    className="text-lg lg:text-xl font-semibold text-gray-700 mb-4"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    How Art Enhances My Design Work
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                    {designSkillsFromArt.map((item, idx) => (
                      <div
                        key={idx}
                        className="border-2 border-[#f5c2c2] bg-[#FFE4E4] px-3 lg:px-4 py-3 lg:py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-default"
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
                            <h5 className="text-sm lg:text-base font-semibold text-gray-800 mb-1">
                              {item.skill}
                            </h5>
                            <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
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
        <div className="relative bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-lg sm:rounded-[32px] lg:rounded-[40px] p-3 sm:p-6 lg:p-10 transition-shadow duration-300 max-w-5xl mx-auto lg:ml-auto lg:mr-24">
          <div className="grid gap-3 lg:gap-10">
            <div className="group">
              {/* Artwork Header */}
              <div className="border-2 border-[#f5c2c2] bg-[#FFE4E4] rounded-lg lg:rounded-2xl p-3 lg:p-6 transition-all duration-300">
                <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-6">
                  <Palette className="w-4 h-4 lg:w-6 lg:h-6 text-orange-600" />
                  <h3
                    className="text-base sm:text-xl lg:text-2xl font-semibold text-gray-700 tracking-wide"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    Featured Artworks
                  </h3>
                  <div className="bg-[#FFE4E4] border border-[#f5c2c2] flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-2 lg:ml-4"></div>
                </div>

                {/* Artwork Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
                  {artworks.map((artwork, idx) => (
                    <div
                      key={artwork.id}
                      className="border-2 border-[#f5c2c2] bg-[#FFE4E4] rounded-lg lg:rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                      style={{ animationDelay: `${idx * 100}ms` }}
                      onClick={() => setSelectedArtwork(selectedArtwork === artwork.id ? null : artwork.id)}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={artwork.image || "/placeholder.svg"}
                          alt={artwork.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <div className="p-3">
                        <h5
                          className="text-sm lg:text-base font-semibold text-gray-800 mb-1"
                          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                        >
                          {artwork.title}
                        </h5>
                        <p className="text-xs lg:text-sm text-orange-600 font-medium mb-2">
                          {artwork.medium}
                        </p>
                        
                      </div>
                    </div>
                  ))}
                </div>

                {/* View More Link */}
                <div className="text-center">
                  <button
                    className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                    onClick={() => window.open('https://drive.google.com/file/d/1bkrOYfpYt8UP7pgAYAQ5Pua8m3MTZeTb/view?usp=drive_link', '_blank')}
                  >
                    <span className="text-sm lg:text-base font-medium">View My Complete Portfolio</span>
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                    <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HobbiesPage;
