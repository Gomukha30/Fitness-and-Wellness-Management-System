import React from "react";
import footer1 from "../assets/footer1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto flex justify-center items-center flex-col lg:flex-row">
        <div className="flex items-center">
          <img
            src={footer1}
            alt="footer"
            className="h-16 w-22 rounded-md shadow-xl"
          />
          <div className="text-xl font-bold ml-2">FitFlex</div>
        </div>
        <p className="text-base text-center lg:text-left mt-4 lg:mt-0 lg:ml-8 lg:w-1/2">
          Our fitness tracker website showcases expert coaches with diverse skills, 
          offering personalized training plans, nutrition guidance, and motivation. 
          Achieve your fitness goals with our knowledgeable and supportive coaches leading the way.
          
        </p>
        <div className="text-base mt-4 lg:mt-0 lg:ml-auto">
          <div className="text-xl font-bold"><p>Information</p></div>
          <p>Mon to Sat: 8:00am - 10:00pm</p>
          <p>Phone: 8654362190</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
