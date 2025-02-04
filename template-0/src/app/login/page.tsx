import React from 'react'
import Navbar from '../components/Navbar'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'


export default function page() {
  return (
    <div className='bg-gradient-to-r from-black to-zinc-600 min-h-screen'>
      < Navbar />
        < Reservation />
        < Footer />
    </div>
  )
}
