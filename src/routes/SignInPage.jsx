import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignIn redirectUrl="/dashboard" />
    </div>
  );
};

export default SignInPage;
