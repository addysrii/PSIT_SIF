import React from "react";
import img from "../assets/logo2.png";
import img1 from "../assets/download.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter,faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-2 text-sm text-white p-5 bg-blue-950 mt-9">
        <div>
          <img src={img} className="mb-5 w-40" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            blanditiis quod culpa modi dolores, unde, natus neque obcaecati
            quidem dolor pariatur hic! A itaque provident quo amet libero nobis
            deleniti.
          </p>
          <p className='mt-4 text-xl'>
            <FontAwesomeIcon icon={faXTwitter} className="mr-4"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram} className="mr-4"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faFacebookF} className="mr-4"></FontAwesomeIcon>
            {/* <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon> */}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="list-none mb-4">
            <li className="mb-2">Home</li>
            <li className="mb-2">About</li>
            <li className="mb-2">Events</li>
            <li className="mb-2">Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Get In Touch</h3>
          <ul className="list-none mb-4">
            <li className="mb-2">+91-834891131</li>
            <li className="mb-2">psit@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center bg-blue-950 pb-1">
        <p className="w-full h-[1px] bg-white"></p>
        <p className="text-white copy">
          Copyright@PSIT SIF &emsp;&emsp;All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;