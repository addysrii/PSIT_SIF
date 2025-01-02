import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"
import img from "../assets/nidhi.png"

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { title: 'Home', sectionId: 'home' },
    { title: 'About', sectionId: 'about' },
    { title: 'Benefitted Startups', sectionId: 'startups' },
    { title: 'Our Events', sectionId: 'events' }
  ];

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScrollPosition);
    return () => window.removeEventListener('scroll', handleScrollPosition);
  }, []);

  return (
    <div className="relative">
      {/* Header with logos */}
      <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-4 md:py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left Logos */}
              <div className="flex items-center space-x-2 md:space-x-6">
                <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28">
                  <img
                    src={img6}
                    alt="Logo 1"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28">
                  <img
                    src={img7}
                    alt="Logo 2"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              </div>

              {/* Central Text Content */}
              <div className="text-center px-2 md:px-4 lg:px-8">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 tracking-tight">
                  PSIT STARTUP AND INCUBATION FOUNDATION
                </h1>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600">
                  DST inclusive-TBI
                </div>
                <div className="text-sm md:text-base lg:text-xl font-bold text-black mt-1">
                  DST i-TBI PSIT SIF,KANPUR (Center for AI/ML and Wearable Devices)
                </div>
              </div>

              {/* Right Logos */}
              <div className="flex items-center space-x-2 md:space-x-6">
                <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28">
                  <img
                    src={img8}
                    alt="Logo 3"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28">
                  <img
                    src={img}
                    alt="Logo 4"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div 
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 shadow-lg' : 'bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Desktop and Tablet Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScroll(item.sectionId)}
                  className="text-gray-700 hover:text-green-600 text-base lg:text-xl font-medium transition-colors duration-200"
                >
                  {item.title}
                </button>
              ))}
            </nav>

            {/* Apply Now Button - Desktop and Tablet */}
            <a
              href="https://forms.google.com/your-form-url"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-4 lg:px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm lg:text-base"
            >
              Apply Now
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-between items-center w-full">
              <span className="text-lg font-medium text-gray-700">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="max-w-7xl mx-auto px-4 py-2">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleScroll(item.sectionId)}
                    className="py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-left"
                  >
                    {item.title}
                  </button>
                ))}
                <a
                  href="https://forms.google.com/your-form-url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 mt-2"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;