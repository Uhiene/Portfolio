import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  // Function to handle scroll events and update the active section
  const handleScroll = () => {
    const sections = ['intro', 'about', 'works', 'contact'];
    let currentSection = '';
    
    // Check which section is currently in the viewport
    sections.forEach((section) => {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        currentSection = section;
      }
    });
    
    setActiveSection(currentSection);
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="s-header">
      <div className="header-mobile">
        <span className="mobile-home-link">
          <a href="index.html">Princess.</a>
        </span>
        <a className="mobile-menu-toggle" href="#0">
          <span>Menu</span>
        </a>
      </div>

      <div className="row wide main-nav-wrap">
        <nav className="column lg-12 main-nav">
          <ul>
            <li className={activeSection === 'intro' ? 'current' : ''}>
              <a href="#intro" className="smoothscroll">Intro</a>
            </li>
            <li className={activeSection === 'about' ? 'current' : ''}>
              <a href="#about" className="smoothscroll">About</a>
            </li>
            <li className={activeSection === 'works' ? 'current' : ''}>
              <a href="#works" className="smoothscroll">Works</a>
            </li>
            <li className={activeSection === 'contact' ? 'current' : ''}>
              <a href="#contact" className="smoothscroll">Say Hello</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
