import { Products } from "@/utils/mock"
import Image from "next/image"
import Quantity from "@/components/Quantity"
import AddToCart from "@/components/AddtoCart"


const getProductDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id)
}
const sizes = ['XS', 'S', 'M', 'L', 'XL']

export default function Page({ params }: { params: { id: string } }) {

  const result = getProductDetail(params.id);
  console.log(result)
  return (
    <>
      <div className='flex justify-between flex-col lg:flex-row py-10 m-2'>
        {/* This is product pae for product id {params.id} */}
        {
          result.map((product) => (
            <div key={product.id} className="flex flex-col lg:flex-row justify-between m-10 px-4">
              <div className='h-36 w-36'>
                <Image width={950} height={950} src={product.image} alt={product.name} />
              </div>
              <div className="ml-20">
                <Image width={550} height={550} src={product.image} alt={product.name} />
              </div>
              <div className="ml-10">
                <p className="text-3xl font-bold text-gray-900">{product.name}</p>
                <p className="text-3xl font-bold text-gray-400">{product.tagline}</p>
                <p className="mt-1 text-1xl font-bold text-gray-400">Category: {product.category}</p>
                <p className="text-1xl font-bold text-gray-500 mt-4">Select Size</p>

                {/* sizes */}
                <div className="flex gap-x-3">
                  {
                    sizes.map((size) => {
                      return <div key={product.id} className="border flex items-center justify-center mt-2 h-12 w-12 rounded-full bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                        <span className="text-{10px} font-semibold text-center text-gray-600">
                          {size}
                        </span>
                      </div>
                    })
                  }
                </div>

                {/* Quantity */}
                <div className='flex itmems-center mt-6 gap-x-4'>
                  <h4 className="font-extrabold">Quantity: </h4>
                  <Quantity />
                 
                </div>
                    {/* ADD to cart */}
                <div className="mt-5 items-center gap-x-4">
                  <AddToCart />
                  <p className="text-2xl font-bold text-gray-800 gap-2">$ {product.price.toFixed(2)}</p>
                </div>
              </div>

            </div>

          ))
        }
      </div>
    </>
  )


} 