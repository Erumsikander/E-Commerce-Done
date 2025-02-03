import React from 'react'
import Menulist from '../components/Menulist'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div className='text-white bg-gradient-to-r from-black to-zinc-700 min-h-screen'>
        < Navbar />
        < Menulist />
        < Footer />
    </div>
  )
}
