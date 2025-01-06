import React from "react";
import SocialLinks from "./SocialLinks";
import ScrollButton from "./ScrollButton";
import { motion } from "framer-motion";
const IntroSection = () => {
  return (
    <section
      id="intro"
      className="h-screen p-5 lg:p-20 flex flex-col lg:justify-center relative"
    >
      <div className="flex flex-col lg:flex-row justify-center lg:items-end w-full h-full">
        <div className="flex items-start gap-3 lg:gap-5">
          <div className="h-0.5 w-10 lg:w-16 bg-ash mt-2" />
          <div>
            <motion.div
           initial={{ x: "10%", opacity: 0 }} // Start off-screen to the right
           animate={{ x: 0, opacity: 1 }} // Move to its final position and become visible
           transition={{ duration: 2, ease: "easeIn", delay: 1 }}
         >
           <h2 className="uppercase text-xs lg:text-sm tracking-[0.2rem] lg:tracking-[0.5rem] text-gold font-sans">
             Hello World
           </h2>
         </motion.div>
         
         <motion.div
           initial={{ x: "10vw", opacity: 0 }} // Start off-screen to the right
           animate={{ x: 0, opacity: 1 }} // Move to its final position and become visible
           transition={{ duration: 2, ease: "easeIn", delay: 1 }}
            >
              <h1 className="font-serif font-medium text-5xl sm:text-[4.5rem] lg:text-[6.5rem] leading-tight lg:leading-[6rem] mt-5 lg:mt-8 lg:w-[75%] text-white">
                I am Princess,
                <span> a Frontend Developer </span>
                <span> & Youtube Tutor based</span>
                <span> in Nigeria.</span>
              </h1>
            </motion.div>
          </div>
        </div>

        <SocialLinks />
      </div>

      <ScrollButton />
    </section>
  );
};

export default IntroSection;
