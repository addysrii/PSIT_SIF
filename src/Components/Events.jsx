

 import React from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import img from "../assets/events/TechSpire.jpg"
import img1 from "../assets/events/startup.jpg"
import img3 from "../assets/events/EE.jpg"
import img4 from "../assets/events/demoday.jpg"
import img5 from "../assets/events/hustlers.jpg"
import img6 from "../assets/events/startup2.jpg"
import img7 from "../assets/events/IPR.jpg"


const FeaturedEventCard = ({ event }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl mb-8">
      <div className="flex flex-col lg:flex-row">
        {/* Image container - Responsive height */}
        <div className="relative w-full lg:w-1/2 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        {/* Content container - Better padding for mobile */}
        <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-green-100 to-green-50">
          <div className="mb-4 lg:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-4 group-hover:text-green-700 transition-colors">
              {event.title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {event.description}
            </p>
          </div>
          <div className="flex justify-end">
            <a 
              href={event.url} 
              className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-green-600 text-white rounded-lg 
                       transform transition-all duration-300 hover:bg-green-700 hover:shadow-md
                       active:scale-95 text-base sm:text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const GridEventCard = ({ event }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-40 sm:h-48 md:h-52 object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 sm:p-5 bg-gradient-to-b from-green-50 to-white">
        <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2 sm:mb-3 group-hover:text-green-700 transition-colors">
          {event.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base line-clamp-3 mb-3 sm:mb-4">
          {event.description}
        </p>
        <a 
          href={event.url} 
          className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

const Event = () => {
  const events = [
    {
      image: img7,
      title: 'IPR WORKSHOP',
      description: 'PSIT Kanpur proudly hosted its flagship IPR Workshop, uniting distinguished leaders to inspire innovation and highlight the importance of intellectual property. Chief Guest Ms. Deeksha Jain (CDO) emphasized safeguarding intellectual property to drive creativity and economic growth.ADM Mr. Rajesh Singh shed light on how IPR fuels innovation and entrepreneurship through collaboration between academia, industry, and government.',
      url: '#'
    },
    {
      image: img1,
      title: 'StartUp Chacha 3.0',
      description: 'STARTUP CHARCHA 3.0, an exclusive talk show with Mr. Nitin Sharma, Founder of ROAD PILOT, as our esteemed chief guest. The engaging session sparked meaningful conversations and ignited entrepreneurial spirits. The event witnessed an overwhelming response from students, who benefited from Mr. Sharma valuable insights on entrepreneurship and innovation. We extend our gratitude to Mr. Sharma for sharing his expertise and inspiring the next generation of leaders.',
      url: '#'
    },
    {
      image: img3,
      title: 'Empowering Entrepreneurs',
      description: 'From February 12th to February 16th, 2024, aspiring entrepreneurs were treated to a transformative series of 20 workshops aimed at equipping them with essential management skills to thrive in today\'s competitive business landscape',
      url: '#'
    },
    {
      image: img4,
      title: 'Demoday',
      description: 'The DemoDay event, organized under the NIDHI ITBI initiative, was a dynamic platform designed to support and showcase innovative startups.',
      url: '#'
    },
    {
      image: img5,
      title: 'Hustlers',
      description: 'Dynamic energy filled the room at Hustlers as B-Tech first-year students engaged in an inspiring session with Sanchit Gupta, founder & CEO of Wyvate.',
      url: '#'
    },
    {
      image: img6,
      title: 'StratUp Charcha 2.0',
      description: 'The event featured an inspiring one-on-one conversation with Mr. Shivendra Gupta, Co-founder of Samocha and Tea Origin, and KOJO TEDxSpeaker.',
      url: '#'
    }
  ];

  const featuredEvents = events.slice(0, 3);
  const remainingEvents = events.slice(3);

  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-8 sm:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
          Our Events
        </h1>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg px-4">
          Discover our latest events and programs designed to inspire, educate, and empower entrepreneurs.
        </p>
        
        {/* Featured Events - Full Width */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          {featuredEvents.map((event, index) => (
            <FeaturedEventCard key={index} event={event} />
          ))}
        </div>

        {/* Remaining Events - Responsive Grid */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 px-2">
            Past Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {remainingEvents.map((event, index) => (
              <GridEventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;