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
    <div className="fixed inset-0 flex justify-center items-center bg-[#141516] z-50 opacity-100">
      <div className="w-6 h-6 bg-white rounded-full animate-ping"></div> {/* Fixed size circle */}
    </div>
  );
};

export default Preloader;
