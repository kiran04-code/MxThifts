"use client"
import { clothesDummy } from '@/aseats/Assets';
import Footer from '@/components/Footer'
import ReusedCompoennts from '@/components/Navbars/ReusedCompoennts'
import { useAuth } from '@/context/UserAuth';
import Image from 'next/image';
import React from 'react'
import { MdDeleteForever } from "react-icons/md";
const Page = () => {
    const {CartIteam} = useAuth()!
    console.log(Object.keys(CartIteam))
    const val = Object.keys(CartIteam)
    const  ids = val.map((data)=>{return data}) 
const filterProduct = clothesDummy.filter((data) =>
  ids.includes(data.id)
);
   
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <ReusedCompoennts />

            {/* Cart Content */}
            <div className="flex flex-col lg:flex-row gap-6 md:p-20  flex-grow p-5  ">
                
                {/* Left side: Cart items */}
                
                <div className="w-full lg:w-2/3  p-4 border-2 bg-white border-gray-300 rounded-2xl">
                
                    <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

                    <div className="space-y-4">
                        {filterProduct.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b pb-4"
                            >
                                {/* Image */}
                                <img
                                    src={item.images[0].image}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded-md"
                                />

                                {/* Item Info */}
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-500">Size: {item.Size}</p>
                                    <p className="text-lg font-bold mt-1">₹{item.price}</p>
                                </div>

                                {/* Quantity & Remove */}
                                <div className="flex items-center gap-2">
                                    <button
                                        aria-label="Decrease quantity"
                                        className="px-3 py-1 border rounded-md"
                                    >
                                        -
                                    </button>
                                    <span className="px-3">1</span>
                                    <button
                                        aria-label="Increase quantity"
                                        className="px-3 py-1 border rounded-md"
                                    >
                                        +
                                    </button>
                                    <button
                                        aria-label="Remove item"
                                        className="px-3 py-1 text-red-600 hover:text-red-800"
                                    >
                                        <MdDeleteForever className='text-3xl'/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md h-fit">
                    <h2 className="text-lg font-bold mb-4">Order Summary</h2>

                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>₹344</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>₹10</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Total</span>
                        <span>₹354</span>
                    </div>
                    <div className="flex items-center border rounded-lg overflow-hidden mt-4">
                        <input
                            type="text"
                            placeholder="Add promo code"
                            className="flex-1 px-3 py-2 text-sm outline-none"
                        />
                        <button className="bg-black text-white px-4 py-2 text-sm">Apply</button>
                    </div>
                    <button className="w-full bg-black text-white py-3 rounded-lg mt-4 hover:bg-gray-800">
                        Checkout
                    </button>
                    <div className='flex justify-center items-center flex-col'>
                       
                        <p className='text-[12px] bg-gray-200 p-2 rounded-[5px] mt-5'>Razorpay may take some time because it’s in beta mode. Please be patient.</p>
                         <Image src={"https://d6xcmfyh68wv8.cloudfront.net/newsroom-content/uploads/2024/05/Razorpay-Logo.jpg"} alt='' width={200} height={40}/>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Page
