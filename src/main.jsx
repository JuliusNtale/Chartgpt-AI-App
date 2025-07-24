import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import '@/index.css';

// Error Boundary
import ErrorBoundary from '@/components/ErrorBoundary';
import { LoadingSpinner } from '@/components/LoadingComponents';

// Layouts
import RootLayout from '@/layouts/RootLayout';
import DashboardLayout from '@/layouts/DashboardLayout';

// Routes
const HomePage = lazy(() => import('@routes/HomePage'));
const SignUpPage = lazy(() => import('@routes/SignUpPage'));
const SignInPage = lazy(() => import('@routes/SignInPage'));
const DashboardPage = lazy(() => import('@routes/DashboardPage'));
const ChartPage = lazy(() => import('@routes/ChartPage'));

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return <LoadingSpinner />;
  return isSignedIn ? children : <Navigate to="/sign-in" />;
};

const router = createBrowserRouter([
  // Main app routes
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { 
        path: '/sign-in', 
        element: <SignInPage />,
        children: [
          { path: ':flow', element: <SignInPage /> }, // Handles /sign-in/oauth, /sign-in/verify, etc.
          { path: ':flow/:param', element: <SignInPage /> }
        ]
      },
      { 
        path: '/sign-up', 
        element: <SignUpPage />,
        children: [
          { path: ':flow', element: <SignUpPage /> },
          { path: ':flow/:param', element: <SignUpPage /> }
        ]
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: '/dashboard',
            element: (
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            )
          },
          {
            path: '/dashboard/charts/:id',
            element: (
              <ProtectedRoute>
                <ChartPage />
              </ProtectedRoute>
            )
          }
        ]
      },
      // Catch-all route that ignores Clerk's paths
      { 
        path: '*',
        element: <Navigate to="/" replace />,
        shouldRevalidate: ({ nextUrl }) => {
          // Skip redirect for Clerk's internal paths
          return !nextUrl.pathname.startsWith('/sign-in/') && 
                 !nextUrl.pathname.startsWith('/sign-up/');
        }
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallbackMessage="The application encountered an error. Please refresh the page.">
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);