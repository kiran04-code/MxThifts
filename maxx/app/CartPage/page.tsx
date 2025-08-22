"use client"
import { clothesDummy } from '@/aseats/Assets';
import Footer from '@/components/Footer'
import MobileNavbar from '@/components/MobileNavbar';
import ReusedCompoennts from '@/components/Navbars/ReusedCompoennts'
import Nvbar2 from '@/components/Nvbar2';
import { useAuth } from '@/context/UserAuth';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { MdDeleteForever } from "react-icons/md";
interface Product {
    id: string;
    name: string;
    category: string;
    price: string;
    offerPrice: number;
    rating: number;
    description: string;
    Size: string;
    Chest: number;
    Length: number;
    images: { image: string }[]
    shipeingPrice: number;
    Fit: string;
}


const Page = () => {
    const { CartIteam, addToCart, RemoveToCart, getTotalAmmoutCart,user } = useAuth()!
    console.log(Object.keys(CartIteam))
    const router = useRouter()
    const [checkout, setchekout] = useState("")
    const [coupeCode, setCoupeCode] = useState('')
    const [errorcopen, seterrorcopen] = useState('')
    const [coupeCodetrue, setCoupeCodetrue] = useState<boolean>(false)
    const [totamAmount, setTotalAmout] = useState<number>(getTotalAmmoutCart())
    const [cartAryy, setCartAyy] = useState<Product[]>([])
    const getCart = () => {
        const tempArry: Product[] = [];
        for (const key in CartIteam) {
            const product = clothesDummy.find((data) => data.id === key)
            tempArry.push(product)
        }
        setCartAyy(tempArry)
    }
    useEffect(() => {
        getCart()
    }, [CartIteam])

    const hnadleonchnge = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const value = e.target.value;
        setCoupeCode(value);

        if (value === "max14") {
            setCoupeCodetrue(true)
            toast.success("Coupon applied ✅")
            setTotalAmout(getTotalAmmoutCart() - getTotalAmmoutCart() * 10 / 100)
        } else {
            seterrorcopen("in valid Coupon")
            setCoupeCodetrue(false)

        }
    }
    return (
        <div className="min-h-screen flex flex-col">
             <div className='hidden md:flex'>
             <ReusedCompoennts />
           </div>
           <div className='md:hidden flex justify-between gap-2 p-3'>
            <Nvbar2/>
            <MobileNavbar/>
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
                                    key={item.id}
                                    className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b pb-4"
                                >
                                    <Image width={250} height={250}
                                        src={item.images[0]?.image}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-md"
                                    />

                                    <div className="flex-1 text-center sm:text-left">
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-sm text-gray-500">Size: {item.Size}</p>
                                        <p className="text-lg font-bold mt-1">₹{item.offerPrice}</p>
                                    </div>


                                    <div className="flex items-center gap-2">
                                        <button
                                            aria-label="Decrease quantity"
                                            className="px-3 py-1 border rounded-md"
                                        >
                                            -
                                        </button>
                                        <span className="px-3">{CartIteam[item.id]}</span>
                                        <button onClick={() => addToCart(item.id)}
                                            aria-label="Increase quantity"
                                            className="px-3 py-1 border rounded-md"
                                        >
                                            +
                                        </button>
                                        <button onClick={() => RemoveToCart(item.id)}
                                            aria-label="Remove item"
                                            className="px-3 py-1 text-red-600 hover:text-red-800"
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
                            <span>₹{totamAmount}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg border-t pt-2">
                            <span>Total</span>
                            <span>₹{totamAmount}</span>
                        </div>
                     {
                        user?.addressSubmit ?    null:<div className='flex  items-center  bg-gray-200 mb-2 rounded-[10px] justify-between'><p className='px-2'>No Address Found</p>  <button  onClick={()=>router.push("/Address")} className="bg-black text-white p-2 text-sm rounded-r-lg hover:bg-gray-800">
                            Add Address
                        </button></div>
                     }
                        <select className='border rounded-lg overflow-hidden p-2' onChange={(e) => setchekout(e.target.value)} >
                            <option>--selecte Payment--</option>
                            <option value={"Online Mode"}>Online Mode</option>
                            <option value={"offline Mode"}>offline Mode</option>
                        </select>
                        <div className="flex items-center border rounded-lg overflow-hidden mt-4 w-full max-w-md">
                            {coupeCodetrue ? null : (
                                <div className="flex flex-col w-full">
                                    <div className="flex w-full">
                                        <input
                                            type="text"
                                            onChange={hnadleonchnge}
                                            value={coupeCode}
                                            placeholder="Add promo code"
                                            className="flex-1 px-3 py-2 text-sm outline-none border-r"
                                        />
                                        <button className="bg-black text-white px-4 py-2 text-sm rounded-r-lg hover:bg-gray-800">
                                            Apply coupon code
                                        </button>
                                    </div>

                                </div>

                            )}

                        </div>
                        {
                            coupeCodetrue ? null : <div> {
                                errorcopen ? <p className="text-red-500 text-xs mt-1 px-2">{errorcopen}</p> : null
                            }</div>
                        }

                        <div className='flex justify-center items-center mt-2 bg-gray-200 p-2 rounded-xl'>  <p>use<span className=' px-2 py-1 underline'>max14 </span>coupon code for upto 10% discount</p></div>
                        {
                            checkout === "Online Mode" ? <button className="w-full bg-black text-white py-3 rounded-lg mt-4 hover:bg-gray-800">
                                Checkout
                            </button> : <button className="w-full bg-black text-white py-3 rounded-lg mt-4 hover:bg-gray-800">
                                Place Order
                            </button>
                        }
                        <div className='flex justify-center items-center flex-col'>

                            <p className='text-[12px] bg-gray-200 p-2 rounded-[5px] text-center mt-5'>Razorpay may take some time because it’s in beta mode. Please be patient.</p>
                            <Image src={"https://d6xcmfyh68wv8.cloudfront.net/newsroom-content/uploads/2024/05/Razorpay-Logo.jpg"} alt='' width={200} height={40} />
                        </div>
                    </div>
                </div> : <div className='w-full h-screen flex justify-center items-center'><h1 className=' font-medium underline md:text-2xl'>Cart Items Is Not Availble</h1></div>
            }

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Page
