import React from "react";

const Tutorialcard = ({ articlelink, imageSrc, title }) => {
  return (
    <div className="w-40 lg:w-56 text-white">
      <a href={articlelink} className="block bg-gray-100 text-ash1">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-40 object-center"
        />
        <div className="p-1 lg:p-3 h-16">
          <h3 className="text-sm lg:text-base font-sans font-medium hover:underline line-clamp-2">{title}</h3>
        </div>
      </a>
    </div>
  );
};

export default Tutorialcard;
