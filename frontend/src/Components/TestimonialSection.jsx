import React from 'react';
import img1 from "../assets/download.jpg"
import img2 from "../assets/download (1).jpg"
import img3 from "../assets/download (2).jpg"
const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Mr. Pranveer Singh",
      role: "Chair Person",
      comment: "Welcome to PSIT, where we strive to nurture talent, inspire innovation, and empower students to achieve excellence.",
      imageSrc: `${img1}`
    },
    {
      name: "Mr. Manmohan Shukla",
      role: "Group Director",
      comment: "At PSIT, we are committed to providing quality education and shaping future leaders for a better tomorrow.",
      imageSrc: `${img2}`
    },
    {
      name: "Dr. S.K. Bhalla",
      role: "Associate Director",
      comment: "Great balance of academics and extracurricular activities.",
      imageSrc: `${img3}`
    },
    {
      name: "Dr. Raghuraj Singh Suryavanshi",
      role: "Dean PSIT (Startup and Incubation Foundation)",
      comment: "Fostering innovation through excellence in teaching and research.",
      imageSrc: "../assets/download (2).jpg"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Dignitaries</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="flex items-start space-x-6 rounded-lg shadow-lg p-6 hover:shadow-xl 
                     bg-gradient-to-r from-blue-50 to-blue-100 via-blue-50 
                     transform hover:-translate-y-1 duration-200"
          >
            <div className="w-40 h-48 flex-shrink-0">
              <img 
                src={testimonial.imageSrc} 
                alt={testimonial.name}
                className="w-full h-full object-cover shadow-md"
              />
            </div>

            <div className="flex-1">
              <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
              <h3 className="font-semibold text-xl text-gray-800 mb-1">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;