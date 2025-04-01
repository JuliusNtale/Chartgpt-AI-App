import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="min-h-screen flex flex-col bg-gray-100 ">
        {/* Navbar */}
        <header className=" bg-black flex items-center justify-between px-6 shadow-md text-white transition-colors duration-300">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Hillsview AI logo" className="h-12 w-12" />
              <span className=" text-xl font-semibold">Hillsview</span>
              <span className="w-10 h-6 text-xl rounded-md bg-white text-black flex items-center justify-center font-bold">
                AI
              </span>
            </Link>

          {/* User Navigation */}
          <nav className="flex space-x-6">
            <SignedOut>
              <Link to="/sign-in">
                <button className="p-2 bg-transparent text-white rounded-md hover:bg-white hover:text-black transition duration-300">
                  Sign In
                </button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow h-[calc(100vh-3rem)]  justify-center items-center">
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;
