import Image from 'next/image'
import { Image as IImage } from 'sanity';
import { client } from '@/lib/sanityClient'
import { urlForImage }  from '../../sanity/lib/image';
import { Button } from '@/components/ui/button';

export const getProductData = async () => {
  // const res = await client.fetch(`*[_type == 'product']`)
  const res = await client.fetch(`*[_type=='product']{
    title,
    _id,
    price,
    description,
    image,
    category -> {
      name,
    }
}`)
  return res
}


interface IProduct {
  title: string;
  _id: string;
  price: number;
  description: string;
  image: IImage;
  category: {
    name: string;
  };
}


export default async function Data() {
  const data: IProduct[] = await getProductData()
  console.log(data)
  return (
    <div className='flex flex-cols-[repeat(3,auto)] justify-center gap-x-10'>
      {data.map((product) => (
        <div key={product._id}>
          <Image className='max-h-[200px] object-cover object-top' width={300} height={300} src={urlForImage(product.image).url()} alt='product' />
          <h1>{product.title}</h1>
          <h1>{product.description}</h1>
          <h1>{product.price}</h1>
          <h1>{product.price}</h1>
          <Button className='bg-black text-white'>Add to Cart</Button>
        </div>

      ))}
    </div>
  )
}


// import Data from './getProductData';
// <Data/>

// We can also show like this

// Outside of function write this

// interface IProduct {
//   title: string;
//   description: string;
//   image: string;
// }

// // innside of function
// export default async function Data() {

//   const data: IProduct[] = await getProductData()
//   return (
//     <div>
//       {data.map((product) => (
//         <>
//           <h1>{product.title}</h1>
//           <h1>{product.description}</h1>
//           <h1>{product.image}</h1>
//         </>

//       ))}
//     </div>
//   )
// }

// libraray
// sanity/image-url-npm