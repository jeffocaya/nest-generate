// App.js
import React from "react";
import LeftNav from "./components/LeftNav";
import Main from "./components/Main";
import RightNav from "./components/RightNav";

const App = () => {
  return (
    <div>
      <div className="h-screen">
        <div className="flex">
          <div className="border-r border-r-gray-300">
            <LeftNav />
          </div>
          <div className="flex-1">
            <Main />
          </div>
          <div className="border-l border-gray-300">
            <RightNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
