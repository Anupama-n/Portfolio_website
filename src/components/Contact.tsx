import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://getform.io/f/akknyjqa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setShowPopup(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-hide popup after 5 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      id='contact'
      className="w-full min-h-screen relative"
      style={{
        backgroundColor: '#FFF2F2',
        scrollBehavior: 'smooth'
      }}
    >
      {/* Thank You Popup */}
      {showPopup && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={closePopup}
        >
          <div 
            className="relative max-w-md w-full mx-auto p-8 rounded-3xl transform transition-all duration-300 ease-out"
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              animation: 'slideUp 0.3s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 focus:outline-none"
              style={{
                backgroundColor: '#F5F5F5',
                color: '#666'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E0E0E0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F5F5F5';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Success Icon */}
            <div className="text-center mb-6">
              <div 
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                style={{
                  backgroundColor: '#D4EDDA',
                  animation: 'pulse 2s infinite'
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#155724" strokeWidth="3">
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
              </div>
              
              <h3 
                className="text-2xl mb-3"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  color: '#2D2D2D',
                  fontWeight: 400
                }}
              >
                Thank You!
              </h3>
              
              <p 
                className="text-lg leading-relaxed mb-6"
                style={{
                  fontFamily: "'Inika', serif",
                  color: '#666',
                  lineHeight: '1.6'
                }}
              >
                Your message has been sent successfully. I'll get back to you as soon as possible!
              </p>

              {/* Decorative Elements */}
              <div className="flex justify-center space-x-2 mb-4">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ 
                    backgroundColor: '#EECCCC',
                    animation: 'bounce 1s infinite 0s'
                  }}
                ></div>
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ 
                    backgroundColor: '#EECCCC',
                    animation: 'bounce 1s infinite 0.1s'
                  }}
                ></div>
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ 
                    backgroundColor: '#EECCCC',
                    animation: 'bounce 1s infinite 0.2s'
                  }}
                ></div>
              </div>
            </div>

            {/* Auto-close indicator */}
            <div className="text-center">
              <p 
                className="text-sm"
                style={{
                  fontFamily: "'Inika', serif",
                  color: '#999'
                }}
              >
                This popup will close automatically in a few seconds
              </p>
            </div>
          </div>
        </div>
      )}

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

          {/* Status Messages (keeping the original inline message for error states) */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 rounded-full text-center" style={{ backgroundColor: '#f8d7da', color: '#721c24', fontFamily: "'Inika', serif" }}>
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}

          {/* Contact Form */}
