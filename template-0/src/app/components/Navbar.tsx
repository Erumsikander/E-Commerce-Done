import React from "react";
import { FaSearch } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-grey-700">
            
            {/* Navbar Main Container */}
            <div className="flex justify-between items-center">

              {/* Logo and Search Bar */}
              <div className="flex items-center gap-4">
                {/* Website Logo */}
                <Image
                  src="/images/logo.png"
                  alt="Logo Image"
                  width={40}
                  height={40}
                  className="border rounded-full ring-2 ring-amber-500 transition-transform duration-500 hover:scale-150 cursor-pointer"
                />

                {/* Search Bar */}
                <div className="relative hidden lg:block md:block">
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 text-black"
                    placeholder="Explore our best sellers and new arrivals...!"
                  />
                  <FaSearch className="w-5 h-5 text-slate-700 absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              {/* Navigation Links and Account Icon */}
              <div className="flex items-center gap-2 ml-2">
                <nav className="flex flex-row justify-center gap-4 text-lg">
                  <Link
                    href="/"
                    className="hover:text-red-500 font-bold text-amber-500"
                    target="_blank"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-red-500 font-bold text-amber-500"
                    target="_blank"
                  >
                    About
                  </Link>
                  <Link
                    href="/shop"
                    className="hover:text-red-500 font-bold text-amber-500"
                    target="_blank"
                  >
                    Shop
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:text-red-500 font-bold text-amber-500"
                    target="_blank"
                  >
                    Contact
                  </Link>
                </nav>

                {/* Login Icon */}

                <Link href="/login" target="_blank">
                <RiAccountCircleLine className="w-8 h-8 md:w-10 md:h-10 rounded-full hover:text-amber-400 text-lime-400 cursor-pointer" />
              </Link>

                
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
