import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "../assets/banner1.jpg";
import img2 from "../assets/banner2.jpg";

const MissionSection = () => {
  const slides = [
    {
      image: img1,
      title: 'Empowering Innovation and Entrepreneurship',
      description: 'Empowering young innovators to transform ideas into impactful ventures through mentorship, resources, and fostering a culture of entrepreneurship.'
    },
    {
      image: img2,
      title: 'Fostering Future Changemakers', 
      description: 'Inspiring students to pursue entrepreneurial dreams by providing opportunities, building networks, and promoting creativity and innovation on campus.'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      scale: 1.03
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 0.97
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-[400px] relative overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4 }}
          className="absolute w-full h-full"
        >
          <img 
            src={slides[currentIndex].image} 
            className="absolute inset-0 w-full h-full object-cover"
            alt={slides[currentIndex].title}
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <button 
              className="btn btn-circle bg-white/30 hover:bg-white/50 transition-colors duration-200"
              onClick={prevSlide}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button 
              className="btn btn-circle bg-white/30 hover:bg-white/50 transition-colors duration-200"
              onClick={nextSlide}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h2 className="text-2xl font-bold text-white mb-2">{slides[currentIndex].title}</h2>
            <p className="text-white/90">{slides[currentIndex].description}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MissionSection;