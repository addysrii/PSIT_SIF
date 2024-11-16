import React from 'react';
import img2 from "../assets/msme.png"
import img1 from "../assets/nidhi.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
const ProgramPartners = () => {
  const programs = [
    {
      image: `${img1}`,
      title: " NIDHI-DST ITBI",
      description: "The National Initiative for Developing and Harnessing Innovations (NIDHI) is a flagship program under the Department of Science and Technology (DST), Government of India. It aims to nurture and support ideas and innovations (knowledge-based and technology-driven) that can address societal challenges and foster entrepreneurship. One of the key components of this initiative is the Innovation and Technology Business Incubator (ITBI).",
      number: "01"
    },
    {
      image: `${img2}`,
      title: "MSME",
      description: "The Ministry of Micro, Small, and Medium Enterprises (MSME) is a key government body in India responsible for the development and promotion of the Micro, Small, and Medium Enterprises (MSME) sector. This sector plays a vital role in India’s economy by contributing significantly to employment generation, export promotion, and overall industrial development",
      number: "02"
    },
    
    {
        image:`${img4}`,
      title: "Stratup India",
      description: "Connecting startups with potential customers, partners, and investors. Helping ventures scale their operations and expand their market presence through our extensive network.",
      number: "03"
    },
    {
      image:`${img3}`,
      title: "StartinUp",
      description: "Fostering partnerships between academia and industry to drive innovation. Creating opportunities for collaborative research and development in priority sectors.",
      number: "04"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Our Programs
        </h2>
        
        <div className="space-y-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Left Image Block */}
              <div className="md:w-1/3 relative group bg-white ">
                <div className="relative w-full h-full min-h-[300px] overflow-hidden ">
                  {/* Image */}
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover  transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
               
                </div>
              </div>

              {/* Right Content */}
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <div className="max-w-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2 group">
                      Learn More
                      <svg 
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramPartners;