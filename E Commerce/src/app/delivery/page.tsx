import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const DeliveryAddressForm = () => {
  return (
    <main className="bg-gradient-to-r from-black to-zinc-700 min-h-screen">
         < Navbar />
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-zinc-800">
      <form className="bg-black shadow-lg rounded-lg p-8 max-w-lg w-full text-white my-5">
        <h2 className="text-3xl font-bold mb-6 text-center">Delivery Address</h2>

        {/* Full Name Input */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-amber-400">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Full Name"
            className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-amber-400">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="123-456-7890"
            className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>

        {/* Address Line 1 Input */}
        <div className="mb-4">
          <label htmlFor="addressLine1" className="block text-sm font-medium text-amber-400">
            Address
          </label>
          <input
            id="addressLine1"
            type="text"
            placeholder="123 Main Street"
            className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>
        {/* City Input */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-amber-400">
            City
          </label>
          <input
            id="city"
            type="text"
            placeholder="New York"
            className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>

        {/* State Input */}
        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-amber-400">
            State
          </label>
          <input
            id="state"
            type="text"
            placeholder="NY"
            className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>

        {/* Postal Code Input */}
        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-sm font-medium text-amber-400">
            Postal Code
          </label>
          <input
            id="postalCode"
            type="text"
            placeholder="0000"
            className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>

        {/* Country Input */}
        <div className="mb-6">
          <label htmlFor="country" className="block text-sm font-medium text-amber-400">
            Country
          </label>
          <input
            id="country"
            type="text"
            placeholder="Pakistan"
            className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-amber-400 hover:bg-amber-700 text-white font-bold px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    < Footer />

    </main>
  );
};

export default DeliveryAddressForm;
