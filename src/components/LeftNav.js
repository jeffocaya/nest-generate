import React from 'react';

const LeftNav = () => {
  return (
    <div className="items-start hidden md:block">
      <button className="p-4 border border-black">
        <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
};

export default LeftNav;
