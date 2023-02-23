import React from "react";
import { useQuery } from "react-query";
import { Loader } from "./Loader";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/pages/products";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const TopRated: React.FC = () => {
  const { isLoading, error, data } = useQuery("products", fetchProducts);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: Something went wrong</div>;
  }

  const topRated = data.filter(
    (item: any) => item.rating.rate > 4.6
  );

  const categories = data.reduce((acc: any, item: Product) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, []);

  return (
    <div className='md:flex md:flex-col'>
      <h1 className='text-xl text-slate-700 pt-20 pb-20 text-center'>Top Rated</h1>
      <ul className='md:flex justify-evenly'>
        {topRated.map((item: any) => (
          <li
            className='flex flex-col justify-between items-center p-5 md:w-1/4'
            key={item.id}
          >
            <Image src={item.image} alt={item.title} width={100} height={100} className="pb-10" />
            <div className='md:flex md:flex-col md:text-left leading-relaxed'>
              <h3 className='text-m text-slate-500'>{item.title}</h3>
              <p className='text-xl font-bold text-slate-700'>
                Price: € {item.price.toFixed(2)}
              </p>
              <Link href={`/products/${item.id}`}>Add to cart</Link>
            </div>
          </li>
        ))}
      </ul>

      <h2 className='text-xl text-slate-700 pt-20 pb-20  text-center'>Categories</h2>
      <ul className='md:flex md:justify-evenly items-center md:w-1/10'>
        {categories.map((item: any) => (
          <li
            className='flex items-center pb-10 justify-center'
            key={item}
          >
            <Link href={`/categories/${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
