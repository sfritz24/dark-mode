import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, toggleMode] = useDarkMode('darkMode', false)
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div onClick={toggleMode} className="dark-mode__toggle">
        <div
          // onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
