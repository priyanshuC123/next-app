import Image from "next/image";

const Services = () => {
    return (
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
         <h2 className="text-center text-3xl leading-8 font-semibold tracking-tight sm:text-4xl text-gray-900">
          We have multidisciplinary teams to meet any{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(to bottom, #667eea, #764ba2)', // Blue to purple gradient
            }}
          >
            challenge.
          </span>
        </h2> 
          <div className="mt-20 flex-1 bg-white rounded-lg shadow-md p-6">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
              <div className="flex">
                {/* Icon for Front-end */}
                
                <div className="ml-4">
                <div className="m-4">
                <Image 
                src="/assets/frontendicon.jpeg"
                alt="frontend"
                width={40}
                height={2}
                />
                </div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">Front-end</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Our frontend developers understand the delicate balance between aesthetics and functionality.
                  </dd>
                </div>
              </div>
  
              <div className="flex">
                
                <div className="ml-4"> 
                <div className="m-4">
                <Image 
                src="/assets/frontendicon.jpeg"
                alt="frontend"
                width={40}
                height={2}
                />
                </div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">Back-end</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Our backend developers are the architects of efficiency and security. They design and build the databases and APIs.
                  </dd>
                </div>
              </div>
  
              <div className="flex">
                
               <div className="ml-4">
                <div className="m-4">
                <Image 
                src="/assets/dataanalysticon.jpeg"
                alt="frontend"
                width={40}
                height={2}
                />
                </div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">Data Analysts</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;
  