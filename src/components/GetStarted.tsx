import React from 'react';

const GetStartedSection = () => {
  return (
    <div className='bg-white' style={{ height: '850px' }}>
        <div className="relative bg-gradient-to-b from-blue-500 to-cyan-500 text-white text-center p-12 m-12 rounded-3xl" style={{ height: '600px' }}>
      <h2 className="text-5xl font-semibold mb-12 mt-12">Ready to Transform Your Vision into <br /> Reality? Let&apos;s Get Started!</h2>
      <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
        Schedule a Call
      </button>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-16 " style={{ height: '300px' }}>
        <img
          src="/assets/grp.jpg" // Replace with your image path
          alt="Team"
          className="object-cover rounded-full border-4 border-blue-500"
        />
      </div>
    </div>
</div>
  );
};

export default GetStartedSection;
