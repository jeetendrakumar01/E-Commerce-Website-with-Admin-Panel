import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-14 border-t border-gray-700 flex flex-col md:flex-row justify-between gap-10">
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">QuickKart</h2>
          <p className="text-sm leading-relaxed">
            QuickKart is your one-stop shop for the best electronics and gadgets. Experience seamless shopping with us.
          </p>
          
          <p className="mt-4 text-sm">
            Developed by Jeetendra Kumar - <a href="mailto:jeetendrakumar5861@gmail.com" className="text-blue-400 hover:underline">jeetendrakumar5861@gmail.com</a>
          </p>
          
        </div>

        <div className="w-full md:w-1/3 flex justify-between">
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm">Phone: +9199115861</p>
          <p className="text-sm">Email: jeetendrakumar5861@gmail.com</p>
          <div className="flex space-x-6 mt-4 text-3xl">
            <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-blue-800 transition">&#xf09a;</a>
            <a href="#" aria-label="Twitter" className="text-blue-400 hover:text-blue-600 transition">&#xf099;</a>
            <a href="#" aria-label="Instagram" className="text-pink-500 hover:text-pink-700 transition">&#xf16d;</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
