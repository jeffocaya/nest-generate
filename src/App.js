// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftNav from "./components/LeftNav";
import Main from "./components/Main";
import RightNav from "./components/RightNav";
import Learn from "./Page/Learn";
import Project from "./Page/Projects"; // Import the Project component

const App = () => {
  return (
    <Router>
      <div className="h-screen">
        <div className="flex">
          <div className="border-r border-r-gray-300">
            <LeftNav />
          </div>
          <div className="flex-1">
            <Routes>
              <Route path="/learn" element={<Learn />} />
              <Route path="/project" element={<Project />} />
              <Route path="/" element={<Main />} /> {/* Default route */}
            </Routes>
          </div>
          <div className="border-l border-gray-300">
            <RightNav />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
