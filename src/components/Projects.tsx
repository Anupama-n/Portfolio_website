"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Palette, Users, Lightbulb, Briefcase, Play, Pause } from "lucide-react"

const skills = {
  Design: [
    "UI/UX Design",
    "Figma",
    "Adobe Creative Suite",
    "Responsive Design",
    "Design Systems",
    "Prototyping",
    "User Research",
    "Wireframing",
  ],
  SoftSkills: [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Project Management",
    "Critical Thinking",
    "Adaptability",
    "Leadership",
    "Time Management",
  ],
}

const categories = [
  "Logo Designs",
  "Mobile App Designs",
  "Web App Designs",
  "Flutter Projects",
  "Web Development Projects",
]

const videoShowcase = [
  {
    title: "Hulaki Initial Screen Designs",
    description:
      'Created an interactive mobile app interface with dynamic welcome screens, an engaging "Get Started" experience, and intuitive login/signup flows, ensuring seamless navigation for an optimized user journey.',
    media: "/images/Video1.mp4",
    aspectRatio: "mobile",
    category: "Mobile App Design",
  },
  {
    title: "Hulaki App Main Design",
    description:
      "Showcasing the main pages of Hulaki in English (also available in Nepali). Includes three unique news layouts, each designed for a specific target audience to deliver a customized user experience.",
    media: "/images/Video2.mp4",
    aspectRatio: "mobile",
    category: "Mobile App Design",
  },
  {
    title: "Portfolio Website Design",
    description:
      "Modern, minimal, and aesthetic web portfolio designed with a soft pastel color palette for a gentle glow, complemented by custom hand-drawn vector illustrations in Figma for a unique creative touch.",
    media: "/images/Video3.mp4",
    aspectRatio: "desktop",
    category: "Web App Design",
  },
  {
    title: "DOTM Portal Redesign",
    description:
      "Led a UX research project on the DOTM portal, uncovering critical usability issues. Redesigned the most frequently used screens to enhance navigation, improve accessibility, and create a more user-friendly experience.",
    media: "/images/Video4.mp4",
    aspectRatio: "desktop",
    category: "Desktop App Design",
  },
]

