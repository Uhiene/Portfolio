import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';

const PageWrap = ({ children }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Trigger animation on page load
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1500); // 1.5 seconds for animation to complete

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-[#141516]">
      {/* Circles animation container */}
      <div className="absolute top-[calc(100vh-70vw)] left-[calc(100%-33vw)] w-[70vw] h-[70vw]">
        {[...Array(5)].map((_, index, arr) => (
          <motion.span
            key={index}
            className="circle absolute rounded-full border border-transparent"
            initial={{ opacity: 0.1, borderColor: 'transparent' }} // Initial state
            animate={{
              opacity: animationComplete ? 1 : 0.1,
              borderColor: animationComplete ? '#2C2C2D' : 'hsla(36, 72%, 70%, 1)',
            }} // Animation state based on whether it's complete
            transition={{
              opacity: {
                duration: 0.5,
                ease: 'easeIn',
                delay: (arr.length - 1 - index) * 0.3, // Reverse the delay
              },
              borderColor: {
                duration: 0.5,
                ease: 'easeInOut',
                delay: (arr.length - 1 - index) * 0.3, // Reverse the delay
              },
            }}
            style={{
              borderWidth: '1px', // Inline tiny border width
              borderColor: 'hsla(36, 72%, 70%, 1)', // Light border color
              width: `${100 - index * 20}%`,
              height: `${100 - index * 20}%`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Render child content */}
      <div className="content">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PageWrap;
