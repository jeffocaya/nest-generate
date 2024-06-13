import React from 'react';

const RightNav = () => {
  return (
    <div className="col-span-1 flex items-start justify-end">
      <button className="p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.485-6.485l.707.707M4.929 4.929l.707.707M21 12h1M3 12H2m16.485-6.485l-.707.707M6.343 17.657l-.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
      </button>
    </div>
  );
};

export default RightNav;
