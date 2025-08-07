import { GraduationCap, Phone, Mail, MapPin, Instagram, Github, Trophy } from 'lucide-react'

export default function EducationContactSections() {
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
      value: "+977 9840034645",
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
      link: "https://github.com/anupama-n"
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
        "Led branding and visual design to ensure a consistent and memorable event identity.",
        "Built interactive challenges to drive engagement and excitement.",
        "Collaborated with teams to design digital tools for registration, tracking, and feedback.",
        "Contributed to event execution, enhancing participant satisfaction and innovation culture."

      ]
    },
    {
      title: "Outreach and Engagement Head",
      organization: "KURCH",
      period: "April 2025 - Present",
      responsibilities: [
        "Designed the official club logo and social media creatives using Figma.",
        "Led outreach campaigns, increasing engagement in research activities.",
        "Streamlined team communication for consistent promotion.",
        "Supported planning and execution of academic events."
      ]
    }
  ]

  return (
    <div className="bg-[#FFF2F2] min-h-screen px-4 sm:px-6 md:px-8 lg:px-32 py-12 sm:py-16 text-gray-800 relative overflow-hidden space-y-8 lg:space-y-12">
      
      {/* First Section: Education and Contact */}
      <div className="relative bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 transition-shadow duration-300 max-w-7xl mx-auto">
        {/* Split Layout: Education Left, Contact Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Education Section - Left Half */}
          <section id="education" className="mb-8 lg:mb-0">
            <div className="grid gap-8 md:gap-10">
              <div className="group">
                {/* Category Header with Icon */}
                <div className="border-2 border-[#f5c2c2] bg-[#FFE4E4] rounded-2xl p-6 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="w-6 h-6 text-gray-600" />
                    <h3
                      className="text-xl sm:text-2xl font-semibold text-gray-700 tracking-wide"
                      style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                    >
                      Academic Journey
                    </h3>
                    <div className="bg-[#FFE4E4] border border-[#f5c2c2] flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
                  </div>

                  {/* Education Timeline */}
                  <div className="space-y-4">
                    {education.map((edu, idx) => (
                      <div
                        key={idx}
                        className="border-2 border-[#f5c2c2] bg-[#FFE4E4] px-6 py-4 rounded-xl transition-all duration-300 cursor-default"
                        style={{
                          fontFamily: "'Instrument Sans', sans-serif",
                          animationDelay: `${idx * 100}ms`
                        }}
                      >
                        <div className="flex flex-col gap-3">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-1">
                              {edu.degree}
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base">
                              {edu.institution}
                            </p>
                            {edu.board && (
                              <p className="text-gray-500 text-sm mt-1">
                                Board: {edu.board}
                              </p>
                            )}
                          </div>
                          <div className="text-left">
                            <span className="inline-block bg-white/70 px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-[#f5c2c2]">
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
            <div className="grid gap-8 md:gap-10">
              <div className="group">
                {/* Category Header with Icon */}
                <div className="border-2 border-[#f5c2c2] bg-[#FFE4E4] rounded-2xl p-6 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <Phone className="w-6 h-6 text-gray-600" />
                    <h3
                      className="text-xl sm:text-2xl font-semibold text-gray-700 tracking-wide"
                      style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                    >
                      Get In Touch
                    </h3>
                    <div className="bg-[#FFE4E4] border border-[#f5c2c2] flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
                  </div>

                  {/* Contact Grid */}
                  <div className="grid grid-cols-1 gap-3">
                    {contactInfo.map((contact, idx) => (
                      <div
                        key={idx}
                        className="border-2 border-[#f5c2c2] bg-[#FFE4E4] px-4 py-3 rounded-xl transition-all duration-300 cursor-default"
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
                            className="flex items-center gap-3 transition-opacity"
                          >
                            {contact.icon}
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wide">
                                {contact.type}
                              </p>
                              <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                                {contact.value}
                              </p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center gap-3">
                            {contact.icon}
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wide">
                                {contact.type}
                              </p>
                              <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
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
      <div className="relative bg-[#FFeded] shadow-[0_8px_30px_rgba(137,137,137,0.15)] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 transition-shadow duration-300 max-w-7xl mx-auto">
        <section id="achievements">
          <div className="grid gap-8 md:gap-10">
            <div className="group">
              {/* Category Header with Icon */}
              <div className="border-2 border-[#f5c2c2] bg-[#FFE4E4] rounded-2xl p-6 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-6 h-6 text-gray-600" />
                  <h3
                    className="text-xl sm:text-2xl font-semibold text-gray-700 tracking-wide"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    Achievements & Leadership
                  </h3>
                  <div className="bg-[#FFE4E4] border border-[#f5c2c2] flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="border-2 border-[#f5c2c2] bg-[#FFE4E4] px-6 py-5 rounded-xl transition-all duration-300 cursor-default"
                      style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        animationDelay: `${idx * 100}ms`
                      }}
                    >
                      <div className="flex flex-col gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">
                            {achievement.title}
                          </h4>
                          <p className="text-gray-600 text-sm sm:text-base font-medium">
                            {achievement.organization}
                          </p>
                        </div>
                        
                        {/* Responsibilities */}
                        <div className="space-y-2">
                          {achievement.responsibilities.map((responsibility, respIdx) => (
                            <div key={respIdx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700 text-md leading-relaxed">
                                {responsibility}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="text-left">
                          <span className="inline-block bg-white/70 px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-[#f5c2c2]">
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
    </div>
  )
}
