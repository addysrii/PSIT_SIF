import React from 'react';

const BenifitedStartup = () => {
  const slides = [
    {
      image: 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
      title: 'Soulo  1',
      description: 'This is the text content for slide 1. Add your description or details here.'
    },
    {
      image: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
      title: 'Slide 2', 
      description: 'This is the text content for slide 2. Add your description or details here.'
    },
  
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div >
   <h1 className="text-4xl font-bold text-black ml-[500px] my-5">Benefitted Startups</h1>
    <div className="carousel w-full rounded-md z-4">
      <div className="carousel-item relative w-full flex flex-col">
        <div className="h-full relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100"></div>
          <img src={slides[currentIndex].image} className="w-full h-full object-cover" alt={slides[currentIndex].title} />
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={prevSlide}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="btn btn-circle" onClick={nextSlide}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-80 p-6 text-white">
          <h2 className="text-2xl font-bold">{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
        </div>
      </div>
    </div>
   <h1 className="text-4xl font-bold text-black ml-[500px] my-5">Our Events</h1>
    </div>
  );
};

export default BenifitedStartup;