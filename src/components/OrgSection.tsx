import React from 'react';

const OrgSection = () => {

    return (
      <div className="bg-gray-100 py-12 mt-10 m-10 rounded-3xl" style={{ padding:"80px" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl leading-6 font-medium text-gray-900">
              Trusted by Leading Organizations
            </h2>
            <p className="text-1xl mt-10 text-gray-700 font-semibold">
              Our 4,000+ team has expertise in almost<br/> every programming language.
            </p>
          </div>
    
          <div className="flex overflow-x-hidden " style={{ marginTop:"100px" }}>
          <div className="min-w-max flex space-x-8 scroll-animation">
            
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
               
                <img src="/assets/Lg.jpeg" alt="Logo 1" className="h-12" />
                <img src="/assets/microsoft.jpeg" alt="Logo 2" className="h-12" />
                <img src="/assets/google.jpeg" alt="Logo 3" className="h-12" />
                <img src="/assets/slack.jpeg" alt="Logo 3" className="h-12" />
               
              </React.Fragment>
            ))}
          </div>
        </div>
  
          <div className="mt-8 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              Our full repertoire
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default OrgSection;
  