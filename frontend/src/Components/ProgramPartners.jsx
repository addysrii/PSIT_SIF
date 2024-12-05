import React from 'react';
import img1 from "../assets/nidhi.png";
import img2 from "../assets/msme.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import { FocusCards } from './ui/focus-cards';
import Companies from './ui/Companies';

const ProgramPartners = () => {
  const strategicPartners = [
    {
      image: img1,
      title: "NIDHI-DST ITBI",
      description: "Driving technological entrepreneurship nationwide",
      benefits: [
        "Innovative startup ecosystem",
        "Technology funding",
        "Entrepreneurial development"
      ]
    },
    {
      image: img2,
      title: "MSME",
      description: "Empowering small business growth",
      benefits: [
        "Economic acceleration",
        "Enterprise support",
        "National development"
      ]
    }
  ];

  const ecosystemCards = [
    {
      src: img1,
      title: "NIDHI-DST ITBI",
      description: "The National Initiative for Developing and Harnessing Innovations (NIDHI) is a flagship program under the Department of Science and Technology (DST), Government of India. It supports innovations addressing societal challenges and fostering entrepreneurship. A key component is the Innovation and Technology Business Incubator (ITBI).",
      number: "01"
    },
    {
      src: img2,
      title: "MSME",
      description: "The Ministry of Micro, Small, and Medium Enterprises (MSME) is a key government body in India responsible for the development and promotion of the Micro, Small, and Medium Enterprises (MSME) sector. This sector plays a vital role in India's economy by contributing significantly to employment generation, export promotion, and overall industrial development",
      number: "02"
    },
    {
      src: img4,
      title: "Stratup India",
      description: "Connecting startups with potential customers, partners, and investors. Helping ventures scale their operations and expand their market presence through our extensive network.",
      number: "03"
    },
    {
      src: img3,
      title: "StartinUp",
      description: "Fostering partnerships between academia and industry to drive innovation. Creating opportunities for collaborative research and development in priority sectors.",
      number: "04"
    }
  ];

  return (
    <div>
      {/* Strategic Partners Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Strategic Partners
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {strategicPartners.map((program, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-6 group"
              >
                <div className="w-1/3 relative">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-40 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="w-2/3 space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {program.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li 
                        key={benefitIndex}
                        className="flex items-center text-gray-700 text-sm"
                      >
                        <svg 
                          className="w-5 h-5 mr-2 text-blue-500" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ecosystem Section */}
      <div >
        <h2 className="flex justify-center font-semibold text-5xl text-black pb-5">
        Our Ecosystem
        </h2>
        <div className="flex justify-center">
          <div className="bg-blue-500 h-[5px] w-[140px]" />
        </div>
        
        {/* <div className="text-center space-y-5 pt-[70px] pb-[100px]">
          <p className="font-extralight tracking-wider text-3xl text-black">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis architecto eum quisquam delectus vel, nihil ipsam ut! Illum neque asperiores et minima, veniam pariatur fugiat alias, amet, provident cupiditate nesciunt!
          </p>
          <p className="font-extralight tracking-wider text-5xl text-black">
            entrepreneurial journeys
          </p>
        </div> */}

        <div className="pb-[100px] pt-5">
          <FocusCards cards={ecosystemCards} />
        </div>

        {/* Startups Section */}
        <div>
          <h2 className="flex justify-center font-semibold text-5xl text-black pb-5">
            Our Startups
          </h2>
          <div className="flex justify-center">
            <div className="bg-blue-500 h-[5px] w-[140px]" />
          </div>
          
          <p className="flex justify-center font-extralight tracking-wider text-5xl text-black pt-[70px] pb-[50px]">
            {/* The Phenomenal Disruptors */}
          </p>
          
          <Companies />
          
          <div className="flex justify-center mt-10 pb-[50px]">
            <button
              type="button"
              className="py-5 px-10 text-sm bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPartners;