import React from 'react';

const Main = () => {
  return (
    <main className="bg-white p-0 rounded shadow-md">
      <div className="container mx-auto p-0">
        <div id="headerSection" className="bg-white mt-2 mb-6 sticky top-0 flex items-center  border-b border-gray-300 pb-4">
          <img className=" w-12 h-12 ml-8 mr-2" src="Logo.svg" alt="Logo" />
          <div id="siteName p-4">
            <span className="font-bold text-4xl">Nest</span>
            <span className="text-4xl text-primary">Generate</span>
          </div>
        </div>

        <div id="BodySection" className=" flex-grow text-center pb-4">
          <div id="bodycontainer"className='pt-10 pb-40'>
            <div id="convert" className="text-4xl font-semibold">
Convert DBML to Nest Js
            </div>
            <div id="select" className=" text-2xl p-8">
            <button className='py-6 px-12 bg-primary rounded text-white'>
              Select DBML File                
            </button>
            </div>
            <div id="drop" className="text-gray-600 text-xl">
              or <span className="text-blue-500 cursor-pointer ">drop DBML file</span>
            </div>
          </div>
        </div>

        <div id="ButtonSection" className="bg-secondary text-center p-8 sticky bottom-0 mt-4 border-t border-gray-300 ">
          <button className="bg-white border border-black  text-black py-2 px-20 rounded text-4xl">
            GENERATE
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
