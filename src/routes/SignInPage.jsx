import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center mt-6 flex-1 p-4 bg-opacity-90">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"  // Link to sign-up page for new users
        afterSignInUrl="/dashboard"  // Redirect after successful sign-in
        afterSignUpUrl="/dashboard"  // Redirect after successful sign-up to sign-in page
      />
    </div>
  );
};

export default SignInPage;
