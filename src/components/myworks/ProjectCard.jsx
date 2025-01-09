import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const ProjectCard = ({ imageSrc, imageAlt, category, title, projectLink }) => {
  return (
    <div className="flex gap-8 w-full hover:cursor-pointer group">
      {/* Image Section */}
      <div className="relative w-full lg:w-56 h-40 group overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 ease-in group-hover:opacity-40"></div>
      </div>

      {/* Details Section */}
      <div className="relative w-full pt-4 border-t border-ash1 hidden lg:block">
        {/* Static Border */}
        <div className="absolute top-0 left-0 w-full h-[0.5px] bg-ash1"></div>

        {/* Moving Border */}
        <div className="absolute top-0 left-0 w-0 h-[0.5px] bg-ash transition-all duration-300 group-hover:w-full"></div>

        <div className="flex justify-between items-center pt-4">
          <p className="text-ash font-sans font-thin">{category}</p>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg"
          >
            <GoArrowUpRight />
          </a>
        </div>
        <h3 className="font-sans text-2xl text-white mt-2">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
