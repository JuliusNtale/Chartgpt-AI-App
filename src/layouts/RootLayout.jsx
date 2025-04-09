import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const RootLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      appearance={{
        variables: { colorPrimary: '#4f46e5' }
      }}
    >
      <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link
                to="/"
                className="flex items-center space-x-2"
                onMouseEnter={() => import('@routes/DashboardPage')}
              >
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="h-10 w-10 transition-transform hover:rotate-12" 
                />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Hillsview<span className="ml-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-2 py-1 text-white">AI</span>
                </span>
              </Link>

              {/* Navigation - Sign In always visible */}
              <nav className="flex items-center space-x-6">
                <SignedOut>
                  <Link
                    to="/sign-in"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Sign In
                  </Link>
                </SignedOut>
                <SignedIn>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      aria-label="Toggle dark mode"
                    >
                      {darkMode ? '☀️' : '🌙'}
                    </button>
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content Area - Now contains dashboard layout */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;