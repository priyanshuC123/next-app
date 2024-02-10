import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white ">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <Image src="/assets/logo.png" alt="Logo" width={32} height={32} />
        </a>
        <div className="flex">
          <div className="flex justify-center space-x-12  bg-gray-100 py-3 px-12 mx-0 rounded-full">
            <a href="/" className="text-blue-600 font-semibold hover:text-blue-800">Home</a>
            <a href="/about" className="text-gray-600 font-semibold hover:text-blue-800">About us</a>
            <a href="/services" className="text-gray-600 font-semibold hover:text-blue-800">Services</a>
            <a href="/contact" className="text-gray-600 font-semibold hover:text-blue-800">Contact Us</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 font-semibold hover:text-blue-800">EN</a>
          <a href="/schedule" className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">Schedule a Call</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
