import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function New () {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 to-black font-sans px-14 py-28">
      <div className="absolute inset-0 opacity-30">
        <Image
        
        style={{ objectFit: 'cover' }}
          src="/images/newbanner.jpg"
          alt="Shopping Bag Pic"
          fill
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4">
          Explore Our Selection
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
        Explore a wide range of products at the best prices.
        </p>

        {/* Page Link Area */}


        <Link
  href="/shop" // Apna link yahaan daalein
  target="_blank" // Link ko naye tab mein kholne ke liye
  rel="noopener noreferrer" // Security ke liye
>
  <button className="bg-amber-500 text-black text-sm font-bold py-3 px-6 rounded-full shadow-lg hover:bg-red-400 transition duration-300">
   New Arrivals
  </button>
</Link>
      </div>
    </div>
  )
}
