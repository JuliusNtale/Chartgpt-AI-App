import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center mt-6 flex-1 p-4 bg-opacity-90">
      <SignUp 
        path="/sign-up" 
        signInUrl="/sign-in" 
        afterSignInUrl="/dashboard"  // Redirect after successful sign-in
        afterSignUpUrl="/dashboard"  // Redirect after successful sign-up to sign-in page
      />
    </div>
  );
};

export default SignUpPage;
