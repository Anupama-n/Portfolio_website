import React, { useState } from 'react';
import { Palette, Users, Lightbulb, Briefcase } from 'lucide-react';

const skills = {


 Design: [
      "UI/UX Design",
      "Figma",
      "Adobe Creative Suite",
      "Responsive Design",
      "Design Systems",
      "Prototyping",
      "User Research",
      "Wireframing"
    ],
    SoftSkills: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Project Management",
      "Critical Thinking",
      "Adaptability",
      "Leadership",
      "Time Management"
    ]
};


const categories = [
  "Logo Designs", "Mobile App Designs", "Web App Designs", "Flutter Projects", "Web Development Projects"
];

const projects = [
  {
    title: "Hulaki App Logo",
    description:
      "The Hukali logo symbolizes trusted news delivery, inspired by traditional mail. Designed in Figma with Material UI colors, it blends minimalism and nostalgia.",
    image: "/images/Hulaki_logo.png",
    link: "https://www.figma.com/design/jlhee6nGQIxAnqJNOi7Yz9/HULAKI?t=A20G9z1fzIbv9znd-0",
    category: "Logo Designs"
  },
  {
    title: "KURCH Logo",
    description:
      "This logo for Kathmandu University Research and Collaboration Hub symbolizes research, innovation, and unity. Designed with a clean, academic palette to reflect clarity and professionalism.",
    image: "/images/KURCH_logo.png",
    link: "https://www.figma.com/design/KWRaNqyuESApgMFNRGc7WP/KURCH?node-id=2-2&t=jdQ14BY8YTYIVOFt-1",
    category: "Logo Designs"
    // category: "Web Development Projects"
  },
  {
    title: "Hulaki Mobile App Design",
    description:
      "Hulaki is a news aggregator app that lets users personalize content by language, theme, and topics. It offers three UI modes—Listicle for quick reads, Brainrot for social-style scrolling, and Pinterest-style for visual discovery—each designed to study user engagement and preference.",
    image: "/images/hulaki.png",
    link: "https://www.figma.com/design/jlhee6nGQIxAnqJNOi7Yz9/HULAKI?t=A20G9z1fzIbv9znd-0",
    category: "Mobile App Designs"
    // category: "Web Development Projects"
  },
  {
    title: "Portfolio Website Design",
    description:
      "A minimal, elegant portfolio website with a custom hand-drawn vector illustration, designed to highlight my work and creative identity with clarity and subtlety.",
    image: "/images/portfolio_website.png",
    link: "https://www.figma.com/design/UU9aslccru9gpuyEAHnKug/Portfolio-website?node-id=0-1&t=Sdx7s7VHKLHQhTjc-1",
    category: "Web App Designs"
  },
 
  {
    title: "Hulaki Mobile App",
    description:
      "Developed UI screens in Flutter for a group project—a news aggregator app featuring three distinct interfaces to explore user engagement. Focused on building responsive, user-friendly layouts based on collaborative team designs.",
    image: "/images/hulaki1.png",
    link: "/file/hulaki-report.pdf",
    category: "Flutter Projects"
  },
  {
    title: "Portfolio Web App",
    description:
      "A personal portfolio built with React to showcase my projects and design work. It features custom vector artwork, a fully responsive layout for seamless viewing on all devices, and smooth, intuitive navigation to enhance the user experience.",
    image: "/images/portfolio1.png",
    link: "https://github.com/Anupama-n/Portfolio_website",
    category: "Web Development Projects"
  },
  {
    title: "Job Portal App",
    description:
      "A MERN stack job portal featuring user authentication and role-based access control. It supports job listings, application submissions, and comprehensive profile management for both employers and job seekers.",
    image: "/images/image.png",
    link: "https://github.com/Anupama-n/job-portal",
    category: "Web Development Projects"
  },
  {
    title: "Blog App",
    description:
      "Developed a full-stack MERN blog application with complete CRUD operations for posts. It includes user authentication, profile management, and update features, all delivered through a clean and user-friendly interface for an engaging experience.",
    image: "/images/image1.png",
    link: "https://github.com/Anupama-n/project-blogapp",
    category: "Web Development Projects"
  },

];

