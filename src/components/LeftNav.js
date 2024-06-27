import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LeftNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if current path is /learn or /project
  if (location.pathname === "/learn" || location.pathname === "/project") {
    return null; // Don't render LeftNav on Learn and Project pages
  }

  return (
    <div className="bg-white rounded h-screen  p-4">
      <div className="relative">
        <button className="pt-12 p-4" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black font-bold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`fixed inset-0 w-full h-full bg-primary text-twhite flex items-center justify-center transform transition-transform duration-500 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } z-50`}
        >
          <div className="absolute top-8 left-4">
            <button className="p-2 focus:outline-none " onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 transition-transform duration-500 transform bg-primary ${
                  isOpen ? "rotate-0" : "rotate-45"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="text-left">
            <div className="flex items-center bg-twhite bg-opacity-40">
              <img className="w-12 h-12 ml-8 mr-2" src="Logo.svg" alt="Logo" />
              <div id="siteName" className="p-4 text-3xl md:text-4xl">
                <span className="font-bold text-black">Nest</span>
                <span className=" text-primary">Generate</span>
              </div>
            </div>
            <nav className="font-bold text-3xl md:text-4xl pt-8 text-twhite">
              <ul>
                <li className="mb-4">
                  <a href="/learn" target="_blank" onClick={toggleMenu}>
                    NestGenerate Tool
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/learn" target="_blank" onClick={toggleMenu}>
                    Learn About NestGenerate
                  </a>
                </li>
                <li>
                  <a href="/project" target="_blank" onClick={toggleMenu}>
                    Discover All NestGenerate Projects
                  </a>
                </li>
              </ul>
            </nav>
            <div className="pt-8 text-sm text-twhite">
              <div>
                <a href="#">© 2005-2024 Broadcom. All Rights Reserved.</a>
              </div>
              <div>
                <a href="#">
                  The term "Broadcom" refers to Broadcom Inc. and/or its
                  subsidiaries
                </a>
              </div>
              <div>
                <a href="#">
                  start.spring.io is powered by Spring Initializr, Cloud Native
                  Buildpacks and Azure Spring Apps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
