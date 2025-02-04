import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Newbanner from "./components/Newbanner";
import Device from "./components/Device";
import Banner from "./components/Banner";
import Productlist from "./components/Productlist";
import Offer from "./components/Offer";
import Card from "./components/Card";
import Reservation from "./components/Reservation";
import OnemoreBanner from "./components/Onemorebanner";
import Footer from "./components/Footer";
// import Home from "./components/Menulist";

export default function App() {
  return (
    <div className="text-white bg-gradient-to-r from-black to-zinc-600 min-h-screen">
      {/* My All Components Here */}

      <Navbar />
      <Carousel />
      < Newbanner />
      <Device />
      <Banner />
      <Productlist />
      {/* <Home /> */}
      <Offer />
      <Card />
      < OnemoreBanner />
      <Reservation />
      <Footer />
    </div>
  );
}