const MySkillsAndWorks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
 

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
  
   
const getSkillTagColor = (_category: string) => {
  return 'bg-[#FFE4E4] border border-[#f5c2c2] text-gray-800';
};

  const getCategoryIcon = (category: string) => {
    const icons = {
      Design: <Palette className="w-6 h-6 text-orange-600" />,
      SoftSkills: <Users className="w-6 h-6 text-orange-600" />,
      Projects: <Briefcase className="w-6 h-6 text-orange-600" />
    };
    return icons[category as keyof typeof icons] || <Lightbulb className=" w-6 h-6 text-gray-600" />;
  };


   return (
    <>
      {/* Custom CSS for hiding scrollbars */}
      <style>{`
        .hide-scrollbar {
          /* Hide scrollbar for Chrome, Safari and Opera */
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* Internet Explorer 10+ */
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `}</style>

      <section
        id='projects'
        className="bg-[#FFF2F2] min-h-screen px-4 sm:px-6 md:px-8 lg:px-32 py-12 sm:py-16 text-gray-800 relative overflow-hidden"
      >
        <h2
          className=" text-3xl sm:text-4xl md:text-5xl font-medium bg-gradient-to-b from-black to-[#666666] text-transparent bg-clip-text mb-8 sm:mb-10 mx-auto text-center lg:text-left lg:ml-24"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          My Skills
        </h2>

        <div className="relative bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 max-w-5xl mb-12 sm:mb-16 transition-shadow duration-300 mx-auto lg:ml-24 lg:mr-0 hover:shadow-[0_10px_40px_rgba(137,137,137,0.2)]">

          {/* Enhanced Skills Layout */}
          <div className=" grid gap-8 md:gap-10">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="group">
                {/* Category Header with Icon */}
                <div className={`${getSkillTagColor(category)} rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-lg`}>
                  <div className=" flex items-center gap-3 mb-6">
                    {getCategoryIcon(category)}
                    <h3
                      className=" text-xl sm:text-2xl font-semibold text-gray-700 tracking-wide"
                      style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                    >
                      {category === 'CoreSkills' ? 'Core Skills' : 
                       category === 'SoftSkills' ? 'Soft Skills' : 
                       category}
                    </h3>
                    <div className=" bg-[#FFE4E4] border border-[#f5c2c2] flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
                  </div>

                  {/* Skills Grid */}
                  <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {items.map((skill, idx) => (
                      <div
                        key={`${category}-${idx}`}
                        className={`${getSkillTagColor(category)}  px-4 py-3 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md cursor-default group-hover:translate-y-[-2px]`}
                        style={{
                          fontFamily: "'Instrument Sans', sans-serif",
                          fontWeight: 500,
                          animationDelay: `${idx * 100}ms`
                        }}
                      >
                        <span className=" text-sm sm:text-base leading-relaxed">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Works Section */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-medium bg-gradient-to-b from-black to-[#666666] text-transparent bg-clip-text text-center mb-8 sm:mb-10 mx-auto text-center lg:text-left lg:ml-24"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          My Works
        </h2>
        <div className="bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 max-w-5xl mb-12 sm:mb-16 transition-shadow duration-300 mx-auto lg:ml-24 lg:mr-0 hover:shadow-[0_10px_40px_rgba(137,137,137,0.2)]">

         
          <div className={`${getSkillTagColor('Projects')}  rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-lg mb-8`}>
            <div className="flex items-center gap-3 mb-6">
              {getCategoryIcon('Projects')}
              <h3
                className=" text-xl sm:text-2xl font-semibold text-gray-700 tracking-wide"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                Featured Projects
              </h3>
              <div className=" bg-[#FFE4E4] border border-[#f5c2c2] flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
            </div>

            {/* Categories Filter */}
            <div className=" flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 overflow-x-auto sm:overflow-visible hide-scrollbar px-1 sm:px-0">
              <span
                onClick={() => handleCategoryClick("All")}
                className={`whitespace-nowrap px-4 py-3 text-sm sm:text-base rounded-xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-md ${
                  selectedCategory === "All"
                    ? "bg-white border-orange-200 text-orange-800 shadow-lg"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-orange-50 hover:border-orange-200"
                }`}
                style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 500 }}
              >
                All
              </span>

              {categories.map((cat, idx) => (
                <span
                  key={idx}
                  onClick={() => handleCategoryClick(cat)}
                  className={`whitespace-nowrap px-4 py-3 text-sm sm:text-base rounded-xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-md ${
                    selectedCategory === cat
                      ? "bg-[#FFE4E4] border border-[#f5c2c2] text-orange-800 shadow-lg"
                      : "bg-[#FFE4E4] border border-[#f5c2c2] text-gray-700 hover:bg-orange-50 hover:border-orange-200"
                  }`}
                  style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 500 }}
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Projects Grid - Responsive Layout with Hidden Scrollbar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-h-[500px] sm:max-h-[600px] overflow-y-auto hide-scrollbar">
              {filteredProjects.length === 0 ? (
                <div className="text-center py-12 col-span-full">
                  <p
                    className="text-gray-500 text-lg"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    No projects found in this category.
                  </p>
                </div>
              ) : (
                filteredProjects.map((proj, idx) => (
                  <div
                    key={idx}
                  
  className="bg-[#FFE4E4] border border-[#f5c2c2] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group border-2 border-gray-100 hover:border-orange-200"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {/* Mobile Layout - Compact - Visible only on small screens */}
<div className="flex gap-2 sm:hidden items-start">
  {/* Smaller Image */}
  <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-md border">
    <img
      src={proj.image}
      alt={proj.title}
      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  {/* Compact Text Area */}
  <div className="flex flex-col justify-between">
    <div>
      <h3
        className="text-xs font-semibold text-gray-800 mb-0.5"
        style={{ fontFamily: "'Instrument Sans', sans-serif" }}
      >
        {proj.title}
      </h3>
      <p
        className="text-[11px] text-gray-600 leading-snug mb-1"
        style={{ fontFamily: "'Instrument Sans', sans-serif'" }}
      >
        {proj.description}
      </p>
    </div>
    <a
      href={proj.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[11px] text-orange-600 hover:text-orange-800 hover:underline"
      style={{ fontFamily: "'Instrument Sans', sans-serif'", fontWeight: 500 }}
    >
      View
    </a>
  </div>
</div>

                    {/* Desktop/Tablet Layout - Side by Side - Visible only on sm and above */}
                    <div className="hidden sm:flex gap-4 items-center">
                      <div className="w-20 sm:w-24 max-w-full h-auto max-h-36 sm:max-h-40 flex-shrink-0 overflow-hidden">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="h-full w-auto object-cover rounded-lg border group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex flex-col justify-between min-h-[6rem]">
                        <div>
                          <h3
                            className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 text-gray-800"
                            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                          >
                            {proj.title}
                          </h3>
                          <p
                            className="text-sm sm:text-sm text-gray-600 mb-2 sm:mb-3 leading-relaxed"
                            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                          >
                            {proj.description}
                          </p>
                        </div>
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200"
                          style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 500 }}
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p
                  className="text-gray-500 text-lg"
                  style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                >
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom-right Illustration - Responsive */}
        <img
          src="/images/my_works.png"
          alt="Illustration"
          className="hidden lg:block absolute bottom-36 right-0 w-64 lg:w-96 xl:w-[32rem] pointer-events-none select-none"
        />

        {/* Navigation Button for Mobile */}
        <div className="flex justify-center mt-12 sm:mt-16 lg:hidden">
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"
            style={{
              backgroundColor: '#423E3E',
              color: '#FFF2F2',
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '14px',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Get In Touch
          </button>
        </div>
      </section>
    </>
  );
};

export default MySkillsAndWorks;