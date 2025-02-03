import React from "react";

export default function Progresser() {
  return (
    <div className="bg-gradient-to-r from-black to-zinc-800">
      <div className=" flex items-start max-w-screen-lg w-full mx-auto py-10">

        {/* Section ----  111 */}

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-lime-500 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-red-500"></div>
          </div>

          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-amber-500">
              Step 1; Find Your Favorite.
            </h6>
            <p className="text-xs text-white">
              Enjoy premium quality at prices you will love.
            </p>
          </div>
        </div>

         {/* Section ----  222 */}

         <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-lime-500 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-red-500"></div>
          </div>

          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-amber-500">
              Step 2; Cutomize Your Order.
            </h6>
            <p className="text-xs text-white">
              Tailor products to your specific needs.
            </p>
          </div>
        </div>

        {/* Section ----  333 */}

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-lime-500 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-red-500"></div>
          </div>

          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-amber-500">
              Step 3; Place Your Order
            </h6>
            <p className="text-xs text-white">
            Ready to eat; Proceed to checkout and complete your order.
            </p>
          </div>
        </div>

        




      </div>
    </div>
  );
}
