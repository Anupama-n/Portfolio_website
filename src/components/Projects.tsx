import React, { useState } from 'react';

const skills = [
  "Figma", "Flutter", "Express.js", "React", "Next.js", "Node.js", "SQL",
  "MongoDB", "TypeScript", "Firebase"
];

const categories = [
  "Logo Designs", "Mobile App Designs", "Web App Designs", "Other Designs", "Web Development Projects"
];

const projects = [
  {
    title: "Hulaki App Logo",
    description:
      "The Hukali logo symbolizes trusted news delivery, inspired by traditional mail. Designed in Figma with Material UI colors, it blends minimalism and nostalgia.",
      image: "/images/Hulaki_logo.png",
    link: "https://www.figma.com",
    category: "Logo Designs"
  },
  {
    title: "EduTrack Dashboard",
    description:
      "An education performance tracker for students and teachers. Built with React and Tailwind, integrated with Firebase for auth and database.",
    image: "/images/my_works.png",
    link: "#",
    category: "Web Development Projects"
  },
  {
    title: "NepaNotes App",
    description:
      "A note-taking app inspired by Nepali students' learning habits. Designed for mobile using Flutter with cloud sync features.",
    image: "/images/my_works.png",
    link: "#",
    category: "Mobile App Designs"
  },
  {
    title: "Kreative Portfolio",
    description:
      "A clean and interactive designer portfolio built using Next.js and Framer Motion. Focused on animations and responsiveness.",
    image: "/images/my_works.png",
    link: "#",
    category: "Web App Designs"
  }
];

const MySkillsAndWorks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    
<section
  id='projects'
  className="bg-[#FFF2F2] min-h-screen px-4 sm:px-6 md:px-8 lg:px-32 py-12 sm:py-16 text-gray-800 relative overflow-hidden"
>
  <h2
className="text-3xl sm:text-4xl md:text-5xl font-medium bg-gradient-to-b from-black to-[#666666] text-transparent bg-clip-text mb-8 sm:mb-10 mx-auto text-center lg:text-left lg:ml-24"

  style={{ fontFamily: "'Instrument Serif', serif" }}
>
  My Skills
</h2>



      {/* My Skills Section */}
      <div className="bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 max-w-5xl mb-12 sm:mb-16 transition-shadow duration-300 mx-auto lg:ml-24 lg:mr-0 hover:shadow-[0_10px_40px_rgba(137,137,137,0.2)]">


        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-full border transition-all duration-300 cursor-pointer transform ${skill === ""
                ? "bg-gray-800 text-white shadow-lg"
                : hoveredSkill === skill
                  ? "bg-gray-200 scale-105 shadow-md"
                  : "hover:bg-gray-100 hover:scale-105"
                }`}
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
              {skill}
            </span>
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

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10">
          <span
            onClick={() => handleCategoryClick("All")}
            className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-full border transition-all duration-300 cursor-pointer transform hover:scale-105 ${selectedCategory === "All"
              ? "bg-gray-800 text-white shadow-lg"
              : "hover:bg-gray-200 hover:shadow-md"
              }`}
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            All
          </span>
          {categories.map((cat, idx) => (
            <span
              key={idx}
              onClick={() => handleCategoryClick(cat)}
              className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-full border transition-all duration-300 cursor-pointer transform hover:scale-105 ${selectedCategory === cat
                ? "bg-gray-800 text-white shadow-lg"
                : "hover:bg-gray-200 hover:shadow-md"
                }`}
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Projects Grid - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-h-[500px] sm:max-h-[600px] overflow-y-auto pr-2">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-[#FFF1F2] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group"
            >
              {/* Mobile Layout - Stacked */}
              <div className="flex flex-col sm:hidden gap-4">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-32 object-cover rounded-xl border group-hover:scale-105 transition-transform duration-300"
                />
                <div>
                  <h3
                    className="text-lg font-regular mb-2"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {proj.title}
                  </h3>
                  <p
                    className="text-sm text-gray-500 mb-3 leading-relaxed"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    {proj.description}
                  </p>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    🔗 View Project
                  </a>
                </div>
              </div>

              {/* Desktop/Tablet Layout - Side by Side */}
              <div className="hidden sm:flex gap-4 sm:gap-6 items-start">
                <img
                  src={proj.image}
                  alt={proj.title}
                   className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-xl border flex-shrink-0 group-hover:scale-105 transition-transform duration-300 mt-4"/>
                <div className="flex flex-col justify-between min-h-[6rem]">
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-regular mb-1 sm:mb-2"
                      style={{ fontFamily: 'Inika' }}
                    >
                      {proj.title}
                    </h3>
                    <p
                      className="text-sm sm:text-sm text-gray-500 mb-2 sm:mb-3 leading-relaxed"
                      style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                    >
                      {proj.description}
                    </p>
                  </div>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300 self-start"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    🔗 View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
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
  );
};

export default MySkillsAndWorks;