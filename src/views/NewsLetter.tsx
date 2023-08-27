import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const NewsLetter = () => {
    return (
        <>
            <section className='justify-center m-20'>
                <div className="newsletter-background text-center font-bold text-9xl text-gray-100">
                    Newsletter
                </div>
                <div className='-mt-36'>
                    <h1 className='text-center text-4xl font-bold'>Subscribe Our Newsletter</h1>
                    <p className='text-center mt-5 '>Get the latest information and promo offers directly</p>
                    {/* <form onSubmit={}> */}
                    <form className='text-center mt-10 mb-20'>
                        <input className='h-8 shadow appearance-none border border-gray-500 pl-5 focus:outline-none focus:shadow-outline rounded' type='email' placeholder='Input email address'></input>
                        <Button className='text-white bg-black ml-5  rounded' type='submit'>Get Started</Button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default NewsLetter
