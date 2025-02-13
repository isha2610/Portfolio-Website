import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

// Theme Change

const Page = () => {
  // Function to detect system theme
  const detectSystemTheme = () => {
    // Use matchMedia to detect if system prefers dark mode
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  // Initialize theme state based on system theme
  const [theme, setTheme] = useState(detectSystemTheme());

  useEffect(() => {
    // Update theme attribute on document.body when theme state changes
    document.body.dataset.bsTheme = theme;
  }, [theme]);

  const toggleTheme = () => {
    // Toggle theme between 'light' and 'dark'
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div class="form-check form-switch" >
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleTheme}/>
      <p>Current Theme: {theme}</p>
      {/* Your other components and content */}
    </div>
  );
};

export default Page;