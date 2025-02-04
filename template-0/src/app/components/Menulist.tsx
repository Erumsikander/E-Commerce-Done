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

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
    
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingProductIndex = updatedCart.findIndex(item => item.id === product.id);
      
      if (existingProductIndex > -1) {
        updatedCart[existingProductIndex].inventory += 1;
      } else {
        updatedCart.push({ ...product, inventory: 1 });
      }
      
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      if (newQuantity > 0) {
        updatedCart[index].inventory = newQuantity;
      } else {
        updatedCart.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const goToCheckout = () => {
    setIsCheckout(true);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{ backgroundImage: "url('https://izmirwebtasarimajansi.net/wp-content/uploads/2024/02/1961.jpg')" }}
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

        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-red-600">
          {products.map((product) => (
            <Productcard key={product.id} {...product} onAddToCart={addToCart} />
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-8 text-center px-4">
          <button onClick={toggleCart} className="bg-amber-600 text-lg font-bold text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800">
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {showCart && (
            <div className="mt-6 bg-gradient-to-r from-black to-zinc-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl text-center font-bold mb-4 text-white">Your Cart Items</h2>
              {cart.length > 0 ? (
                <>
                  <ul>
                    {cart.map((product, index) => (
                      <li key={index} className="flex items-center justify-between mb-6">
                        <Image src={product.image} alt={product.name} width={100} height={100} className="w-24 h-24 object-cover" />
                        <div className="text-white">
                          <span className="text-lg font-bold block">{product.name} - ${product.price * product.inventory}</span>
                          <div className="flex items-center gap-2 mt-2">
                            <button className="bg-gray-600 text-white px-2 py-1 rounded" onClick={() => updateQuantity(index, product.inventory - 1)}>-</button>
                            <span>{product.inventory}</span>
                            <button className="bg-gray-600 text-white px-2 py-1 rounded" onClick={() => updateQuantity(index, product.inventory + 1)}>+</button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-center gap-4 mt-4">
                    <button onClick={goToCheckout} className="bg-green-600 py-3 px-6 rounded-lg text-lg text-white hover:bg-red-400">
                      Proceed To Checkout
                    </button>
                    <button onClick={clearCart} className="bg-red-600 py-3 px-6 rounded-lg text-lg text-white hover:bg-green-400">
                      Clear Cart
                    </button>
                  </div>
                </>
              ) : <p className="text-lg text-white">Your cart is empty</p>}
            </div>
          )}
        </div>

        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-auto">
              <h2 className="text-5xl font-extrabold text-blue-600 mb-4">Checkout</h2>
              <p className="text-xl text-red-500 mb-4">Please Confirm Your Order Before Proceeding</p>
              <ul>
                {cart.map((product, index) => (
                  <li key={index} className="flex justify-between mb-2 text-xl font-semibold text-black">
                    <span>{product.name} (x{product.inventory})</span>
                    <span>${product.price * product.inventory}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-4">
                <span className="font-bold text-xl text-black">Total:</span>
                <span className="font-bold text-xl text-black">${cart.reduce((total, product) => total + (product.price * product.inventory), 0)}</span>
              </div>
              <div className="mt-6 flex justify-between">
                <button onClick={() => setIsCheckout(false)} className="bg-slate-600 text-lg text-white py-2 px-6 rounded-lg hover:bg-green-600">Close</button>
                <button onClick={() => alert("Order Confirmed! Will deliver to your doorstep.")} className="bg-slate-600 text-lg text-white py-2 px-6 rounded-lg hover:bg-green-600">Confirm Order</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
