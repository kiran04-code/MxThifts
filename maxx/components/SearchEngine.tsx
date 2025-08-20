"use client"
import { redirect } from 'next/navigation';
import React from 'react'
import { IoSearchCircle } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/UserAuth';
const SearchEngine = () => {
    const routes = useRouter()
    const {setInput,input} = useAuth()!
    return (
        <div className="flex justify-center items-center">
            <div className="relative w-80">
                    <input value={input} onChange={(e)=>setInput(e.target.value)}   onClick={(e)=>{e.preventDefault(); routes.push("/allProduct")} }
                        type="text"
                        placeholder="Search here..."
                        className="md:w-full p-4 w-70  rounded-2xl border border-gray-400 
               bg-black text-white placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-white 
               transition duration-300"
                    />
            
                {/* Search Icon */}
                <IoSearchCircle
                    className="md:absolute hidden md:flex right-3 top-1/2 transform -translate-y-1/2 
                     text-white text-3xl cursor-pointer hover:text-gray-300 transition"
                />
            </div>
        </div>
    )
}

export default SearchEngine
