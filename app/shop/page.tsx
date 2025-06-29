"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import ProductGrid from '@/components/products/ProductGrid';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Set mounted state on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sample products data (expanded from ProductShowcase)
  const products = [
    {
      id: 'deep-cleanse-shampoo',
      name: 'Deep Cleanse Shampoo',
      description: 'For intensive scalp cleansing, pH balanced',
      image: '/images/product-1.jpg',
      price: 15.99,
      category: 'shampoo'
    },
    {
      id: 'calming-shampoo',
      name: 'Calming Shampoo',
      description: 'Gently cleanse scalp & hair, PH balanced',
      image: '/images/product-2.jpg',
      price: 14.99,
      category: 'shampoo'
    },
    {
      id: 'condi-masque',
      name: 'Hair & Scalp Condi-Masque',
      description: 'Packed with nutrients for scalp',
      image: '/images/product-3.jpg',
      price: 18.99,
      category: 'conditioner'
    },
    {
      id: 'creamy-clay',
      name: 'No.1 Creamy Clay',
      description: 'High hold, natural finish, easy to wash',
      image: '/images/product-4.jpg',
      price: 16.99,
      category: 'styling'
    },
    {
      id: 'sculpting-paste',
      name: 'No.2 Sculpting Paste',
      description: 'Flexible hold, dry finish, humid resistant',
      image: '/images/product-1.jpg', // Placeholder
      price: 16.99,
      category: 'styling'
    },
    {
      id: 'styling-powder',
      name: 'La Poudre Styling Powder',
      description: 'Volumizing and texturizing with spray bottle',
      image: '/images/product-2.jpg', // Placeholder
      price: 14.99,
      category: 'styling'
    }
  ];
  
  // Filter products based on search query and active category
  const filteredProducts = products
    .filter(product => 
      (activeCategory === 'all' || product.category === activeCategory) &&
      (searchQuery === '' || 
       product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  
  // Categories for filter with count
  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'shampoo', name: 'Shampoo', count: products.filter(p => p.category === 'shampoo').length },
    { id: 'conditioner', name: 'Conditioner', count: products.filter(p => p.category === 'conditioner').length },
    { id: 'styling', name: 'Styling', count: products.filter(p => p.category === 'styling').length }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  if (!mounted) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 container-padding mx-auto">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 max-w-md mx-auto mb-16 rounded-lg"></div>
            <div className="h-8 bg-gray-200 max-w-sm mx-auto mb-10 rounded-lg"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-96 bg-gray-100 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container-padding mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h1 className="heading-lg mb-5 relative inline-block">
              SHOP ALL PRODUCTS
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '50%' }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 bg-accent/60"
              />
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mt-5">
              Browse our complete collection of premium hair products, 
              designed by professionals for exceptional results.
            </p>
            
            {/* Search bar */}
            <motion.div 
              className="mt-8 max-w-md mx-auto relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div 
                className={`relative transition-all duration-300 ${
                  isSearchFocused ? 'transform -translate-y-1 shadow-lg' : 'shadow-md'
                }`}
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full py-3 px-5 pr-10 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all duration-300"
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              {searchQuery && (
                <motion.div 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 text-gray-600" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              )}
            </motion.div>
            
            {/* Category filters */}
            <motion.div 
              className="flex flex-wrap justify-center mt-10 gap-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  variants={fadeInUp}
                  whileHover={{ y: -3, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  whileTap={{ y: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
                >
                  {category.name}
                  <span className={`ml-2 inline-flex items-center justify-center text-xs px-2 rounded-full ${
                    activeCategory === category.id 
                      ? 'bg-white/20' 
                      : 'bg-gray-200'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <ProductGrid 
                products={filteredProducts} 
                columns={3}
              />
              
              {/* Results count */}
              <motion.div 
                className="text-center mt-8 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Showing {filteredProducts.length} of {products.length} products
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 