import React from 'react';


const BrandSection = () => {
  return (
    <div className="flex w-full items-center justify-center bg-white py-16">
      <div className="flex w-full max-w-7xl mx-auto py">
      
      <div >
      <img
          src="/assets/handshake.png" // Replace with your image path
          alt="Handshake"
          className="w-10/12 object-center mr-8 " // Increase the right margin for more space
        />
      </div>
        
       
        <div className="w-1/2 pl-10 py-10"> // Increase the left padding for more space
          <h1 className="text-4xl font-bold text-gray-800">
            We&apos;ve stopped counting.<br/>
            Over 500 brands count on us.
          </h1>
          <br />
          <br />
          <h3 className="text-2xl text-gray-500">
            Our 4,000+ team has expertise in almost every programming language.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
