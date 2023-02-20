import React from "react";
import Image from "next/image";

export const Banner: React.FC = () => {
  return (
    <div className='w-screen place-items-center bg-gray-100'>
      <Image
        src='/images/banner.jpg'
        alt='banner'
        width='0'
        height='0'
        sizes='100vw'
        className='w-full h-fit object-cover brightness-50'
      />
      <div className='md:absolute top-1/3 left-1/4 border rounded p-5 md:w-fit h-1/4 bg-slate-300'>
        <h1 className='md:text-xl font-bold text-center'>
          Find evrything from apparel to electronic`s
        </h1>
        <p className='md:text-xl text-center mt-2'>
          Clothing, jewelery, electronics
        </p>
        <button className='p-2 mt-10 md:text-xl sm:text-sm text-slate-50 bg-slate-500 hover:bg-slate-50 hover:text-slate-600 rounded focus:outline-none w-full'>
          Shop Now
        </button>
        <p className='text-md underline mt-2 mb-2'>Contact us</p>
      </div>
    </div>
  );
};
