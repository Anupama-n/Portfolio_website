import React from "react";
import { MousePointer2, Mail } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Luxury Color Palette
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

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [isOpeningEmail, setIsOpeningEmail] = React.useState(false);

  const handleGetInTouch = () => {
    setIsOpeningEmail(true);
    window.location.href = "mailto:anupaneupane1994@gmail.com";
    // Reset after a delay in case user returns to page
    setTimeout(() => setIsOpeningEmail(false), 2000);
  };

  const handleViewProjects = () => {
    navigate('/portfolio');
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: COLORS.bg }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 1.2, ease: "easeOut" },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: false }}
    >
      {/* Decorative Frame - Optimized sizing for mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-4 sm:inset-6 md:inset-10 pointer-events-none opacity-40"
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
              className={`absolute w-4 h-4 sm:w-6 sm:h-6 ${cls}`}
              style={{ borderColor: `${COLORS.gold}60` }}
            />
          ))}
        </motion.div>

        {/* Floating Gradient Orbs - Optimized sizing for mobile */}
        <motion.div
          animate={{ opacity: [0.06, 0.12, 0.06], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px] rounded-full blur-[60px] sm:blur-[100px] lg:blur-[130px]"
          style={{ backgroundColor: `${COLORS.roseGold}25` }}
        />

        <motion.div
          animate={{ opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] rounded-full blur-[50px] sm:blur-[80px] lg:blur-[110px]"
          style={{ backgroundColor: `${COLORS.gold}25` }}
        />

        <motion.div
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full blur-[80px] sm:blur-[150px]"
          style={{ backgroundColor: `${COLORS.roseGold}20` }}
        />
      </div>

      {/* Main Content - Centered vertically with flex and padding top for mobile */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 text-center flex flex-col items-center justify-center h-full pt-16 sm:pt-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: false }}
      >
        {/* Tagline */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <span className="h-px w-6 sm:w-8" style={{ backgroundColor: COLORS.gold }} />
          <span
            className="text-xs sm:text-sm md:text-base tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold"
            style={{ color: COLORS.gold, fontFamily: "'Raleway', sans-serif" }}
          >
            UX/UI Designer
          </span>
          <span className="h-px w-6 sm:w-8" style={{ backgroundColor: COLORS.gold }} />
        </motion.div>

        {/* Name – Clean Signature Cursive with MonteCarlo - Optimized font size for mobile */}
        <motion.h1
          variants={itemVariants}
          className="text-[3.25rem] sm:text-7xl md:text-8xl lg:text-8xl leading-[1.1] mb-5 sm:mb-6"
          style={{
            fontFamily: "'MonteCarlo', cursive",
            color: COLORS.burgundy,
            letterSpacing: "0.03em",
          }}
        >
          Anupama{" "}
          <span
            style={{
              background: `linear-gradient(135deg, ${COLORS.rose}, ${COLORS.roseGold})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Neupane
          </span>
        </motion.h1>

        {/* Tagline Quote - Optimized text size and width for mobile */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-light italic leading-relaxed mb-6 sm:mb-8 max-w-[280px] sm:max-w-2xl mx-auto"
          style={{ color: `${COLORS.burgundy}E6`, fontFamily: "'Cormorant Garamond', serif" }}
        >
          "Crafting{" "}
          <span
            className="not-italic font-medium px-1.5 sm:px-2 rounded"
            style={{ color: COLORS.rose, backgroundColor: `${COLORS.roseSoft}20` }}
          >
            intuitive
          </span>{" "}
          digital experiences with{" "}
          <span
            className="not-italic font-medium px-1.5 sm:px-2 rounded"
            style={{ color: COLORS.gold, backgroundColor: `${COLORS.gold}20` }}
          >
            elegance
          </span>{" "}
          and purpose"
        </motion.p>

        {/* Description - Optimized text size and width for mobile */}
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm md:text-base leading-relaxed max-w-[300px] sm:max-w-xl mx-auto mb-8 sm:mb-10 opacity-70"
          style={{ color: COLORS.burgundy, fontFamily: "'Raleway', sans-serif" }}
        >
          Specializing in user-centered design, I transform complex problems into 
          seamless, beautiful interfaces that delight users and drive results.
        </motion.p>

        {/* CTA Buttons - Optimized layout: Row on mobile, side-by-side */}
        <motion.div variants={itemVariants} className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-auto">
          
          {/* View Projects */}
          <motion.button
            onClick={handleViewProjects}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-3.5 w-auto text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 font-semibold rounded-sm shadow-sm cursor-pointer"
            style={{
              backgroundColor: COLORS.roseGold,
              color:"rgb(255, 255, 255)",
              fontFamily: "sans-serif",
            }}
          >
            <span className="whitespace-nowrap">View Projects</span>
            <MousePointer2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>

          {/* Get in Touch */}
          <motion.button
            onClick={handleGetInTouch}
            whileHover={{ scale: 1.02, backgroundColor: COLORS.gold, color: "#FFFFFF" }}
            whileTap={{ scale: 0.98 }}
            disabled={isOpeningEmail}
            className="group flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-3.5 w-auto text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 border sm:border-2 font-semibold rounded-sm cursor-pointer disabled:opacity-60 disabled:cursor-wait"
            style={{
              borderColor: COLORS.gold,
              color: COLORS.gold,
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            <span className="whitespace-nowrap">{isOpeningEmail ? "Opening..." : "Get in Touch"}</span>
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.button>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};

export default Hero;