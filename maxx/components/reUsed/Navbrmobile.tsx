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
                user ? <div> <CiShoppingCart onClick={() => router.push("/CartPage")} className=" cursor-pointer  text-2xl font-bold hover:text-black" />
                </div> : null
            }


        </div>
    )
}

export default Navbrmobile
