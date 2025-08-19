import React from 'react';
import Regsiter from './Regsiter';
import { SessionProvider } from 'next-auth/react';

const page = () => {
 
return (
 <SessionProvider>
   <Regsiter/>
 </SessionProvider>
)
}

export default page
