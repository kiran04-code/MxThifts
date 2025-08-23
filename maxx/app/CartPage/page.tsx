"use client"
import { clothesDummy } from '@/aseats/Assets';
import Footer from '@/components/Footer'
import SmallLoder from '@/components/loaders/SmallLoder';
import MobileNavbar from '@/components/MobileNavbar';
import ReusedCompoennts from '@/components/Navbars/ReusedCompoennts'
import Nvbar2 from '@/components/Nvbar2';
import { useAuth } from '@/context/UserAuth';
import { IProduct } from '@/model/Products';
import axios from 'axios';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { MdDeleteForever } from "react-icons/md";


const Page = () => {
    const { CartIteam, addToCart, RemoveToCart, getTotalAmmoutCart, user, dummyuCloth } = useAuth()!
    const [loader, setLoder] = useState<boolean>(false)
    const router = useRouter()
    const [checkout, setchekout] = useState("")
    const [productId, setProductId] = useState<string[]>([])
    const [cartAryy, setCartAyy] = useState<IProduct[]>([])
    const getCart = () => {
        const tempArry = Object.keys(CartIteam)
            .map((key) => dummyuCloth.find((data) => data._id === key))
            .filter((p): p is IProduct => p !== undefined);
        setCartAyy(tempArry);
    };
    useEffect(() => {
        getCart()
    }, [CartIteam])
    const BookOrder = async (price:number) => {
       try {
         setLoder(true)
        const { data } = await axios.post('/api/bookOrder', { Userid:user?._id, productId:productId,price })
        if(data.success){
            router.push("/Profile")
            setLoder(false)
        }else{
            setLoder(false)
        }
       } catch (error) {
        console.log(error)
        setLoder(false)
       }
    }
    useEffect(() => {
        setProductId(Object.keys(CartIteam))
    }, [])
    return (
        <div className="min-h-screen flex flex-col">
            <div className='hidden md:flex'>
                <ReusedCompoennts />
            </div>
            <div className='md:hidden flex justify-between gap-2 p-3'>
                <Nvbar2 />
                <MobileNavbar />
            </div>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: "#171717",
                        color: "#fff",
                    },
                }}
            />
            {
                cartAryy.length > 0 ? <div className="flex flex-col lg:flex-row gap-6 md:p-20  flex-grow p-5  ">

                    <div className="w-full lg:w-2/3  p-4 border-2 bg-white border-gray-300 rounded-2xl">

                        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

                        <div className="space-y-4">
                            {cartAryy.map((item) => (
                                <div
                                    key={item._id}
                                    className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b pb-4"
                                >
                                    <Image width={250} height={250}
                                        src={item.images[0]?.image}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-md"
                                    />

                                    <div className="flex-1 text-center sm:text-left">
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-sm text-gray-500">Size: {item?.size}  xl</p>
                                        <p className="text-lg font-bold mt-1">₹{item.offerPrice}</p>
                                    </div>


                                    <div className="flex items-center gap-2">
                                        <button onClick={() => RemoveToCart(item._id)}
                                            aria-label="Decrease quantity"
                                            className="px-3 py-1 border rounded-md"
                                        >
                                            -
                                        </button>
                                        <span className="px-3">{CartIteam[item._id]}</span>
                                        <button onClick={() => addToCart(item._id)}
                                            aria-label="Increase quantity"
                                            className="px-3 py-1 border rounded-md"
                                        >
                                            +
                                        </button>
                                        <button onClick={() => RemoveToCart(item._id)}
                                            aria-label="Remove item"
                                            className="px-3 py-1 text-black hover:text-black"
                                        >
                                            <MdDeleteForever className='text-3xl' />
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
                            <span>₹{getTotalAmmoutCart()}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg border-t pt-2">
                            <span>Total</span>
                            <span>₹{getTotalAmmoutCart()}</span>
                        </div>
                        {
                            user?.addressSubmit ? null : <div className='flex  items-center  bg-gray-200 mb-2 rounded-[10px] justify-between'><p className='px-2'>No Address Found</p>  <button onClick={() => router.push("/Address")} className="bg-black text-white p-2 text-sm rounded-r-lg hover:bg-gray-800">
                                Add Address
                            </button></div>
                        }
                        <select className='border rounded-lg overflow-hidden p-2' onChange={(e) => setchekout(e.target.value)} >
                            <option>--selecte Payment--</option>
                            <option value={"Online Mode"}>Online Mode</option>
                            <option value={"COD Mode"}>COD Mode</option>
                        </select>
                        <div className="flex items-center border rounded-lg overflow-hidden mt-4 w-full max-w-md">
                        </div>
                       
                        {
                            checkout === "Online Mode" ? <button  className="w-full bg-black text-white py-3 rounded-lg mt-4 hover:bg-gray-800">
                                Checkout
                            </button> : <button onClick={() =>{ BookOrder(getTotalAmmoutCart())}} className="w-full bg-black text-white py-3 rounded-lg mt-4 hover:bg-gray-800">
                                {
                                    loader ? <SmallLoder /> : "Place Order"
                                }
                            </button>
                        }
                        <div className='flex justify-center items-center flex-col'>

                            <p className='text-[12px] bg-gray-200 p-2 rounded-[5px] text-center mt-5'>Razorpay may take some time because it’s in beta mode. Please be patient.</p>
                            <Image src={"https://d6xcmfyh68wv8.cloudfront.net/newsroom-content/uploads/2024/05/Razorpay-Logo.jpg"} alt='' width={200} height={40} />
                        </div>
                    </div>
                </div> : <div className='w-full h-screen flex justify-center items-center'><h1 className=' font-medium underline md:text-2xl'>Your Cart is Empty</h1></div>
            }

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Page