const projects = [
  // Web App Designs (images only)
  {
    title: "Portfolio Website Design",
    description:
      "A minimal, elegant portfolio website with a custom hand-drawn vector illustration, designed to highlight my work and creative identity with clarity and subtlety.",
    media: "/images/portfolio_website.png",
    mediaType: "image",
    link: "https://www.figma.com/design/UU9aslccru9gpuyEAHnKug/Portfolio-website?node-id=0-1&t=Sdx7s7VHKLHQhTjc-1",
    category: "Web App Designs",
    aspectRatio: "desktop",
  },
  {
    title: "DOTM Portal Redesign",
    description:
      "Redesigned key screens of the DOTM portal by identifying and addressing major usability issues in the existing interface.",
    media: "/images/DOTM_redesigned.png",
    mediaType: "image",
    link: "https://www.figma.com/design/UU9aslccru9gpuyEAHnKug/Portfolio-website?node-id=0-1&t=Sdx7s7VHKLHQhTjc-1",
    category: "Web App Designs",
    aspectRatio: "desktop",
  },
  // Keep existing Flutter and Web Development projects

  {
    title: "Portfolio Web App",
    description:
      "A personal portfolio built with React to showcase my projects and design work. It features custom vector artwork, a fully responsive layout for seamless viewing on all devices, and smooth, intuitive navigation to enhance the user experience.",
    media: "/images/portfolio1.png",
    mediaType: "image",
    link: "https://github.com/Anupama-n/Portfolio_website",
    category: "Web Development Projects",
    aspectRatio: "desktop",
  },
  {
    title: "Job Portal App",
    description:
      "A MERN stack job portal featuring user authentication and role-based access control. It supports job listings, application submissions, and comprehensive profile management for both employers and job seekers.",
    media: "/images/image.png",
    mediaType: "image",
    link: "https://github.com/Anupama-n/job-portal",
    category: "Web Development Projects",
    aspectRatio: "desktop",
  },

  // Mobile App Designs (images only)
  {
    title: "Hulaki Mobile App Design",
    description:
      "Hulaki is a news aggregator app that lets users personalize content by language, theme, and topics. It offers three UI modes—Listicle for quick reads, Brainrot for social-style scrolling, and Pinterest-style for visual discovery—each designed to study user engagement and preference.",
    media: "/images/hulaki.png",
    mediaType: "image",
    link: "https://www.figma.com/design/jlhee6nGQIxAnqJNOi7Yz9/HULAKI?t=A20G9z1fzIbv9znd-0",
    category: "Mobile App Designs",
    aspectRatio: "mobile",
  },
  {
    title: "Hulaki Mobile App",
    description:
      "Developed UI screens in Flutter for a group project—a news aggregator app featuring three distinct interfaces to explore user engagement. Focused on building responsive, user-friendly layouts based on collaborative team designs.",
    media: "/images/hulaki1.png",
    mediaType: "image",
    link: "/file/hulaki-report.pdf",
    category: "Flutter Projects",
    aspectRatio: "mobile",
  },
  // Logo Designs

  {
    title: "Hulaki App Logo",
    description:
      "The Hukali logo symbolizes trusted news delivery, inspired by traditional mail. Designed in Figma with Material UI colors, it blends minimalism and nostalgia.",
    media: "/images/Hulaki_logo.png",
    mediaType: "image",
    link: "https://www.figma.com/design/jlhee6nGQIxAnqJNOi7Yz9/HULAKI?t=A20G9z1fzIbv9znd-0",
    category: "Logo Designs",
    aspectRatio: "square",
  },
  {
    title: "KURCH Logo",
    description:
      "This logo for Kathmandu University Research and Collaboration Hub symbolizes research, innovation, and unity. Designed with a clean, academic palette to reflect clarity and professionalism.",
    media: "/images/KURCH_logo.png",
    mediaType: "image",
    link: "https://www.figma.com/design/KWRaNqyuESApgMFNRGc7WP/KURCH?node-id=2-2&t=jdQ14BY8YTYIVOFt-1",
    category: "Logo Designs",
    aspectRatio: "square",
  },

  {
    title: "Blog App",
    description:
      "Developed a full-stack MERN blog application with complete CRUD operations for posts. It includes user authentication, profile management, and update features, all delivered through a clean and user-friendly interface for an engaging experience.",
    media: "/images/image1.png",
    mediaType: "image",
    link: "https://github.com/Anupama-n/project-blogapp",
    category: "Web Development Projects",
    aspectRatio: "desktop",
  },
]

