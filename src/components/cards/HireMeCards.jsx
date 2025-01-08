import React from "react";
import ReusableMotion from "../reuseableComponents/ReusableMotion";

const HireMeCards = () => {
  return (
    
    <div >
      <ReusableMotion className="flex gap-3 lg:gap-5" delay={2}>
            <div className="h-[1px] w-5 lg:w-10 bg-ash mt-2" />
            <h2 className="uppercase text-xs lg:text-sm tracking-[5px] lg:tracking-[0.5rem] text-gold font-sans">
              Hire Me
            </h2>
          </ReusableMotion>
    <div className="flex justify-center gap-10 mt-10 p-6 lg:px-24 font-sans">
      {/* Card 1: Hire Me on Upwork */}
      <div className="p-6 border border-green-400 bg-transparent text-white text-center shadow-lg w-96 h-[20rem]">
        <h3 className="text-xl font-bold mb-4">Hire Me on Upwork</h3>
        <h3 className="text-4xl font-bold mb-4">$18/hr</h3>
        <p className="text-gray-300 mb-6">
          Looking for a skilled developer for your project? Check out my work on Upwork!
        </p>
        <a
          href="https://www.upwork.com/freelancers/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-2 px-6 bg-green-400 text-white hover:bg-yellow-600 transition"
        >
          Visit Upwork
        </a>
      </div>

      {/* Card 2: Hire Me to Teach You */}
      <div className="p-6 border border-gold bg-transparent text-white text-center shadow-lg  w-96 h-[20rem]">
        <h3 className="text-xl font-bold mb-4">Hire Me to Teach You</h3>
        <h3 className="text-4xl font-bold mb-4">$25/hr</h3>
        <p className="text-gray-300 mb-6">
          Want to learn frontend development or master your skills? I can guide you step by step!
        </p>
        <a
          href="mailto:princessuhiene@gmail.com"
          className="inline-block py-2 px-6 bg-gold text-white hover:bg-yellow-600 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
    </div>
  );
};

export default HireMeCards;
