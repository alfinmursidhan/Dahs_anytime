"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCardProps } from '@/types';
import { 
  imageHoverVariants,
  buttonVariants,
  underlineVariants,
  cardVariants
} from '@/utils/animations';
import { TRANSITIONS } from '@/utils/constants';

/**
 * Product card component with animations and hover effects
 */
const ProductCard = ({ id, name, description, image, price, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Text color variants with cleaner transitions
  const textColorVariants = {
    initial: { color: "var(--text-primary)" },
    hover: { 
      color: "var(--accent)", 
      transition: { duration: 0.3 } 
    }
  };

  // Price tag variants
  const priceTagVariants = {
    initial: { 
      y: 0,
      backgroundColor: "rgba(255, 255, 255, 0.9)" 
    },
    hover: { 
      y: -3,
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div 
      className="h-full w-full flex flex-col rounded-lg overflow-hidden bg-white shadow-sm transition-shadow duration-500"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ 
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
        y: -3,
        transition: { duration: 0.4, ease: TRANSITIONS.easeOut }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={`/product/${id}`} className="block overflow-hidden h-full flex flex-col">
        <div className="overflow-hidden relative h-[180px] sm:h-[220px]">
          {/* Background image with hover effect */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image || '/images/placeholder.jpg'})` }}
            variants={imageHoverVariants}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
          />
          
          {/* Price tag with animation */}
          <motion.div 
            className="absolute top-2 right-2 py-1 px-3 rounded-full text-text-primary text-xs font-semibold backdrop-blur-sm"
            variants={priceTagVariants}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
          >
            ${price.toFixed(2)}
          </motion.div>
          
          {/* Hover overlay with animated button */}
          <motion.div 
            className="absolute inset-0 bg-black/20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence>
              {isHovered && (
                <motion.div 
                  className="glass-modern text-text-secondary py-2 px-6 rounded-full text-xs font-medium"
                  variants={buttonVariants}
                  initial="initial"
                  animate="hover"
                  exit="exit"
                >
                  View Details
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        
        {/* Product details with animations */}
        <div className="p-3 sm:p-4 flex flex-col flex-grow bg-white">
          <div className="flex-grow">
            <motion.h3 
              className="font-serif text-base font-medium mb-1 inline-block text-text-primary"
              variants={textColorVariants}
              initial="initial"
              animate={isHovered ? "hover" : "initial"}
            >
              {name}
            </motion.h3>
            <p className="text-text-primary/70 text-xs mb-3 line-clamp-2 leading-relaxed">{description}</p>
          </div>
          
          {/* Animated underline */}
          <div className="w-full h-0.5 bg-accent/10 relative overflow-hidden rounded-full">
            <motion.div 
              className="absolute inset-0 bg-accent h-full" 
              variants={underlineVariants}
              initial="initial"
              animate={isHovered ? "hover" : "initial"}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard; 