import React from "react";
import Image from "next/image";
import Link from "next/link";

const Products = [
  {
    id: 1,
    title: "Camera",
    category: "latest",
    price: "2000.00",
    imageUrl: "/images/camera.png",
    bgColor: "bg-amber-500",
  },
  {
    id: 2,
    title: "Headphone",
    category: "latest",
    price: "500.00",
    imageUrl: "/images/headphone.webp",
    bgColor: "bg-teal-500",
  },
  {
    id: 3,
    title: "Laptop",
    category: "latest",
    price: "10,000.00",
    imageUrl: "/images/laptop.png",
    bgColor: "bg-amber-500",
  },
];

export default function Productlist() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center bg-gradient-to-l from-zinc-950 to-zinc-700">
      {Products.map((product) => (
        <Link key={product.id} href="/shop" target="_blank" passHref>
          <div
            className={`flex-shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm cursor-pointer`}
          >
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-1[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="152"
                height="152"
                width="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                height="152"
                width="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>
              <Image
                className="relative w-52"
                src={product.imageUrl}
                alt={product.title}
                width={208}
                height={208}
                objectFit="cover"
              />
            </div>
            <div className="relative text-black px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">{product.category}</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">{product.title}</span>
                <span className="block bg-white rounded-full text-black hover:bg-zinc-700 cursor-pointer text-xs font-bold px-3 py-2 leading-none items-center">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
