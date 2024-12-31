import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion (replace with real load logic if needed)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (for demo)
    }, 2000);

    // Cleanup timeout
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null; // Return nothing once loading is done
  }

  return (
    <div id="preloader">
      <div id="loader"></div>
    </div>
  );
};

export default Preloader;
