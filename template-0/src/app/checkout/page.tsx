'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StripePayment from '../components/StripePayment';

const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/checkout');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <div className="text-white bg-gradient-to-r from-black to-zinc-600 min-h-screen">
      <Navbar />
      <StripePayment />
      <Footer />
    </div>
  );
};

export default Page;
