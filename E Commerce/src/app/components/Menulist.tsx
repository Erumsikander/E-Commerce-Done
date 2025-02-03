"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import Productcard from "./Productcard";
import { Product } from "../../types";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  // fetch product from Api
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();

    // Sync Cart From Local Storage On Page Load
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Add items to Cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Toggle Cart Visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // checkout products
  const goToCheckout = () => {
    setIsCheckout(true);
  };

  //  Cart Clear Method
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage:
            "url('https://izmirwebtasarimajansi.net/wp-content/uploads/2024/02/1961.jpg')",
        }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8 px-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Buy 1 Get 1 Free Best Offer
          </h1>
          <p className="text-lg sm:text-xl text-white">
            Explore our products to get better discount and order now,
          </p>
        </div>

        {/* Product Section Here */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-red-600">
          {products.map((product) => (
            <Productcard key={product.id} {...product} onAddToCart={addToCart} />
          ))}
        </div>

        {/* Cart Section Here */}
        <div className="max-w-6xl mx-auto mt-8 text-center px-4">
          <button
            onClick={toggleCart}
            className="bg-amber-600 text-base sm:text-lg font-bold text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out transform"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {showCart && (
            <div className="mt-6 bg-gradient-to-r from-black to-zinc-800 p-6 sm:p-12 rounded-lg shadow-lg">
              <h2 className="text-2xl sm:text-4xl text-center font-bold mb-4 text-white">
                Your Cart Items
              </h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-10 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-zinc-900 shadow-lg rounded-lg p-4"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          className="w-24 h-24 sm:w-32 sm:h-32 object-cover"
                          width={100}
                          height={100}
                        />
                        <div className="mt-4 sm:mt-0 sm:ml-8 text-center">
                          <span className="text-base sm:text-lg font-bold text-white block">
                            {product.name} - ${product.price}
                          </span>
                          <span className="text-sm text-gray-400 block">
                            Inventory: {product.inventory}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-white">
                    <span className="font-semibold text-lg sm:text-xl">
                      Total: ${cart.reduce((total, product) => total + product.price, 0)}
                    </span>

                    <div className="flex gap-4 mt-4 sm:mt-0">
                      <button
                        onClick={goToCheckout}
                        className="bg-green-600 py-2 sm:py-3 px-4 sm:px-8 rounded-lg text-base sm:text-lg shadow-md hover:bg-red-400 hover:scale-110 transition duration-300 ease-in-out"
                      >
                        Proceed To Checkout
                      </button>

                      <button
                        onClick={clearCart}
                        className="bg-red-600 py-2 sm:py-3 px-4 sm:px-8 rounded-lg text-base sm:text-lg shadow-md hover:bg-green-400 hover:scale-110 transition duration-300 ease-in-out"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg sm:text-xl text-white">Your cart is empty</p>
              )}
            </div>
          )}
        </div>

        {/* Checkout Section Here */}
        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-2xl sm:text-4xl font-bold text-blue-600 mb-4">Checkout</h2>
              <p className="text-lg text-red-600 mb-4">
                Please Confirm Your Order Before Proceeding
              </p>

              <ul>
                {cart.map((product, index) => (
                  <li key={index} className="flex justify-between mb-2 sm:mb-4">
                    <span>{product.name}</span>
                    <span>${product.price}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between mt-4">
                <span className="font-bold text-black">Total:</span>
                <span className="font-semibold">
                  ${cart.reduce((total, product) => total + product.price, 0)}
                </span>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="bg-slate-600 text-white py-2 px-4 sm:px-6 rounded-lg text-base sm:text-lg shadow-md hover:bg-green-600 transition duration-300"
                >
                  Close
                </button>

                <button
                  onClick={() => alert("Order Confirmed! Will deliver to your doorstep.")}
                  className="bg-slate-600 text-white py-2 px-4 sm:px-6 rounded-lg text-base sm:text-lg shadow-md hover:bg-green-600 transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Menu;
