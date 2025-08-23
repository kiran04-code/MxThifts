import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='bg-black'>
   
        <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div className="md:max-w-96">
                  <div className='flex  items-center  gap-2'>
                      <Image alt=""  width={50} height={50} src="/IMG_4331.PNG" />
                      <h1 className='font-bold text-3xl'>Maxx Thrift&apos;s</h1>
                        <Link
                  href="https://www.instagram.com/maxx.thrifts_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram size={32} />
                </Link>
                  </div>
                    <p className="mt-6 text-sm">
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+1-234-567-890</p>
                            <p>contact@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-6 text-center text-sm pb-6 text-gray-400">
          Designed & Developed by{" "}
          <Link
            href="https://kirran-dev.onrender.com"
            className="underline font-medium hover:text-white"
          >
            Kiran.dev
          </Link>{" "}
          | © {new Date().getFullYear()} Maxx Thrift’s — All Rights Reserved.
        </p>
        </footer>
    </div>
  )
}

export default Footer
