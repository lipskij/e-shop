import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Carousel } from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-shop</title>
        <meta
          name='description'
          content='E-shop for Emil Lipskij portfolio using Tailwind, React query, NextJs'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Banner />
        <div className='a w-full'>
          <Carousel />
        </div>
      </main>
    </>
  );
}

// use react router dom for routing
// use https://fakestoreapi.com/docs for api of products
// navbar that have home, prducts, product:id, cart with checkout
