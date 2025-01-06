import React from "react";

const ReusableHeading = ({ text, className = "" }) => {
  return (
    <h2 className={`uppercase text-xs lg:text-base tracking-[4px] font-light text-white font-sans ${className}`}>
      {text}
    </h2>
  );
};

export default ReusableHeading;
