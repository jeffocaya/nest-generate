import React, { useEffect } from "react";

const Header = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme"));

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="ml-40 mr-40 bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <img className="w-12 h-12 mr-2" src="Logo.svg" alt="Logo" />
          <div id="siteName" className="p-4 text-3xl md:text-4xl">
            <span className="font-bold text-black">Nest</span>
            <span className=" text-tprimary">Generate</span>
          </div>
        </div>

        <nav className="flex space-x-4">
          <div className="relative group">
            <button className="text-black font-bold">Why Spring</button>
          </div>
          <div className="relative group">
            <button className="text-black font-bold">
              <a href="./learn">Learn</a>
            </button>
          </div>
          <div className="relative group">
            <button className="text-black font-bold">
              <a href="./project">Projects</a>
            </button>
          </div>
        </nav>

        <button
          onClick={toggleTheme}
          className="flex items-center justify-center p-2 border border-black rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8.25v-1.5m0 11.25v-1.5m6.75-6.75h-1.5M6.75 12h-1.5M18.364 5.636l-1.061 1.061M6.697 17.303l-1.061 1.061M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
