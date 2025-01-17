import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 relative">
      {/* Rotating Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        src="/orbital.png"
        alt="Background"
      />

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center w-full px-6 py-12 space-y-8 md:space-y-0">
          {/* Left Column */}
          <div className="px-6  text-center md:text-left md:w-2/3">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
                Hillsview
              </span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-500">
                AI
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Your one-stop solution for photography, videography, and AI-driven tools.
            </p>
            <div>
              <Link
                to="/dashboard"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition duration-300"
              >
                Get Started Now
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative md:w-1/3 flex justify-center">
            <motion.div
              className="w-64 h-64 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
              animate={{ rotate: [0, 10, -10] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            >
              <img
                src="/bot.png"
                alt="Bot"
                className="w-3/4 h-3/4 object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        className="bg-black text-white py-6 text-center flex flex-col items-center space-y-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex space-x-6">
          <a
            href="https://juliusntale.hillsviewproduction.com/about"
            className="hover:text-blue-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </a>
          <a
            href="https://juliusntale.hillsviewproduction.com/contact"
            className="hover:text-blue-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
          <Link
            to="/privacy"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Privacy Policy
          </Link>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Hillsview. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
};

export default HomePage;
