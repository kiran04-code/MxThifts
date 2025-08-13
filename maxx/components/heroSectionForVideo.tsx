import { div } from 'motion/react-client'
import React from 'react'

const HeroSectionForVideo = () => {
    return (
        <div className='md:flex md:justify-between '>
            <div className='w-full md:w-[800px] md:p-20 p-5 flex flex-col gap-5'>
                <h1 className='text-4xl sm:text-5xl md:text-[80px] font-bold leading-snug md:leading-[1.2]'>
                    Thrifted Finds.{' '}
                    <span className='bg-black text-white px-3 sm:px-5 md:px-8'>
                        Timeless
                    </span>{' '}
                    Vibes!
                </h1>
                <span className='text-base sm:text-lg md:text-2xl font-medium md:font-bold'>
                    Fashion with a conscience. <br className='hidden md:block' />
                    Wear stories, not trends.
                </span>
            </div>

            <div className='retaive  justify-end  items-center flex'>
                <div className='absoulte '>
                    <video src="kiran01.mp4 " className='rounded-3xl shadow-2xl border-2 ' loop autoPlay muted></video>
                </div>

            </div>
        </div>

    )
}

export default HeroSectionForVideo
