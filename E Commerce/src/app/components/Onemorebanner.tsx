import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function OnemoreBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 to-black font-sans px-14 py-28">
      <div className="absolute inset-0 opacity-25">
        <Image
        
        style={{ objectFit: 'cover' }}
          src="/images/bannersecond.jpg"
          alt="Banner Pic"
          fill
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-2xl font-bold mb-4">
        Just one step away enter your address
</h2>


        {/* Page Link Area */}

        <Link
  href="/delivery" // Apna link yahaan daalein
  target="_blank" // Link ko naye tab mein kholne ke liye
  rel="noopener noreferrer" // Security ke liye
>
  <button className="bg-amber-500 text-black text-xl font-bold py-3 px-6 rounded-3xl shadow-lg hover:bg-red-400 transition duration-300">
  Add Your Address
  </button>
</Link>
      </div>
    </div>
  )
}