const FullScreenVideoPlayer: React.FC<{
  videos: typeof videoShowcase
}> = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)

  const currentVideo = videos[currentVideoIndex]

  const isShowingHulakiPair = currentVideoIndex === 0 || currentVideoIndex === 1
  const hulakiVideo1 = videos[0]
  const hulakiVideo2 = videos[1]

  const nextVideo = () => {
    if (currentVideoIndex === 0 || currentVideoIndex === 1) {
      setCurrentVideoIndex(2)
    } else {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
    }
    setShowFullDescription(false)
  }

  const prevVideo = () => {
    if (currentVideoIndex === 2) {
      setCurrentVideoIndex(0)
    } else if (currentVideoIndex === 0 || currentVideoIndex === 1) {
      setCurrentVideoIndex(videos.length - 1)
    } else {
      setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
    }
    setShowFullDescription(false)
  }

  const goToVideo = (index: number) => {
    setCurrentVideoIndex(index)
    setShowFullDescription(false)
  }

  const togglePlay = () => {
    if (isShowingHulakiPair) {
      if (videoRef.current && videoRef2.current) {
        if (isPlaying) {
          videoRef.current.pause()
          videoRef2.current.pause()
          setShowOverlay(true)
        } else {
          videoRef.current.play()
          videoRef2.current.play()
          setTimeout(() => setShowOverlay(false), 500)
        }
        setIsPlaying(!isPlaying)
      }
    } else {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause()
          setShowOverlay(true)
        } else {
          videoRef.current.play()
          setTimeout(() => setShowOverlay(false), 500)
        }
        setIsPlaying(!isPlaying)
      }
    }
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault()
          prevVideo()
          break
        case "ArrowRight":
          e.preventDefault()
          nextVideo()
          break
        case " ":
          e.preventDefault()
          togglePlay()
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  useEffect(() => {
    setIsPlaying(false)
    setShowOverlay(true)
    setShowFullDescription(false)
  }, [currentVideoIndex])

  const getVideoContainerClasses = () => {
    if (isShowingHulakiPair) {
      return "aspect-[9/16] w-full max-w-[140px] sm:max-w-[180px] md:max-w-[200px] min-h-[294px] sm:min-h-[388px] md:min-h-[424px]"
    }

    switch (currentVideo.aspectRatio) {
      case "mobile":
        return "aspect-[9/16] w-full max-w-[180px] sm:max-w-[240px] md:max-w-[260px] mx-auto min-h-[376px] sm:min-h-[554px] md:min-h-[589px]"
      case "desktop":
        if (currentVideoIndex === videoShowcase.length - 1) {
          return "aspect-[16/9] w-full max-w-[432px] sm:max-w-[692px] mx-auto min-h-[236px] sm:min-h-[385px]"
        } else {
          return "aspect-[16/9] w-full max-w-[336px] sm:max-w-[580px] mx-auto min-h-[214px] sm:min-h-[385px]"
        }
      default:
        return "aspect-video w-full max-w-[280px] sm:max-w-[524px] mx-auto"
    }
  }

  const getDisplayContent = () => {
    if (isShowingHulakiPair) {
      return {
        title: "Hulaki Mobile App Design Showcase",
        description:
          "Complete mobile app design featuring dynamic welcome screens, intuitive login/signup flows, and three unique news layouts (Listicle, Brainrot, and Pinterest-style). Available in both English and Nepali, each interface is designed for specific target audiences to deliver a customized user experience and study user engagement patterns.",
        category: "Mobile App Design",
      }
    }
    return {
      title: currentVideo.title,
      description: currentVideo.description,
      category: currentVideo.category,
    }
  }

  const displayContent = getDisplayContent()

  return (
    <div className="bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-xl sm:rounded-[40px] p-2 sm:p-8 md:p-10 max-w-5xl mb-4 sm:mb-16 transition-shadow duration-300 mx-auto lg:ml-24 lg:mr-0 hover:shadow-[0_10px_40px_rgba(137,137,137,0.2)]">
      <div className="bg-[#FFE4E4] border border-[#f5c2c2] rounded-lg sm:rounded-2xl p-2 sm:p-6 border-2 relative">
        <div className="flex items-center gap-1 sm:gap-3 mb-2 sm:mb-6">
          <div className="p-1.5 sm:p-2 bg-gradient-to-br from-orange-500 to-pink-500 rounded-md sm:rounded-lg">
            <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <h3
            className="text-sm sm:text-2xl font-semibold text-gray-700 tracking-wide"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            Design Showcase
          </h3>
          <div className="flex-1 h-px bg-gradient-to-r from-orange-300 to-transparent ml-1 sm:ml-4"></div>
        </div>

        <div className="mb-2 sm:mb-6">
          {isShowingHulakiPair ? (
            <div className="flex gap-2 sm:gap-4 justify-center">
              {[hulakiVideo1, hulakiVideo2].map((video, index) => (
                <div
                  key={index}
                  className={`relative ${getVideoContainerClasses()} overflow-hidden rounded-lg sm:rounded-xl border-2 border-gray-200 group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 hover:border-orange-200`}
                  onClick={togglePlay}
                >
                  <video
                    ref={index === 0 ? videoRef : videoRef2}
                    src={video.media}
                    className="w-full h-full object-cover transition-transform duration-300"
                    loop
                    muted
                    playsInline
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 flex items-center justify-center transition-opacity duration-300 ${
                      !isPlaying || showOverlay ? "opacity-100" : "opacity-0"
                    }`}
                    onMouseEnter={() => isPlaying && setShowOverlay(true)}
                    onMouseLeave={() => isPlaying && setTimeout(() => setShowOverlay(false), 200)}
                  >
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-1.5 sm:p-2 transform transition-all duration-200 hover:scale-110 shadow-lg backdrop-blur-sm">
                      {isPlaying ? (
                        <Pause className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800" />
                      ) : (
                        <Play className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800 ml-0.5" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`relative ${getVideoContainerClasses()} overflow-hidden rounded-lg sm:rounded-xl border-2 border-gray-200 group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 hover:border-orange-200`}
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src={currentVideo.media}
                className="w-full h-full object-cover transition-transform duration-300"
                loop
                muted
                playsInline
              />

              <div
                className={`absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 flex items-center justify-center transition-opacity duration-300 ${
                  !isPlaying || showOverlay ? "opacity-100" : "opacity-0"
                }`}
                onMouseEnter={() => isPlaying && setShowOverlay(true)}
                onMouseLeave={() => isPlaying && setTimeout(() => setShowOverlay(false), 200)}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-2 sm:p-3 transform transition-all duration-200 hover:scale-110 shadow-lg backdrop-blur-sm">
                  {isPlaying ? (
                    <Pause className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
                  ) : (
                    <Play className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800 ml-1" />
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="mt-2 sm:mt-6">
            <div className="flex justify-center mb-2 sm:mb-3">
              <span
                className="inline-flex items-center gap-1 sm:gap-1.5 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-orange-200 shadow-sm"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full"></div>
                {displayContent.category}
              </span>
            </div>

            <h4
              className="text-sm sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4 text-center leading-tight"
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
              {displayContent.title}
            </h4>

            <div className="bg-white/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-5 border border-orange-100 shadow-sm">
              <p
                className={`text-gray-700 text-xs sm:text-base leading-relaxed text-center transition-all duration-300 ${
                  showFullDescription ? "" : "line-clamp-2"
                }`}
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                {displayContent.description}
              </p>

              {displayContent.description.length > 120 && (
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="mt-2 sm:mt-3 text-orange-600 hover:text-orange-800 text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-1 mx-auto md:hidden"
                  style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                >
                  {showFullDescription ? (
                    <>
                      Show Less
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 transform rotate-180 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Read More
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="flex justify-center mt-2 sm:mt-4">
              <span
                className="text-xs sm:text-sm text-gray-500 bg-white/70 px-2 sm:px-3 py-1 rounded-full border border-gray-200"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                {isShowingHulakiPair ? "1-2" : currentVideoIndex === 2 ? "3" : "4"} of {videos.length}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <button
            onClick={prevVideo}
            className="p-1.5 sm:p-2 bg-gradient-to-r from-orange-100 to-pink-100 hover:from-orange-200 hover:to-pink-200 rounded-full transition-all duration-200 hover:scale-110 border border-orange-200 hover:border-orange-300"
            aria-label="Previous video"
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-1 sm:gap-2">
            <button
              onClick={() => goToVideo(0)}
              className={`w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 hover:scale-125 ${
                isShowingHulakiPair
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 shadow-md"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label="Go to Hulaki showcase"
            />
            {videos.slice(2).map((_, index) => (
              <button
                key={index + 2}
                onClick={() => goToVideo(index + 2)}
                className={`w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 hover:scale-125 ${
                  currentVideoIndex === index + 2
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 shadow-md"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to video ${index + 3}`}
              />
            ))}
          </div>

          <button
            onClick={nextVideo}
            className="p-1.5 sm:p-2 bg-gradient-to-r from-orange-100 to-pink-100 hover:from-orange-200 hover:to-pink-200 rounded-full transition-all duration-200 hover:scale-110 border border-orange-200 hover:border-orange-300"
            aria-label="Next video"
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

const MySkillsAndWorks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isImageVisible, setIsImageVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight

        const visibleTop = Math.max(0, rect.top)
        const visibleBottom = Math.min(viewportHeight, rect.bottom)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)
        const coveragePercentage = visibleHeight / viewportHeight

        const sectionBottomFromScreenBottom = viewportHeight - rect.bottom
        const hideThreshold = viewportHeight * 0.05

        const shouldShowImage = coveragePercentage >= 0.95 && sectionBottomFromScreenBottom < hideThreshold

        setIsImageVisible(shouldShowImage)
      }
    }

    const observer = new IntersectionObserver(
      ([]) => {
        handleScroll()
      },
      {
        threshold: 0,
        rootMargin: "0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    handleScroll()

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  const getSkillTagColor = (_category: string) => {
    return "bg-[#FFE4E4] border border-[#f5c2c2] text-gray-800"
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      Design: <Palette className="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" />,
      SoftSkills: <Users className="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" />,
      Projects: <Briefcase className="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" />,
    }
    return icons[category as keyof typeof icons] || <Lightbulb className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
  }

  return (
    <>
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
        .image-glow {
          filter: drop-shadow(0 10px 30px rgba(255, 182, 193, 0.3));
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.02);
          }
        }
        @media (max-width: 1536px) {
          .floating-image {
            animation: float 8s ease-in-out infinite;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="projects"
        className="bg-[#FFF2F2] min-h-screen px-3 sm:px-6 md:px-8 lg:px-32 py-6 sm:py-16 text-gray-800 relative overflow-hidden"
      >
        <h2
          className="text-2xl sm:text-4xl md:text-5xl font-medium bg-gradient-to-b from-black to-[#666666] text-transparent bg-clip-text mb-4 sm:mb-10 mx-auto text-center lg:text-left lg:ml-24"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          My Skills
        </h2>

        <div className="relative bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-2xl sm:rounded-[40px] p-3 sm:p-8 md:p-10 max-w-5xl mb-6 sm:mb-16 transition-shadow duration-300 mx-auto lg:ml-24 lg:mr-0 hover:shadow-[0_10px_40px_rgba(137,137,137,0.2)]">
          <div className="grid gap-4 sm:gap-8 md:gap-10">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="group">
                <div
                  className={`${getSkillTagColor(category)} rounded-xl sm:rounded-2xl p-3 sm:p-6 border-2 transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
                    {getCategoryIcon(category)}
                    <h3
                      className="text-base sm:text-2xl font-semibold text-gray-700 tracking-wide"
                      style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                    >
                      {category === "CoreSkills" ? "Core Skills" : category === "SoftSkills" ? "Soft Skills" : category}
                    </h3>
                    <div className="bg-[#FFE4E4] border border-[#f5c2c2] flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-2 sm:ml-4"></div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                    {items.map((skill, idx) => (
                      <div
                        key={`${category}-${idx}`}
                        className={`${getSkillTagColor(category)} px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md cursor-default group-hover:translate-y-[-2px]`}
                        style={{
                          fontFamily: "'Instrument Sans', sans-serif",
                          fontWeight: 500,
                          animationDelay: `${idx * 100}ms`,
                        }}
                      >
                        <span className="text-xs sm:text-base leading-relaxed">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2
          className="text-2xl sm:text-4xl md:text-5xl font-medium bg-gradient-to-b from-black to-[#666666] text-transparent bg-clip-text text-center mb-4 sm:mb-10 mx-auto text-center lg:text-left lg:ml-24 mt-16 sm:mt-24 lg:mt-32"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          My Works
        </h2>

        <div className="bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-2xl sm:rounded-[40px] p-3 sm:p-8 md:p-10 max-w-5xl mb-6 sm:mb-16 transition-shadow duration-300 mx-auto lg:ml-24 lg:mr-0 hover:shadow-[0_10px_40px_rgba(137,137,137,0.2)]">
          <div
            className={`${getSkillTagColor("Projects")} rounded-xl sm:rounded-2xl p-3 sm:p-6 border-2 transition-all duration-300 hover:shadow-lg mb-4 sm:mb-10`}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
              {getCategoryIcon("Projects")}
              <h3
                className="text-base sm:text-2xl font-semibold text-gray-700 tracking-wide"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                Featured Projects
              </h3>
              <div className="bg-[#FFE4E4] border border-[#f5c2c2] flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-2 sm:ml-4"></div>
            </div>

            <div className="flex overflow-x-auto gap-2 sm:gap-3 mb-4 sm:mb-10 px-2 sm:px-4 hide-scrollbar">
              <span
                onClick={() => handleCategoryClick("All")}
                className={`flex-shrink-0 whitespace-nowrap px-3 sm:px-4 md:px-5 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg sm:rounded-xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-md ${
                  selectedCategory === "All"
                    ? "bg-[#FFE4E4] border-[#f5c2c2] border-orange-200 text-orange-800 shadow-lg"
                    : "bg-[#FFE4E4] border border-[#f5c2c2] text-gray-700 hover:bg-orange-50 hover:border-orange-200"
                }`}
                style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 500 }}
              >
                All
              </span>
              {categories.map((cat, idx) => (
                <span
                  key={idx}
                  onClick={() => handleCategoryClick(cat)}
                  className={`flex-shrink-0 whitespace-nowrap px-3 sm:px-4 md:px-5 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg sm:rounded-xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-md ${
                    selectedCategory === cat
                      ? "bg-[#FFE4E4] border-[#f5c2c2] border-orange-200 text-orange-800 shadow-lg"
                      : "bg-[#FFE4E4] border border-[#f5c2c2] text-gray-700 hover:bg-orange-50 hover:border-orange-200"
                  }`}
                  style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 500 }}
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-2 max-h-[400px] sm:max-h-[700px] overflow-y-auto hide-scrollbar">
              {filteredProjects.length === 0 ? (
                <div className="text-center py-6 sm:py-12 col-span-full">
                  <p
                    className="text-gray-500 text-sm sm:text-lg"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    No projects found in this category.
                  </p>
                </div>
              ) : (
                filteredProjects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFE4E4] border border-[#f5c2c2] rounded-xl sm:rounded-3xl p-1 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group border-2 hover:border-orange-200 m-1 sm:m-2"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <div
                          className={`
                            ${
                              proj.aspectRatio === "mobile"
                                ? "aspect-[9/16] max-w-[200px]"
                                : proj.aspectRatio === "square"
                                  ? "aspect-square max-w-[200px]"
                                  : "aspect-[16/9] w-full max-w-[300px]"
                            } 
                            overflow-hidden rounded-lg border-2 border-gray-200 group-hover:border-orange-200 transition-colors duration-300
                          `}
                        >
                          <img
                            src={proj.media || "/placeholder.svg"}
                            alt={proj.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      <div className="text-center space-y-2">
                        <h3
                          className="text-sm sm:text-xl font-medium text-gray-800"
                          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                        >
                          {proj.title}
                        </h3>
                        <p
                          className="text-xs text-gray-600 leading-relaxed"
                          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                        >
                          {proj.description}
                        </p>
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-medium"
                          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <FullScreenVideoPlayer videos={videoShowcase} />

        <div className="flex justify-center mt-6 sm:mt-16 lg:hidden">
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            }}
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"
            style={{
              backgroundColor: "#423E3E",
              color: "#FFF2F2",
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: "12px",
              fontWeight: "500",
              border: "none",
              cursor: "pointer",
            }}
          >
            Get In Touch
          </button>
        </div>
      </section>

      <div
        className={`hidden xl:block fixed bottom-20 right-0 pointer-events-none select-none z-20 transition-all duration-700 ease-out ${
          isImageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <img
          src="/images/my_works.png"
          alt="Creative Illustration"
          className="w-[34rem] h-auto floating-image image-glow object-contain max-w-none"
          style={{
            transformOrigin: "center bottom",
            mixBlendMode: "multiply",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF2F2] via-transparent to-transparent opacity-20 rounded-t-full blur-lg -z-10"></div>
      </div>

      <div
        className={`hidden lg:block xl:hidden fixed bottom-20 right-4 pointer-events-none select-none z-20 transition-all duration-700 ease-out ${
          isImageVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
        }`}
      >
        <img
          src="/images/my_works.png"
          alt="Creative Illustration"
          className="w-[28rem] h-auto floating-image image-glow object-contain"
          style={{
            transformOrigin: "center bottom",
            mixBlendMode: "multiply",
          }}
        />
      </div>
    </>
  )
}

export default MySkillsAndWorks
