import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react'; // Import Clerk's useAuth hook
import './index.css';
import HomePage from './routes/HomePage';
import DashboardPage from './routes/DashboardPage';
import ChartPage from './routes/ChartPage';
import RootLayout from './layouts/RootLayout';
import DashboardLayout from './layouts/DashboardLayout';
import SignUpPage from './routes/SignUpPage';
import SignInPage from './routes/SignInPage';
import { lazy, Suspense } from 'react';

// Authentication check HOC
const ProtectedRoute = ({ element }) => {
  const { userId, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>; // Replace with your loading component
  }

  if (!userId) {
    return <Navigate to="/sign-in" />;
  }

  return element;
};
const ErrorBoundary = ({ error }) => (
  <div className="p-4 text-center">
    <h1 className="text-2xl font-bold text-red-600">Something went wrong!</h1>
    <p className="text-gray-600">{error?.message || "An unexpected error occurred."}</p>
  </div>
);

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
        element: <DashboardLayout />, // Dashboard layout for dashboard routes
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
      // Default Redirect
      {
        path: '*',
        element: <Navigate to="/" replace />, // Redirect unmatched routes to the home page
      },
    ],
  },
]);

// Render Application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
