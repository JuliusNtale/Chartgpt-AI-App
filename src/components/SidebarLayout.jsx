import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SidebarLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    // Function to toggle sidebar
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
    // Function to close sidebar when clicking outside (for mobile)
    const closeSidebar = (e) => {
      if (!e.target.closest(".sidebar") && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("click", closeSidebar);
      return () => document.removeEventListener("click", closeSidebar);
    }, [isSidebarOpen]);
  
    return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <motion.div
          className={`fixed top-0 left-0 w-64 sm:w-72 min-h-screen bg-blue-600 text-white z-[60] shadow-lg transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0`}
        >
          <ChartList toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </motion.div>
  
        {/* Overlay for small screens */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-50 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
  
        {/* Main Content */}
        <div className="flex-grow p-6">
          {/* Sidebar Toggle Button (Mobile) */}
          <button
            className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </button>
  
          {/* Main content goes here */}
          <h1 className="text-3xl font-bold">Welcome to Hillsview AI</h1>
          <p className="text-gray-500">Manage your charts and settings here.</p>
        </div>
      </div>
    );
  };
  
  export default SidebarLayout;
  