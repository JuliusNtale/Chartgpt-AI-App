import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const RootLayout = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or default to system preference
    const saved = localStorage.getItem('darkMode');
    if (saved) return JSON.parse(saved);
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode class and save preference
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      appearance={{
        variables: { 
          colorPrimary: '#3b82f6',
          colorBackground: darkMode ? '#1f2937' : '#ffffff',
          colorText: darkMode ? '#f9fafb' : '#111827'
        }
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
        {/* Improved Navbar */}
        <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Enhanced Logo */}
              <Link
                to="/"
                className="group flex items-center space-x-3 transition-transform hover:scale-105"
                onMouseEnter={() => import('@routes/DashboardPage')}
              >
                <div className="relative">
                  <img 
                    src="/logo.png" 
                    alt="Hillsview AI Logo" 
                    className="h-10 w-10 transition-all duration-300 group-hover:rotate-12 group-hover:drop-shadow-lg" 
                  />
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Hillsview
                  <span className="ml-1 inline-block rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-2 py-1 text-xs font-semibold text-white shadow-lg">
                    AI
                  </span>
                </span>
              </Link>

              {/* Enhanced Navigation */}
              <nav className="flex items-center space-x-4">
                <SignedOut>
                  <div className="flex items-center space-x-2">
                    <Link
                      to="/sign-in"
                      className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/sign-up"
                      className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                    >
                      Get Started
                    </Link>
                  </div>
                </SignedOut>
                <SignedIn>
                  <div className="flex items-center space-x-4">
                    {/* Enhanced Dark Mode Toggle */}
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="group relative rounded-full p-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                    >
                      <div className="relative w-5 h-5">
                        {darkMode ? (
                          <span className="text-yellow-500 group-hover:rotate-180 transition-transform duration-300">☀️</span>
                        ) : (
                          <span className="text-blue-600 group-hover:-rotate-180 transition-transform duration-300">🌙</span>
                        )}
                      </div>
                    </button>
                    
                    {/* Enhanced User Button */}
                    <div className="relative">
                      <UserButton 
                        afterSignOutUrl="/"
                        appearance={{
                          elements: {
                            avatarBox: "w-10 h-10 rounded-full ring-2 ring-blue-500/20 hover:ring-blue-500/40 transition-all duration-200"
                          }
                        }}
                      />
                    </div>
                  </div>
                </SignedIn>
              </nav>
            </div>
          </div>
        </header>

        {/* Enhanced Main Content Area */}
        <main className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10 pointer-events-none"></div>
          <div className="relative z-10 h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;