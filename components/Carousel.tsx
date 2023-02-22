import React from "react";
import Image from "next/image";

export const Carousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const images = [
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  ];

  const scrollContainer = (index: number) => {
    const container = containerRef.current as any;
    if (container !== null) {
      const child = container.children[index];
      container.scrollTo({
        left: child.offsetLeft,
        behavior: "smooth",
      });
    } else {
      return;
    }
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      scrollContainer(nextIndex);
      setCurrentImageIndex(nextIndex);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <div
      ref={containerRef}
      className='flex w-full overflow-x-scroll scroll-snap-x justify-center bg-slate-200 p-5'
    >
      {images.map((i, index) => (
        <div
          key={index}
          className='flex flex-[0_0_100%] w-full  scroll-snap-align-center justify-center items-center'
        >
          <Image
            src={i}
            width={300}
            height={300}
            alt='image'
            className='max-v-full'
          />
        </div>
      ))}
    </div>
  );
};
