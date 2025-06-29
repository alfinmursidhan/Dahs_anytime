"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import Link from 'next/link';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Featured products to showcase
  const featuredProducts = [
    {
      id: 1,
      title: "",
      subtitle: "Natural Hair Powder",
      description: "Amla ekstrak + Aloe Vera + Vitamin C",
      image: "/images/products/hairpowder-png.png",
      rating: 5,
      link: "/product/serum"
    },
    {
      id: 2,
      title: "",
      subtitle: "Detangler+",
      description: "",
      image: "/images/products/Detangler Polos.png",
      rating: 5,
      link: "/product/sunscreen"
    }
  ];

  // Render star ratings
  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <FiStar 
            key={i} 
            className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${i < rating ? "text-accent fill-current" : "text-gray-300"}`} 
          />
        ))}
        <span className="ml-1 text-xs font-medium">
          {rating > 0 ? `${rating}/5` : "0/5"}
        </span>
      </div>
    );
  };

  // Function to handle image errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "/images/products/card.jpg"; // Fallback image
    target.onerror = null; // Prevent infinite loop
  };

  return (
    <section id="about" ref={ref} className="py-8 sm:py-10 md:py-12 bg-secondary">
      <div className="container-padding mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/3 flex flex-col justify-center md:py-10 mb-4 md:mb-0"
          >
            <h3 className="text-base sm:text-lg font-medium mb-1 text-text-primary">Jelajahi Produk</h3>
            <h2 className="font-helvetica-neue-bold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-text-primary">Terpopuler Kami</h2>
            <p className="text-text-primary/80 mb-4 sm:mb-6 text-sm sm:text-base">
              Temukan produk-produk unggulan kami yang telah dipercaya oleh banyak pelanggan. 
              Dirancang dengan formula alami untuk hasil terbaik.
            </p>
          </motion.div>

          {/* Right side - Product cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            {/* Mobile horizontal scroll view */}
            <div className="flex sm:hidden overflow-x-auto pb-4 snap-x snap-mandatory gap-3 scrollbar-hide">
              {featuredProducts.map((product, index) => (
                <Link href={product.link} key={product.id} className="block flex-shrink-0 snap-start w-[75%]">
                  <div className="bg-secondary rounded-lg overflow-hidden border border-gray-200/20 transition-all duration-300 h-full hover:shadow-lg hover:-translate-y-1">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-contain p-4"
                        onError={handleImageError}
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h4 className="text-xs font-medium text-text-primary">{product.title}</h4>
                      <h3 className="text-sm sm:text-base font-bold text-text-primary mb-1">{product.subtitle}</h3>
                      <p className="text-xs text-text-primary/70 mb-2">{product.description}</p>
                      <div className="mt-1">
                        {renderRating(product.rating)}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Desktop grid view */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-4 sm:gap-6">
              {featuredProducts.map((product, index) => (
                <Link href={product.link} key={`desktop-${product.id}`} className="block">
                  <div className="bg-secondary rounded-lg overflow-hidden border border-gray-200/20 transition-all duration-300 h-full hover:shadow-lg hover:-translate-y-1">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-contain p-4"
                        onError={handleImageError}
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h4 className="text-xs font-medium text-text-primary">{product.title}</h4>
                      <h3 className="text-sm sm:text-base font-bold text-text-primary mb-1">{product.subtitle}</h3>
                      <p className="text-xs text-text-primary/70 mb-2">{product.description}</p>
                      <div className="mt-1">
                        {renderRating(product.rating)}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features; 