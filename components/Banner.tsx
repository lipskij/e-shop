import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Banner: React.FC = () => {
  return (
    <div className='w-screen h-screen place-items-center bg-slate-400'>
      <Image
        src='/images/banner.jpg'
        alt='banner'
        width='0'
        height='0'
        sizes='100vh'
        className='w-full h-full object-cover  brightness-50'
      />
      <div className='absolute top-1/3 md:left-1/4 '>
        <div className='p-5 flex flex-col items-center'>
          <h1 className='text-4xl text-center text-slate-50 tracking-wide'>
            Find evrything from apparel to electronic`s
          </h1>
          <Link href='/products'>
            <button className='p-2 mt-10 text-2xl text-slate-50 bg-slate-500 hover:bg-slate-50 hover:text-slate-600 rounded focus:outline-none'>
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
