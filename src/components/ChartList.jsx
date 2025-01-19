import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ChartList = ({ toggleSidebar }) => {
  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <div className="flex flex-col h-full">
      {/* Scrollable Menu Section */}
      <motion.div
        className="p-6 space-y-6 overflow-y-auto flex-grow"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Dashboard Menu */}
        <h2 className="text-xl font-bold">Dashboard Menu</h2>
        <nav className="space-y-2">
          {['/dashboard', '/dashboard/profile'].map((link, i) => (
            <motion.div key={link} custom={i} variants={menuItemVariants}>
              <Link
                to={link}
                className="block px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 focus:ring-2 focus:ring-blue-400 transition duration-300"
                onClick={toggleSidebar}
              >
                {link === '/dashboard' ? 'Create a new chart' : 'Profile'}
              </Link>
            </motion.div>
          ))}
          <motion.div custom={2} variants={menuItemVariants}>
            <a
              href="https://juliusntale.hillsviewproduction.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 focus:ring-2 focus:ring-blue-400 transition duration-300"
              onClick={toggleSidebar}
            >
              Helpdesk Contact
            </a>
          </motion.div>
        </nav>

        {/* Recent Charts */}
        <h2 className="text-xl font-bold">Recent Charts</h2>
        <nav className="space-y-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div key={i} custom={i + 3} variants={menuItemVariants}>
              <Link
                to={`/dashboard/charts/${i + 1}`}
                className="block px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 focus:ring-2 focus:ring-blue-400 transition duration-300"
                onClick={toggleSidebar}
              >
                Chart {i + 1}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>

      {/* Upgrade Section */}
      <motion.div
        className="bg-blue-800 rounded-lg p-4 text-center mt-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img className="mx-auto w-16 h-16" src="/logo.png" alt="Hillsview Logo" />
        <h3 className="text-lg font-semibold">Upgrade to Hillsview AI Pro</h3>
        <p className="text-sm text-blue-300">Get unlimited access to all features.</p>
        <button className="mt-2 px-4 py-2 bg-blue-700 rounded hover:bg-blue-900 focus:ring-2 focus:ring-blue-400 transition duration-300">
          Upgrade Now
        </button>
      </motion.div>
    </div>
  );
};

export default ChartList;
