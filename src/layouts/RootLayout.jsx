import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="min-h-screen flex flex-col bg-white text-white">
        {/* Navbar */}
        <header className="h-16 flex items-center bg-black justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Hillsview AI logo" className="h-15 w-12" />
              <span className="font-semibold">Hillsview</span>
              <span className="w-10 h-6 rounded-md bg-white text-black flex items-center justify-center font-bold">
                AI
              </span>
            </Link>
          </div>

          {/* User */}
          <nav className="hidden md:flex space-x-6">
            <SignedOut>
              <SignInButton>
                <button className="rounded-md p-2 rounded-lg font-bold hover:bg-white hover:text-black transition-colors duration-300">
                  User
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </nav>
        </header>

        {/* Main Content */}
        <main className="">
          <Outlet /> {/* Nested Routes */}
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;
