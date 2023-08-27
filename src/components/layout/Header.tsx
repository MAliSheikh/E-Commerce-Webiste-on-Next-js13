'use client'
import Link from "next/link";
import Image from "next/image";
import { Search } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Header = () => {
    const cartValue = useSelector(
        (state: RootState) => state.cart.totalQuantity  
        );

    return (
        <>
            <div className='h-20 flex items-center justify-between border-b-2 shadow-black'>
                <Link href='/'>
                    <Image className="pl-2" width='150' height={150} src={'/Logo.webp'} alt='Image' />
                </Link>
                <ul className='flex gap-4'>
                    <li><Link href='/category/female'>Female</Link></li>
                    <li><Link href='/category/male'>Male</Link></li>
                    <li><Link href='/category/kids'>Kids</Link></li>
                    <li><Link href='/products'>All Products</Link></li>
                </ul>
                <div className='flex items-center text-gray-900'>
                    <Search className='w-5 h-5 absolute ' />
                    <input
                        className='h-8 shadow appearance-none border border-gray-500 pl-5 focus:outline-none focus:shadow-outline rounded'
                        type="search"
                        placeholder='Search here'
                    />
                    <Button className='text-white bg-black w-13 h-8 border focus:outline-none focus:shadow-outline rounded'>Search</Button>

                </div>
                <div className='mr-8 h-12 w-12 rounded-full bg-gray-300 flex justify-center items-center'>
                    <ShoppingCart />
                    <span className="absolute top-2 right-8 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
                        {cartValue}
                    </span>
                </div>
            </div>

        </>
    );
}

export default Header;