import React from 'react';
import { SignUp } from '@clerk/clerk-react';
const SignUpPage = () => {
    return (
        <div className=" flex justify-center items-center">
      <SignUp path="/sign-up" signInUrl="/sign-in" />
    </div>
    );
};

export default SignUpPage;