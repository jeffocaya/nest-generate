// App.js
import React from 'react';
import LeftNav from './components/LeftNav';
import Main from './components/Main';
import RightNav from './components/RightNav';


const App = () => {
  return (
    
  
    <div className="h-screen">
        <div className="flex-1 grid grid-cols-12 gap-4 max-w-6xl mx-auto p-4">
          <div className="col-span-1">
            <LeftNav />
          </div>
          <div className="col-span-12 md:col-span-10">
            <Main />
          </div>
          <div className="col-span-1">
            <RightNav />
          </div>
        </div>
      </div>
  );
};

export default App;
