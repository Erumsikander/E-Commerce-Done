'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StripePayment from '../components/StripePayment'


const page = () => {
  return (
    <div className="text-white bg-gradient-to-r from-black to-zinc-600 min-h-screen">

      
      < Navbar />
      < StripePayment />
    < Footer />

    </div>
  )
}

export default page
