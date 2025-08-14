"use client"; // if using Next.js App Router


import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion"
const Footer2 = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className='md:flex md:justify-center md:items-center md:gap-6 flex  items-center gap-5'>
                <Image
                    width={600}
                    height={400}
                    src="/black_logo.png"
                    alt="Logo"
                    className="md:w-50 md:h-50 h-15 w-15 object-contain md:flex  hidden"
                />
                <h1 className="text-5xl lg:text-[200px] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-black">
                    Maxx Thrift's
                </h1>
            </div>
            <div className='  md:w-full md:justify-end md:flex mb-5  p-2 hidden md:px-20  '>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-black text-white text-xl p-2 bg-gradient-to-l from-gray-600 to-black font-semibold"
                >
                    Style that tells a story — thrifted, timeless, and uniquely yours.
                </motion.p>
            </div>
        </div>
    )
}

export default Footer2
