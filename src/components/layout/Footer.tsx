import React from 'react'
import Image from 'next/image'
import {GrFacebookOption, GrTwitter, GrLinkedinOption} from 'react-icons/gr'

const Footer = () => {
  return (
    <div>
      <footer>
      <div className='flex flex-col lg:flex-row px-4 m-10 justify-evenly gap-24 text-gray-500'>
        <div className='flex-1'>
          <Image src={'/Logo.webp'} width={180} height={30} alt='logo' />
          <p className='mt-7'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
          <div className='mt-7 flex'>
            <div className='bg-gray-200 text-black inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150  rounded-xl focus:shadow-outline'><GrTwitter className='text-center' size={20} /></div>
            <div className='bg-gray-200 text-black inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150  rounded-xl focus:shadow-outline'><GrFacebookOption className='text-center' size={20} /></div>
            <div className='bg-gray-200 text-black inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150  rounded-xl focus:shadow-outline'><GrLinkedinOption className='text-center' size={20} /></div>
          </div>
        </div>

        <div className='flex-1 '>
          <h3 className='text-2xl font-bold'>Company</h3>
          <ul className='mt-4 space-y-2'>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='flex-1 '>
          <h3 className='text-2xl font-bold'>Support</h3>
          <ul className='mt-4 space-y-2'>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        <div className='flex-1'>
          <h3 className='text-2xl font-bold'>Contact</h3>
          <ul className='mt-4 space-y-2'>
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>

      <div className='px-2 mt-20 flex gap-44 font-bold text-lg mb-7 border-t-2 pt-5 '>
        <p className='text-gray-400'>Copyright © 2022 Dine Market</p>
        <p className='text-gray-400'>Design by. <span className='text-black'>Weird Design Studio</span></p>
        <p className='text-gray-400'>Code by. <span className='text-black'>MAliSheikh on github</span></p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
