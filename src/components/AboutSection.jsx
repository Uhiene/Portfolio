import React from "react";

const AboutSection = () => {
  return (
    <div id="about" className="row about-info wide" data-animate-block>
      <div className="column lg-6 md-12 about-info__pic-block">
        <img
          src="/images/about-photo.jpg"
          srcSet="/images/about-photo.jpg 1x, /images/about-photo@2x.jpg 2x"
          alt="Princess"
          className="about-info__pic"
          
        />
      </div>

      <div className="column lg-6 md-12">
        <div className="about-info__text">
          <h2 className="text-pretitle with-line" >
            About
          </h2>
          <p className="attention-getter" >
            Hi, I&apos;m Princess, a Frontend Developer, Technical Writer, and
            Freelancer passionate about crafting modern web applications and
            intuitive user experiences. Skilled in React, TypeScript, JavaScript,
            and the MERN stack, I excel at building seamless interfaces,
            developing Web3 projects, and creating educational content.
          </p>
          <a href="#0" className="btn btn--medium u-fullwidth" >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
