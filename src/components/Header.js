import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-12 h-12 mr-2" src="path/to/your/logo.svg" alt="Logo" />
          <div>
            <span className="font-bold text-2xl text-green-600">spring</span>
            <span className="text-2xl text-gray-600"> by VMware Tanzu</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-4">
          <div className="relative group">
            <button className="text-black font-bold">Why Spring</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
              {/* Dropdown items */}
            </div>
          </div>
          <div className="relative group">
            <button className="text-black font-bold">Learn</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
              {/* Dropdown items */}
            </div>
          </div>
          <div className="relative group">
            <button className="text-black font-bold">Projects</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
              {/* Dropdown items */}
            </div>
          </div>
          <div className="relative group">
            <button className="text-black font-bold">Academy</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
              {/* Dropdown items */}
            </div>
          </div>
          <div className="relative group">
            <button className="text-black font-bold">Solutions</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
              {/* Dropdown items */}
            </div>
          </div>
          <div className="relative group">
            <button className="text-black font-bold">Community</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
              {/* Dropdown items */}
            </div>
          </div>
        </nav>

        {/* Settings Icon */}
        <button className="flex items-center justify-center p-2 border border-black rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 11.25v-1.5m6.75-6.75h-1.5M6.75 12h-1.5M18.364 5.636l-1.061 1.061M6.697 17.303l-1.061 1.061M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
