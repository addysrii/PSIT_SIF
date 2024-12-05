import React from 'react';
import logo1 from '../../assets/logos/bay.png';
import logo2 from '../../assets/logos/eyw.png';
import logo3 from '../../assets/logos/KCKM.png';
import logo4 from '../../assets/logos/logo.png';
import logo5 from '../../assets/logos/ochaat.png';
import logo6 from '../../assets/logos/senseoriginal.png';
import logo7 from '../../assets/logos/shakti.png';
import logo8 from '../../assets/logos/smoocha.png';
import logo9 from '../../assets/logos/strinity.png';

const Companies = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

  return (
    <div className="grid grid-cols-3 gap-6 mx-6 lg:mx-40">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="relative w-full h-[150px] flex justify-center items-center"
        >
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-40 h-40 object-contain transition-transform duration-300 ease-in-out hover:scale-150"
          />
        </div>
      ))}
    </div>
  );
};

export default Companies;