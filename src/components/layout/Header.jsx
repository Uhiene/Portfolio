import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { name: "Intro", id: "intro" },
    { name: "About", id: "about" },
    { name: "Works", id: "works" },
    { name: "Say Hello", id: "contact" },
  ];

  // Handle active section highlighting while scrolling
  const handleScroll = () => {
    const sectionsElements = sections.map((section) =>
      document.getElementById(section.id)
    );
    let currentSection = "";
    sectionsElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.2 && rect.bottom >= 0) {
        currentSection = element.id;
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    // Trigger scroll event and animation on mount
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 shadow-lg">
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 lg:hidden bg-ash2 border-b border-ash1">
        <a href="index.html" className="text-sm font-sans font-medium text-[#e8e8e8] tracking-[3px] uppercase">
          Princess.
        </a>
        <div onClick={toggleMenu} className="text-4xl cursor-pointer text-ash">
          {menuOpen ? <FaTimes /> : <HiBars3BottomRight />}
        </div>
      </div>

      {/* Navigation (Desktop and Mobile) */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }} // Start off-screen and invisible
        animate={{ y: 0, opacity: 1 }} // Animate to visible position
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`${
          menuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden lg:max-h-none lg:flex flex-col lg:flex-row lg:items-center lg:justify-center w-full bg-transparent transition-all duration-300 ease-out`}
      >
        <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center w-full bg-transparent cursor-pointer">
          {sections.map((section, index) => (
            <li
              key={index}
              className={`border-[0.1px] border-ash1 w-full lg:w-80 p-0 bg-[#141516]`}
            >
              <Link
                to={section.id}
                smooth={true}
                duration={500}
                offset={-50}
                onClick={() => setMenuOpen(false)}
                className={`block p-6 px-8 text-[10px] tracking-[0.25rem] uppercase font-light text-center lg:text-left ${
                  activeSection === section.id
                    ? "bg-[#2C2C2D] text-gold"
                    : "text-[#d0d0d0] hover:text-yellow-400"
                }`}
                spy={true}
                exact="true"
              >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
