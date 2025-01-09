import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="uppercase text-xs lg:text-base tracking-[5px] font-light text-white font-sans">
        {title}
      </h2>
      <p className="font-serif font-medium text-2xl lg:text-5xl text-white mt-4 leading-tight">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
