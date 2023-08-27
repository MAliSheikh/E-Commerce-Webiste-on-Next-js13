'use client'
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';   
import { ShoppingCart } from 'lucide-react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Button } from './button';

export default function Home() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full shadow">
        <div className="px-4 mx-auto lg:max-w-7xl md:flex md:items-center md:px-8">
          <div className="flex justify-between items-center gap-4 md:gap-0">
            <div className="py-3 md:py-5">
              <button
                className="md:hidden p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
            </div>
            <ul className={`flex flex-col items-center space-y-4 md:space-y-0 ${navbar ? 'block' : 'hidden'} md:flex md:space-x-6`}>
              <li className="text-black">
                <Link href="/">
                  Female
                </Link>
              </li>
              <li className="text-black">
                <Link href="/blogs">
                  Male
                </Link>
              </li>
              <li className="text-black">
                <Link href="/about">
                  Kids
                </Link>
              </li>
              <li className="text-black">
                <Link href="/contact">
                  All Products
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-2 ml-auto">
              <Button className="text-white bg-black w-13 h-8 border focus:outline-none focus:shadow-outline rounded">Search</Button>
              <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center">
                <ShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </nav>
      
    </div>
  );
}
