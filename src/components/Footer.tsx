import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white ml-12 mt-12 mr-12 pl-12 pr-12 pt-12" >
  <div className="container mx-auto px-4 py-8 max-w-full">
    <div className="flex flex-wrap justify-between">
      <div className="w-full sm:w-1/2 md:w-1/4">
        <h5 className="font-bold text-lg mb-3 text-black">Product</h5>
        <ul>
          <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Employee database</a></li>
          <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Payroll</a></li>
          <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Absences</a></li>
          <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Time Tracking</a></li>
          <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Shift planner</a></li>
          <li ><a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Recruiting</a></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4">
        <h5 className="font-bold text-lg mb-3 text-black">Information</h5>
        <ul>
          <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">FAQ</a></li>
          <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Blog</a></li>
          <li ><a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Support</a></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4">
        <h5 className="font-bold text-lg mb-3 text-black">Company</h5>
        <ul>
          <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">About us</a></li>
          <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Careers</a></li>
          <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Contact us</a></li>
          <li ><a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Tlift Media</a></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4">
        <h5 className="font-bold text-lg mb-3 text-black">Subscribe</h5>
        <form>
          <div className="flex items-center mb-3">
            <input type="email" placeholder="Email address" className="px-4 py-2 w-full border rounded-l-lg focus:outline-none" />
            <button type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path fill="#232326" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
            </button>
          </div>
          <p className="text-gray-600 text-sm">Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
        </form>
      </div>
    </div>
    <div className="flex justify-center mt-12">
        <a href="#" className="text-gray-600 mx-2 hover:text-gray-900 transition-colors">Terms</a>
        <a href="#" className="text-gray-600 mx-2 hover:text-gray-900 transition-colors">Privacy</a>
        <a href="#" className="text-gray-600 mx-2 hover:text-gray-900 transition-colors">Cookies</a>
    </div>
  </div>
</footer>

  )
}
