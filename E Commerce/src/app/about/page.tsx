import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="text-white bg-gradient-to-r from-black to-zinc-600 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center px-4 md:px-8">
        <Card />
      </main>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
