'use client'

import { GraduationCap, Phone, Mail, MapPin, Instagram, Github, Trophy, FileText, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function EducationContactSections() {
  const [isExpanded, setIsExpanded] = useState(false)

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Kathmandu University, Dhulikhel Kavre",
      period: "2022 - Present",
      type: "undergraduate"
    },
    {
      degree: "High School",
      institution: "Kendriya Vidyalaya, EOI, Lazimpat Kathmandu",
      period: "2019 - 2021",
      type: "highschool",
      board: "CBSE"
    },
    {
      degree: "Secondary Education",
      institution: "Kendriya Vidyalaya EOI, Lazimpat Kathmandu", 
      period: "2017 - 2019",
      type: "secondary",
      board: "CBSE"
    }
  ]

  const contactInfo = [
    {
      type: "Instagram",
      value: "a_amapuna",
      icon: <Instagram className="w-5 h-5" />,
      link: "https://instagram.com/a_amapuna"
    },
    {
      type: "Phone",
      value: "+977 9850060070",
      icon: <Phone className="w-5 h-5" />,
      link: "tel:+9779850060070"
    },
    {
      type: "Email",
      value: "anupaneupane1994@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:anupaneupane1994@gmail.com"
    },
    {
      type: "GitHub",
      value: "anupama-nl",
      icon: <Github className="w-5 h-5" />,
      link: "https://github.com/anupama-nl"
    },
    {
      type: "Location",
      value: "Budhanilkantha, Kathmandu",
      icon: <MapPin className="w-5 h-5" />,
      link: null
    }
  ]

  const achievements = [
    {
      title: "Creativity & Innovation Lead",
      organization: "KU HackFest 2024",
      period: "Nov 2024",
      responsibilities: [
        "Led branding and visual design across event platforms, ensuring a consistent and memorable identity.",
        "Developed interactive challenges and engaging experiences to boost participant excitement and involvement.",
        "Collaborated closely with design and development teams to deliver user-friendly digital tools for registration, event tracking, and feedback.",
        "Supported overall event planning and execution to enhance participant satisfaction and innovation culture."
      ]
    },
    {
      title: "Outreach and Engagement Head",
      organization: "KURCH",
      period: "April 2025 - Present",
      responsibilities: [
        "Designed the official club logo and crafted social media posts using Figma, enhancing brand visibility and engagement.",
        "Led outreach campaigns that increased participation and awareness of research initiatives.",
        "Coordinated communication across teams to ensure consistent messaging and event promotion.",
        "Supported event planning and execution, boosting community involvement in academic activities."
      ]
    }
  ]

  const researchProject = {
    title: "UX Case Study – DOTM License Portal Redesign",
    status: "Selected for NCCI Conference - August 2025",
    highlights: [
      "Analyzed usability flaws of the DOTM government portal using Jakob Nielsen's heuristics and a user survey with 119 participants.",
      "Identified critical issues: cluttered layout, poor mobile performance, broken CAPTCHA, inconsistent navigation, and accessibility failures.",
      "Used heuristic evaluation, quantitative & qualitative user feedback, and triangulation to ensure reliability of findings.",
      "Classified issues by severity rating to prioritize redesign efforts and address task-blocking pain points.",
      "Redesigned major user flows, including homepage, license status check, and document access to improve clarity, consistency, and feedback.",
      "Enhanced user trust and task completion success rate by simplifying the interface, fixing broken elements, and improving visual hierarchy.",
      "Promoted a user-centered design approach to drive digital transformation and accessibility in public service platforms.",
      "The case study reflects a broader need for inclusive, accessible, and responsive government services in developing countries."
    ]
  }

  // Show only first 3 highlights on mobile when collapsed
  const displayedHighlights = isExpanded ? researchProject.highlights : researchProject.highlights.slice(0, 3)

  return (
    <div className="bg-[#FFF2F2] min-h-screen px-3 sm:px-6 md:px-8 lg:px-32 py-8 sm:py-12 lg:py-16 text-gray-800 relative overflow-hidden space-y-6 lg:space-y-12">
      
      <div className="relative bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-[20px] sm:rounded-[32px] lg:rounded-[40px] p-4 sm:p-6 lg:p-10 transition-shadow duration-300 max-w-7xl mx-auto">
        <section id="research">
          <div className="grid gap-6 lg:gap-10">
            <div className="group">
              {/* Category Header with Icon */}
              <div className="border-2 border-[#f5c2c2] bg-[#FFE4E4] rounded-xl lg:rounded-2xl p-4 lg:p-6 transition-all duration-300">
                <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
                  <FileText className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
                  <h3
                    className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 tracking-wide"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    Research & Case Studies
                  </h3>
                  <div className="bg-[#FFE4E4] border border-[#f5c2c2] flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-2 lg:ml-4"></div>
                </div>

                {/* Research Project */}
                <div className="border-2 border-[#f5c2c2] bg-[#FFE4E4] px-4 lg:px-6 py-4 lg:py-6 rounded-lg lg:rounded-xl transition-all duration-300 cursor-default"
                  style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                >
                  <div className="flex flex-col gap-4 lg:gap-5">
                    {/* Project Header */}
                    <div className="flex flex-col gap-2 lg:gap-3">
                      <h4 className="text-lg lg:text-xl font-bold text-gray-800 leading-tight">
                        {researchProject.title}
                      </h4>
                      
                      {/* Conference Badge */}
                      <div className="flex items-center gap-2">
                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full">
                          <span className="text-green-700 font-semibold text-xs lg:text-sm flex items-center gap-1 lg:gap-2">
                            🏆 {researchProject.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Highlights */}
                    <div className="space-y-3 lg:space-y-4">
                      <h5 className="text-sm lg:text-lg font-semibold text-gray-800 mb-3 lg:mb-4">Key Contributions & Methodology:</h5>
                      {displayedHighlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3 lg:gap-4">
                          <div className="w-1.5 h-1.5 lg:w-2.5 lg:h-2.5 bg-blue-400 rounded-full mt-2 lg:mt-2.5 flex-shrink-0"></div>
                          <p className="text-gray-700 text-xs lg:text-base leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      ))}
                      
                      {/* Read More/Less Button - Only show on mobile/tablet */}
                      <div className="lg:hidden">
                        <button
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="flex items-center gap-1 mt-3 px-3 py-1 border border-black rounded-sm text-sm text-black font-medium hover:bg-black hover:text-white transition-colors duration-200"
                        >
                          {isExpanded ? (
                            <>
                              <span>Show Less</span>
                              <ChevronUp className="w-3.5 h-3.5" />
                            </>
                          ) : (
                            <>
                              <span>Read More</span>
                              <ChevronDown className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </div>

                      {/* Show remaining highlights on desktop always */}
                      <div className="hidden lg:block">
                        {researchProject.highlights.slice(2).map((highlight, idx) => (
                          <div key={idx + 2} className="flex items-start gap-3 lg:gap-4">
                            <div className="w-1.5 h-1.5 lg:w-2.5 lg:h-2.5 bg-blue-400 rounded-full mt-2 lg:mt-2.5 flex-shrink-0"></div>
                            <p className="text-gray-700 text-xs lg:text-base leading-relaxed">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impact Statement */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-3 lg:p-4 rounded-lg mt-3 lg:mt-4">
                      <p className="text-blue-800 text-xs lg:text-base font-medium italic leading-relaxed">
                        "This research addresses the critical need for inclusive, accessible, and responsive government services in developing countries, contributing to digital transformation in public service delivery."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* First Section: Education and Contact */}
      <div className="relative bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-[20px] sm:rounded-[32px] lg:rounded-[40px] p-4 sm:p-6 lg:p-10 transition-shadow duration-300 max-w-7xl mx-auto">
        {/* Split Layout: Education Left, Contact Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          
          {/* Education Section - Left Half */}
          <section id="education" className="mb-6 lg:mb-0">
            <div className="grid gap-6 lg:gap-10">
              <div className="group">
                {/* Category Header with Icon */}
                <div className="border-2 border-[#f5c2c2] bg-[#FFE4E4] rounded-xl lg:rounded-2xl p-4 lg:p-6 transition-all duration-300">
                  <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
                    <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
                    <h3
                      className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 tracking-wide"
                      style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                    >
                      Academic Journey
                    </h3>
                    <div className="bg-[#FFE4E4] border border-[#f5c2c2] flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-2 lg:ml-4"></div>
                  </div>

                  {/* Education Timeline */}
                  <div className="space-y-3 lg:space-y-4">
                    {education.map((edu, idx) => (
                      <div
                        key={idx}
                        className="border-2 border-[#f5c2c2] bg-[#FFE4E4] px-4 lg:px-6 py-3 lg:py-4 rounded-lg lg:rounded-xl transition-all duration-300 cursor-default"
                        style={{
                          fontFamily: "'Instrument Sans', sans-serif",
                          animationDelay: `${idx * 100}ms`
                        }}
                      >
                        <div className="flex flex-col gap-2 lg:gap-3">
                          <div>
                            <h4 className="text-base lg:text-lg font-semibold text-gray-800 mb-1 leading-tight">
                              {edu.degree}
                            </h4>
                            <p className="text-gray-600 text-sm lg:text-base leading-snug">
                              {edu.institution}
                            </p>
                            {edu.board && (
                              <p className="text-gray-500 text-xs lg:text-sm mt-1">
                                Board: {edu.board}
                              </p>
                            )}
                          </div>
                          <div className="text-left">
                            <span className="inline-block bg-white/70 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium text-gray-700 border border-[#f5c2c2]">
                              {edu.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Info Section - Right Half */}
          <section id="contact">
            <div className="grid gap-6 lg:gap-10">
              <div className="group">
                {/* Category Header with Icon */}
                <div className="border-2 border-[#f5c2c2] bg-[#FFE4E4] rounded-xl lg:rounded-2xl p-4 lg:p-6 transition-all duration-300">
                  <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
                    <h3
                      className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 tracking-wide"
                      style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                    >
                      Get In Touch
                    </h3>
                    <div className="bg-[#FFE4E4] border border-[#f5c2c2] flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-2 lg:ml-4"></div>
                  </div>

                  {/* Contact Grid */}
                  <div className="grid grid-cols-1 gap-2 lg:gap-3">
                    {contactInfo.map((contact, idx) => (
                      <div
                        key={idx}
                        className="border-2 border-[#f5c2c2] bg-[#FFE4E4] px-3 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl transition-all duration-300 cursor-default"
                        style={{
                          fontFamily: "'Instrument Sans', sans-serif",
                          fontWeight: 500,
                          animationDelay: `${idx * 100}ms`
                        }}
                      >
                        {contact.link ? (
                          <a
                            href={contact.link}
                            target={contact.type === 'Email' || contact.type === 'Phone' ? '_self' : '_blank'}
                            rel={contact.type === 'Instagram' || contact.type === 'GitHub' ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-2 lg:gap-3 transition-opacity"
                          >
                            {contact.icon}
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wide">
                                {contact.type}
                              </p>
                              <p className="text-sm lg:text-base text-gray-800 font-medium leading-tight">
                                {contact.value}
                              </p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center gap-2 lg:gap-3">
                            {contact.icon}
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wide">
                                {contact.type}
                              </p>
                              <p className="text-sm lg:text-base text-gray-800 font-medium leading-tight">
                                {contact.value}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Second Section: Achievements */}
      <div className="relative bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-[20px] sm:rounded-[32px] lg:rounded-[40px] p-4 sm:p-6 lg:p-10 transition-shadow duration-300 max-w-7xl mx-auto">
        <section id="achievements">
          <div className="grid gap-6 lg:gap-10">
            <div className="group">
              {/* Category Header with Icon */}
              <div className="border-2 border-[#f5c2c2] bg-[#FFE4E4] rounded-xl lg:rounded-2xl p-4 lg:p-6 transition-all duration-300">
                <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
                  <Trophy className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
                  <h3
                    className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 tracking-wide"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    Achievements & Leadership
                  </h3>
                  <div className="bg-[#FFE4E4] border border-[#f5c2c2] flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-2 lg:ml-4"></div>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  {achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="border-2 border-[#f5c2c2] bg-[#FFE4E4] px-4 lg:px-6 py-4 lg:py-5 rounded-lg lg:rounded-xl transition-all duration-300 cursor-default"
                      style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        animationDelay: `${idx * 100}ms`
                      }}
                    >
                      <div className="flex flex-col gap-3 lg:gap-4">
                        <div>
                          <h4 className="text-base lg:text-lg font-semibold text-gray-800 mb-1 leading-tight">
                            {achievement.title}
                          </h4>
                          <p className="text-gray-600 text-sm lg:text-base font-medium">
                            {achievement.organization}
                          </p>
                        </div>
                        
                        {/* Responsibilities */}
                        <div className="space-y-1.5 lg:space-y-2">
                          {achievement.responsibilities.map((responsibility, respIdx) => (
                            <div key={respIdx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 lg:mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700 text-sm lg:text-sm leading-relaxed">
                                {responsibility}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="text-left">
                          <span className="inline-block bg-white/70 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium text-gray-700 border border-[#f5c2c2]">
                            {achievement.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Third Section: Research Project */}
      
    </div>
  )
}
