import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white ">Royal Perfumes</h2>
        <p className="text-white mb-4 ">
          Experience our new branded perfumes according your choice
        </p>
        <Link href="/shop"
        target="_blank">
  <button className="bg-amber-500 text-black font-bold px-4 py-2 rounded hover:bg-green-400 transition duration-200">
    Shop Now
  </button>
</Link>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
          Comming Soon Our winter collection
        </h3>

        <ul>
          <li>
            Experience our perfume, blending floral notes for lasting scent.
          </li>
          <br />

          <li>Unlock the secrets of seduction with our alluring fragrances.</li>
          <br />

          <li>
            Discover your signature scent with our wide range of perfumes.
          </li>
          <br />

          <li>
            Indulge your senses with our luxurious and long-lasting perfumes.
          </li>
          <br />
        </ul>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0 relative w-full h-72">
        <Image
          src="/images/perfume-image.webp"
          alt="Perfume Image"
          fill
          className="object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"
        />
      </div>
    </section>
  );
};
export default Card;
