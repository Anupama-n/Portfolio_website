import React from "react";
import { Palette } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// Luxury Color Palette (matching site theme)
const COLORS = {
  bg: "#2D161A",
  burgundy: "#2D161A",
  rose: "#FF4D6D",
  roseSoft: "#FFB3C1",
  roseGold: "#B76E79",
  gold: "#C9A961",
  goldLight: "#D4B896",
  cream: "#F5EDE4",
};

const artworks = [
  {
    id: 1,
    title: "Serene Landscape",
    medium: "Acrylics on Canvas",
    image: "images/landscape.jpg",
  },
  {
    id: 2,
    title: "Abstract Expression",
    medium: "Pencil Color",
    image: "images/abstract.jpg",
  },
  {
    id: 3,
    title: "Portrait Study",
    medium: "Acrylics on Canvas",
    image: "images/portrait.jpg",
  },
  {
    id: 4,
    title: "Still Life",
    medium: "Pencil Color",
    image: "images/portrait.png",
  },
];

const designInsights = [
  "Trains the eye for composition and visual balance",
  "Deepens understanding of color theory and emotion",
  "Cultivates patience and attention to fine detail",
  "Bridges technical precision with creative intuition",
];

const BeyondWork: React.FC = () => {
  // Variant for staggered containers
  const staggerContainer: Variants = {
    hidden: { opacity: 1 }, 
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Variant for individual items
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Decoration variants
  const bgOrbVariants: Variants = {
    animate: {
      opacity: [0.08, 0.15, 0.08],
      scale: [1, 1.1, 1],
      transition: { duration: 14, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="beyond-work"
      className="relative w-full py-16 lg:py-24 overflow-hidden"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Gradient Orbs */}
        <motion.div
          variants={bgOrbVariants}
          animate="animate"
          className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full blur-[100px] lg:blur-[130px]"
          style={{ backgroundColor: `${COLORS.roseGold}20` }}
        />

        <motion.div
          variants={bgOrbVariants}
          animate="animate"
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full blur-[80px] lg:blur-[110px]"
          style={{ backgroundColor: `${COLORS.gold}20` }}
        />

        {/* Corner Accents - Subtle movement */}
        <motion.div
          className="absolute inset-6 md:inset-10 pointer-events-none opacity-40"
          animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="absolute inset-0 rounded-sm"
            style={{ border: `1px solid ${COLORS.gold}20` }}
          />
          {[
            "top-0 left-0 border-t border-l rounded-tl-sm",
            "top-0 right-0 border-t border-r rounded-tr-sm",
            "bottom-0 left-0 border-b border-l rounded-bl-sm",
            "bottom-0 right-0 border-b border-r rounded-br-sm",
          ].map((cls, i) => (
            <div
              key={i}
              className={`absolute w-6 h-6 ${cls}`}
              style={{ borderColor: `${COLORS.gold}60` }}
            />
          ))}
        </motion.div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* 1. Header Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }} 
          className="text-center mb-12 lg:mb-16"
        >
          {/* Tagline */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span
              className="h-px w-8"
              style={{ backgroundColor: COLORS.gold }}
            />
            <Palette className="w-4 h-4" style={{ color: COLORS.gold }} />
            <span
              className="text-xs tracking-[0.3em] uppercase font-semibold"
              style={{
                color: COLORS.gold,
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Beyond Work
            </span>
            <span
              className="h-px w-8"
              style={{ backgroundColor: COLORS.gold }}
            />
          </div>

          {/* Headline */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4"
            style={{
              color: COLORS.cream,
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Where{" "}
            <span
              className="italic"
              style={{
                color: COLORS.roseSoft,
                fontFamily: "'Passions Conflict', cursive",
              }}
            >
              Creativity
            </span>{" "}
            Finds <br />
            <span
              className="italic"
              style={{
                color: COLORS.goldLight,
                fontFamily: "'Passions Conflict', cursive",
              }}
            >
              Expression
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="text-sm md:text-base max-w-xl mx-auto opacity-70"
            style={{ color: COLORS.cream, fontFamily: "'Raleway', sans-serif" }}
          >
            Beyond pixels and interfaces, I find solace in traditional art, a
            practice that continually shapes my design sensibility.
          </p>
        </motion.div>

        {/* 2. Grid Gallery */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-12 lg:mb-16"
        >
          {artworks.map((artwork) => (
            <motion.div
              key={artwork.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-sm cursor-pointer aspect-[3/4]"
              style={{
                border: `1px solid ${COLORS.gold}30`,
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Shimmer Overlay (from About) */}
              <div
                className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1500"
                style={{
                  background: `linear-gradient(
                      120deg,
                      transparent 30%,
                      ${COLORS.gold}20 50%,
                      transparent 70%
                    )`,
                  backgroundSize: "200% 100%",
                  animation: "shimmer 6s ease-in-out infinite",
                }}
              />

              {/* Gold Frame Effect (Existing) */}
              <div
                className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `inset 0 0 30px ${COLORS.gold}20`,
                }}
              />

              {/* Image (Modified with saturation from About) */}
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 saturate-[0.9]"
              />

              {/* Mix-Blend Overlay (from About) */}
              <div
                className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"
                style={{ backgroundColor: COLORS.roseGold }}
              />

              {/* Overlay with Caption */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-3 lg:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                style={{
                  background: `linear-gradient(to top, ${COLORS.burgundy}F0 0%, transparent 60%)`,
                }}
              >
                <h4
                  className="text-sm lg:text-base font-medium"
                  style={{
                    color: COLORS.cream,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {artwork.title}
                </h4>
                <p
                  className="text-xs opacity-70"
                  style={{
                    color: COLORS.goldLight,
                    fontFamily: "'Raleway', sans-serif",
                  }}
                >
                  {artwork.medium}
                </p>
              </div>

              {/* Corner Accents */}
              <div
                className="absolute top-2 left-2 w-3 h-3 border-t border-l opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                style={{ borderColor: COLORS.gold }}
              />
              <div
                className="absolute bottom-2 right-2 w-3 h-3 border-b border-r opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                style={{ borderColor: COLORS.gold }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* 3. Design Insights */}
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: false, margin: "-50px" }} 
           className="text-center"
        >
          {/* Section Header for Insights */}
          <motion.h3
            variants={itemVariants}
            className="text-xs tracking-widest uppercase mb-6 opacity-70 font-bold inline-block"
            style={{
              color: COLORS.goldLight,
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            How Art Enhances My Design
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {designInsights.map((insight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: `${COLORS.gold}10`,
                  borderColor: COLORS.gold,
                }}
                className="p-4 lg:p-5 rounded-sm border transition-all duration-300"
                style={{
                  borderColor: `${COLORS.roseGold}30`,
                  backgroundColor: `${COLORS.rose}05`,
                }}
              >
                {/* Number */}
                <span
                  className="block text-2xl lg:text-3xl font-light mb-2 opacity-40"
                  style={{
                    color: COLORS.gold,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  0{index + 1}
                </span>

                {/* Text */}
                <p
                  className="text-xs lg:text-sm leading-relaxed"
                  style={{
                    color: `${COLORS.cream}CC`,
                    fontFamily: "'Raleway', sans-serif",
                  }}
                >
                  {insight}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Shimmer Animation Keyframes */}
      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 200% 0; }
          50% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
};

export default BeyondWork;