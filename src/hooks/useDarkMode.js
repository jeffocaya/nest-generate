// src/hooks/useDarkMode.js
import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem("darkMode");
    return storedPreference ? JSON.parse(storedPreference) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
