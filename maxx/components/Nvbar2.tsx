import React from 'react'

const Nvbar2 = () => {
  return (
    <div className="md:flex flex  justify-center gap-2 px-3 py-1 md:items-center md:gap-3 md:px-4 md:py-3 md:w-full bg-white shadow-md rounded-xl mt-1">
      <img
        src="/black_logo.png"
        alt="Logo"
        className="w-10 h-10 object-contain"
      />
      <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
        Maxx Thrift's
      </h1>
    </div>
  );
};

export default Nvbar2
