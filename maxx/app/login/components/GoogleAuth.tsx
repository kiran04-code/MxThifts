'use client'
import { signIn, useSession } from "next-auth/react";
import React, { useState } from 'react'
import { redirect, useRouter } from "next/navigation";
import { useAuth } from "@/context/UserAuth";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
const GoogleAuth = () => {
    const [loading,setLoading] = useState(false)
    const {user,setUser} = useAuth()!
    const {data:session,status} = useSession()
     const handleGoogleSignIn = async () => {
        setLoading(true)
        if(status  === "authenticated" || user){
        redirect("/Profile")
    }
    try {
      await signIn("google",{ callbackUrl: "/loading" }); 
      setLoading(false)
    } catch (error) {
      toast.error("Google Sign-in Fail")
      setLoading(false)
    }
  };
    return (
        <div>
            <button  onClick={handleGoogleSignIn}className="bg-black p-4 w-full  rounded-4xl cursor-pointer flex justify-center items-center gap-2 text-white hover:bg-gray-800 transition">
                <FaGoogle /> Sign In With Google
            </button>
        </div>
    )
}

export default GoogleAuth
