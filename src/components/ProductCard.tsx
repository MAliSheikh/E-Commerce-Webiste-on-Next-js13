import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import AddToCart from './AddtoCart'

// if you use props wirte only props dont use anything else
function ProductCard(props: {
    title: string,
    tagline: string,
    price: number,
    img: string | StaticImageData,
    category: string, 
    id: number }) {
    return (
        <>
        <Link href={`/products/${props.id}`}>
            <div className='scale-100 hover:scale-110 ease-in duration-500 py-6 ml-14'>
                <Image width={300} height={300} src={props.img} alt="Hero Image" />
                <h1 className='font-bold text-lg mt-3'>{props.title}</h1>
                <p className='font-bold text-lg text-gray-500'> $ {props.tagline}</p>
                <p className='font-bold text-lg'> $ {props.price}</p>
                <p className='font-bold text-lg'>Category <span className='font-bold text-lg'> {props.category}</span></p>
                <AddToCart/>

            </div>
            </Link>
        </>
    )
}

export default ProductCard
