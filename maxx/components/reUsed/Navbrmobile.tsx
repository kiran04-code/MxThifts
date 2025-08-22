import { useAuth } from '@/context/UserAuth';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { CiAirportSign1, CiShoppingBasket, CiShoppingCart } from 'react-icons/ci';

const Navbrmobile = () => {
    const { user, CartIteam, getCartCout } = useAuth()!
    const router = useRouter()
    return (
        <div>
            {
                user ? <div> <CiShoppingCart onClick={() => router.push("/CartPage")} className="text-2xl font-bold hover:text-black" />
                    <div className="absolute top-2 right-20 w-5 h-5 flex justify-center items-center bg-white rounded-full">
                        <p className="text-black text-[13px]">{
                            getCartCout()
                        }</p>
                    </div></div> : null
            }


        </div>
    )
}

export default Navbrmobile
