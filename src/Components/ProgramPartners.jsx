import React from 'react';
import img2 from "../assets/msme.png"
import img1 from "../assets/nidhi.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import { FocusCards } from './ui/focus-cards';
import Companies from './ui/Companies';
const ProgramPartners = () => {
  const cards = [
    {
      src: `${img1}`,
      title: " NIDHI-DST ITBI",
      description: "The National Initiative for Developing and Harnessing Innovations (NIDHI) is a flagship program under the Department of Science and Technology (DST), Government of India. It supports innovations addressing societal challenges and fostering entrepreneurship. A key component is the Innovation and Technology Business Incubator (ITBI).",
      number: "01"
    },
    {
      src: `${img2}`,
      title: "MSME",
      description: "The Ministry of Micro, Small, and Medium Enterprises (MSME) is a key government body in India responsible for the development and promotion of the Micro, Small, and Medium Enterprises (MSME) sector. This sector plays a vital role in India’s economy by contributing significantly to employment generation, export promotion, and overall industrial development",
      number: "02"
    },
    
    {
      src:`${img4}`,
      title: "Stratup India",
      description: "Connecting startups with potential customers, partners, and investors. Helping ventures scale their operations and expand their market presence through our extensive network.",
      number: "03"
    },
    {
      src:`${img3}`,
      title: "StartinUp",
      description: "Fostering partnerships between academia and industry to drive innovation. Creating opportunities for collaborative research and development in priority sectors.",
      number: "04"
    }
  ];

  return (
    <>
       <div><p className='flex justify-center font-semibold text-5xl text-black pb-5'>Ecosystem</p></div>
       <center><div className='bg-blue-500 h-[5px] w-[140px]'></div></center>
       <div><p className='flex justify-center font-extralight tracking-wider text-5xl text-black pb-5 pt-[70px]'>A holistic platform for innovators at each stage of their</p></div>
       <div><p className='flex justify-center font-extralight tracking-wider text-5xl text-black pb-[100px] '>entrepreneurial journeys</p></div>
       <div className='pb-[100px]'><FocusCards cards={cards} /></div>
       <div><p className='flex justify-center font-semibold text-5xl text-black pb-5'>Portfolio</p></div>
       <center><div className='bg-blue-500 h-[5px] w-[140px] '></div></center>
       <div><p className='flex justify-center font-extralight tracking-wider text-5xl text-black pt-[70px] pb-[50px]'>The Phenomenal Disruptors</p></div>
       <Companies />
       <div className='flex justify-center mt-10 pb-[50px]'><button type='button' class='py-5 px-10 text-sm bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700'>View All</button></div>
    </>
  );
};

export default ProgramPartners;