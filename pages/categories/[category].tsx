import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { ProductCard } from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { Loader } from "@/components/Loader";
import { Product } from "../products";

const fetchByCategory = async (category: string) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Categories = () => {
  const router = useRouter();
  const category =
    typeof router.query?.category === "string" ? router.query.category : "";

  const { isLoading, error, data } = useQuery(["category", category], () =>
    fetchByCategory(category)
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className='h-screen text-center text-xl'>
        Error: Something went wrong
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1 className='text-center text-3xl text-slate-700 p-10'>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <div className='flex w-90 p-10 items-center justify-center'>
        <ul className='md:grid gap-5 grid-cols-3 auto-rows-min justify-center'>
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
    </div>
  );
};

export default Categories;
