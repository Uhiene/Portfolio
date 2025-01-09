// useSmoothScroll.js (Custom Hook)
import { useEffect } from 'react';
import MoveTo from 'moveto';

const useSmoothScroll = () => {
  useEffect(() => {
    // Define the custom easing functions
    const easeFunctions = {
      easeInQuad: (t, b, c, d) => {
        t /= d;
        return c * t * t + b;
      },
      easeOutQuad: (t, b, c, d) => {
        t /= d;
        return -c * t * (t - 2) + b;
      },
      easeInOutQuad: (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      },
      easeInOutCubic: (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      },
    };

    // Select all elements with the class 'smoothscroll'
    const triggers = document.querySelectorAll('.smoothscroll');

    // Create the MoveTo instance
    const moveTo = new MoveTo(
      {
        tolerance: 0,
        duration: 1200,
        easing: 'easeInOutCubic',
        container: window,
      },
      easeFunctions
    );

    // Register each trigger for the smooth scroll effect
    triggers.forEach((trigger) => {
      moveTo.registerTrigger(trigger);
    });
  }, []);
};

export default useSmoothScroll;
