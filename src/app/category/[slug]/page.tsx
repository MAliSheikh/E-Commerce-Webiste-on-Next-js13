import { Products } from "@/utils/mock"
import ProductCard from "@/components/ProductCard"
import { StaticImageData } from "next/image"

const getProductByCategory = (category: string) => {
  return Products.filter((product) => product.category === category)
}

export default function Page({ params }: { params: { slug: string } }) {

  const result = getProductByCategory(params.slug);
  return (
    <>
      <div className='flex justify-evenly flex-wrap py-10 m-2'>
        {
          result.length>0 ? result.map((product) => (
              <ProductCard 
              key={product.id} 
              title={product.name} 
              tagline={product.tagline}
              price={product.price} 
              img={product.image as StaticImageData} 
              category={product.category}
              id= {product.id}
               />
            )) : 
            (<p>No Products Found</p>)
          }
        
       
      </div>
    </>
  )


} 