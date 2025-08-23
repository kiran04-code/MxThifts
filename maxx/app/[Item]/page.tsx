'use client'
import { clothesDummy } from '@/aseats/Assets';
import Footer from '@/components/Footer';
import SreachNavogte from '@/components/SreachNavogte';
import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import Similar from './components/Similar';
import Image from 'next/image';
import { NavigationMenu } from '@radix-ui/react-navigation-menu';
import { NavigationMenuDemos } from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import SearchEngine from '@/components/SearchEngine';
import { useAuth } from '@/context/UserAuth';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import ReusedCompoennts from '@/components/Navbars/ReusedCompoennts';
import Navbrmobile from '@/components/reUsed/Navbrmobile';
import Nvbar2 from '@/components/Nvbar2';
interface ProductDetailsPageParam {
    Item: string
}
type ProductDetailsPageProp = {
    params: Promise<ProductDetailsPageParam>;
};
const Page = (pros: ProductDetailsPageProp) => {
    const { Item } = React.use(pros.params);
    const product = {
        name: "Nike Pegasus 41 shoes",

        category: "Sports",

        price: 189,

        offerPrice: 159,

        rating: 4,

        images: [

            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",

            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",

            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",

            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png"

        ],

        description: [

            "High-quality material",

            "Comfortable for everyday use",

            "Available in different sizes"

        ]

    };
   const { user, CartIteam, setCartItem, addToCart, RemoveToCart ,dummyuCloth} = useAuth()!
    const dummsyMal = dummyuCloth.find((data) => data._id === Item)
    const [thumbnail, setThumbnail] = React.useState<string>(dummsyMal?.images[0]?.image ?? "");
    
    const router = useRouter()
    return dummsyMal && (
        <div>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: "#171717",
                        color: "#fff",
                    },
                }}
            />
           <div className='hidden md:flex'>
             <ReusedCompoennts />
           </div>
           <div className='md:hidden flex justify-between gap-2 p-3'>
            <Nvbar2/>
            <MobileNavbar/>
           </div>
            <div className=' md:p-20 p-2'>
                <div className="max-w-6xl w-full px-6">
                    <p>
                        <span>Home</span> /

                        <span> Products</span> /

                        <span> {dummsyMal.category}</span> /

                        <span className="text-indigo-500"> {dummsyMal.name}</span>
                    </p>
                    <div className="flex flex-col md:flex-row gap-16 mt-4">

                        <div className="flex gap-3">

                            <div className="flex flex-col gap-3">

                                {dummsyMal.images.map((image, index) => (

                                    <div key={index} onClick={() => setThumbnail(image.image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >

                                        <Image height={250} width={250} src={image.image} alt={`Thumbnail ${index + 1}`} />

                                    </div>

                                ))}

                            </div>
                            <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                                <Image width={400} height={400} src={thumbnail} alt="Selected product" className="w-full h-full object-cover" />
                            </div>

                        </div>


                        <div className="text-sm w-full md:w-1/2 md:py-15 md:p-5 mb-10   ">

                            <h1 className="text-4xl font-bold   text-transparent bg-clip-text bg-gradient-to-t from-black to-white">{dummsyMal.name}</h1>


                            <div className="flex items-center gap-0.5 mt-1">

                                {Array(5).fill('').map((_, i) => (

                                    product.rating > i ? (

                                        <svg key={i} width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">

                                            <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" fill="#615fff" />

                                        </svg>

                                    ) : (

                                        <svg key={i} width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">

                                            <path d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z" fill="#615fff" fill-opacity="0.35" />

                                        </svg>

                                    )

                                ))}

                                <p className="text-base ml-2">({product.rating})</p>

                            </div>


                            <div className="mt-6">

                                <p className="text-gray-500/70 line-through">MRP:₹{dummsyMal.price}</p>

                                <p className="text-2xl font-medium">MRP: ₹{dummsyMal.offerPrice}</p>

                                <span className="text-gray-500/70">(inclusive of all taxes)</span>

                            </div>
                            <p className="text-base font-medium mt-6">About Product</p>

                            <ul className="list-disc ml-4 text-gray-500/70">

                                <li>{dummsyMal.description}</li>
                            </ul>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <div className="flex items-center gap-2 bg-gray-600 px-4 py-2 rounded-xl text-white text-sm font-medium shadow">
                                    <span className="opacity-80">Size:</span>
                                    <span>{dummsyMal.size}</span>
                                </div>

                                <div className="flex items-center gap-2 bg-gray-600 px-4 py-2 rounded-xl text-white text-sm font-medium shadow">
                                    <span className="opacity-80">Length:</span>
                                    <span>{dummsyMal.length}</span>
                                </div>

                                <div className="flex items-center gap-2 bg-gray-600 px-4 py-2 rounded-xl text-white text-sm font-medium shadow">
                                    <span className="opacity-80">Chest:</span>
                                    <span>{dummsyMal.chest}</span>
                                </div>

                                
                            </div>


                            <div className="flex items-center mt-10 gap-4 text-base">

                                {
                                    !CartIteam[dummsyMal._id] ? <button onClick={() => { addToCart(dummsyMal._id); }} className="w-full py-3.5  rounded-2xl cursor-pointer font-medium bg-black text-white hover:bg-gray-600 transition">add</button> : (<> <div className="w-full py-3.5 cursor-pointer flex justify-center items-center md:gap-8 gap-2  rounded-2xl bg-gray-300 font-medium  text-gray-800/80 hover:bg-gray-200 transition" >
                                        <IoIosAdd onClick={() => addToCart(dummsyMal._id)} className='text-3xl transition rounded-2xl hover:bg-gray-500 hover:text-white' /><p>{CartIteam[dummsyMal._id]}</p><RiSubtractLine onClick={() => RemoveToCart(dummsyMal._id)} className='text-3xl transition rounded-2xl hover:bg-gray-500 hover:text-white' />
                                    </div>

                                        <button onClick={() => addToCart(dummsyMal._id)} className="w-full py-3.5  rounded-2xl cursor-pointer font-medium bg-black text-white hover:bg-gray-600 transition" >

                                            Add to Cart

                                        </button></>)
                                }

                            </div>

                        </div>

                    </div>
                    <div className='flex justify-center items-center mt-5'><Similar /></div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Page
