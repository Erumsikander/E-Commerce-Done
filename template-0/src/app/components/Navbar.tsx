import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";
import { RiAccountCircleLine } from "react-icons/ri";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full overflow-hidden">
      {/* Navbar Main Container */}
      <div className="p-4 flex items-center justify-between max-w-5xl mx-auto flex-nowrap">
        {/* Logo  */}
        <div className="flex  items-center mx-auto">
          <FaShopify className="w-10 h-10 mr-auto rounded-full hover:text-amber-400 text-lime-400 cursor-pointer" />
          <div className="relative hidden lg:block md:block">
            <input
              className="rounded-3xl py-3 px-3 outline-none text-xs w-[300px] pr-10 text-black"
              placeholder="Explore our best sellers and new arrivals...!"
            />
            <FaSearch className="w-5 h-5 text-slate-700 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-row justify-center mx-auto items-center gap-4 text-xl text-center flex-nowrap">
          <Link href="/" className="hover:text-red-500 font-bold text-amber-500" target="_blank">Home</Link>
          <Link href="/about" className="hover:text-red-500 font-bold text-amber-500" target="_blank">About</Link>
          <Link href="/shop" className="hover:text-red-500 font-bold text-amber-500" target="_blank">Shop</Link>
          <Link href="/contact" className="hover:text-red-500 font-bold text-amber-500" target="_blank">Contact</Link>
        </nav>

        {/* Login Icon */}
        <div className="gap-2">
          <Link href="/login">
            <RiAccountCircleLine className="w-10 h-10 rounded-full hover:text-amber-400 text-lime-400 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}
