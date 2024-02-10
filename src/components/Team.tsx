import React from 'react';

const TeamSection = () => {
  

  return (
    <div className="flex flex-col items-center justify-center bg-white py-16">
      <div className="flex items-center justify-center space-x-[-50px]"> {/* Overlap images */}
        
          <div className="flex flex-col items-center">
            <img
              src="/assets/frame.jpeg" 
              alt="frame" 
            />
            
          </div>
      </div>
      <h2 className="mt-12 text-3xl font-bold text-gray-800">
        Let&apos;s Form Your Crew.
      </h2>
      <button className="mt-8 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
        Schedule a Call
      </button>
    </div>
  );
};

export default TeamSection;
