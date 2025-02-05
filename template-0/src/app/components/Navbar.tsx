import React from "react";
import { FaSearch } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full px-4">
      <div className="p-4">
        <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-700">
          
          {/* Navbar Main Container */}
          <div className="flex flex-wrap items-center justify-between">
            
            {/* Logo and Toggle Menu for Mobile */}
            <div className="flex items-center w-full sm:w-auto justify-between">
              {/* Website Logo */}
              <Image
                src="/images/logo.png"
                alt="Logo Image"
                width={40}
                height={40}
                className="border rounded-full ring-2 ring-amber-500 transition-transform duration-500 hover:scale-110 cursor-pointer"
              />

              {/* Search Bar (Hidden on Small Screens) */}
              <div className="relative hidden md:block lg:block flex-grow sm:flex-grow-0">
                <input
                  className="rounded-3xl py-2 px-3 outline-none text-xs w-full sm:w-[250px] md:w-[300px] lg:w-[350px] pr-10 text-black"
                  placeholder="Explore our best sellers and new arrivals...!"
                />
                <FaSearch className="w-5 h-5 text-slate-700 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            {/* Navigation Links and Account Icon */}
            <div className="w-full sm:w-auto mt-3 sm:mt-0 flex flex-col sm:flex-row items-center justify-center">
              <nav className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm sm:text-base">
                <Link
                  href="/"
                  className="hover:text-red-500 font-bold text-amber-500"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:text-red-500 font-bold text-amber-500"
                >
                  About
                </Link>
                <Link
                  href="/shop"
                  className="hover:text-red-500 font-bold text-amber-500"
                >
                  Shop
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-red-500 font-bold text-amber-500"
                >
                  Contact
                </Link>
              </nav>
              
              {/* Login Icon */}
              <Link href="/login" className="mt-2 sm:mt-0">
                <RiAccountCircleLine className="w-8 h-8 md:w-10 md:h-10 rounded-full hover:text-amber-400 text-lime-400 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
