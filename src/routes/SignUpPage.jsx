import React from 'react';
import { SignUp } from '@clerk/clerk-react';
const SignUpPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
      <SignUp redirectUrl="/dashboard" />
    </div>
    );
};

export default SignUpPage;