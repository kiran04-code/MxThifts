import React from 'react';

const HeroSection = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full px-4 py-12 md:py-20 md:px-0 text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight'>
                Thrifted Finds. Timeless Vibes!
            </h1>
            <p className='mt-4 text-base sm:text-lg md:text-xl font-semibold max-w-2xl'>
                Fashion with a conscience.
                Wear stories, not trends.
            </p>
        </div>
    );
}

export default HeroSection;
