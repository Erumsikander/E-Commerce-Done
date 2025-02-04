import React from 'react'
import Navbar from '../components/Navbar'
import Offer from '../components/Offer'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div className='bg-gradient-to-r from-black to-zinc-700'>

        < Navbar />
        < Offer />
        < Footer />
      
    </div>
  )
}
