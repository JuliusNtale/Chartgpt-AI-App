import React, { useEffect, useState, useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { PropagateLoader } from 'react-spinners';
import { motion, AnimatePresence } from 'framer-motion';
import ChartList from '../components/ChartList';

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = useCallback(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (!mobile && isSidebarOpen) setIsSidebarOpen(false);
  }, [isSidebarOpen]);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    if (!userId) navigate('/sign-in');
  }, [isLoaded, userId, navigate]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <PropagateLoader color="#4f46e5" size={20} />
      </div>
    );
  }

  return (
    <div className="relative flex h-full flex-col md:flex-row bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Mobile Menu Button - Positioned below navbar */}
      {isMobile && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`fixed top-20 left-4 z-30 p-2 rounded-lg bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all md:hidden ${
            isSidebarOpen ? 'hidden' : 'block'
          }`}
          onClick={toggleSidebar}
          aria-label="Open sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      )}

      {/* Sidebar */}
      <AnimatePresence>
        {(!isMobile || isSidebarOpen) && (
          <motion.aside
            key="sidebar"
            initial={{ x: isMobile ? -300 : 0 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed md:relative z-20 h-full md:h-full w-72 bg-gradient-to-b from-blue-50 to-blue-700 text-white shadow-xl md:mt-0`}
          >
            <ChartList 
              isMobile={isMobile} 
              closeSidebar={closeSidebar} 
            />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobile && isSidebarOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 bg-black"
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ${
          !isMobile ? 'ml-72' : ''
        } mt-16 md:mt-0`}
      >
        <div className="mx-auto max-w-7xl">
          <Outlet />
        </div>
      </motion.main>
    </div>
  );
};

export default DashboardLayout;