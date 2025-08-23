"use client"
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/UserAuth';
import axios from 'axios';
import GoogleAuth from '../login/components/GoogleAuth';
import Image from 'next/image';

const Regsiter = () => {
 
  const routes = useRouter()
   const { user, setUser } = useAuth()!;
  const [from, setfrom] = useState({
    email: "",
    number: "",
    password: "",
    name: ""
  })
  ;
  const handleOnchnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setfrom({ ...from, [name]: value })
  }
  
  const hnadleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (!from.number || !from.password || !from.email) {
      return toast.error("Fill the  from  Before Submit it")
    } else {
      const { data } = await axios.post("/api/register",from)
      console.log(data)
      if(data.success){
        toast.success(data.message)
        routes.push("/")
        setUser(data.datas)
      }
      else{
        toast.error(data.message)
        setfrom({name:"",email:"",password:"",number:""})
      }
    }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#171717",   
            color: "#fff",        
          },
        }}
      />
      <div className="w-full max-w-md  rounded-2xl p-4 md:p-8">

        <div className="flex gap-2 items-center mb-6">
          <Image height={120} width={120} src="/black_logo.png" alt="logo" className="w-12 h-12" />
          <p className="text-2xl font-semibold">MaxxThift&apos;s</p>
        </div>


        <h1 className="text-2xl font-semibold text-black mb-4 underline">Sign up</h1>

        {/* Form */}
        <form onSubmit={hnadleSubmit} className="flex flex-col gap-4 mb-4"  >
          <input
            type="name"
            name='name'
            onChange={handleOnchnage}
            placeholder="Enter Your Name"
            className="bg-gray-200 focus:bg-gray-300 focus:outline-none p-3 rounded-lg"
          />
          <input
            type="email"
            name='email'
            onChange={handleOnchnage}
            placeholder="Enter Your Email"
            className="bg-gray-200 focus:bg-gray-300 focus:outline-none p-3 rounded-lg"
          />
          <input
            type="tel"
            name="number"
            onChange={handleOnchnage}
            placeholder="Enter Your Number"
            className="bg-gray-200 focus:bg-gray-300 focus:outline-none p-3 rounded-lg"
          />
          <input
            type="password"
            name='password'
            onChange={handleOnchnage}
            placeholder="Enter Your Password"
            className="bg-gray-200 focus:bg-gray-300 focus:outline-none p-3 rounded-lg"
          />
          <button className="text-white bg-black p-4 rounded-4xl font-medium hover:bg-gray-800 transition">
            Submit
          </button>
        </form>

        <div className="flex items-center gap-2 my-4">
          <div className="flex-grow h-0.5 bg-gray-400"></div>
          <span className="text-gray-600">or</span>
          <div className="flex-grow h-0.5 bg-gray-400"></div>
        </div>

        {/* Social Login */}
        <div className="flex flex-col gap-4">
            <GoogleAuth/>
          <button
            onClick={() => routes.push("/login")}
            className="bg-black p-4 rounded-4xl cursor-pointer flex justify-center items-center gap-2 text-white hover:bg-gray-800 transition"
          >
            <VscAccount /> Already Have an Account
          </button>
             
        </div>
      </div>
    </div>
  )
}

export default Regsiter
