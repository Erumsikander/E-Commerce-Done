import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Progresser from "./components/Progresser";
import Device from "./components/Device";
import Banner from "./components/Banner";
import Productlist from "./components/Productlist";
import Offer from "./components/Offer";
import Card from "./components/Card";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
// import Home from "./components/Menulist";

export default function App() {
  return (
    <div className="text-white bg-gradient-to-r from-black to-zinc-600 min-h-screen">
      {/* My All Components Here */}

      <Navbar />
      <Carousel />
      <Progresser />
      <Device />
      <Banner />
      <Productlist />
      {/* <Home /> */}
      <Offer />
      <Card />
      <Reservation />
      <Footer />
    </div>
  );
}
