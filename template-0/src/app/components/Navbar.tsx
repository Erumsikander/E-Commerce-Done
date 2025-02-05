import React from "react";
import { FaShopify } from "react-icons/fa6";
import { RiAccountCircleLine } from "react-icons/ri";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full px-2">
      <div className="p-4">
        <div className="py-2 px-2 rounded-xl border w-full bg-gradient-to-r from-black to-gray-700">
          
          {/* Navbar Main Container */}
          <div className="flex items-center justify-between max-w-6xl mx-auto flex-nowrap">
            
            {/* Logo  */}
            <div className="flex items-center">
              <FaShopify className="w-10 h-10 rounded-full hover:text-amber-400 text-lime-400 cursor-pointer" />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-row justify-center items-center gap-4 text-lg text-center">
              <Link href="/" className="hover:text-red-500 font-bold text-amber-500" target="_blank">Home</Link>
              <Link href="/about" className="hover:text-red-500 font-bold text-amber-500" target="_blank" >About</Link>
              <Link href="/shop" className="hover:text-red-500 font-bold text-amber-500" target="_blank">Shop</Link>
              <Link href="/contact" className="hover:text-red-500 font-bold text-amber-500" target="_blank">Contact</Link>
            </nav>

            {/* Login Icon */}
            <div className="flex items-center">
              <Link href="/login">
                <RiAccountCircleLine className="w-10 h-10 rounded-full hover:text-amber-400 text-lime-400 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
