import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link, Outlet, useParams } from 'react-router-dom';
import './index.css';

// Homepage Component
const Homepage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
    <h1 className="text-4xl font-bold mb-4 animate-fade-in">Welcome to Hillsview AI Chat</h1>
    <Link
      to="/dashboard"
      className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
    >
      Go to Dashboard
    </Link>
  </div>
);

// Dashboard Component
const DashboardPage = () => (
  <div className="min-h-screen bg-gray-100 p-4">
    <h1 className="text-3xl font-bold text-gray-800 text-center my-6">Dashboard</h1>
    <nav className="flex justify-center space-x-6 mb-8">
      <Link
        to="charts/1"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
      >
        Chart 1
      </Link>
      <Link
        to="charts/2"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
      >
        Chart 2
      </Link>
    </nav>
    <Outlet /> {/* Nested Route Placeholder */}
  </div>
);

// Chart Page Component
const ChartPage = () => {
  const { id } = useParams(); // Get dynamic parameter
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-700">
        Chart ID: <span className="text-blue-500">{id}</span>
      </h2>
    </div>
  );
};

// Define Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    children: [
      {
        path: 'charts/:id',
        element: <ChartPage />,
      },
    ],
  },
]);

// Render App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
