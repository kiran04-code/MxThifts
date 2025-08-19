'use client'
import BigLoder from '@/components/loaders/BigLoder'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'

import axios from 'axios'
import { useAuth } from '@/context/UserAuth'
import { redirect, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const Loading = () => {
    const routes = useRouter()
    const { data: session } = useSession()
    const { setUser, user } = useAuth()!
    const datas = session?.user
    useEffect(() => {
        const hnadleLogfin = async () => {
            const { data } = await axios.post("/api/GoogleLogin", datas)
                setUser(data.detas)
                routes.push("/");     
        }
        hnadleLogfin()
    }, [session])

    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <BigLoder />
        </div>
    )
}

export default Loading
