import React from 'react';

const Main = () => {
  return (
    <main className="bg-white p-0 rounded shadow-md">
      <div className="container mx-auto p-0">
      <div id="headerSection" className="bg-white mt-2 mb-6 sticky top-0 flex items-center border-b border-gray-300 pb-4">
  <div className='flex items-center'>
    <img className="w-12 h-12 ml-8 mr-2" src="Logo.svg" alt="Logo" />
    <div id="siteName" className="p-4 text-3xl md:text-4xl">
      <span className="font-bold">Nest</span>
      <span className=" text-primary">Generate</span>
    </div>
  </div>
  <div className=' flex ml-auto items-center space-x-4 lg:hidden'>
    <button className="bg-items-center p-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
      </svg>
    </button>
    <button className="flex items-center justify-center p-2 border border-black">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg>
    </button>
  </div>
</div>

        </div>

        <div id="BodySection" className=" flex-grow text-center pb-4">
          <div id="bodycontainer"className='pt-10 pb-60'>
            <div id="convert" className="text-3xl md:text-4xl font-semibold">
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
     
    </main>
  );
};

export default Main;
