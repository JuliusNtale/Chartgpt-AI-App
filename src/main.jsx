import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link, Outlet, useParams } from 'react-router-dom';
import './index.css';

// Components for routes
const Homepage = () => (
  <div>
    <h1>Homepage</h1>
    <Link to="/dashboard">Go to Dashboard</Link>
  </div>
);

const DashboardPage = () => (
  <div>
    <h1>Dashboard</h1>
    <nav>
      <Link to="charts/1">Chart 1</Link>
      <br />
      <Link to="charts/2">Chart 2</Link>
    </nav>
    <Outlet /> {/* Placeholder for nested routes */}
  </div>
);

const ChartPage = () => {
  const { id } = useParams(); // Get dynamic parameter
  return <h2>Chart ID: {id}</h2>;
};

// Define routes
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
        path: 'charts/:id', // Nested route
        element: <ChartPage />,
      },
    ],
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
