"use client"
import { useAuth } from '@/context/UserAuth'
import React from 'react'

const page = () => {
    const {user} = useAuth()!
  return (
    <div className=''>
      <p>{user?.email}</p>
      <p>{user?.name}</p>
      <p>{user?.number}</p>
    </div>
  )
}

export default page
