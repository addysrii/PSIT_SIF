import React from 'react';

const Companies = () => {
  const logoUrl = "https://play-lh.googleusercontent.com/ERiJC1dJv0YGClOcJSksZhv0gQTU02ld3rt3ze4235G5hQaU1Csn9VM0vr2bvwo-9kU";  

  return (
    <div className="grid grid-cols-4 gap-6 mr-[150px] ml-[150px]">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="relative w-full h-[150px] flex justify-center items-center transition-transform duration-300 ease-in-out"
        >
          <img
            src={logoUrl}
            alt="Logo"
            className="w-40 h-40 object-contain transition-transform duration-300 ease-in-out transform hover:scale-125"
          />
        </div>
      ))}
    </div>
  );
};

export default Companies;
