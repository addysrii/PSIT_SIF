import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Lightbulb, Users, BadgeDollarSign } from 'lucide-react';
import img from "../assets/name.jpg";
import img2 from "../assets/th.png";
import img5 from "../assets/banner.jpg";

const MiddleSection = () => {
  // Instead of an object, use a single state to track which section is expanded
  const [expandedSection, setExpandedSection] = useState(null);

  const highlights = [
    { icon: <Target className="w-6 h-6 text-black" />, text: <p className='text-black'> Foster Innovation</p> },
    { icon: <Lightbulb className="w-6 h-6 text-black" />, text: <p className='text-black'>Support Startups </p> },
    { icon: <Users className="w-6 h-6 text-black" />, text: <p className='text-black'>Build Community</p> },
    { icon: <BadgeDollarSign className="w-6 h-6 text-black" />, text: <p className='text-black'>Provide Funding</p> }
  ];

  const toggleExpand = (section) => {
    // If clicking the same section, close it. Otherwise, open the new section
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Content Section */}
          <div className="flex-1 space-y-8">
            {/* Header Section */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h1 className="text-4xl font-bold mb-4 text-gray-900 inline-block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                i-TBI Program
              </h1>
              
              {/* Highlights Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg text-blue-700">
                    {item.icon}
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 text-md leading-relaxed font-semibold">
                Inclusive TBI is a three years duration initiative supported by the Department of Science & Technology (DST) for educational institutions who are likely to foster innovation and entrepreneurship culture among the students, faculties, entrepreneurs, and nearby communities. It is expected that students, innovators and entrepreneurs will take up innovative ideas/projects and with mentoring support from the academicand startup ecosystem and try to build a startup around the innovative idea/project.The outcome of the i-TBI shall be converting ideas into startups. i-TBI (Inclusive TBI)would also create a culture of innovation & entrepreneurship in the Host Institution (HI)and nearby geographies. i-TBI will be equipped with grants-in-aid funding support to innovators to convert ideas to prototype and prototype to product.
              </p>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div
                  className="flex justify-between items-center p-6 cursor-pointer"
                  onClick={() => toggleExpand('criteria')}
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    Criteria
                  </h3>
                  {expandedSection === 'criteria' ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600" />
                  )}
                </div>
                {expandedSection === 'criteria' && (
                  <div className="px-6 pb-6">
                    <div className="bg-blue-50 p-4 rounded-lg text-gray-700">
                    Individual Innovators or Startups: Open to students, entrepreneurs, and innovators with innovative ideas or prototypes.
Stage of Idea: Should have a well-defined idea or an early-stage prototype with potential for commercialization.
Focus Areas: Ideas should align with societal, technological, or economic challenges and have scalable potential.
Commitment: Applicants must commit to using the i-TBI facilities and mentorship to develop their idea into a startup or product.
Inclusion: Priority may be given to underrepresented groups or regions lacking innovation ecosystems.
                      <a href="#" className="text-blue-600 hover:underline block mt-2">
                        Learn more →
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div
                  className="flex justify-between items-center p-6 cursor-pointer"
                  onClick={() => toggleExpand('testPapers')}
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    Vision and Targets
                  </h3>
                  {expandedSection === 'testPapers' ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600" />
                  )}
                </div>
                {expandedSection === 'testPapers' && (
                  <div className="px-6 pb-6">
                    <div className="bg-blue-50 p-4 rounded-lg text-gray-700">
               <h1 className='font-bold'>Vision</h1> 
To foster a culture of innovation and entrepreneurship by transforming novel ideas into scalable startups, empowering individuals and communities to contribute to India's socio-economic growth.
<h1 className='font-bold'> Target   </h1>
- **Idea to Startup Conversion:** Enable innovators to transform ideas into sustainable startups.  
- **Ecosystem Development:** Establish a robust innovation and entrepreneurship ecosystem within the host institution and nearby regions.  
- **Inclusivity:** Support innovators from diverse backgrounds, ensuring equitable opportunities for all.  
- **Prototype to Product:** Facilitate the journey from prototype development to market-ready products through funding and mentorship.  
- **Capacity Building:** Enhance the entrepreneurial capabilities of students, faculties, and local communities.  
                      <a href="#" className="text-blue-600 hover:underline block mt-2">
                        Learn more →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-[400px] ">
            <div className=" top-8">
              <div className="card overflow-hidden bg-gradient-to-br from-amber-700 to-amber-900 text-white rounded-xl shadow-xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <img
                    src={img2}
                    alt="Background Pattern"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 space-y-6">
                  <div className="bg-white rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform">
                    <img
                      src={img}
                      alt="Student studying"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">Start Your Journey</h3>
                    <p className="text-amber-100 text-sm">Join the innovation ecosystem and transform your ideas into reality</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 w-full h-[300px]">
              <img
                src={img5}
                alt="Background Pattern"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;