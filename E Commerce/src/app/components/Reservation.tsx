"use client";

import React from "react";
import Image from "next/image";

const LoginSignupSection = () => {
  return (
      <section className="flex justify-center mx-auto my-auto bg-gradient-to-r from-black to-zinc-900">
      <div className="w-full max-w-sm sm:max-w-md bg-white bg-opacity-10 rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center text-white">
          Log In / Sign Up
        </h1>

        {/* Google Login Button */}
        <div className="mb-6">
          <button
            className="bg-zinc-900 text-white font-medium py-2 px-4 w-full rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
            onClick={() => {
              window.open(`https://accounts.google.com/signup`, "_blank");
            }}
          >
            <Image
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
              alt="Google Logo"
              width={20}
              height={20}
            />
            Continue with Google
          </button>
        </div>

        <div className="flex items-center mb-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="px-2 text-white">or</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Email Input */}
        <form className="text-black">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="bg-zinc-900 text-white font-bold px-4 py-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Log In
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-white text-sm sm:text-base">
              Don't have an account?{" "}
              <a
                href="https://accounts.google.com/signup"
                target="_blank"
                className="text-amber-500 hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginSignupSection;
