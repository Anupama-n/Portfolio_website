import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Smartphone, Layout, Monitor, X, ZoomIn, ChevronLeft, ChevronRight, FileText, Hourglass, PanelRightClose, PanelRightOpen } from "lucide-react";

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
  white: "#FFFFFF",
};

const FONTS = {
  cursive: "'MonteCarlo', cursive",
  sans: "'Raleway', sans-serif",
  serif: "'Cormorant Garamond', serif",
};

// Navigation Structure
const NAVIGATION = [
  {
    category: "Mobile App Design",
    icon: <Smartphone size={14} />,
    projects: ["hulaki"]
  },
  {
    category: "Web App Design",
    icon: <Monitor size={14} />,
    projects: ["portfolio", "minimal-portfolio", "dotm", "job-portal"]
  },
  {
    category: "Dashboard",
    icon: <Layout size={14} />,
    projects: ["financial"]
  },
  {
    category: "Case Studies",
    icon: <FileText size={14} />,
    projects: ["ux-assessment-dotm", "gen-z-journalism"]
  }
];

// Project Content
const PROJECT_CONTENT: Record<string, any> = {
"hulaki": {
id: "hulaki",
title: "Hulaki Mobile App",
subtitle: "News App Targeting Nepali Audience",
type: "Mobile App Design",
description: "Hulaki is a news app for all age groups, featuring three scrollable UI styles: an image-heavy, social-media-style feed for short-form content (Genz), a clean no-image list view for older users and millennials, and a grid-based layout for general readers, with both light and dark theme support.",
tags: ["Figma", "Mobile UI", "Prototyping"],
links: { live: "#", github: "#" },
screens: [
"images/hulaki9.png",
"images/hulaki10.png",
"images/hulaki11.png",
"images/hulaki12.png",
"images/hulaki13.png",
"images/hulaki14.png",
"images/hulaki15.png",
"images/hulaki16.png",
"images/hulaki17.png",
"images/hulaki5.png",
"images/hulaki6.png",
"images/hulaki7.png",
"images/hulaki8.png",
"images/hulaki3.png",
"images/hulaki4.png",
"images/hulaki1.png",
"images/hulaki2.png",
]
},
"portfolio": {
id: "portfolio",
title: "Portfolio Website",
subtitle: "Personal Branding Identity",
type: "Web App Design",
description: "A digital showcase designed to embody elegance and functionality. This project focuses on personal branding, typographic hierarchy, and motion interaction to create a memorable first impression.",
tags: ["Figma", "Personalized Design", "UX/UI", "Auto Layout", "Responsive"],
links: { live: "#", github: "#" },
screens: [
"images/portfolio- hero.png",
"images/portfolio-about.png",
"images/portfolio-experience.png",
"images/portfolio-beyondwork.png",
"images/portfolio-footer.png"
]
},
"minimal-portfolio": {
id: "minimal-portfolio",
title: "Minimal Portfolio Website",
subtitle: "Clean & Reductive Aesthetics",
type: "Web App Design",
description: "A clean, minimal portfolio infused with custom vector art created in Figma, offering a personal, artistic feel without compromising simplicity.",
tags: ["Figma","Personalized Design", "Vector art", "UX/UI"],
links: { live: "#", github: "#" },
screens: [
"images/portfolio1.png",
"images/portfolio2.png",
"images/portfolio3.png",
"images/portfolio4.png"
]
},
"dotm": {
id: "dotm",
title: "DOTM Portal Redesign",
subtitle: "Government Services Portal",
type: "Web App Design",
description: "A comprehensive redesign of the Department of Transport Management portal. The goal was to simplify complex bureaucratic processes, reduce user error rates during license applications, and modernize the visual identity.",
tags: ["Government Tech", "UX Research", "Information Architecture"],
links: { live: "#", github: "#" },
screens: [
"images/dotm1.png",
"images/dotm2.png",
"images/dotm3.png",
"images/dotm4.png"
]
},
"job-portal": {
id: "job-portal",
title: "Job Portal Platform",
subtitle: "Career Opportunities Hub",
type: "Web App Design",
description: "An employment marketplace connecting job seekers with opportunities. Key features include an AI-powered resume builder, one-tap applications, and a sophisticated search filtering system.",
tags: ["Web Platform", "User Flow", "Marketplace"],
links: { live: "#", github: "#" },
isWip: true,
screens: []
},
"financial": {
id: "financial",
title: "Financial Analytics",
subtitle: "Data Visualization Dashboard",
type: "Dashboard",
description: "A high-density data visualization tool for financial analysts. The dark-mode interface handles complex datasets with ease, offering customizable widgets, real-time stock tickers, and predictive modeling graphs.",
tags: ["SaaS", "Data Viz", "Dark Mode"],
links: { live: "#", github: "#" },
isWip: true,
screens: []
},
"ux-assessment-dotm": {
id: "ux-assessment-dotm",
title: "UX Assessment of DOTM Portal",
subtitle: "Accepted to NCCI Conference - August 2025",
type: "UX Case Study",
description: "A systematic evaluation of the current Department of Transport Management portal using Nielsen's heuristics. This study identifies critical usability bottlenecks and proposes evidence-based design interventions to improve citizen accessibility.",
tags: ["Heuristic Evaluation", "Accessibility", "Research"],
links: {},
pdf: "file/dotm.pdf"
},
"gen-z-journalism": {
id: "gen-z-journalism",
title: "Adapting Journalism for Gen-Z",
subtitle: "Accepted to NCCI Conference - August 2025",
type: "User Research",
description: "An investigative research paper analyzing the news consumption behaviors of Generation Z. The study explores the shift towards short-form visual content and suggests strategic adaptations for traditional journalism platforms.",
tags: ["User Research", "Gen-Z", "Media Studies"],
links: {},
pdf: "file/genz.pdf"
}
};

