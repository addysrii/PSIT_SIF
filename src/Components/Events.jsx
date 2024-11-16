import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventCard = ({ event }) => {
  return (
    <div className="card w-full max-w-sm bg-white shadow-xl">
      <figure>
        <img src={event.image} alt={event.title} className="object-cover h-48 w-full" />
      </figure>
      <div className="card-body bg-green-200">
        <h2 className="card-title text-slate-800">{event.title}</h2>
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
      image: 'https://picsum.photos/300/200',
      title: 'Random Event 1',
      description: 'This is a description for a random event.',
      url: '#'
    },
    {
      image: 'https://picsum.photos/300/200',
      title: 'Random Event 2',
      description: 'This is a description for another random event.',
      url: '#'
    },
    {
      image: 'https://picsum.photos/300/200',
      title: 'Random Event 3',
      description: 'This is a description for a third random event.',
      url: '#'
    },
    {
      image: 'https://picsum.photos/300/200',
      title: 'Random Event 4',
      description: 'This is a description for a fourth random event.',
      url: '#'
    },
    {
      image: 'https://picsum.photos/300/200',
      title: 'Random Event 5',
      description: 'This is a description for a fifth random event.',
      url: '#'
    }
  ];

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + events.length) % events.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % events.length);
  };

  return (
    <div className="bg-white">
      <div className="flex justify-center items-center my-8">
        <button className="btn btn-circle mr-4 hover:bg-primary hover:text-white" onClick={prevSlide}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="carousel carousel-center p-4 space-x-4 bg-white rounded-box">
          {events.slice(currentIndex, currentIndex + 3).map((event, index) => (
            <div key={index} className="carousel-item">
              <EventCard event={event} />
            </div>
          ))}
        </div>
        <button className="btn btn-circle ml-4 hover:bg-primary hover:text-white" onClick={nextSlide}>
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Event;