import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ShoppingCart } from "lucide-react";

const Hero = () => {
    return (
        <section className='flex flex-col lg:flex-row py-6 gap-y-10'>
            {/* left side div  */}

            <div className='flex-1 mt-10'>
                <Badge className='py-3 px-6 rounded bg-blue-200 text-blue-700 hover:bg-blue-200'>Sale 70%</Badge>
                <h1 className="mt-6 scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl">
                    An Indus Trial Take on Streetwear
                </h1>
                <p className="text-2xl mt-10">
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
                <Button className='bg-black h-12 px-8 mt-10'>
                    <ShoppingCart className="mr-2 h-5 w-5" /> Start Shopping
                </Button>
                <div className='mt-14 flex sm:gap-1 lg:gap-4'>
                    <Image width={130} height={130} src={'/Featured1.webp'} alt="Hero Image" />
                    <Image width={130} height={130} src={'/Featured2.webp'} alt="Hero Image" />
                    <Image width={130} height={130} src={'/Featured3.webp'} alt="Hero Image" />
                    <Image width={130} height={130} src={'/Featured4.webp'} alt="Hero Image" />
                </div>

            </div>

            {/* right side div */}
            <div className='flex-1'>
                <Image width={650} height={650} src={'/Capture1.JPG'} alt="Hero Image" />
            </div>

        </section>
    );
}

export default Hero;