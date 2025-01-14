import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <header className="flex items-center justify-between p-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src="logo.png" alt="Hillsview AI logo" className="h-1 w-2" /> {/* Adjusted size */}
            <span className="text-xl font-bold">Hillsview Ai</span>
          </Link>
        </header>
        <main className="flex-1 flex items-center justify-center p-4">
          <Outlet /> {/* Nested Routes */}
        </main>
      </div>
    );
  };
  

export default RootLayout;
