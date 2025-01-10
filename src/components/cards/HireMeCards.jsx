import React from "react";
import SectionHeader from "../reuseableComponents/SectionHeader";
import ReusableMotion from "../reuseableComponents/ReusableMotion";

const HireMeCards = () => {
  return (
    <div className="p-6 lg:p-24">
      <ReusableMotion delay={0.2} duration={1.5}>
        <SectionHeader
          title="Hire Me"
          subtitle=" I'd love to hear from you! Whether you have a question, need
          assistance, or just want to discuss your project ideas, feel free to
          drop me a message."
        />
      </ReusableMotion>

      <div className="flex flex-col sm:flex-row justify-center gap-10 mt-10 p-6 lg:px-24 font-sans">
        {/* Card 1: Hire Me on Upwork */}
        <div className="p-6 border border-green-400 bg-transparent text-white text-center shadow-lg w-full lg:w-96 h-[20rem]">
          <h3 className="text-xl font-bold mb-4">Hire Me on Upwork</h3>
          <h3 className="text-4xl font-bold mb-4">$18/hr</h3>
          <p className="text-gray-300 mb-6">
            Looking for a skilled developer for your project? Check out my work
            on Upwork!
          </p>
          <a
            href="https://www.upwork.com/freelancers/~01ebf70f02e8ce1c73"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 px-6 bg-green-400 text-white hover:bg-green-500 transition"
          >
            Visit Upwork
          </a>
        </div>

        {/* Card 2: Hire Me to Teach You */}
        <div className="p-6 border border-gold bg-transparent text-white text-center shadow-lg  w-full lg:w-96 h-[20rem]">
          <h3 className="text-xl font-bold mb-4">Hire Me to Teach You</h3>
          <h3 className="text-4xl font-bold mb-4">$25/hr</h3>
          <p className="text-gray-300 mb-6">
            Want to learn frontend development ? I can
            guide you step by step!
          </p>
          <a
            href="mailto:princessuhiene@gmail.com"
            className="inline-block py-2 px-6 bg-yellow-500 text-white hover:bg-yellow-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default HireMeCards;
