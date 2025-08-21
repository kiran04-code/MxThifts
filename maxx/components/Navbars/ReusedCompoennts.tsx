import React from 'react'
import { NavigationMenuDemos } from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import SearchEngine from '@/components/SearchEngine';
const ReusedCompoennts = () => {
    return (
        <div className='flex justify-evenly items-center w-full p-3'>
            <SearchEngine />
            <div className="md:flex hidden md:justify-center md:items-center gap-5">
                <NavigationMenuDemos />
            </div>
            <div className="hidden  p-1">
                <MobileNavbar />
            </div>
        </div>
    )
}

export default ReusedCompoennts
