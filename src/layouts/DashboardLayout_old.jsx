import { useEffect, useState, useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { PropagateLoader } from 'react-spinners';
import { motion, AnimatePresence } from 'framer-motion';
import ChartList from '../components/ChartList';

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // Changed to lg breakpoint

  const handleResize = useCallback(() => {
    const mobile = window.innerWidth < 1024;
    setIsMobile(mobile);
    if (!mobile) setIsSidebarOpen(false); // Auto-close sidebar on desktop
  }, []);

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
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center">
          <PropagateLoader color="#3b82f6" size={15} speedMultiplier={0.8} />
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 animate-pulse">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-900">
      {/* Enhanced Mobile Menu Button */}
      {isMobile && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="fixed top-20 left-4 z-50 flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200"
          onClick={toggleSidebar}
          aria-label="Open menu"
        >
          <svg 
            className="w-5 h-5 text-gray-700 dark:text-gray-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      )}

      {/* Enhanced Sidebar */}
      <AnimatePresence>
        {(!isMobile || isSidebarOpen) && (
          <>
            {/* Mobile Overlay */}
            {isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                onClick={closeSidebar}
              />
            )}
            
            {/* Sidebar Content */}
            <motion.aside
              initial={{ x: isMobile ? -320 : 0, opacity: isMobile ? 0 : 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isMobile ? -320 : 0, opacity: isMobile ? 0 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`
                ${isMobile ? 'fixed' : 'relative'} 
                z-50 h-full w-80 
                bg-white dark:bg-gray-800 
                border-r border-gray-200 dark:border-gray-700
                shadow-xl lg:shadow-none
                overflow-hidden
              `}
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Dashboard
                </h2>
                {isMobile && (
                  <button
                    onClick={closeSidebar}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              
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