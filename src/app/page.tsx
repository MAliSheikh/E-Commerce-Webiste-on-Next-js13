"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { BiSolidUserCircle } from "react-icons/bi";
import Link from 'next/link'
import Hero from '@/views/Hero';
import ProductList from '@/views/ProductList';
import AddContent from '@/views/AddContent'
import NewsLetter from '@/views/NewsLetter';
import FeaturesBanner from '@/views/FeaturesBanner';

export default function Home() {
  return (
    <div>
      <Hero />
      <AddContent />
      <ProductList />
      <FeaturesBanner />
      <NewsLetter />
    </div>
  )
}
