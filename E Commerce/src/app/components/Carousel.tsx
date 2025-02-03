import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-grey-700">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            {/* Image No 111 */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
              <Link
                href="/shop"
                className="group relative flex flex-col overflow-hidden rounded-lg pr-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/images/image-1.jpg"
                  alt="Purse Pic"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 h-full w-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Bags For Women
                </h3>
              </Link>
            </div>

            {/* Image No 222 */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700">
              <Link
                href="/shop"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <Image
                  src="/images/image-2.jpg"
                  alt="Winter Suits Pic"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 h-full w-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Winter Collection
                </h3>
              </Link>

              {/* Image No 333 */}
              <div className=" grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <Link
                  href="/shop"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="/images/image-3.jpg"
                    alt="Sandel Pic"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 h-full w-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    Sandals for Women
                  </h3>
                </Link>

                {/* Image No 444 */}
                <Link
                  href="/shop"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="/images/image-4.webp"
                    alt="Glasses Pic"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 h-full w-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    Protect Your Eyes
                  </h3>
                </Link>
              </div>
            </div>

            {/* Image No 555 */}
            <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/images/image-5.jpg"
                  alt="Lipstick Pic"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 h-full w-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Glamorous
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
