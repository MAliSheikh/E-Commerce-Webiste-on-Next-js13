"use client"
import Hero from '@/views/Hero';
import ProductList from '@/views/ProductList';
import AddContent from '@/views/AddContent'
import NewsLetter from '@/views/NewsLetter';
import FeaturesBanner from '@/views/FeaturesBanner';
import Data from '../views/getProductData';

export default function Home() {
  return (
    <div>
      <Data/>
      <Hero />
      <AddContent />
      <ProductList />
      <FeaturesBanner />
      <NewsLetter />
    </div>
  )
}
