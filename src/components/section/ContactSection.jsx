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
            <a
              href="mailto:sayhello@luther.com"
              className="hover:text-gold transition-colors duration-300"
            >
              princessuhiene@gmail.com
            </a>
            <p className="hover:text-gold transition-colors duration-300">
              +234 812 408 1499
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="lg:w-1/4">
          <ReusableHeading text="Social" />
          <ul className="text-ash3 font-thin flex flex-wrap items-center gap-2 font-sans text-lg md:text-2xl mt-2 lg:mt-4">
            {[
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/princess-uhiene-399470198/",
              },
              { name: "Twitter", url: "https://x.com/Chenemi_U" },
              { name: "Youtube", url: "https://www.youtube.com/@codeDuchess" },
              { name: "Github", url: "https://github.com/Uhiene" },
            ].map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  className="hover:text-gold transition-colors duration-300"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Say Hello Button */}
        <div className="w-full md:w-1/4">
          <a href="mailto:princessuhi@gmail.com">
            <Button text="Say Hello." width="100%" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
