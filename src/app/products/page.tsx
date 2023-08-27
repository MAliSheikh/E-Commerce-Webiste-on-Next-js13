import React from 'react'
import ProductCard from '@/components/ProductCard'
import { Products } from '@/utils/mock'
import { StaticImageData } from 'next/image'

const AllProducts = () => {
    return (
        <div className='flex justify-between flex-wrap px-4 m-10'>
            {
                Products.map((product) => (
                   <ProductCard key={product.id} title={product.name} price={product.price} img={product.image as StaticImageData} category={product.category} id={product.id} tagline={product.tagline} />
                ))
            }
        </div>
    )
}

export default AllProducts
