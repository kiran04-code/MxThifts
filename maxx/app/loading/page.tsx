import React from 'react'
import Loading from './Loading'
import { SessionProvider } from 'next-auth/react'

const page = () => {
  return (
    <div>
      <SessionProvider>
        <Loading/>
      </SessionProvider>
    </div>
  )
}

export default page
