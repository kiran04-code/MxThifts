'use client'
import Footer from '@/components/Footer'
import SearchEngine from '@/components/SearchEngine'
import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'
import { clothesDummy } from '@/aseats/Assets'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/UserAuth'
const page = () => {
      const router = useRouter()
      const FilterDaata =clothesDummy.filter((data)=>data.category === "text")
      const {user} = useAuth()!
      console.log(user)
    return (
        <div>
            <div className='md:flex md:justify-center justify-center  bg-gray-200 p-5 items-center md:p-5 flex md:px-10 '>

                <div className='p-2 md:p-1 px-5'><SearchEngine /></div>
            </div>
            <div className='flex justify-center items-start px-25 flex-col'>
                <h1 className='md:text-4xl text-2xl text-nowrap font-bold bg-gradient-to-t from-black to-gray-400 text-transparent bg-clip-text'>All Product</h1>
                <div className='w-20 h-1.5 bg-gradient-to-r from-black to-gray-400  mt-3'></div>
            </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 py-10'>
                {clothesDummy.map((item, index) => (
                    <motion.div
                        whileHover={{ y: -8 }}
                        key={index}
                        onClick={() => router.push(`/${item.id}`)}
                        className="overflow-hidden w-60 hover:shadow-lg transform transition duration-300"
                    >
                        <div className="overflow-hidden">
                            <Image
                                src={item.images[0].image}
                                alt={item.name}
                                width={300}
                                height={300}
                                className="w-60 h-60 object-cover rounded-[2px] transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                        </div>

                        {/* Details */}
                        <div className="p-4">
                            <h2 className="text-[15px] font-semibold text-gray-800 truncate">
                                {item.name}
                            </h2>
                            <p className="text-sm text-gray-500">{item.category}</p>
                            <div className="flex justify-between items-center mt-3">
                                <span className="text-black font-bold">₹{item.price}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default page
