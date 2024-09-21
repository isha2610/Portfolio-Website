import React, { useState, useEffect } from 'react';
import Portfolio from './Portfolio'; // Your portfolio component
import './App.css'; // Import your styles

function Loading() {
  const [loading, setLoading] = useState(true);

  // Simulate loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate 3 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-container">
          <img src="/loading-image.jpg" alt="Loading" className="loading-image" />
        </div>
      ) : (
        <>
          <img src="/loading-image.jpg" alt="Portfolio" className="fixed-image" />
          <Portfolio />
        </>
      )}
    </div>
  );
}

export default Loading;
