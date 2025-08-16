"use client"
import React from 'react'
import { useAuth } from '@/context/UserAuth'
const DataProfile = () => {
    const {user} = useAuth()!
  return (
    <div className=''>
      <p>{user?.email}</p>
      <p>{user?.name}</p>
      <p>{user?.number}</p>
    </div>
  )
}

export default DataProfile
