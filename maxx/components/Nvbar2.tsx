import React from 'react'
import Image from 'next/image';
const Nvbar2 = () => {
  return (
    <div className="md:flex flex  p-3 justify-center gap-2 px-3 items-center py-2 md:items-center md:gap-3 md:px-4 md:py-4 md:w-full bg-black shadow-md rounded-xl mt-2">
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
    </div>
  );
};

export default Nvbar2
