import React from 'react';
import img1 from "../assets/msme.png";

const ProgramPartners = () => {
  const partnerLogos = [
    img1,
    'https://picsum.photos/id/2/150/150',
    'https://picsum.photos/id/3/150/150',
    'https://picsum.photos/id/4/150/150'
  ];

  return (
    <div className="bg-white py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Program Partners</h2>
      <div className="flex justify-center space-x-8">
        {partnerLogos.map((logo, index) => (
          <div
            key={index}
            className="w-48 h-48 bg-cover bg-no-repeat rounded-full transform hover:scale-125 hover:rotate-360 transition-transform duration-500 ease-in-out"
            style={{
              backgroundImage: typeof logo === 'string' ? `url(${logo})` : `url(${URL.createObjectURL(logo)})`,
              backgroundSize: 'contain'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProgramPartners;