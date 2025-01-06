import React from "react";
import { Link } from "react-scroll";
import { BsArrowDown } from "react-icons/bs";

const ScrollButton = () => {
  return (
    <Link
      to="about" 
      smooth={true} 
      duration={800} 
      className="absolute bottom-10 right-4 lg:right-16 transform text-ash hover:text-gold cursor-pointer"
    >
      <BsArrowDown size={34}/> 
    </Link>
  );
};

export default ScrollButton;
