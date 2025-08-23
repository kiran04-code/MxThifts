"use client"
import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';
const AnimationSider = () => {
    const Routes  = useRouter()
    type item = {
        title: string,
        image: string,
        path:string
    }
    const [stopScroll, setStopScroll] = React.useState(false);

    const cardData: item[] = [

        {

            title: "Unlock Your Shirt Jounery",

            image: "/max01.jpg",
            path:"shirt"

        },

        {

            title: "Design Your Digital Future",

            image: "/im3.jpg",
            path:"jeans"

        },

        {

            title: "Build with Passion, Ship with Pride",

            image: "/im1.jpeg",
            path:"T-shirt"

        },

        {

            title: "Think Big, Code Smart",

            image: "/im4.jpg",
            path:"T-shirt"

        },

    ];


    return (

        <>

            <style>{`

                .marquee-inner {

                    animation: marqueeScroll linear infinite;

                }


                @keyframes marqueeScroll {

                    0% {

                        transform: translateX(0%);

                    }


                    100% {

                        transform: translateX(-50%);

                    }

                }

            `}</style>


           <div className='md:flex  p-2 sm:w-[80%]'>
             <div className=" box-shadow overflow-hidden px-2 justify-start   items-center w-full relative max-w-6xl mx-auto border-2 rounded-[20px] border-black md:p-2" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>

                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent ]" />

                <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 2500 + "ms" }}>

                    <div className="flex">

                        {[...cardData, ...cardData].map((card, index) => (

                            <div key={index} onClick={()=>Routes.push(`/caregroy/${card.path}`)} className="w-56 mx-4 h-[13rem] p-2 relative group hover:scale-90 transition-all duration-300">

                                <Image width={500}
                                    height={300} src={card.image} alt="card" className="w-full h-full rounded-xl object-cover" />

                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">

                                    <p className="text-white text-lg font-semibold text-center">{card.title}</p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

            </div>
           </div>

        </>

    );
}

export default AnimationSider
