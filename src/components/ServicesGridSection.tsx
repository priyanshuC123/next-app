import Image from "next/image";

const ServicesGridSection = () => {
    return (
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center">
            <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block font-semibold ">Empowering Your Digital Vision: Our </span>
              <span className="block font-semibold">Comprehensive Tech Services.</span>
            </h2>
          </div>
  
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            
            <div className="rounded-lg shadow-lg p-6 text-left">
             
              <div className="m-4">
                <Image 
                src="/assets/logo1.jpeg"
                alt="frontend"
                width={40}
                height={2}
                />
                </div>
              <h3 className="text-lg font-medium text-gray-900 mt-2">Custom Software Development</h3>
              <p className="mt-3 text-sm text-gray-500">
                Create custom software tailored for your unique needs, including front-end, and core back-end technology.
              </p>
            </div>
  
           
            <div className="rounded-lg shadow-lg p-6 text-left">
            
              <div className="m-4">
                <Image 
                src="/assets/logo2.jpeg"
                alt="frontend"
                width={40}
                height={2}
                />
                </div>
              <h3 className="text-lg font-medium text-gray-900 mt-2">QA and Testing</h3>
              <p className="mt-3 text-sm text-gray-500">
                Create custom software tailored for your unique needs, including front-end, and core back-end technology.
              </p>
            </div>
  
            
            <div className="rounded-lg shadow-lg p-6 text-left ">
             
              <div className="m-4">
                <Image 
                src="/assets/logo3.jpeg"
                alt="frontend"
                width={40}
                height={2}
                />
                </div>
              <h3 className="text-lg font-medium text-gray-900 mt-2">AI and Data Science</h3>
              <p className="mt-3 text-sm text-gray-500">
                Use leading AI, machine learning, and data engineering technologies to unlock business value.
              </p>
            </div>
            
            <div className="rounded-lg shadow-lg p-6 text-left">
              
              <div className="m-4">
                <Image 
                src="/assets/logo4.jpeg"
                alt="frontend"
                width={40}
                height={2}
                />
                </div>
              <h3 className="text-lg font-medium text-gray-900 mt-2">UI/UX Design</h3>
              <p className="mt-3 text-sm text-gray-500">
              Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.
              </p>
            </div>
  
           
            <div className="rounded-lg shadow-lg p-6 text-left">
              
              <div className="m-4">
                <Image 
                src="/assets/logo5.jpeg"
                alt="frontend"
                width={40}
                height={2}
                />
                </div>
              <h3 className="text-lg font-medium text-gray-900 mt-2">Mobile App Development</h3>
              <p className="mt-3 text-sm text-gray-500">
              Build performant, scalable, and secure mobile applications for iOS and Android devices.
              </p>
            </div>
  
          
            <div className="rounded-lg shadow-lg p-6 text-left">
             
              <div className="m-4">
                <Image 
                src="/assets/logo6.jpeg"
                alt="frontend"
                width={40}
                height={2}
                />
                </div>
              <h3 className="text-lg font-medium text-gray-900 mt-2">Platform and Infrastructure</h3>
              <p className="mt-3 text-sm text-gray-500">
              Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    );
  };
  
  export default ServicesGridSection;
  