import React from 'react'
import Image from 'next/image'
const DressStype = () => {
  return (
   <div className="w-full flex justify-center items-center p-5 ">
      <div className="bg-gray-200 rounded-2xl  p-6 w-full max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-b to-white-600 from-black ">Browse by Style</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="relative overflow-hidden rounded-2xl shadow-md">
            <Image
            width={250}
            height={250}
              src="/jay1.jpg"
              alt="Casual"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-center font-semibold">
              Casual
            </div>
          </div>

     
          <div className="relative overflow-hidden rounded-2xl shadow-md">
            <Image
            width={250}
            height={250}
              src="/kiran1.jpg"
              alt="Formal"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-center font-semibold">
              Casual
            </div>
          </div>

       
          <div className="relative overflow-hidden rounded-2xl shadow-md">
            <Image
            width={250}
            height={250}
              src="/ck2.jpg"
              alt="Party"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-center font-semibold">
              ForMal
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative overflow-hidden rounded-2xl shadow-md">
            <Image
            width={250}
            height={250}
              src="/ck.jpg"
              alt="Gym"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-center font-semibold">
              ForMal
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DressStype
