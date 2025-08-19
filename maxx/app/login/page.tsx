import React from 'react';
import Login from './Login';
import { SessionProvider } from 'next-auth/react';

const page = () => {
  return(
    <SessionProvider>
      <Login/>
    </SessionProvider>
  )
}

export default page
