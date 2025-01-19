import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { PropagateLoader } from 'react-spinners';
import { motion } from 'framer-motion';
import ChartList from '../components/ChartList';

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in');
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <PropagateLoader color="#2563eb" size={15} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 relative">
      {/* Sidebar */}
      <motion.div
        className={`fixed top-0 left-0 w-64 h-full bg-blue-600 text-white z-50 shadow-lg transition-transform duration-300 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 md:w-1/4`}
      >
        <ChartList toggleSidebar={toggleSidebar} />
      </motion.div>

      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 p-6 bg-gray-100 transition-all duration-300 ${
          isSidebarOpen ? 'ml-3/5' : '' // Adjusted margin for content shift on mobile screens
        }`}
      >
        {/* Toggle Button */}
        <button
          className="md:hidden px-4 py-2 bg-blue-600 text-white rounded shadow-lg"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
        </button>

        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard Content</h1>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">
              This is where the content goes. You can add charts, data, or other dashboard
              components here.
            </p>
            <Outlet />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardLayout;
