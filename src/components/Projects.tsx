import React, { useState } from 'react';

const skills = {
  TechStack: [
    "Flutter", "Express.js", "React", "Next.js", "Node.js",
    "SQL", "MongoDB", "TypeScript", "Firebase"
  ],

  CoreSkills: [
    "User Interface (UI) Design",
    "User Experience (UX) Design",
    "Wireframing & Prototyping",
    "Design Systems",
    "Interaction Design",
    "Responsive Design",
    "Design Thinking",
    "Usability Testing",
    "User Research",
    "Information Architecture"
  ],

  Tools: [
    "Figma",
    "Canva (for visual content or mockups)"
  ],

  SoftSkills: [
    "Collaboration",
    "Communication",
    "Feedback Iteration",
    "Attention to Detail",
    "Problem Solving",
    "Time Management"
  ]
};


const categories = [
  "Logo Designs", "Mobile App Designs", "Web App Designs", "Other Designs", "Flutter Projects", "Web Development Projects"
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
    title: "Other Designs",
    description:
      "Crafted digital visuals for KURCH and university workshops, emphasizing clarity and consistency. Custom vector art was designed in Figma to enhance personal branding across digital platforms.",
    image: "/images/Other_designs.png",
    link: "https://www.figma.com/design/Y1k0Xik70xYMghxBrzk2KE/Other-Designs?node-id=0-1&t=jdQ14BY8YTYIVOFt-1",
    category: "Other Designs"
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

  const scrollSkills = (direction: "left" | "right") => {
    const container = document.getElementById("skills-scroll");
    if (!container) return;

    const scrollAmount = 150; // adjust if needed

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
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
          className="text-3xl sm:text-4xl md:text-5xl font-medium bg-gradient-to-b from-black to-[#666666] text-transparent bg-clip-text mb-8 sm:mb-10 mx-auto text-center lg:text-left lg:ml-24"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          My Skills
        </h2>

        <div className="relative bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-[32px] sm:rounded-[40px] p-4 sm:p-8 md:p-10 max-w-5xl mb-12 sm:mb-16 transition-shadow duration-300 mx-auto lg:ml-24 lg:mr-0 hover:shadow-[0_10px_40px_rgba(137,137,137,0.2)]">

          {/* Scrollable Skills Row */}
    <div className="space-y-10">
  {Object.entries(skills).map(([category, items]) => {
    const isSerifHeading = ["TechStack", "Tools", "SoftSkills", "CoreSkills"].includes(category);
    const headingFontFamily = isSerifHeading ? "'Instrument Serif', serif" : "'Instrument Sans', sans-serif";

    return (
      <div key={category}>
        <h3
          className="text-lg sm:text-xl font-semibold mb-4"
          style={{ fontFamily: headingFontFamily }}
        >
          {category.replace(/([A-Z])/g, ' $1').trim()}
        </h3>

        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          {items.map((skill, idx) => (
            <span
              key={`${category}-${idx}`}
              className="whitespace-nowrap px-3 sm:px-4 py-2 text-sm sm:text-base rounded-full border border-gray-300 bg-[#fff2f2] text-gray-800 transition-all duration-300 cursor-default transform hover:scale-105 hover:bg-gray-200 hover:shadow-md"
              style={
                // For TechStack, Tools, SoftSkills skill items: no explicit font (default)
                // For others: keep Instrument Sans
                ["TechStack", "Tools", "SoftSkills", "CoreSkills"].includes(category)
                  ? undefined
                  : { fontFamily: "'Instrument Sans', sans-serif" }
              }
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  })}
</div>


 
  



          {/* Right Arrow Button - Aligned to end (Small devices only) */}
          <button
            onClick={() => scrollSkills("right")}
            className="sm:hidden absolute right-4 top-1/2 -translate-y-1/2 bg-red-100 text-black px-2.5 py-1.5 rounded-full shadow hover:bg-red-200 transition-all duration-300"
            aria-label="Scroll right"
          >
            →
          </button>
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
          <div
  className="flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 overflow-x-auto sm:overflow-visible hide-scrollbar px-1 sm:px-0"
>
  <span
    onClick={() => handleCategoryClick("All")}
    className={`whitespace-nowrap px-3 sm:px-4 py-2 text-sm sm:text-base rounded-full border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
      selectedCategory === "All"
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
      className={`whitespace-nowrap px-3 sm:px-4 py-2 text-sm sm:text-base rounded-full border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
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
                  className="bg-[#FFF1F2] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group"
                >
                  {/* Mobile Layout - Stacked - Hidden on sm and above */}
                  <div
                    className={`flex gap-2 sm:hidden ${proj.image.includes('hulaki') || proj.image.includes('hulaki1')
                        ? 'items-start'
                        : 'items-center'
                      }`}
                  >
                    {/* Smaller Image */}
                    <div
                      className="w-14 max-w-full h-auto max-h-24 flex-shrink-0 overflow-hidden"
                      style={{
                        marginTop: proj.image.includes('hulaki') || proj.image.includes('hulaki1') ? '0' : '0.25rem',
                      }}
                    >
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="h-full w-auto object-contain rounded-md border group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Reduced Text Size and Tighter Layout */}
                    <div className="flex flex-col justify-between min-h-[4.5rem]">
                      <div>
                        <h3
                          className="text-sm font-small mb-1"
                          style={{ fontFamily: 'Inika' }}
                        >
                          {proj.title}
                        </h3>
                        <p
                          className="text-xs text-gray-600 mb-1 leading-snug"
                          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                        >
                          {proj.description}
                        </p>
                      </div>
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                        style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 'light' }}
                      >
                        View Project
                      </a>
                    </div>
                  </div>


                  {/* Desktop/Tablet Layout - Side by Side - Visible only on sm and above */}
                  <div
                    className={`hidden sm:flex gap-4 ${proj.image.includes('hulaki') || proj.image.includes('hulaki1')
                      ? 'items-start'
                      : 'items-center'
                      }`}
                  >
                    <div
                      className="w-20 sm:w-24 max-w-full h-auto max-h-36 sm:max-h-40 flex-shrink-0 overflow-hidden"
                      style={{
                        marginTop: proj.image.includes('hulaki') || proj.image.includes('hulaki1') ? '0' : '0.5rem',
                      }}
                    >
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="h-full w-auto object-contain rounded-lg border group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

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
                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                        style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 'light' }}
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
