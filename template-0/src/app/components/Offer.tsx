'use client'

import React from 'react'
import Link from 'next/link'

type Offer = {
    title : string;
    description : string; 
}

const SpecialOffers: React.FC = () => {
const offers : Offer[] = [

    // Section # 111

{
    title : 'Happy Shopping',
    description : 'Buy one get one free...!'
},

// Section # 222

{
    title : 'Home Appliences',
    description : '2 products buy and get coupon code'
},

// Section # 333

{
    title : 'Shoes Offer',
    description : 'Buy one get one free'
},
];

return (
    <section className='py-10 bg-gradient-to-r from-black to-zinc-800'>
        <div className='container mx-auto text-center px-4'>
            <h2 className='text-4xl font-bold mb-6 text-white'>Special Offers</h2>
            <div className='grid grid-cols-1 gap-6 w-full'>
                {offers.map((offer, index) => (
                    <Link key={index} href='/shop' target='_blank' passHref>
                        <button 
                        className='bg-white shadow-lg rounded-3xl text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105 w-full p-6 md:text-center'>
                            <h3 className='text-2xl font-semibold text-black'>{offer.title}</h3>
                            <p className='text-red-700'>{offer.description}</p>
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    </section>
)
}
export default SpecialOffers
