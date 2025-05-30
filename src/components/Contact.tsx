import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div
      id='contact'
      className="w-full min-h-screen"
      style={{
        backgroundColor: '#FFF2F2',
        scrollBehavior: 'smooth'
      }}
    >
      {/* Main Content */}
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 min-h-screen">
        <div className="max-w-2xl w-full">

          {/* Heading */}
          <h2
            className="text-4xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 text-center bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 400
            }}

          >
            Contact Me
          </h2>

          {/* Contact Form with Shadow Box */}
          <div
          >
            <div className="space-y-4 sm:space-y-6">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-[13px] sm:px-[19px] py-[13px] sm:py-[17px] rounded-full border-2 transition-all focus:outline-none"
                  style={{
                    
                    backgroundColor: '#FFEDED',
                    boxShadow: 'inset 0 0 20px rgba(178, 145, 145, 0.10)',
                    borderColor: 'rgba(100, 100, 100, 0.1)',
                    color: '#2d2d2d',
                    fontFamily: "'Inika', serif",
                    fontSize: '18px'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#EECCCC'; // pastel pink stroke
                    e.target.style.backgroundColor = '#FCECEC'; // slight visual feedback
                    e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
                    e.target.style.fontSize = '22px';

                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(100, 100, 100, 0.1)';
                    e.target.style.backgroundColor = '#FFEDED';
                    e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
                    e.target.style.fontSize = '20px';
                  }}
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-[13px] sm:px-[19px] py-[13px] sm:py-[17px] rounded-full border-2 transition-all focus:outline-none"
                  style={{
                    
                    backgroundColor: '#FFEDED',
                    boxShadow: 'inset 0 0 20px rgba(178, 145, 145, 0.10)',
                    borderColor: 'rgba(100, 100, 100, 0.1)',
                    color: '#2d2d2d',
                    fontFamily: "'Inika', serif",
                    fontSize: '18px'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#EECCCC'; // pastel pink stroke
                    e.target.style.backgroundColor = '#FCECEC'; // slight visual feedback
                    e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
                    e.target.style.fontSize = '22px';

                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(100, 100, 100, 0.1)';
                    e.target.style.backgroundColor = '#FFEDED';
                    e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
                    e.target.style.fontSize = '20px';
                  }}
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-[13px] sm:px-[19px] py-[13px] sm:py-[17px] rounded-full border-2 transition-all focus:outline-none"
                  style={{
                    
                    backgroundColor: '#FFEDED',
                    boxShadow: 'inset 0 0 20px rgba(178, 145, 145, 0.10)',
                    borderColor: 'rgba(100, 100, 100, 0.1)',
                    color: '#2d2d2d',
                    fontFamily: "'Inika', serif",
                    fontSize: '18px'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#EECCCC'; // pastel pink stroke
                    e.target.style.backgroundColor = '#FCECEC'; // slight visual feedback
                    e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
                    e.target.style.fontSize = '22px';

                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(100, 100, 100, 0.1)';
                    e.target.style.backgroundColor = '#FFEDED';
                    e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
                    e.target.style.fontSize = '20px';
                  }}
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-[13px] sm:px-[19px] py-[13px] sm:py-[17px] rounded-3xl border-2 transition-all focus:outline-none resize-none " 
                  style={{
                    
                    backgroundColor: '#FFEDED',
                    boxShadow: 'inset 0 0 20px rgba(178, 145, 145, 0.10)',
                    borderColor: 'rgba(100, 100, 100, 0.1)',
                    color: '#2d2d2d',
                    fontFamily: "'Inika', serif",
                    fontSize: '18px'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#EECCCC'; // pastel pink stroke
                    e.target.style.backgroundColor = '#FCECEC'; // slight visual feedback
                    e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
                    e.target.style.fontSize = '22px';

                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(100, 100, 100, 0.1)';
                    e.target.style.backgroundColor = '#FFEDED';
                    e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
                    e.target.style.fontSize = '20px';
                  }}
                  required
                />
              </div>

              {/* Social Links and Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 sm:pt-8 gap-6 sm:gap-4 -mt-1" style={{ marginTop: '-3px' }}>
                {/* Social Icons */}
                <div className="flex space-x-4 sm:space-x-6 order-2 sm:order-1">
                  {/* Facebook */}
                  <a
                    href="#"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 focus:scale-110 focus:outline-none"
                    style={{
                      backgroundColor: '#423E3E',
                      color: 'white',
                      boxShadow: '0 4px 12px rgba(45, 45, 45, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#3C3636';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(45, 45, 45, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#423E3E';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 45, 45, 0.3)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="#"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 focus:scale-110 focus:outline-none"
                    style={{
                      backgroundColor: '#423E3E',
                      color: 'white',
                      boxShadow: '0 4px 12px rgba(45, 45, 45, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#3C3636';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(45, 45, 45, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#423E3E';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 45, 45, 0.3)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 focus:scale-110 focus:outline-none"
                    style={{
                      backgroundColor: '#423E3E',
                      color: 'white',
                      boxShadow: '0 4px 12px rgba(45, 45, 45, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#3C3636';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(45, 45, 45, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#423E3E';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 45, 45, 0.3)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full transition-all hover:scale-105 focus:scale-105 focus:outline-none order-1 sm:order-2"
                  style={{
                    backgroundColor: '#423E3E',
                    color: 'white',
                    fontFamily: "'Inika', serif",
                    fontWeight: 400,
                    boxShadow: '0 4px 12px rgba(45, 45, 45, 0.3)',
                    fontSize: '18px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#3C3636';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(45, 45, 45, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#423E3E';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 45, 45, 0.3)';
                  }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
