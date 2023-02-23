import { Product } from "@/pages/products";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <>
      <Image src={product.image} alt={product.title} width={200} height={200} />
      <div className='flex flex-col text-left leading-relaxed'>
        <h3 className='text-m text-slate-500'>{product.title}</h3>
        <p className='text-xl font-bold text-slate-700'>
          Price: € {product.price.toFixed(2)}
        </p>

        <div className='flex items-center'>
          <svg
            aria-hidden='true'
            className={`w-5 h-5 ${
              product.rating.rate > 1 ? "text-yellow-400" : "text-gray-500"
            }`}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>First star</title>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
          </svg>
          <svg
            aria-hidden='true'
            className={`w-5 h-5 ${
              product.rating.rate > 2 ? "text-yellow-400" : "text-gray-500"
            }`}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Second star</title>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
          </svg>
          <svg
            aria-hidden='true'
            className={`w-5 h-5 ${
              product.rating.rate > 3 ? "text-yellow-400" : "text-gray-500"
            }`}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Third star</title>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
          </svg>
          <svg
            aria-hidden='true'
            className={`w-5 h-5 ${
              product.rating.rate > 4 ? "text-yellow-400" : "text-gray-500"
            }`}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Fourth star</title>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
          </svg>
          <svg
            aria-hidden='true'
            className={`w-5 h-5 ${
              product.rating.rate > 5 ? "text-yellow-400" : "text-gray-500"
            }`}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Fifth star</title>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
          </svg>
          <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
            {product.rating.rate} out of 5
          </p>
        </div>
        <Link href={`/product/${product.id}`}>
          <button className='flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500'>
            Add to cart
          </button>
        </Link>
      </div>
    </>
  );
};
