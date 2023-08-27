import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const add = () => {
  return (
    <>
      <div className='justify-center'>
        <p className='text-blue-600 text-center font-bold'>PROMOTIONS</p>
        <h1 className='text-center text-4xl font-blod'>Our Promotions Events</h1>
      </div>

    <section className='flex flex-col lg:flex-row py-6'>

      {/* left side  */}
      <div className='flex-1 px-2 m-10'>
        {/* first box */}
        <div className='flex bg-gray-300'>

          <div className='px-16 mt-9'>
            <h1 className='text-black text-3xl'>GET UP TO 60%</h1>
            <p className='text-1xl'>For the summer season</p>
          </div>

          <div className=''>
            <Image width={300} height={300} src={'/event1.webp'} alt="Hero Image" />
          </div>

        </div>
        <div className='flex bg-gray-950 mt-10 justify-center'>

          <div className='px-16 mt-9 text-center'>
            <h1 className='text-white text-3xl'>GET 30% Off</h1>
            <p className='text-white text-1xl mt-4'>USE PROMO CODE</p>
            <Button className='text-2xl  mb-10 bg-gray-800 rounded-xl mt-2'>DINEWEEKENDSALE</Button>
          </div>
        </div>
        {/* second box */}
        <div>

        </div>
      </div>

      {/* Right side */}
      <div className='flex-1 lg:px-2 lg:m-10 gap-6'>
        <div className='flex -ml-5'>
          {/* first image */}

          <div className='bg-orange-100'>
            <p className='m-5'>Flex Sweatshirt</p>
            <div className='flex gap-6 -mt-5 ml-5'>
              <p className="line-through text-gray-500">$100.00</p>
              <p className='font-bold text-lg'>$75.00</p>
            </div>

            <Image width={500} height={500} src={'/add1.webp'} alt="Hero Image" />
          </div>
          {/* secind image */}
          <div className='bg-gray-200 lg:ml-5'>
            <p className='m-5'>Flex Push Button Bomber</p>
            <div className='flex gap-6 -mt-5 ml-5'>
              <p className="line-through text-gray-500">$100.00</p>
              <p className='font-bold text-lg'>$75.00</p>
            </div>

            <Image width={500} height={500} src={'/add2.webp'} alt="Hero Image" />
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default add
