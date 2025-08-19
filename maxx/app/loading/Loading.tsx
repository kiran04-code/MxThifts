'use client'
import BigLoder from '@/components/loaders/BigLoder'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'

import axios from 'axios'
import { useAuth } from '@/context/UserAuth'
import { redirect } from 'next/navigation'
import toast from 'react-hot-toast'

const Loading = () => {
    const { data: session } = useSession()
    const { setUser, user } = useAuth()!
    const datas = session?.user
    console.log(session)
    useEffect(() => {
        const hnadleLogfin = async () => {
            const { data } = await axios.post("/api/GoogleLogin", datas)
            if (data.success) {
                setUser(data.detas)
                toast.success(data.message)
                redirect("/")
            }
            redirect("/login")
        }
        hnadleLogfin()
    }, [session,user])

    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <BigLoder />
        </div>
    )
}

export default Loading
