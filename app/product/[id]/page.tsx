// 1. TAMBAHKAN BARIS INI TEPAT DI ATAS, JANGAN DI TEMPAT LAIN
"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiChevronRight, FiStar, FiCheck } from 'react-icons/fi';
import ProductShowcase from '@/components/products/ProductShowcase';
import { Product } from '@/types';
// 2. IMPORT 'Head' SUDAH DIHAPUS KARENA TIDAK DIGUNAKAN DI APP ROUTER
import { products } from './products';

// Define products database type
interface ProductsDatabase {
  [key: string]: Product;
}

// 3. FUNGSI 'generateMetadata' DIHAPUS DARI SINI
//    Alasan: Fungsi ini hanya bisa berjalan di Server Component,
//    sedangkan file ini sudah kita ubah menjadi Client Component ("use client").

export default function ProductDetail({ params }: { params: { id: string } }) {
  // Logika untuk mengambil data produk tetap sama
  const product = products[params.id];

  if (!product) {
    return (
      <main className="min-h-screen">
        {/* 4. SEMUA KOMPONEN <Head>...</Head> HARUS DIHAPUS */}
        <Navbar />
        <div className="pt-32 pb-20 container-padding mx-auto text-center">
          <h1 className="heading-lg mb-6">Product Not Found</h1>
          <p className="text-gray-600 mb-8">
            The product you are looking for does not exist or has been removed.
          </p>
          <Link href="/shop" className="btn-primary">
            RETURN TO SHOP
          </Link>
        </div>
        <Footer />
      </main>
    );
  }
  
  return (
    <main className="min-h-screen">
      {/* 4. SEMUA KOMPONEN <Head>...</Head> HARUS DIHAPUS */}
      <Navbar />
      
      <div className="pt-32 pb-12">
        <div className="container-padding mx-auto">
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <FiChevronRight className="mx-2" />
            <Link href="/shop" className="hover:text-accent transition-colors">Shop</Link>
            <FiChevronRight className="mx-2" />
            <span className="text-accent">{product.name}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="rounded-lg overflow-hidden h-[500px] bg-gray-100"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Sisa dari kode JSX Anda tetap sama persis */}
              <h1 className="heading-lg mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar key={star} className="text-accent w-5 h-5 mr-1 fill-current" />
                  ))}
                </div>
                <span className="text-gray-500">(12 reviews)</span>
              </div>
              
              <p className="text-2xl font-bold text-accent mb-6">${product.price.toFixed(2)}</p>
              
              <p className="text-gray-700 mb-6">
                {product.fullDescription}
              </p>
              
              <div className="mt-12">
                <h3 className="font-serif text-2xl mb-6">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2">
                        <FiCheck size={18} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8 mt-6">
                <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity</label>
                <div className="flex">
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    defaultValue="1"
                    className="w-20 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-accent transition"
                  />
                  <button className="btn-primary rounded-l-none">
                    BUY NOW
                  </button>
                </div>
              </div>
              
              <Link href="/shop" className="btn-outline">
                CONTINUE SHOPPING
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-secondary">
        <div className="container-padding mx-auto">
          <h2 className="heading-lg text-center mb-12">You Might Also Like</h2>
          <ProductShowcase />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}