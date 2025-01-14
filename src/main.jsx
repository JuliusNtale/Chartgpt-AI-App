import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

// Define routes with proper syntax
const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <Homepage />
    ,
  },
  {
    path: '/dashboard',
    element:<DashboardPage/>,
    children: [ 
      path:"/dashboard/charts/:id", element: <ChartPage />
    ],
      {
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
