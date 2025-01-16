import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './routes/HomePage';
import DashboardPage from './routes/DashboardPage';
import ChartPage from './routes/ChartPage';
import RootLayout from './layouts/RootLayout';
import DashboardLayout from './layouts/DashboardLayout';

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
        element: <DashboardLayout />, // Dashboard layout
        children: [
          {
            path: '/dashboard', // Dashboard main page
            element: <DashboardPage />,
          },
          {
            path: '/dashboard/charts/:id', // Nested route for charts with dynamic ID
            element: <ChartPage />,
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