<div>
  <div className="space-y-3 sm:space-y-6">
    {/* Name Field */}
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        disabled={isSubmitting}
        className="w-full px-3 sm:px-[19px] py-3 sm:py-[17px] rounded-full border-2 transition-all focus:outline-none disabled:opacity-50 text-[16px] sm:text-[18px]"
        style={{
          backgroundColor: '#FFEDED',
          boxShadow: 'inset 0 0 20px rgba(178, 145, 145, 0.10)',
          borderColor: 'rgba(100, 100, 100, 0.1)',
          color: '#2d2d2d',
          fontFamily: "'Inika', serif"
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#EECCCC';
          e.target.style.backgroundColor = '#FCECEC';
          e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
          e.target.style.fontSize = '20px';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'rgba(100, 100, 100, 0.1)';
          e.target.style.backgroundColor = '#FFEDED';
          e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
          e.target.style.fontSize = '16px';
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
        disabled={isSubmitting}
        className="w-full px-3 sm:px-[19px] py-3 sm:py-[17px] rounded-full border-2 transition-all focus:outline-none disabled:opacity-50 text-[16px] sm:text-[18px]"
        style={{
          backgroundColor: '#FFEDED',
          boxShadow: 'inset 0 0 20px rgba(178, 145, 145, 0.10)',
          borderColor: 'rgba(100, 100, 100, 0.1)',
          color: '#2d2d2d',
          fontFamily: "'Inika', serif"
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#EECCCC';
          e.target.style.backgroundColor = '#FCECEC';
          e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
          e.target.style.fontSize = '20px';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'rgba(100, 100, 100, 0.1)';
          e.target.style.backgroundColor = '#FFEDED';
          e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
          e.target.style.fontSize = '16px';
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
        disabled={isSubmitting}
        className="w-full px-3 sm:px-[19px] py-3 sm:py-[17px] rounded-full border-2 transition-all focus:outline-none disabled:opacity-50 text-[16px] sm:text-[18px]"
        style={{
          backgroundColor: '#FFEDED',
          boxShadow: 'inset 0 0 20px rgba(178, 145, 145, 0.10)',
          borderColor: 'rgba(100, 100, 100, 0.1)',
          color: '#2d2d2d',
          fontFamily: "'Inika', serif"
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#EECCCC';
          e.target.style.backgroundColor = '#FCECEC';
          e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
          e.target.style.fontSize = '20px';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'rgba(100, 100, 100, 0.1)';
          e.target.style.backgroundColor = '#FFEDED';
          e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
          e.target.style.fontSize = '16px';
        }}
      />
    </div>

    {/* Message Field */}
    <div>
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleInputChange}
        disabled={isSubmitting}
        rows={5}
        className="w-full px-3 sm:px-[19px] py-3 sm:py-[17px] rounded-3xl border-2 transition-all focus:outline-none resize-none disabled:opacity-50 text-[16px] sm:text-[18px]"
        style={{
          backgroundColor: '#FFEDED',
          boxShadow: 'inset 0 0 20px rgba(178, 145, 145, 0.10)',
          borderColor: 'rgba(100, 100, 100, 0.1)',
          color: '#2d2d2d',
          fontFamily: "'Inika', serif"
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#EECCCC';
          e.target.style.backgroundColor = '#FCECEC';
          e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
          e.target.style.fontSize = '20px';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'rgba(100, 100, 100, 0.1)';
          e.target.style.backgroundColor = '#FFEDED';
          e.target.style.boxShadow = 'inset 0 0 20px rgba(178, 145, 145, 0.1)';
          e.target.style.fontSize = '16px';
        }}
        required
      />
    </div>

    {/* Social Links and Submit Button */}
    <div className="flex flex-col sm:flex-row items-center justify-between pt-6 sm:pt-8 gap-4 sm:gap-4">
      {/* Social Icons */}
      <div className="flex space-x-3 sm:space-x-6 order-2 sm:order-1">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/anupama.neupane.399/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 focus:scale-110 focus:outline-none"
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>

        {/* GitHub */}
<a
  href="https://github.com/Anupama-n/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:scale-110 focus:outline-none"
  style={{
    backgroundColor: '#423E3E',
    color: 'white',
    boxShadow: '0 4px 12px rgba(45, 45, 45, 0.3)',
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
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58
      0-.287-.011-1.244-.017-2.445-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73
      1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.762-1.604-2.665-.304-5.467-1.334-5.467-5.931
      0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.403c1.02.005
      2.045.138 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221
      0 4.609-2.807 5.625-5.479 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293
      0 .321.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
</a>


        {/* LinkedIn */}
<a
  href="https://www.linkedin.com/in/anupama-neupane-918b0b32a/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:scale-110 focus:outline-none"
  style={{
    backgroundColor: '#423E3E',
    color: 'white',
    boxShadow: '0 4px 12px rgba(45, 45, 45, 0.3)',
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
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.854 0-2.136 1.445-2.136 2.939v5.667h-3.553V8.998h3.413v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.268 2.368 4.268 5.451v6.292zM5.337 7.433c-1.144 0-2.067-.925-2.067-2.066 0-1.142.923-2.067 2.067-2.067 1.142 0 2.066.925 2.066 2.067 0 1.141-.924 2.066-2.066 2.066zm1.777 13.019H3.56V8.998h3.554v11.454zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
</a>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-3 rounded-full transition-all hover:scale-105 focus:scale-105 focus:outline-none order-1 sm:order-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-[16px] sm:text-[18px]"
        style={{
          backgroundColor: isSubmitting ? '#6B6B6B' : '#423E3E',
          color: 'white',
          fontFamily: "'Inika', serif",
          fontWeight: 400,
          boxShadow: '0 4px 12px rgba(45, 45, 45, 0.3)'
        }}
        onMouseEnter={(e) => {
          if (!isSubmitting) {
            e.currentTarget.style.backgroundColor = '#3C3636';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(45, 45, 45, 0.4)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isSubmitting) {
            e.currentTarget.style.backgroundColor = '#423E3E';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 45, 45, 0.3)';
          }
        }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </div>
  </div>
</div>

        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateY(0);
          }
          40%, 43% {
            transform: translateY(-8px);
          }
          70% {
            transform: translateY(-4px);
          }
          90% {
            transform: translateY(-2px);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
