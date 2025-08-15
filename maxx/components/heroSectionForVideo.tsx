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

            <div className='md:retaive  md:justify-end  md:items-center md:flex flex-col flex  px-3  md:px-1'>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className='md:flex md:flex-col flex  gap-1 justify-center items-center '>
                        <video
                            src="v2.mp4"
                            className="rounded-xl shadow-2xl border-1 border-black md:w-32 w-35 h-56 object-cover"
                            loop
                            autoPlay
                            muted
                        ></video>
                        <div >
                            <video
                                src="v2.mp4"
                                className="rounded-xl shadow-2xl border-1 border-black md:w-32 w-35 h-56 object-cover"
                                loop
                                autoPlay
                                muted
                            ></video>
                        </div>
                    </div>
                    <div className='md:flex  md:items-start flex justify-center items-center sm:flex sm:justify-center '>
                        <video
                            src="v1.mp4"
                            className="rounded-xl shadow-2xl border-2  border-black w-62 h-96 object-cover"
                            loop
                            autoPlay
                            muted
                        ></video>
                    </div>

                    <div className='md:flex md:flex-col flex px-2  gap-1 justify-center items-center '>
                        <video
                            src="v2.mp4"
                            className="rounded-xl shadow-2xl border-1 border-black md:w-32 w-35 h-56 object-cover"
                            loop
                            autoPlay
                            muted
                        ></video>
                        <video
                            src="v2.mp4"
                            className="rounded-xl shadow-2xl border-1 border-black md:w-32 w-35 h-56 object-cover"
                            loop
                            autoPlay
                            muted
                        ></video>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroSectionForVideo
