import Link from "next/link";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <div className='flex justify-center w-full items-end h-16 bg-slate-500 text-slate-50'>
      <Link
        href='https://github.com/lipskij'
        target='_blank'
        className='text-xl pb-2 underline'
      >
        Made with ❤️ by Emil Lipskij {new Date().getFullYear()}
      </Link>
    </div>
  );
};
