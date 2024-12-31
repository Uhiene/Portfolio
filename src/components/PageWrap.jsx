import React from 'react';
import Footer from './Footer';

// PageWrap is a layout component that wraps other components/content
const PageWrap = ({ children }) => {
  return (
    <div className="s-pagewrap">
      <div className="circles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Render any child content passed to this layout */}
      <div className="content">
        {children}
      </div>

      <Footer/>
    </div>
  );
};

export default PageWrap;
