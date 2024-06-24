// src/components/DarkModeToggle.js
import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const DarkModeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 border rounded ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
