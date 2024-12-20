import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Art at the Beach</h3>
            <p className="text-gray-400">
              A celebration of contemporary art and film on the beautiful shores of Lake Malawi.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#schedule" className="text-gray-400 hover:text-white transition-colors duration-200">Schedule</a></li>
              <li><a href="#artists" className="text-gray-400 hover:text-white transition-colors duration-200">Artists</a></li>
              <li><a href="#films" className="text-gray-400 hover:text-white transition-colors duration-200">Films</a></li>
              <li><a href="#tickets" className="text-gray-400 hover:text-white transition-colors duration-200">Tickets</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Art at the Beach Festival. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;