// Loader Component
const ClassyLoader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-16">
      <div className="relative flex items-center justify-center w-32 h-32">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={COLORS.burgundy}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="70 210"
              opacity="0.4"
            />
          </svg>
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="absolute w-24 h-24"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={COLORS.roseGold}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="40 240"
              opacity="0.6"
            />
          </svg>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-20 h-20 rounded-full"
          style={{ 
            background: `radial-gradient(circle, ${COLORS.roseGold}15 0%, transparent 70%)` 
          }}
        />
        
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <span 
            style={{ 
              fontFamily: FONTS.cursive, 
              fontSize: "2.5rem", 
              color: COLORS.burgundy,
              textShadow: `0 0 20px ${COLORS.roseGold}40`
            }}
          >
            A
          </span>
        </motion.div>
      </div>

      <div className="text-center space-y-4">
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span 
            className="text-sm uppercase tracking-[0.4em] font-light"
            style={{ fontFamily: FONTS.sans, color: COLORS.burgundy }}
          >
            Loading Projects
          </span>
          
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: COLORS.roseGold }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Work In Progress Component
const WorkInProgress: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-20 px-6 text-center border border-[#D4B896]/30 bg-white/40 rounded-sm backdrop-blur-sm"
    >
      <motion.div
        animate={{ rotate: 180 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="mb-6 text-[#B76E79]"
      >
        <Hourglass size={48} strokeWidth={1} />
      </motion.div>
      <h3 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: FONTS.serif, color: COLORS.burgundy }}>
        Work in Progress
      </h3>
      <div className="w-16 h-px bg-[#D4B896] mb-6" />
      <p className="text-lg opacity-70 max-w-md" style={{ fontFamily: FONTS.sans }}>
        This project is currently in progress. Please view other projects for now.
      </p>
    </motion.div>
  );
};

