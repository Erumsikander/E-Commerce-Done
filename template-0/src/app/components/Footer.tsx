import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col space-y-4 justify-center bg-gradient-to-r from-black to-zinc-800 px-4 py-4 text-white">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-lg md:text-2xl">
          <Link href="/" className="hover:text-red-500 text-amber-500">Home</Link>
          <Link href="/about" className="hover:text-red-500 text-amber-500">About</Link>
          <Link href="/delivery" className="hover:text-red-500 text-amber-500">Delivery</Link>
          <Link href="/contact" className="hover:text-red-500 text-amber-500">Contact</Link>
          <Link href="/faq" className="hover:text-red-500 text-amber-500" target="_blank">FAQ</Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center flex-wrap gap-6">
          {[
            { href: "https://facebook.com", src: "https://img.icons8.com/?size=100&id=p62ASPK2Kpqp&format=png&color=000000", alt: "Facebook logo" },
            { href: "https://instagram.com", src: "https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000", alt: "Instagram logo" },
            { href: "https://linkedin.com", src: "https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000", alt: "LinkedIn logo" },
            { href: "https://twitter.com", src: "https://img.icons8.com/?size=100&id=8824&format=png&color=FFFFFF", alt: "Twitter logo" }
          ].map((icon, index) => (
            <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
              <Image
                className="hover:ring-4 hover:ring-amber-500 rounded-full transition duration-300 transform hover:scale-110"
                src={icon.src}
                alt={icon.alt}
                width={40}
                height={40}
              />
            </a>
          ))}
        </div>

        {/* Contact Information */}
        <div className="text-center text-sm text-gray-400">
          <p className="hover:text-cyan-600 text-amber-400 font-medium">Erum Sikander; All Rights Reserved 2024</p>
          <p className="mt-2">123 IT Hub, Hyderabad, Pakistan | +92 (300) 123-4567 | support@pakistanexample.com</p>
        </div>
      </footer>
    </div>
  );
}
