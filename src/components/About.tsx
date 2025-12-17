import React, { useMemo } from "react";
import { Layers, Palette, MousePointer2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Luxury Color Palette
const COLORS = {
  bg: "#2D161A",
  rose: "#FF4D6D",
  roseSoft: "#FFB3C1",
  roseGold: "#B76E79",
  gold: "#C9A961",
  goldLight: "#D4B896",
  cream: "#F5EDE4",
};

const About: React.FC = () => {
  const navigate = useNavigate();
  const skills = useMemo(
    () => [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Figma",
      "Design Systems",
      "Usability Testing",
      "Interaction Design",
      "Information Architecture",
      "Accessibility (WCAG)",
      "Mobile First",
    ],
    []
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-10 lg:py-24"
      style={{ backgroundColor: COLORS.bg }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1.2, ease: "easeOut" },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

        <motion.div
          animate={{ opacity: [0.08, 0.15, 0.08], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full blur-[100px] lg:blur-[130px]"
          style={{ backgroundColor: `${COLORS.roseGold}20` }}
        />

        <motion.div
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full blur-[80px] lg:blur-[110px]"
          style={{ backgroundColor: `${COLORS.gold}20` }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-12 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left (Image Composition) */}
          <motion.div
            variants={itemVariants}
            className="relative mx-auto w-full max-w-[160px] sm:max-w-xs lg:max-w-md"
            whileHover={{ scale: 1.015, y: -4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative aspect-[3.5/4] rounded-sm group">
              <div
                className="absolute -bottom-3 -right-3 lg:-bottom-6 lg:-right-6 w-full h-full bg-opacity-5 rounded-sm"
                style={{ backgroundColor: `${COLORS.roseGold}10` }}
              />

              {/* Image */}
              <div className="relative w-full h-full overflow-hidden rounded-sm shadow-xl shadow-black/40">
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

                <img
                  src="images/about.png"
                  alt="anupama neupane"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 saturate-[0.9]"
                />

                <div
                  className="absolute inset-0 mix-blend-overlay opacity-30"
                  style={{ backgroundColor: COLORS.roseGold }}
                />
              </div>

              {/* Golden Frame - Moved above image */}
              <div
                className="absolute z-20 -top-3 -left-3 lg:-top-6 lg:-left-6 w-full h-full border border-opacity-20 rounded-sm pointer-events-none"
                style={{ borderColor: COLORS.gold }}
              />

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-3 top-6 lg:top-10 lg:-right-4 p-2 lg:p-3 rounded-lg backdrop-blur-md shadow-lg border border-white/10"
                style={{ backgroundColor: `${COLORS.bg}D9` }}
              >
                <Layers
                  className="w-4 h-4 lg:w-5 lg:h-5"
                  style={{ color: COLORS.gold }}
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-3 bottom-8 lg:bottom-12 lg:-left-4 p-2 lg:p-3 rounded-lg backdrop-blur-md shadow-lg border border-white/10"
                style={{ backgroundColor: `${COLORS.bg}D9` }}
              >
                <Palette
                  className="w-4 h-4 lg:w-5 lg:h-5"
                  style={{ color: COLORS.roseSoft }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right (Text Content) */}
          {/* OPTIMIZATION: Centered content on mobile for better balance, Left aligned on desktop */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left space-y-3 lg:space-y-6"
          >
            {/* Tagline */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-2 lg:gap-3"
            >
              <span
                className="h-px w-4 lg:w-8"
                style={{ background: COLORS.gold }}
              />
              <span
                className="text-[10px] lg:text-xs tracking-[0.3em] uppercase font-semibold"
                style={{
                  color: COLORS.gold,
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                About Me
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight"
              style={{
                color: COLORS.cream,
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Designing{" "}
              <span
                className="italic"
                style={{
                  color: COLORS.roseSoft,
                  fontFamily: "'Passions Conflict', cursive",
                }}
              >
                Intuitive
              </span>
              {"    "}
              & <br />
              <span
                className="italic"
                style={{
                  color: COLORS.goldLight,
                  fontFamily: "'Passions Conflict', cursive",
                }}
              >
                Impactful
              </span>
              {"    "}
              Experiences
            </motion.h2>

            {/* Quote */}
            <motion.div variants={itemVariants} className="max-w-md lg:max-w-none">
              <p
                className="text-sm md:text-lg lg:text-xl font-light italic leading-relaxed"
                style={{
                  color: `${COLORS.cream}F0`,
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                "I bridge the gap between user needs and business goals,
                transforming complex problems into elegant, accessible digital
                solutions."
              </p>
            </motion.div>

            {/* Body Text */}
            <motion.p
              variants={itemVariants}
              className="text-xs md:text-base leading-relaxed opacity-80 max-w-xs sm:max-w-md lg:max-w-lg mx-auto lg:mx-0"
              style={{
                color: COLORS.cream,
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              With a background in cognitive psychology and visual arts, I bring a
              unique perspective to product design. My process is data-driven yet
              human-centric, ensuring every interaction is meaningful. From
              chaotic wireframes to pixel-perfect prototypes, I love every step of
              the journey.
            </motion.p>

            {/* Skills */}
            <motion.div variants={itemVariants} className="pt-2 lg:pt-4 w-full">
              <h3
                className="text-[10px] lg:text-xs tracking-widest uppercase mb-2 lg:mb-4 opacity-70 font-bold"
                style={{
                  color: COLORS.goldLight,
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Core Competencies
              </h3>

              <div className="flex flex-wrap justify-center lg:justify-start gap-x-1.5 gap-y-1.5 lg:gap-y-2 lg:gap-x-2">
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: `${COLORS.gold}15`,
                      borderColor: COLORS.gold,
                    }}
                    className="px-2 py-0.5 lg:px-3 lg:py-1.5 rounded text-[10px] lg:text-xs border transition-colors duration-300 cursor-default"
                    style={{
                      borderColor: `${COLORS.roseGold}30`,
                      backgroundColor: `${COLORS.rose}05`,
                      color: `${COLORS.cream}CC`,
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="pt-3 lg:pt-6">
              <motion.button
                onClick={() => navigate("/portfolio")}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center font-medium gap-2 px-4 py-2 lg:px-6 lg:py-3 text-xs lg:text-sm tracking-wider uppercase transition-all duration-300 border hover:bg-[#F0D080] hover:border-[#F0D080] hover:text-[#2D161A]"
                style={{
                  borderColor: COLORS.gold,
                  color: COLORS.gold,
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                <span className="transition-all duration-300 group-hover:font-bold">
                  View Case Studies
                </span>
                <MousePointer2 className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Shimmer Animation */}
      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 200% 0; }
          50% { background-position: -200% 0; }
        }
      `}</style>
    </motion.section>
  );
};

export default About;