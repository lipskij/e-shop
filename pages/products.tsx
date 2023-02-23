import React from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Loader } from "@/components/Loader";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const ProductList: React.FC = () => {
  const { isLoading, error, data } = useQuery("products", fetchProducts);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: Something went wrong</div>;
  }

  // clickable image to enlarge
  return (
    <>
      <Head>
        <title>Products</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />

      <main>
        <div className='flex w-90 p-10 items-center justify-center'>
          <ul className='md:grid gap-5 grid-cols-3 grid-rows-3 justify-center'>
            {data.map((product: Product) => (
              <li
                key={product.id}
                className='flex w-full flex-col justify-between  border p-2 mb-5 rounded-md shadow-md'
              >
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default ProductList;