// Main Project Component
const Project: React.FC = () => {
  const [activeProject, setActiveProject] = useState("hulaki");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isMobileSidebarExpanded, setIsMobileSidebarExpanded] = useState(false);

  // Sidebar visibility based on scroll
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const contentEndRef = useRef<HTMLDivElement>(null);

  const currentData = PROJECT_CONTENT[activeProject];

  // Sidebar width constants (6vw for minimal width)
  const COLLAPSED_WIDTH = "6vw";
  const EXPANDED_WIDTH = "72vw";

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Hide sidebar when content end comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSidebarVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (contentEndRef.current) {
      observer.observe(contentEndRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Handle Project Switching & Loading Logic
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setSelectedImageIndex(null);

    const currentData = PROJECT_CONTENT[activeProject];
    const screens = currentData.screens || [];
    const imagePromises = screens.map((src: string) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    });

    const minDelay = new Promise<void>(resolve => setTimeout(resolve, 1000));

    Promise.all([Promise.all(imagePromises), minDelay]).then(() => {
      if (isMounted) setIsLoading(false);
    });

    return () => { isMounted = false; };
  }, [activeProject]);

  // Navigation Handlers
  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!currentData.screens || currentData.screens.length === 0) return;
    setSelectedImageIndex((prev) => 
      prev === null ? null : (prev + 1) % currentData.screens.length
    );
  }, [currentData.screens]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!currentData.screens || currentData.screens.length === 0) return;
    setSelectedImageIndex((prev) => 
      prev === null ? null : (prev - 1 + currentData.screens.length) % currentData.screens.length
    );
  }, [currentData.screens]);

  // Keyboard Support
  useEffect(() => {
    if (selectedImageIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedImageIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev]);

  const isMobileLayout = currentData.type === "Mobile App Design";

  return (
    <div className="w-full min-h-screen pt-24 pb-20 px-6 sm:px-10 lg:px-16" style={{ backgroundColor: COLORS.bg }}>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Desktop Sidebar Navigation */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32 space-y-8">
            {NAVIGATION.map((group) => (
              <div key={group.category}>
                <h3 
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-4 opacity-60"
                  style={{ color: COLORS.burgundy, fontFamily: FONTS.sans }}
                >
                  {group.icon}
                  {group.category}
                </h3>
                <div className="flex flex-col gap-3 pl-6 border-l border-[#D4B896]/30">
                  {group.projects.map((pid) => (
                    <button
                      key={pid}
                      onClick={() => activeProject !== pid && setActiveProject(pid)}
                      disabled={isLoading && activeProject === pid}
                      className="text-left text-base transition-all duration-300 relative group"
                      style={{
                        fontFamily: FONTS.serif,
                        color: activeProject === pid ? COLORS.roseGold : COLORS.burgundy,
                        fontWeight: activeProject === pid ? 600 : 400
                      }}
                    >
                      {PROJECT_CONTENT[pid].title}
                      <span className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#B76E79] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {activeProject === pid && (
                        <motion.span 
                          layoutId="activeDot"
                          className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#B76E79]"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Collapsible Sidebar (Right) */}
        <motion.div 
          className="lg:hidden fixed right-0 z-40"
          initial={{ width: COLLAPSED_WIDTH, opacity: 1 }}
          animate={{ 
            width: isMobileSidebarExpanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
            opacity: isSidebarVisible ? 1 : 0,
            pointerEvents: isSidebarVisible ? "auto" : "none"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.05}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipeThreshold = 50;
            const velocityThreshold = 200;
            
            // If expanded, swipe right (positive) to close
            if (isMobileSidebarExpanded) {
              if (offset.x > swipeThreshold || velocity.x > velocityThreshold) {
                setIsMobileSidebarExpanded(false);
              }
            } 
            // If collapsed, swipe left (negative) to open
            else {
              if (offset.x < -swipeThreshold || velocity.x < -velocityThreshold) {
                setIsMobileSidebarExpanded(true);
              }
            }
          }}
          style={{ 
            backgroundColor: COLORS.cream,
            borderLeft: `1px solid ${COLORS.roseGold}50`,
            borderTop: `1px solid ${COLORS.roseGold}50`,
            borderBottom: `1px solid ${COLORS.roseGold}50`,
            borderRight: "none",
            borderRadius: "10px 0 0 10px",
            boxShadow: "-4px 0 20px rgba(45, 22, 26, 0.05)",
            top: "4rem",
            height: "calc(100dvh - 4rem)",
            touchAction: "pan-y"
          }}
        >
          <div className="h-full flex flex-col pt-6 overflow-hidden">
            
            {/* Toggle Button */}
            <button
              onClick={() => setIsMobileSidebarExpanded(!isMobileSidebarExpanded)}
              className="absolute top-3 -left-3 z-50 w-6 h-6 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
              style={{ 
                backgroundColor: COLORS.roseGold,
                color: COLORS.white,
                boxShadow: "0 2px 10px rgba(183, 110, 121, 0.4)"
              }}
              aria-label={isMobileSidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
            >
              <motion.div
                animate={{ rotate: isMobileSidebarExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileSidebarExpanded ? <PanelRightClose size={12} /> : <PanelRightOpen size={12} />}
              </motion.div>
            </button>

            {/* Scrollable Navigation Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden px-2 pb-6">
              
              <AnimatePresence mode="wait">
                {!isMobileSidebarExpanded ? (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center gap-2 pt-4"
                  >
                    {NAVIGATION.map((group, groupIndex) => (
                      <div key={group.category} className="flex flex-col items-center gap-1 mb-3">
                        <div 
                          className="w-6 h-6 rounded-lg flex items-center justify-center opacity-60"
                          style={{ 
                            backgroundColor: `${COLORS.goldLight}30`,
                            color: COLORS.burgundy
                          }}
                          title={group.category}
                        >
                          {React.cloneElement(group.icon, { size: 12 })}
                        </div>
                        
                        <div className="flex flex-col gap-1 mt-1">
                          {group.projects.map((pid) => (
                            <button
                              key={pid}
                              onClick={() => {
                                if (activeProject !== pid) setActiveProject(pid);
                              }}
                              className="w-2 h-2 rounded-full transition-all duration-300 hover:scale-150"
                              style={{ 
                                backgroundColor: activeProject === pid ? COLORS.roseGold : `${COLORS.burgundy}30`,
                                boxShadow: activeProject === pid ? `0 0 6px ${COLORS.roseGold}60` : 'none'
                              }}
                              title={PROJECT_CONTENT[pid].title}
                            />
                          ))}
                        </div>
                        
                        {groupIndex < NAVIGATION.length - 1 && (
                          <div 
                            className="w-4 h-px mt-2"
                            style={{ backgroundColor: `${COLORS.goldLight}40` }}
                          />
                        )}
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="space-y-4 pt-4"
                  >
                    <div className="px-2 mb-6">
                      <h2 
                        className="text-lg font-medium"
                        style={{ fontFamily: FONTS.serif, color: COLORS.burgundy }}
                      >
                        Projects
                      </h2>
                      <div 
                        className="w-12 h-0.5 mt-2 rounded-full"
                        style={{ backgroundColor: COLORS.roseGold }}
                      />
                    </div>

                    {NAVIGATION.map((group) => (
                      <div key={group.category} className="px-2">
                        <h3 
                          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] mb-3 opacity-50"
                          style={{ color: COLORS.burgundy, fontFamily: FONTS.sans }}
                        >
                          {group.icon}
                          <span className="truncate">{group.category}</span>
                        </h3>
                        <div className="flex flex-col space-y-1">
                          {group.projects.map((pid) => (
                            <button
                              key={pid}
                              onClick={() => {
                                if (activeProject !== pid) setActiveProject(pid);
                                setIsMobileSidebarExpanded(false);
                              }}
                              className={`w-full text-left py-2.5 px-3 rounded-lg border transition-all duration-200 text-sm truncate ${
                                activeProject === pid 
                                  ? 'border-transparent shadow-sm' 
                                  : 'bg-transparent border-transparent hover:border-transparent'
                              }`}
                              style={{
                                fontFamily: FONTS.serif,
                                backgroundColor: activeProject === pid ? COLORS.roseGold : 'transparent',
                                color: activeProject === pid ? COLORS.white : COLORS.burgundy,
                              }}
                            >
                              {PROJECT_CONTENT[pid].title}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Backdrop for expanded sidebar (mobile) */}
        <AnimatePresence>
          {isMobileSidebarExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileSidebarExpanded(false)}
              className="lg:hidden fixed inset-0 z-30 bg-black/10 backdrop-blur-[2px]"
            />
          )}
        </AnimatePresence>

        {/* Main Content Area */}
        <div className="col-span-1 lg:col-span-9 min-h-[60vh] pr-[6vw] lg:pr-0 pl-0">
          <AnimatePresence mode="wait">
            {isLoading ? (
               <motion.div
                 key="loader"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.3 }}
                 className="flex h-full min-h-[50vh] items-center justify-center"
               >
                 <ClassyLoader />
               </motion.div>
            ) : (
               <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Project Header */}
                <div className="mb-8 md:mb-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 md:px-3 md:py-1 bg-[#D4B896]/20 rounded text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#C9A961]">
                      {currentData.type}
                    </span>
                    <div className="h-px flex-grow bg-[#D4B896]/30" />
                  </div>
                  
                  <h2 className="text-2xl md:text-5xl mb-2" style={{ fontFamily: FONTS.serif, color: COLORS.burgundy }}>
                    {currentData.title}
                  </h2>
                  <p className="text-sm md:text-xl opacity-60 italic mb-4 md:mb-6" style={{ fontFamily: FONTS.serif, color: COLORS.burgundy }}>
                    {currentData.subtitle}
                  </p>

                  <p className="text-sm md:text-base max-w-2xl leading-relaxed opacity-80 mb-6" style={{ fontFamily: FONTS.sans, color: COLORS.burgundy }}>
                    {currentData.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentData.tags.map((tag: string) => (
                      <span key={tag} className="px-2 py-0.5 md:px-3 md:py-1 border border-[#D4B896]/40 rounded-sm text-[10px] md:text-xs text-[#2D161A]/70 uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(currentData.links?.live || currentData.links?.github || currentData.pdf) && (
                    <div className="flex gap-6 flex-wrap">
                      {currentData.links.live && currentData.links.live !== "#" && (
                        <a href={currentData.links.live} className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[#B76E79] transition-colors" style={{ color: COLORS.burgundy }}>
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      )}
                      {currentData.links.github && currentData.links.github !== "#" && (
                        <a href={currentData.links.github} className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[#B76E79] transition-colors" style={{ color: COLORS.burgundy }}>
                          <Github size={14} /> Codebase
                        </a>
                      )}
                      {currentData.pdf && (
                        <a href={currentData.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[#B76E79] transition-colors" style={{ color: COLORS.burgundy }}>
                          <FileText size={14} /> Read PDF
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Content Display */}
                {currentData.isWip ? (
                  <WorkInProgress />
                ) : currentData.pdf ? (
                  <div className="w-full h-[85vh] border border-[#D4B896]/30 rounded-sm bg-white relative group overflow-hidden">
                    <iframe
                      src={`${currentData.pdf}#view=FitH`}
                      className="w-full h-full"
                      title={currentData.title}
                    />
                    
                    {/* Desktop Overlay Button (kept as helper) */}
                    <a
                      href={currentData.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden md:flex absolute top-4 right-4 items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur border border-[#D4B896]/50 text-[#2D161A] rounded-sm text-xs font-bold uppercase tracking-widest shadow-sm hover:bg-[#2D161A] hover:text-white transition-all opacity-0 group-hover:opacity-100 duration-300"
                    >
                      <ExternalLink size={12} /> Open Fullscreen
                    </a>
                  </div>
                ) : (
                  <div className={`grid gap-6 ${isMobileLayout ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}>
                    {currentData.screens && currentData.screens.map((url: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative cursor-zoom-in"
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <div className="overflow-hidden rounded shadow-sm bg-white transition-all duration-500 hover:shadow-xl relative border border-[#C9A961]/40">
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                             <ZoomIn className="text-white drop-shadow-md" size={32} />
                          </div>

                          <img 
                            src={url} 
                            alt={`${currentData.title} Screen ${index + 1}`}
                            className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Sentinel element to detect end of content */}
          <div ref={contentEndRef} className="h-1" />
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && currentData.screens && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button 
              className="absolute top-5 right-5 z-50 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
              onClick={() => setSelectedImageIndex(null)}
            >
              <X size={28} />
            </button>

            <button
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 hover:scale-110 backdrop-blur-md rounded-full text-white transition-all duration-300"
              onClick={handlePrev}
            >
              <ChevronLeft size={32} />
            </button>

            <button
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 hover:scale-110 backdrop-blur-md rounded-full text-white transition-all duration-300"
              onClick={handleNext}
            >
              <ChevronRight size={32} />
            </button>

            <div className="relative w-full h-full flex items-center justify-center p-4 lg:p-12">
               <AnimatePresence mode="wait">
                 <motion.img
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  src={currentData.screens[selectedImageIndex]}
                  alt={`Full view ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-sm shadow-2xl border border-[#C9A961]/50"
                  onClick={(e) => e.stopPropagation()}
                />
               </AnimatePresence>
            </div>
            
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 font-medium tracking-widest text-sm" style={{ fontFamily: FONTS.sans }}>
              {selectedImageIndex + 1} / {currentData.screens.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;