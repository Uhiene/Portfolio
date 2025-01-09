import React from "react";
import ReusableHeading from "../reuseableComponents/ReuseableHeading";
import Button from "../reuseableComponents/Button";

const ContactSection = () => {
  return (
    <section id="contact" className="p-6 lg:p-24">
      
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-start">
        <div>
          <ReusableHeading text="Reach me at" />
          <div className="text-ash3 font-thin block lg:space-y-2 font-sans text-lg md:text-2xl mt-2 lg:mt-4">
            <a href="mailto:sayhello@luther.com">princessuhiene@gmail.com</a>
            <p>+234 812 408 1499</p>
          </div>
        </div>

        {/* Social Links */}
        <div>
        <ReusableHeading text="Social" />
          <ul className="text-ash3 font-thin flex items-center gap-2 font-sans  text-lg md:text-2xl mt-2 lg:mt-4">
            <li>
              <a href="https://www.linkedin.com/in/princess-uhiene-399470198/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/Chenemi_U">Twitter</a>
            </li>
            <li>
              <a href="https://www.youtube.com/@codeDuchess">Youtube</a>
            </li>
          </ul>
        </div>

        {/* Say Hello Button */}
        <div className="w-full md:w-1/4" >
          <a href="mailto:princessuhi@gmail.com" >
          <Button text="Say Hello." width="100%" />
          </a>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
