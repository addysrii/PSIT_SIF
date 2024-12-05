import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img from "../assets/events/TechSpire.jpg"
import img1 from "../assets/events/startup.jpg"
import img3 from "../assets/events/EE.jpg"
import img4 from "../assets/events/demoday.jpg"
import img5 from "../assets/events/hustlers.jpg"
import img6 from "../assets/events/startup2.jpg"
const EventCard = ({ event }) => {
  return (
    <div className="card w-full max-w-sm bg-white shadow-xl">
      <figure>
        <img src={event.image} alt={event.title} className="object-cover h-64 w-full" />
      </figure>
      <div className="card-body bg-green-200">
        <h2 className="card-title text-slate-800 font-bold">{event.title}</h2>
        <p className="text-slate-800">{event.description}</p>
        <div className="card-actions justify-end">
          <a href={event.url} className="btn btn-primary btn-sm text-black">Learn More</a>
        </div>
      </div>
    </div>
  );
};

const Event = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const events = [
    {
      image: `${img}`,
      title: 'TechSpire',
      description: 'Keynote Address by Mr. Mohammed Salim: An engaging session where Mr. Salem shared his entrepreneurial journey, challenges faced, and strategies for success in the tech industry.',
      url: '#'
    },
    {
      image: `${img1}`,
      title: '  StartUp Chacha 3.0',
      description: 'STARTUP CHARCHA 3.0, an exclusive talk show with Mr. Nitin Sharma, Founder of ROAD PILOT, as our esteemed chief guest. The engaging session sparked meaningful conversations and ignited entrepreneurial spirits. ',
      url: '#'
    },
    {
      image: `${img3}`,
      title: ' Empowering Entrepreneurs',
      description: 'From February 12th to February 16th, 2024, aspiring entrepreneurs were treated to a transformative series of 20 workshops aimed at equipping them with essential management skills to thrive in today``s competitive business landscape',
      url: '#'
    },
    {
      image: `${img4}`,
      title: 'Demoday',
      description: 'The DemoDay event, organized under the NIDHI ITBI initiative, was a dynamic platform designed to support and showcase innovative startups. The event aimed to identify product-based startups with a strong focus on emerging technologies such as AIML and IoT, particularly wearable devices.',
      url: '#'
    },
    {
      image: `${img5}`,
      title: 'Hustlers',
      description: 'Dynamic energy filled the room at Hustlers as B-Tech first-year students engaged in an inspiring session with Sanchit Gupta, founder & CEO of Wyvate. From thought-provoking discussions to laughter-filled activities, the event left everyone motivated and ready to conquer new challenges',
      url: '#'
    },
    {
      image: `${img6}`,
      title: 'StratUp Charcha 2.0',
      description: ' The event featured an inspiring one-on-one conversation with Mr. Shivendra Gupta, Co-founder of Samocha and Tea Origin, and KOJO TEDxSpeaker.',
      url: '#'
    }
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? events.length - 3 : prevIndex - 3
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 3) % events.length
    );
  };

  return (
    <div className="bg-white">
      <h1 className='text-4xl font-bold text-center text-gray-900 mb-12'>Our Events</h1>
      <div className="flex justify-center items-center my-8">
        <button 
          className="btn btn-circle mr-4 hover:bg-primary hover:text-white" 
          onClick={prevSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex space-x-4">
          {events.slice(currentIndex, currentIndex + 3).map((event, index) => (
            <div key={index} className="w-full max-w-sm font-semibold">
              <EventCard event={event} />
            </div>
          ))}
        </div>
        <button 
          className="btn btn-circle ml-4 hover:bg-primary hover:text-white" 
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Event;