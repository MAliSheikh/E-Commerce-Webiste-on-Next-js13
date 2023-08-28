import React from 'react'
import ProductCard from '@/components/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Products } from '@/utils/mock'
import Link from 'next/link'

const ProductList = () => {
    const productChuks = Products.slice(0, 10)
    console.log(productChuks)
    return (
        <>
            <div className='justify-center'>
                <p className='text-blue-600 text-center font-bold'>PRODUCTS</p>
                <h1 className='text-center text-4xl font-blod'>Check What We Have</h1>
            </div>

            <div className='mt-13 -m-px'>
                <Swiper
                    breakpoints={{
                        // width >= 300
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 100
                        },
                        // width >= 1000
                        1000: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        // width >= 1260
                        1260: {
                            slidesPerView: 3,
                            spaceBetween: 0
                        }
                    }}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <Link href="#">
                        {
                            productChuks.map((product) => (

                                <SwiperSlide key={product.id}><ProductCard title={product.name} price={product.price} img={product.image} category={product.category} id={product.id} tagline={product.tagline} /></SwiperSlide>
                            ))
                        }
                    </Link>

                </Swiper>
            </div>


        </>
    )
}

export default ProductList
