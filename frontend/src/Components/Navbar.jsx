import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"
import img from "../assets/nidhi.png"


import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);


const navItems = [
    {
      title: 'Home',
     
    },
    {
      title: 'About',
    
    },
    {
      title: 'Opportunities',

    },
    
]
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
  
      <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-6">
            <div className="flex items-center justify-between">
              {/* Left Logos */}
              <div className="flex items-center space-x-6">
                <div className="relative group">
                  <div className="w-28 h-28  overflow-hidden transform transition-transform group-hover:scale-105">
                    <div className="w-full h-full relative">
                      <img
                        src={img6}
                        alt="Logo 1"
                        className="absolute inset-0 w-full h-full object-contain p-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-28 h-28  overflow-hidden  transform transition-transform group-hover:scale-105">
                    <div className="w-full h-full relative">
                      <img
                        src={img7}
                        alt="Logo 2"
                        className="absolute inset-0 w-full h-full object-contain p-1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Central Text Content */}
              <div className="text-center flex-1 px-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2 tracking-tight">
                  PSIT STARTUP AND  INCUBATION FOUNDATION
                </h1>
                
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-4xl font-bold text-green-600">DST inclusive-TBI</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                  <span className="mt-1 text-xl font-bold text-black">DST i-TBI PSIT SIF,KANPUR (Center for AI/ML and Wearable Devices)</span>
                  </div>
              </div>

              {/* Right Logos */}
              <div className="flex items-center space-x-6">
                <div className="relative group">
                  <div className="w-28 h-28  overflow-hidden  transform transition-transform group-hover:scale-105">
                    <div className="w-full h-full relative">
                      <img
                        src={img8}
                        alt="Logo 3"
                        className="absolute inset-0 w-full h-full object-contain p-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-28 h-28 overflow-hidden  transform transition-transform group-hover:scale-105">
                    <div className="w-full h-full relative">
                      <img
                        src={img}
                        alt="Logo 4"
                        className="absolute inset-0 w-full h-full object-contain p-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <div 
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 shadow-lg' : 'bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between ml-4 h-16">
           

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <div
                    className="flex items-center cursor-pointer"
                   
                  >
                    <span className="text-gray-700 hover:text-green-600 text-xl font-medium transition-colors duration-200">
                      {typeof item === 'object' ? item.title : item}
                    </span>
                  
                  </div>

                  {typeof item === 'object' && activeDropdown === item.title && (
                    <div
                      className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((dropItem, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-150"
                        >
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700 font-medium">
                        {typeof item === 'object' ? item.title : item}
                      </span>
                      {typeof item === 'object' && (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                    {typeof item === 'object' && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.dropdown.map((dropItem, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600"
                          >
                            {dropItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
 

export default Navbar;
   
     

