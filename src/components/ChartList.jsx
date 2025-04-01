import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ChartList = ({ isSidebarOpen, toggleSidebar }) => {
  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, type: 'spring', stiffness: 100 },
    }),
  };

  return (
    <div className="h-full flex flex-col">
      <div className="sidebar bg-gray-900 text-white w-full h-full flex flex-col">
        <motion.div
          className="p-6  overflow-y-auto flex-grow max-h-[calc(100vh-7rem)] scrollbar-hidden"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Dashboard Menu */}
          <h2 className="text-lg font-bold text-gray-200">Dashboard Menu</h2>
          <nav className="flex flex-col">
            <motion.div custom={0} variants={menuItemVariants}>
              <Link
                to="/dashboard"
                className="block px-3 py-2 bg-black rounded hover:bg-orange-500 transition duration-300"
                onClick={toggleSidebar}
              >
                New Chart
              </Link>
            </motion.div>

            <motion.div custom={1} variants={menuItemVariants}>
              <a
                href="https://juliusntale.hillsviewproduction.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-black rounded hover:bg-orange-500 transition duration-300"
                onClick={toggleSidebar}
              >
                Helpdesk
              </a>
            </motion.div>
          </nav>

          {/* Recent Charts */}
          <h2 className="text-lg font-bold text-gray-200 mt-6">Recent Charts</h2>
          <nav className="space-y-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div key={i} custom={i + 3} variants={menuItemVariants}>
                <Link
                  to={`/dashboard/charts/${i + 1}`}
                  className="block px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  onClick={toggleSidebar}
                >
                  Chart {i + 1}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        {/* Upgrade Section at Bottom */}
        <div className="mt-auto">
          <motion.div 
          className="bg-blue-800 rounded-lg p-2 shadow-lg flex items-center space-x-2 cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => window.location.href = '/new-page'}
        >
          <img className="w-12 h-12" src="/logo.png" alt="Hillsview Logo" />
<div>
<h3 className="text-sm font-semibold text-white">Upgrade to Hillsview Pro</h3>
<p className="text-xs text-blue-300">Access unlimited features</p>
</div>
           
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChartList;
