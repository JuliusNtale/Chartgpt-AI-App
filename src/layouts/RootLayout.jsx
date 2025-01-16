import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Navbar */}
      <header className="h-16 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
        {/* Logo */}
       

        <div>
          <Link to="/" className="flex items-center space-x-2">
            <img src="logo.png" alt="Hillsview AI logo" className="h-5 w-5" />
            <span className="font-semibold">Hillsview</span>
            <span className="w-10 h-6 rounded-md bg-white text-black flex items-center justify-center font-bold">
              AI
            </span>
          </Link>
        </div>

        {/* user */}
        <nav className="hidden md:flex space-x-116">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 mt-6 p-4 bg-opacity-90">
        <Outlet /> {/* Nested Routes */}
      </main>
    </div>
  );
};

export default RootLayout;
