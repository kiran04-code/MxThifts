import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Nvbar2 = () => {
  return (
    <div className="md:flex flex  p-2 justify-center gap-2 px-2 items-center py-1 md:items-center md:gap-3 md:px-4 md:py-4 md:w-full bg-black shadow-md rounded-xl mt-2">
      <Link href={"/"} className='flex justify-center items-center gap-3' >
      <Image
        width={500}
        height={300}
        src="/IMG_4331.PNG"
        alt="Logo"
        className="w-10 h-10 object-contain"
      />
      <h1 className="text-lg sm:text-xl font-semibold text-gray-100">
        Maxx Thrift's
      </h1>
      </Link>
    </div>
  );
};

export default Nvbar2
