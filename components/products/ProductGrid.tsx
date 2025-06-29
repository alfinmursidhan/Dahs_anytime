"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, LayoutGroup } from 'framer-motion';
import ProductCard from './ProductCard';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
  title?: string;
  description?: string;
  columns?: number;
  showEmptyAnimation?: boolean;
}

const ProductGrid = ({ 
  products, 
  title, 
  description, 
  columns = 4,
  showEmptyAnimation = true
}: ProductGridProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 0.8
      }
    },
    hover: {
      y: -8,
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] }
    }
  };

  // Empty state with animation
  if (!products || products.length === 0) {
    return (
      <div className="py-24 text-center flex flex-col items-center justify-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="w-24 h-24 mb-8 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
            />
          </svg>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 font-medium text-lg mb-2"
        >
          No products found
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-500 text-sm max-w-md mx-auto"
        >
          Try adjusting your filters or check back later for new arrivals
        </motion.p>
      </div>
    );
  }

  // Determine grid columns based on columns prop and responsive design with smaller gap
  const gridClass = `grid grid-cols-2 ${
    columns >= 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
  } ${
    columns >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
  } ${
    columns >= 5 ? 'xl:grid-cols-5' : ''
  } gap-3 sm:gap-4 md:gap-5`;

  return (
    <LayoutGroup>
      <div className="w-full my-4 sm:my-6 px-2 sm:px-4 md:px-0" ref={ref}>
        {(title || description) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.7,
                  ease: [0.6, 0.05, 0.01, 0.9]
                }
              }
            }}
            className="mb-8 sm:mb-10 text-center px-4"
          >
            {title && (
              <motion.h2 
                className="heading-lg mb-4 relative inline-block"
                layout
              >
                {title}
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 bg-accent/60"
                  layoutId="titleUnderline"
                />
              </motion.h2>
            )}
            {description && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm"
                layout
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={gridClass}
          layout
        >
          {products.map((product, index) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              whileHover="hover"
              layout
              className="flex h-full"
            >
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </LayoutGroup>
  );
};

export default ProductGrid; 