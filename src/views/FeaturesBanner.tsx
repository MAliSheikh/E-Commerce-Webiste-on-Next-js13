import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const FeaturesBanner = () => {
    return (
        <div className='lg:m-14 lg:px-4'>
            <section className=''>


                <div className='flex flex-col lg:flex-row justify-evenly'>
                    <div className='flex-1'>
                        <div className="newsletter-background text-center font-bold text-9xl text-gray-100 mt-36">
                            Different from others
                        </div>
                        <div className="grid grid-cols-2 justify-evenly items-center gap-5 -mt-80">
                            <div className="">
                                <h3 className="text-2xl font-bold">Using Good Quality Materials</h3>
                                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="">
                                <h3 className="text-2xl font-bold">100% Handmade Products</h3>
                                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="">
                                <h3 className="text-2xl font-bold">Modern Fashion Design</h3>
                                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className=''>
                                <h3 className="text-2xl font-bold">Discount for Bulk Orders</h3>
                                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                    </div>

                    <div className='flex-1'>
                        <div className='text-5xl font-bold mb-10 ml-14 text-gray-900'>
                            <h1>Unique and Authentic Vintage Designer Jewellery</h1>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-evenly gap-12'>
                            <div className='flex-1'>
                                <Image src={'/feature.webp'} width={300} height={350} alt='img' />
                            </div>
                            <div className='flex-1 mb-40'>
                                <p className='tracking-widest'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                                <Link href={'/products'}>
                                    <Button className='text-white bg-black mt-10' type='button'>See All Product</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturesBanner
