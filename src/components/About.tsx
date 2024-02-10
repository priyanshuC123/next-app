import Image from 'next/image';

const HeroSection = () => {
    return (
      <div className="relative flex items-center m-7" style={{ height: '600px' }}>
        {/* Background image with white-to-transparent gradient overlay on the left half */}
        <div className="absolute inset-y-0 right-0 w-1/1 overflow-hidden z-0">
          <Image
            src="/assets/groupphoto.png" // Replace with the path to your imag
            width={970}
            height={600}
            style={{ borderRadius: "50px", objectPosition:"right"}} 
            alt="Background"
            className="opacity-100"
          />
        </div>
        
        {/* Left-aligned text content */}
        <div className="container mx-auto px-6 lg:px-12 z-10">
          <div className="text-left">
            <p className="text-sm font-semibold tracking-wide" style={{ color: '#F3BC4C' }}>TECH SERVICES</p> {/* Adjust the color as needed */}
            <h1 className="mt-2 text-6xl font-semibold" style={{ color: '#3D3D3D' }}> {/* Adjust the color as needed */}
              TechSynergy:<br />
              Innovate,<br />Create, Elevate
            </h1>
            <p className="mt-4 text-lg" style={{ color: '#475569' }}> {/* Adjust the color as needed */}
              Unlocking Possibilities, One Code at a Time
            </p>
            <button className="mt-8 bg-green-700 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-colors">
              See projects
            </button>
          </div>
        </div>
        <div className="absolute inset-0 z-5 bg-gradient-to-r from-white via-white/100 to-transparent" aria-hidden="true"></div>
      </div>
    );
  };
  
  export default HeroSection;
  