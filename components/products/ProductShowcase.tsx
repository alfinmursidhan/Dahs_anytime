"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { fadeInVariants } from '@/utils/animations';
import { formatPriceIDR, convertUSDtoIDR } from '@/utils/formatters';
import { Product } from '@/types';
import { products } from '@/data';

/**
 * Component that showcases featured products
 */
const ProductShowcase = () => {
  const ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Set mounted state when component mounts on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Featured products - use first two products from our data
  const featuredProducts: Product[] = [
    {
      ...products[0],
      price: convertUSDtoIDR(products[0].price), // Convert to IDR for display
    },
    {
      ...products[1],
      price: convertUSDtoIDR(products[1].price), // Convert to IDR for display
    }
  ];

  // Static version for SSR and initial render
  if (!isMounted) {
    return (
      <section id="shop" className="py-12 sm:py-16 md:py-20 bg-white" ref={ref}>
        <div className="container-padding mx-auto">
          <div className="mb-10 md:mb-16 text-center">
            <h2 className="heading-lg mb-3 md:mb-4 text-text-primary">OUR SIGNATURE PRODUCTS</h2>
            <p className="text-text-primary/80 max-w-2xl mx-auto px-4 sm:px-0">
              Premium hair care solutions crafted with natural ingredients for healthier hair.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
            {featuredProducts.map((product) => (
              <div key={product.id} className="natural-card w-full lg:w-1/2 flex flex-col overflow-hidden mb-8 lg:mb-0">
                <Link href={`/product/${product.id}`} className="block h-full">
                  <div className="aspect-[4/3] overflow-hidden relative bg-white/5 backdrop-blur-sm">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transform transition-transform duration-700 hover:scale-105 p-6"
                    />
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-secondary/90 backdrop-blur-sm py-1 px-3 sm:py-1.5 sm:px-4 rounded-full text-text-primary text-xs sm:text-sm font-semibold">
                      {formatPriceIDR(product.price)}
                    </div>
                  </div>
                  
                  <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow bg-secondary">
                    <div className="flex-grow">
                      <h3 className="font-serif text-xl sm:text-2xl font-medium mb-2 sm:mb-3 text-text-primary">{product.name}</h3>
                      <p className="text-text-primary/80 mb-4 sm:mb-6 text-sm sm:text-base">{product.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                        {product.features?.map((feature, index) => (
                          <div key={index} className="eco-badge inline-flex items-center justify-center text-xs sm:text-sm">
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3 sm:mt-4">
                      <span className="text-xs sm:text-sm text-text-primary/70 font-medium">
                        100% Natural Ingredients
                      </span>
                      <span className="text-xs sm:text-sm text-text-primary font-medium uppercase tracking-wider">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="shop" className="py-12 sm:py-16 md:py-20 bg-white" ref={ref}>
      <div className="container-padding mx-auto">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-10 md:mb-16 text-center"
        >
          <h2 className="heading-lg mb-3 md:mb-4 text-text-primary">OUR SIGNATURE PRODUCTS</h2>
          <p className="text-text-primary/80 max-w-2xl mx-auto px-4 sm:px-0">
            Premium hair care solutions crafted with natural ingredients for healthier hair.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto"
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="natural-card w-full lg:w-1/2 flex flex-col overflow-hidden mb-8 lg:mb-0"
            >
              <Link href={`/product/${product.id}`} className="block h-full">
                <div className="aspect-[4/3] overflow-hidden relative bg-white/5 backdrop-blur-sm">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transform transition-transform duration-700 hover:scale-105 p-6"
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-secondary/90 backdrop-blur-sm py-1 px-3 sm:py-1.5 sm:px-4 rounded-full text-text-primary text-xs sm:text-sm font-semibold">
                    {formatPriceIDR(product.price)}
                  </div>
                </div>
                
                <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow bg-secondary">
                  <div className="flex-grow">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium mb-2 sm:mb-3 text-text-primary">{product.name}</h3>
                    <p className="text-text-primary/80 mb-4 sm:mb-6 text-sm sm:text-base">{product.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {product.features?.map((feature, index) => (
                        <div key={index} className="eco-badge inline-flex items-center justify-center text-xs sm:text-sm">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3 sm:mt-4">
                    <span className="text-xs sm:text-sm text-text-primary/70 font-medium">
                      100% Natural Ingredients
                    </span>
                    <span className="text-xs sm:text-sm text-text-primary font-medium uppercase tracking-wider">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase; 