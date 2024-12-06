import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Coffee, Shield, Code, LineChart, Heart, 
  Shield as Safety, ChevronLeft, ChevronRight 
} from 'lucide-react';

const StartupShowcase = () => {
  const scrollRef = useRef(null);

  const startups = [
    {
      name: 'Samocha',
      logo: 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
      sector: 'Food and Restaurants ',
      description: 'Samocha, born from the college struggles of Shivendra and Akash, delivers fresh chai and snacks. ',
      impact: 'Building connections over tea.',
      icon: <Coffee className="text-blue-600" />
    },
    {
      name: 'Sense Original',
      logo: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
      sector: 'Renewable Tech',
      description: 'Sense Original is a cutting-edge technology company dedicated to helping brands protect their products from counterfeiting and ensure the authenticity of their offerings. ',
      impact: 'Reducing Counterifeiting',
      icon: <Shield className="text-green-600" />
    },
    {
      name: 'Dualite',
      logo: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
      sector: 'Tech And Innovation',
      description: 'Revolutionizing Frontend Development Dualite simplifies frontend development by seamlessly converting complex designs into pristine code with a single click.',
      impact: 'Enhancing The Development',
      icon: <Code className="text-purple-600" />
    },
    {
      name: 'Ochaat',
      logo: 'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
      sector: 'Big Data And Investment',
      description: 'Ochaat Private Limited is a leading provider of state-of-the-art technical analysis tools for traders and investors in volatile markets. ',
      impact: 'Enhancing The Investments',
      icon: <LineChart className="text-indigo-600" />
    },
    {
      name: 'KCKM Electronics',
      logo: 'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
      sector: 'Healthcare Technology',
      description: 'Technology should be able to help the human kind as well as lesser disturbance to nature. We the team of professionals are tying to develop products which will help the old age people.',
      impact: 'Eco-friendly elderly assistance.',
      icon: <Heart className="text-teal-600" />
    },
    {
      name: 'EduTech Platforms',
      logo: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
      sector: 'Women Safety,',
      description: 'Srishti is a serial entrepreneur and social activist with 10+ years of experience in foodtech, healthcare, gaming, and social entrepreneurship, empowering women through Shakti, India first all-in-one safety bangle.',
      impact: 'Empowering women through technology.',
      icon: <Safety className="text-orange-600" />
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gray-50 py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Benefitted Startups
      </h1>
      
      <div className="relative">
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-0 top-1/2 z-10 bg-white shadow-md rounded-full p-2"
        >
          <ChevronLeft />
        </button>
        
        <div 
          ref={scrollRef} 
          className="flex overflow-x-scroll scrollbar-hide space-x-6 pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {startups.map((startup, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg p-6 scroll-snap-align-start flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 bg-gray-100 p-3 rounded-full">
                  {startup.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{startup.name}</h3>
                  <p className="text-gray-600">{startup.sector}</p>
                </div>
              </div>
              <div className="mb-4 h-32 flex items-center justify-center">
                <img 
                  src={startup.logo} 
                  alt={`${startup.name} logo`} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700 mb-4 flex-grow">{startup.description}</p>
              <div className="bg-blue-100 p-3 rounded-lg text-center">
                <span className="font-semibold text-blue-800">{startup.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-0 top-1/2 z-10 bg-white shadow-md rounded-full p-2"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default StartupShowcase;