import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { PropagateLoader } from "react-spinners";

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in'); // Redirect to sign-in if not authenticated
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) {
    // Show loading spinner while authentication data is being loaded
    return (
      <div className="flex items-center justify-center min-h-screen">
        <PropagateLoader color="#ff0000" size={15} />
      </div>
    );
  }

  // Dashboard layout when the user is authenticated and data is loaded
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar/Menu */}
      <div className="bg-blue-600 text-white w-full md:w-1/4 p-4 space-y-4">
        <h2 className="text-xl font-bold">Dashboard Menu</h2>
        <nav className="space-y-2">
          <a
            href="#"
            className="block px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 transition duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 transition duration-200"
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 transition duration-200"
          >
            Settings
          </a>
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard Content</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">
            This is where the content goes. You can add charts, data, or other
            dashboard components here.
          </p>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
