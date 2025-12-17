import React, { useRef, useEffect } from "react";
import { Briefcase } from "lucide-react";
import {
  motion,
  useAnimation,
  type Variants,
  useInView,
} from "framer-motion";

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

const experiences = [
  {
    company: "Clairify.ai",
    role: "UI/UX Designer",
    period: "July 2025 – Present",
    badgeBg: `${COLORS.rose}10`,
    badgeText: COLORS.rose,
    description: [
      "Designed interfaces in Figma based on user requirements and internal team feedback for the Clairify.ai platform.",
      "Created wireframes, interactive prototypes, and high-fidelity designs for mobile and web applications.",
      "Collaborated with product managers and developers to align UI components with system architecture.",
      "Conducted internal usability checks and iterated to improve clarity and consistency.",
    ],
  },
  {
    company: "Kyra Works",
    role: "UX/UI Designer",
    period: "May – July 2025",
    badgeBg: `${COLORS.gold}15`,
    badgeText: COLORS.gold,
    description: [
      "Designed mobile, tablet, and desktop interfaces in Figma across multiple client projects.",
      "Developed user flows, wireframes, and visually consistent UI components to improve usability.",
      "Iterated on designs based on stakeholder feedback and technical constraints.",
      "Collaborated closely with developers and product managers to ensure designs were feasible, accessible, and aligned with project goals.",
    ],
  },
];

const ExperienceEducation: React.FC = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, {
    amount: 0.15,
    once: false, // 🔑 animate every visit
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  /* ---------------- Variants ---------------- */

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="relative w-full">
      <motion.div
        ref={containerRef}
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="relative w-full py-12 lg:py-24 overflow-hidden"
        style={{ backgroundColor: COLORS.bg }}
      >
        <motion.div
          className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-12 lg:px-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Section Header */}
          <motion.div
            variants={cardVariants}
            className="flex items-center gap-3 mb-6 lg:mb-10"
          >
            <span className="h-px w-6 sm:w-8" style={{ backgroundColor: COLORS.gold }} />
            <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: COLORS.gold }} />
            <span
              className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold"
              style={{ color: COLORS.gold, fontFamily: "'Raleway', sans-serif" }}
            >
              Experience
            </span>
          </motion.div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="group relative p-5 lg:p-8 rounded-sm backdrop-blur-sm flex flex-col"
                style={{
                  backgroundColor: `${COLORS.burgundy}08`,
                  border: `1px solid ${COLORS.gold}20`,
                }}
              >
                {/* Corner Accents */}
                <div
                  className="absolute top-0 left-0 w-3 h-3 lg:w-4 lg:h-4 border-t border-l rounded-tl-sm transition-all duration-300 group-hover:w-5 group-hover:h-5"
                  style={{ borderColor: COLORS.gold }}
                />
                <div
                  className="absolute bottom-0 right-0 w-3 h-3 lg:w-4 lg:h-4 border-b border-r rounded-br-sm transition-all duration-300 group-hover:w-5 group-hover:h-5"
                  style={{ borderColor: COLORS.roseGold }}
                />

                {/* Header */}
                <div className="flex flex-col-reverse lg:block relative mb-1 lg:mb-0">
                  <h3
                    className="text-xl lg:text-3xl font-medium mb-1 lg:mb-2"
                    style={{
                      color: COLORS.burgundy,
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {exp.company}
                  </h3>

                  <div
                    className="self-start mb-2 lg:absolute lg:top-3 lg:right-3 px-2.5 lg:px-3 py-1 text-[10px] lg:text-xs tracking-widest uppercase rounded-full"
                    style={{
                      backgroundColor: exp.badgeBg,
                      color: exp.badgeText,
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    {exp.period}
                  </div>
                </div>

                {/* Role */}
                <p
                  className="text-xs lg:text-sm font-medium mb-3 tracking-wide"
                  style={{
                    color: COLORS.roseGold,
                    fontFamily: "'Raleway', sans-serif",
                  }}
                >
                  {exp.role}
                </p>

                {/* Divider */}
                <div
                  className="w-8 lg:w-12 h-px mb-3"
                  style={{ backgroundColor: `${COLORS.gold}40` }}
                />

                {/* Description */}
                <ul className="space-y-1.5 lg:space-y-2">
                  {exp.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs lg:text-sm leading-relaxed flex items-start gap-2"
                      style={{
                        color: `${COLORS.burgundy}B3`,
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      <span
                        className="w-1 h-1 rounded-full mt-1.5"
                        style={{ backgroundColor: COLORS.roseGold }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceEducation;
