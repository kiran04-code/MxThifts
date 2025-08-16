"use client"
import { useAuth } from '@/context/UserAuth';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

const Login = () => {
  const {user,setUser} = useAuth()!
   const [from,setfrom] = useState({
     email: "",
    password: ""
   })
   const routes = useRouter()
   const handleOnchnage = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setfrom({...from,[name]:value})
   }
   const hnadleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
  try {
  e.preventDefault()
    if ( !from.password || !from.email) {
      return toast.error("Fill the Before Submit the")
    }
    const {data} = await axios.post("/api/login",from)
    console.log(data)
    if(data.success){
      toast.success(data.message)
      setUser(data.datas)
      routes.push("/")
      
    }
    else{
       toast.error(data.message)
      setfrom({email:"",password:""})
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
      <div className="w-full max-w-md  rounded-2xl p-6 md:p-8">

        <div className="flex gap-2 items-center mb-6">
          <img src="black_logo.png" alt="logo" className="w-12 h-12" />
          <p className="text-2xl font-semibold">MaxxThift's</p>
        </div>


        <h1 className="text-2xl font-semibold text-black mb-4 underline">Sign up</h1>

        {/* Form */}
        <form onSubmit={hnadleSubmit} className="flex flex-col gap-4 mb-4"  >
          <input
            type="email"
            name='email'
            onChange={handleOnchnage}
            placeholder="Enter Your Email"
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
        <div className="flex flex-col gap-4">
          <button className="bg-black p-4 rounded-4xl cursor-pointer flex justify-center items-center gap-2 text-white hover:bg-gray-800 transition">
            <FaGoogle /> Sign In With Google
          </button>
          <button
               onClick={() => routes.push("/Register")}
            className="bg-black p-4 rounded-4xl cursor-pointer flex justify-center items-center gap-2 text-white hover:bg-gray-800 transition"
          >
            <VscAccount /> Create New Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
