import { useState } from 'react';

const MyArtworks = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalImage, setModalImage] = useState<string | null>(null);
  const categories = ["All", "Portrait", "Landscape", "Abstract", "Illustration", "Pop"];

  const artworks = [
    {
      title: "Anniversary Embrace",
      image: "/artworks/portrait1.jpg",
      description: "Couple’s portrait on a 18*14 canvas.",
      category: "Portrait",
    },
    
    {
      title: "Goddess Durga",
      image: "/artworks/abstract1.jpg",
      description: "An abstract art of goddess Durga.",
      category: "Abstract",
    },
    {
      title: "Tranquil Falls",
      image: "/artworks/landscape1.jpg",
      description: " Calm acrylic landscape with waterfall tones.",
      category: "Landscape",
    },
    {
      title: "Classical Beauty",
      image: "/artworks/portrait2.jpg",
      description: "Strokes representing emotion.",
      category: "Portrait",
    },
    {
      title: "Lakshmi Rangoli",
      image: "/artworks/rangoli1.jpg",
      description: "Traditional rangoli honoring Goddess Lakshmi's grace.",
      category: "Illustration",
    },
    {
      title: "Charcoal Sketch of Priyanka Chopra",
      image: "/artworks/portrait3.jpg",
      description: "Charcoal sketch of Priyanka, radiating grace and strength.",
      category: "Portrait",
    },
    {
      title: "Classical Beauty, Contemporary Soul",
      image: "/artworks/portrait4.jpg",
      description: "Bold, spontaneous strokes representing emotion.",
      category: "Portrait",
    },
    
    {
      title: "Landscape Painting",
      image: "/artworks/landscape2.jpg",
      description: "Peaceful landscape of lake, house, & hills.",
      category: "Landscape",
    },
    {
      title: "Radiance of the South",
      image: "/artworks/portrait5.jpg",
      description: "A colorful portrait of a South Indian girl.",
      category: "Portrait",
    },
    
    
    {
      title: "Eternal Beauty",
      image: "/artworks/portrait6.jpg",
      description: "Colored portrait of my mom’s timeless beauty.",
      category: "Portrait",
    },
    
    {
      title: "Intricate Madhubani Peacock Line Art",
      image: "/artworks/madhubani.jpg",
      description: "Delicate lines depict vibrant traditional peacock patterns.",
      category: "Illustration",
    },
    
    {
      title: "Pop Art Expressions",
      image: "/artworks/pop1.jpg",
      description: "Bold colors and dynamic shapes.",
      category: "Pop",
    },
    {
      title: "Pop Art Expressions",
      image: "/artworks/pop2.jpg",
      description: "Bold colors and dynamic shapes.",
      category: "Pop",
    },
    {
      title: "Pop Art Expressions",
      image: "/artworks/pop3.jpg",
      description: "Bold colors and dynamic shapes.",
      category: "Pop",
    },
    {
      title: "Pop Art Expressions",
      image: "/artworks/pop4.jpg",
      description: "Bold colors and dynamic shapes.",
      category: "Pop",
    },
    {
      title: "Violet Evergarden Anime Art",
      image: "/artworks/anime1.jpg",
      description: "Elegant anime-style portrait of Violet Evergarden.",
      category: "Illustration",
    },
    {
      title: "Simplified Portrait",
      image: "/artworks/illustration3.png",
      description: "A minimalistic vector portrait of myself",
      category: "Illustration",
    },
    {
      title: "Simplified Portrait",
      image: "/artworks/illustration2.png",
      description: "A minimalistic vector portrait of myself",
      category: "Illustration",
    },
    
    {
      title: "Simplified Portrait",
      image: "/artworks/illustration4.png",
      description: "A minimalistic vector portrait of myself",
      category: "Illustration",
    },
    {
      title: "Grandson & Grandma Bond",
      image: "/artworks/illustration1.jpg",
      description: "Warm, tender illustration of grandson-grandma bond.",
      category: "Illustration",
    },
   
  
  ];

    const filteredArtworks =
    selectedCategory === "All"
      ? artworks
      : artworks.filter((art) => art.category === selectedCategory);

  const handleCategoryClick = (category: string): void => {
  setSelectedCategory(category);
};

  const openModal = (image: string): void => {
    setModalImage(image);
  };

  const closeModal = (): void => {
    setModalImage(null);
  };


  const topRow = filteredArtworks.slice(0, 11);
  const bottomRow = filteredArtworks.slice(11);

  return (
    <section id="artworks" className="bg-[#FFF2F2] min-h-screen py-8 sm:py-12 md:py-16 text-gray-800">
      {/* Heading */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-medium bg-gradient-to-b from-black to-[#666666] text-transparent bg-clip-text mb-8 sm:mb-10 text-center"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        My Artworks
      </h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-3 mb-6 sm:mb-10 px-2 sm:px-4 md:px-10 lg:px-20 overflow-x-auto hide-scrollbar">
        {categories.map((cat, idx) => (
          <span
            key={idx}
            onClick={() => handleCategoryClick(cat)}
            className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
              selectedCategory === cat
                ? "bg-gray-800 text-white shadow-lg"
                : "hover:bg-gray-200 hover:shadow-md"
            }`}
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Artworks Display */}
      <div className="px-2 sm:px-8 md:px-12 lg:px-16">
        <div className="bg-[#FFF1F2] rounded-3xl py-10 sm:py-14 px-2 sm:px-8 max-w-[95rem] mx-auto w-full h-auto overflow-hidden">
          {filteredArtworks.length === 0 ? (
            <div className="text-center py-12">
              <p
                className="text-gray-500 text-sm sm:text-lg"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                No artworks found in this category.
              </p>
            </div>
          ) : (
            <>
              {/* Top Row */}
              <div className="overflow-x-auto hide-scrollbar mb-6 sm:mb-8">
                <div className="flex gap-2 sm:gap-4 md:gap-6 w-max px-2 sm:px-4">
                  {topRow.map((art, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FFeded] min-w-[140px] sm:min-w-[200px] md:min-w-[240px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.02]"
                    >
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full max-h-44 sm:max-h-56 md:max-h-64 object-contain cursor-pointer"
                        onClick={() => openModal(art.image)}
                      />
                      <div className="p-2 sm:p-3 md:p-4">
                        <h3
                          className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2"
                          style={{ fontFamily: "Inika" }}
                        >
                          {art.title}
                        </h3>
                        <p
                          className="hidden sm:block text-xs sm:text-sm text-gray-600"
                          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                        >
                          {art.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row */}
              <div className="overflow-x-auto hide-scrollbar">
                <div className="flex gap-2 sm:gap-4 md:gap-6 w-max px-2 sm:px-4">
                  {bottomRow.map((art, idx) => (
                    <div
                      key={idx + topRow.length}
                      className="bg-[#FFeded] min-w-[140px] sm:min-w-[200px] md:min-w-[240px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.02]"
                    >
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full max-h-44 sm:max-h-56 md:max-h-64 object-contain cursor-pointer"
                        onClick={() => openModal(art.image)}
                      />
                      <div className="p-2 sm:p-3 md:p-4">
                        <h3
                          className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2"
                          style={{ fontFamily: "Inika" }}
                        >
                          {art.title}
                        </h3>
                        <p
                          className="hidden sm:block text-xs sm:text-sm text-gray-600"
                          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                        >
                          {art.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 cursor-pointer"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Expanded artwork"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent modal close on image click
          />
        </div>
      )}
    </section>
  );
};

export default MyArtworks;