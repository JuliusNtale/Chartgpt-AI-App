import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link, Outlet, useParams } from 'react-router-dom';
import './index.css';
import HomePage from "./routes/HomePage";
import Dashboard from "./routes/DashboardPage";
import ChartPage from "./routes/ChartPage";
import RootLayout from "./routes/RootLayout";

// RootLayout Component (For common layout across routes)
const router = createBrowserRouter([
{
  element: <RooterLayout />,
  children: [
    {
      path: "/", 
      element: <HomePage />,
    },
  ]
}


])
// Render App
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
