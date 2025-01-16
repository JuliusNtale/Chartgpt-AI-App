import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';
import HomePage from './routes/HomePage';
import DashboardPage from './routes/DashboardPage';
import ChartPage from './routes/ChartPage';
import RootLayout from './layouts/RootLayout';
import DashboardLayout from './layouts/DashboardLayout';
import SignUpPage from './routes/SignUpPage';
import SignInPage from './routes/SignInPage';

// Authentication check HOC
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = false; // Replace with actual authentication logic
  return isAuthenticated ? element : <Navigate to="/sign-in" />;
};

// Router Configuration
const router = createBrowserRouter([
  {
    element: <RootLayout />, // Root layout for common elements (e.g., header/footer)
    children: [
      {
        path: '/', // Home Page
        element: <HomePage />,
      },
      {
        path: '/sign-up', // Sign Up Page
        element: <SignUpPage />,
      },
      {
        path: '/sign-in', // Sign In Page
        element: <SignInPage />,
      },
      {
        element: <DashboardLayout />, // Dashboard layout
        children: [
          {
            path: '/dashboard', // Protected Dashboard main page
            element: <ProtectedRoute element={<DashboardPage />} />,
          },
          {
            path: '/dashboard/charts/:id', // Protected Charts route with dynamic ID
            element: <ProtectedRoute element={<ChartPage />} />,
          },
        ],
      },
    ],
  },
]);

// Render Application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
