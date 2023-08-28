import { client } from '@/lib/sanityClient'

export const getProductData = async () => {
  // const res = await client.fetch(`*[_type == 'product']`)
  const res = await client.fetch(`*[_type == 'product']{
    title,
    description,
    image,
  }`)
  return res
}


export default async function Data() {
  const data = await getProductData()
  console.log(data)
  return (
    <div>

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