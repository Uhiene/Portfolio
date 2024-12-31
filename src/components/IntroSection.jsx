import React from 'react';

const IntroSection = () => {
  return (
    <section id="intro" className="s-intro target-section">
      <div className="row intro-content wide">
        <div className="column">
          <div className="text-pretitle with-line">
            Hello World
          </div>

          <h1 className="text-huge-title">
            I am Princess, <br />
            a Frontend Developer <br />
            & Youtube Tutor based <br />
            in Nigeria.
          </h1>
        </div>

        <ul className="intro-social">
          <li>
            <a href="https://www.linkedin.com/in/princess-uhiene-399470198/">LinkedIn</a>
          </li>
          <li>
            <a href="https://x.com/Chenemi_U">Twitter</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@codeDuchess">Youtube</a>
          </li>
        </ul>
      </div> {/* end intro content */}

      <a href="#about" className="intro-scrolldown smoothscroll">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
        </svg>
      </a>
    </section>
  );
};

export default IntroSection;
