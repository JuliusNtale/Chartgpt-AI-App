import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-6">Welcome to Hillsview AI</h1>
      <p className="text-lg text-white mb-4">
        Your one-stop solution for photography, videography, and AI-driven tools.
      </p>
      <div className="space-x-4">
        <Link
          to="/sign-in"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Sign In
        </Link>
        <Link
          to="/sign-up"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
