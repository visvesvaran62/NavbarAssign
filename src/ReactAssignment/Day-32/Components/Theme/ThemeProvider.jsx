import React, { useEffect, useState } from 'react'
import { ThemeContext } from './CreateContext'

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <div
        className={
          theme === "dark"
            ? "bg-black text-white h-20"
            : "bg-white text-black h-20"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;