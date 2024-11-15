import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import img from "../assets/name.jpg";
import img2 from "../assets/th.jpg";

const MiddleSection = () => {
  const [expanded, setExpanded] = useState({
    questionPaper: false,
    testPapers: false
  });

  const toggleExpand = (section) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [section]: !prevExpanded[section]
    }));
  };

  return (
    <div className="bg-white w-full">
      <div className="container mx-auto px-4 py-8 bg-white">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              i-TBI program
            </h1>

            <div className="space-y-6">
              <p className="text-red-600 text-2xl leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo nulla enim officia amet dicta ullam, obcaecati
                voluptas molestiae expedita, nostrum illo corporis doloremque?
                Illo, minima. Vitae qui aliquam corrupti dicta. Eos, ea!
              </p>

              <div className="bg-gray-100 rounded-md p-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand('questionPaper')}
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    Criteria
                  </h3>
                  {expanded.questionPaper ? (
                    <ChevronUp className="w-6 h-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </div>
                {expanded.questionPaper && (
                  <div className="mt-4">
                    <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laborum consequatur debitis impedit ullam totam hic sint alias, ipsa doloremque quas atque blanditiis nulla veritatis ad deserunt modi est nostrum.{' '}
                      <a href="#" className="text-blue-600 hover:underline">
                        Click here
                      </a>
                      .
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-gray-100 rounded-md p-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand('testPapers')}
                >
                  <h3 className="text-lg font-medium text-gray-900">
                   Vision and Targets
                  </h3> 
                  {expanded.testPapers ? (
                    <ChevronUp className="w-6 h-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </div>
                {expanded.testPapers && (
                  <div className="mt-4">
                    <p className="text-gray-700">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vero harum minima nisi, tenetur incidunt consequuntur esse
                      excepturi temporibus sunt, in corrupti praesentium sequi
                      aspernatur perspiciatis suscipit. Voluptates facilis
                      doloribus corporis? For more details lore{' '}
                      <a href="#" className="text-blue-600 hover:underline">
                        Click here
                      </a>
                      .
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/3">
            <div className="card overflow-hidden bg-gradient-to-br from-amber-700 to-amber-900 text-white p-6 relative h-[300px] w-full lg:w-[400px]">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <img
                  src={img2}
                  alt="Background Pattern"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-6 flex flex-col items-center justify-center h-full">
                {/* Student Illustration */}
                <div className="bg-white rounded-lg p-4 w-[200px] lg:w-[300px]">
                  <img
                    src={img}
                    alt="Student studying"
                    className="w-full h-full object-contain"
                  />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;