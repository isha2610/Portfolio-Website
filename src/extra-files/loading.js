import React, { useState, useEffect } from 'react';
import Project from './project'; // Your Project component
import './App.css'; // Import your styles
import {Link} from 'react-router-dom';

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
          <img src="/loading-image.jpg" alt="Project" className="fixed-image" />
          <Project />
        </>
      )}
    </div>
  );
}

export default Loading;
