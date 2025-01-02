import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Coffee, Shield, Code, LineChart, Heart, 
  Shield as Safety, ChevronLeft, ChevronRight 
  ,Zap,Globe,Box,Server,Smartphone,Cloud,Building,ShoppingBag,Users,Camera
} from 'lucide-react';
import logo1 from '../assets/logos/bay.png';
import logo2 from '../assets/logos/eyw.png';
import logo3 from '../assets/logos/KCKM.png';
import logo4 from '../assets/logos/logo.png';
import logo5 from '../assets/logos/ochaat.png';
import logo6 from '../assets/logos/senseoriginal.png';
import logo7 from '../assets/logos/shakti.png';
import logo8 from '../assets/logos/smoocha.png';
import logo9 from '../assets/logos/strinity.png';
import logo10 from '../assets/logos/logo2.png';
import logo11 from '../assets/logos/dualite.png';
import logo12 from '../assets/logos/kojo.png';
import logo13 from '../assets/logos/wyvate.png';
import logo14 from '../assets/logos/bharatonecare.png';
import logo15 from '../assets/logos/logo.jpg';



const StartupCard = ({ startup }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
  >
    <div className="flex items-center mb-4">
      <div className="mr-4 bg-gray-50 p-3 rounded-full">
        {startup.icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{startup.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-1">{startup.sector}</p>
      </div>
    </div>
    <div className="mb-4 h-28 flex items-center justify-center bg-gray-50 rounded-lg p-2">
      <img 
        src={startup.logo} 
        alt={`${startup.name} logo`} 
        className="w-full h-full object-contain"
      />
    </div>
    <p className="text-gray-700 text-sm mb-4 line-clamp-3">{startup.description}</p>
    <div className="bg-blue-50 p-2 rounded-lg text-center">
      <span className="text-sm font-semibold text-blue-700">{startup.impact}</span>
    </div>
  </motion.div>
);

const StartupShowcase = () => {
  const startups = [
    {
      name: 'Samocha',
      logo: logo8,
      sector: 'Food and Restaurants',
      description: 'Samocha, born from the college struggles of Shivendra and Akash, delivers fresh chai and snacks.',
      impact: 'Building connections over tea',
      icon: <Coffee className="text-blue-600" />
    },
    {
      name: 'Sense Original',
      logo: logo6,
      sector: 'Renewable Tech',
      description: 'Sense Original is a cutting-edge technology company dedicated to helping brands protect their products from counterfeiting.',
      impact: 'Reducing Counterfeiting',
      icon: <Shield className="text-green-600" />
    },
    {
      name: 'Ochaat',
      logo: logo5,
      sector: 'Big Data And Investment',
      description: 'Ochaat Private Limited is a leading provider of state-of-the-art technical analysis tools for traders and investors.',
      impact: 'Enhancing The Investments',
      icon: <LineChart className="text-indigo-600" />
    },
    {
      name: 'KCKM Electronics',
      logo: logo3,
      sector: 'Healthcare Technology',
      description: 'Technology should be able to help humankind with lesser disturbance to nature, focusing on elderly assistance.',
      impact: 'Eco-friendly elderly assistance',
      icon: <Heart className="text-teal-600" />
    },
    {
      name: 'Dualite',
      logo: logo1,
      sector: 'Tech And Innovation',
      description: 'Revolutionizing Frontend Development by converting complex designs into pristine code with a single click.',
      impact: 'Enhancing Development',
      icon: <Code className="text-purple-600" />
    },
    {
      name: 'EYW Solutions',
      logo: logo2,
      sector: 'Software Solutions',
      description: 'Innovative software solutions for modern business challenges.',
      impact: 'Digital Transformation',
      icon: <Zap className="text-yellow-600" />
    },
    {
      name: 'Strinity',
      logo: logo9,
      sector: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions for growing businesses.',
      impact: 'Marketing Excellence',
      icon: <Globe className="text-red-600" />
    },
    {
      name: 'Shakti',
      logo: logo10,
      sector: 'Renewable Energy',
      description: 'Sustainable energy solutions for a greener future.',
      impact: 'Clean Energy Innovation',
      icon: <Box className="text-emerald-600" />
    },
    {
      name: 'TechVision',
      logo: logo11,
      sector: 'AI Solutions',
      description: 'Advanced AI solutions for business automation and optimization.',
      impact: 'AI Innovation',
      icon: <Server className="text-cyan-600" />
    },
    {
      name: 'SmartServe',
      logo: logo12,
      sector: 'IoT Services',
      description: 'Connected solutions for smart homes and businesses.',
      impact: 'IoT Integration',
      icon: <Smartphone className="text-orange-600" />
    },
    {
      name: 'CloudTech',
      logo: logo13,
      sector: 'Cloud Services',
      description: 'Scalable cloud solutions for modern enterprises.',
      impact: 'Cloud Innovation',
      icon: <Cloud className="text-blue-600" />
    },
    {
      name: 'BuildRight',
      logo: logo14,
      sector: 'Construction Tech',
      description: 'Technology solutions for modern construction projects.',
      impact: 'Construction Innovation',
      icon: <Building className="text-gray-600" />
    },
    {
      name: 'DataFlow',
      logo: logo15,
      sector: 'Data Analytics',
      description: 'Advanced data analytics and visualization solutions.',
      impact: 'Data Insights',
      icon: <Server className="text-violet-600" />
    },
    {
      name: 'EcoMart',
      logo: logo4,
      sector: 'E-commerce',
      description: 'Sustainable e-commerce solutions for modern retail.',
      impact: 'Sustainable Shopping',
      icon: <ShoppingBag className="text-green-600" />
    },
    {
      name: 'HRTech',
      logo: logo6,
      sector: 'HR Solutions',
      description: 'Modern HR management and recruitment solutions.',
      impact: 'HR Innovation',
      icon: <Users className="text-pink-600" />
    },
    {
      name: 'MediaFlow',
      logo: logo7,
      sector: 'Media Tech',
      description: 'Innovative media streaming and content delivery solutions.',
      impact: 'Media Innovation',
      icon: <Camera className="text-amber-600" />
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Startup Portfolio
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our diverse range of innovative startups that are reshaping industries and creating impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {startups.map((startup, index) => (
            <StartupCard key={index} startup={startup} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartupShowcase;