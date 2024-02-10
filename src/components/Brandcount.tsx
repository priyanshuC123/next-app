import React from 'react';

const Brandcount = () => {
  return (
    <div className="container mx-auto my-12 p-6 max-w-4xl flex items-center justify-between bg-white shadow-lg rounded-lg">
      <img
        src="/assets/hanshake.png" // Replace with your image path
        alt="Handshake"
        className="w-1/2 rounded-l-lg"
      />
      <div className="text-left p-6 space-y-4">
        <h2 className="text-4xl font-bold text-gray-800">
          We've stopped counting.
        </h2>
        <p className="text-xl text-gray-600">
          Over 500 brands count on us.
        </p>
        <p className="text-gray-500">
          Our 4,000+ team has expertise in almost every programming language.
        </p>
      </div>
    </div>
  );
};

export default Brandcount;