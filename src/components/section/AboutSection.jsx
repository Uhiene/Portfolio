import { motion } from "framer-motion";
import Button from "../reuseableComponents/Button";
import ReusableMotion from "../reuseableComponents/ReusableMotion";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="pt-20 pb-12 lg:flex lg:justify-between lg:gap-12 p-6 lg:p-10 relative"
    >
      {/* About Picture */}
      <motion.div
        className="lg:w-1/2 md:w-full"
        initial={{ y: "50vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <img
          src="/images/about-photo.jpg"
          srcSet="/images/about-photo.jpg 1x, /images/about-photo@2x.jpg 2x"
          alt="Princess"
          className="object-cover w-full h-auto filter grayscale"
        />
      </motion.div>

      {/* About Text */}
      <ReusableMotion
        delay={0.2}
        duration={2}
        className="lg:w-1/2 md:w-full mt-8 lg:mt-0 lg:absolute inset-x-[47%] top-1/4"
      >
        <div>
          <ReusableMotion className="flex gap-3 lg:gap-5" delay={0.4}>
            <div className="h-[1px] w-5 lg:w-10 bg-ash mt-2" />
            <h2 className="uppercase text-xs lg:text-sm tracking-[5px] lg:tracking-[0.5rem] text-gold font-sans">
              About
            </h2>
          </ReusableMotion>
          <ReusableMotion
            className="lg:w-5/6 space-y-8"
            delay={0.6}
            duration={1.2}
          >
            <p className="text-lg sm:text-xl lg:text-2xl font-light lg:font-extralight text-white mt-8 lg:mt-10 font-sans leading-loose lg:leading-relaxed">
              Hi, I&apos;m Princess, a Frontend Developer, Technical Writer, and
              Freelancer passionate about crafting modern web applications and
              intuitive user experiences. Skilled in React, TypeScript,
              JavaScript, and the MERN stack, I excel at building seamless
              interfaces, developing Web3 projects, and creating educational
              content.
            </p>
            <div className="sm:w-1/2">
              <a
                href="/public/docs/PrincessUhieneCV.pdf"
                download="PrincessUhieneCV.pdf"
                className="block"
              >
                <Button text="Download CV" width="100%" />
              </a>
            </div>
          </ReusableMotion>
        </div>
      </ReusableMotion>
    </div>
  );
};

export default AboutSection;
