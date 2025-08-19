"use client"
import { clothesDummy } from '@/aseats/Assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import { useRouter } from 'next/navigation'
const Carts = () => {
    const router = useRouter()
  return (
   <div className="md:p-6 mt-5">
  {/* Heading */}
  <div className="md:px-17 px-5">
    <h1 className="md:text-4xl text-2xl text-transparent bg-clip-text bg-gradient-to-b from-black font-bold to-white">
      LATEST DROP
    </h1>
  </div>
  <div className="md:grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-6 md:px-17 px-5 mt-5 flex justify-center items-center flex-col ">
    {clothesDummy.map((inte, index) => (
      <motion.div

      whileHover={{
        y:-8
      }}
        key={index}
        onClick={()=>router.push(`/${inte.id}`)}
        className=" overflow-hidden w-60 hover:shadow-lg transform transition duration-300"
      >
        {/* Image */}
        <Image
          src={inte.images[0].image}
          alt={inte.name}
          width={200}
          height={300}
          onClick={()=>router.push(`/${inte.id}`)}
          className="w-60 h-60 object-cover rounded-[2px] transition-transform duration-300 ease-in-out hover:scale-110  "
        />
        {/* Details */}
        <div className="p-4">
          <h2 className="text-[15px] font-medium text-gray-800">{inte.name}</h2>
          <p className="text-sm text-gray-500">{inte.category}</p>
          {/* Price + Rating */}
          <div className="flex justify-between items-center mt-3">
            <span className="text-black font-bold">₹{inte.price}</span>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>
  )
}

export default Carts
