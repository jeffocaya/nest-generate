import React from "react";
import { useLocation } from "react-router-dom";

const RightNav = () => {
  const location = useLocation();

  // Check if current path is /learn or /project
  if (location.pathname === "/learn" || location.pathname === "/project") {
    return null; // Don't render RightNav on Learn and Project pages
  }

  return (
    <div className="items-end w-20 flex-shrink-0 hidden md:block p-4 ">
      <button className="hidden md:block border border-black bg-black  items-center justify-center p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-white h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m8.485-6.485l.707.707M4.929 4.929l.707.707M21 12h1M3 12H2m16.485-6.485l-.707.707M6.343 17.657l-.707.707M12 5a7 7 0 100 14 7 7 0 000-14z"
          />
        </svg>
      </button>

      <button className=" hidden md:block  items-center justify-center p-2 border border-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default RightNav;
