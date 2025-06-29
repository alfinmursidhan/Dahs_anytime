"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const StoreLinks = () => {
  const stores = [
    {
      name: 'SHOPEE',
      href: 'https://id.shp.ee/oqD7RmW',
      logo: '/images/Shopee.svg.png'
    },
    {
      name: 'TOKOPEDIA',
      href: 'https://tk.tokopedia.com/ZSkuTwp4f/',
      logo: '/images/Tokped.png'
    },
    {
      name: 'TOCO',
      href: 'https://toco.id/link/fBg6ucwaNnxtttEs2QBW1c',
      logo: '/images/Tocco.png'
    }
  ];

  return (
    <section id="connect" className="py-10 sm:py-12 md:py-16 w-full">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-10"
        >
          <h2 className="heading-lg mb-3 sm:mb-4 text-text-primary text-3xl sm:text-4xl md:text-5xl">OFFICIAL STORES</h2>
          <p className="max-w-2xl mx-auto text-text-primary/80 text-sm sm:text-base px-4 sm:px-0">
            Get our exclusive offers only at our official stores.
          </p>
        </motion.div>

        <div className="flex flex-col gap-2 xs:gap-3 sm:gap-6 w-full px-0">
          {/* First Store Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="w-full bg-black text-white overflow-hidden shadow-lg transition-all duration-300"
          >
            <Link href={stores[0].href} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-center py-4 xs:py-6 sm:py-8 md:py-12 px-3 xs:px-4 sm:px-6">
                <div className="text-center">
                  <p className="text-base xs:text-lg sm:text-xl font-medium mb-2 sm:mb-3 md:mb-4">Shop on</p>
                  <div className="flex justify-center items-center">
                    <img 
                      src={stores[0].logo} 
                      alt={stores[0].name}
                      className="h-10 xs:h-14 sm:h-16 md:h-20 object-contain" 
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Second Store Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="w-full bg-black text-white overflow-hidden shadow-lg transition-all duration-300"
          >
            <Link href={stores[1].href} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-center py-4 xs:py-6 sm:py-8 md:py-12 px-3 xs:px-4 sm:px-6">
                <div className="text-center">
                  <p className="text-base xs:text-lg sm:text-xl font-medium mb-2 sm:mb-3 md:mb-4">Shop on</p>
                  <div className="flex justify-center items-center">
                    <img 
                      src={stores[1].logo} 
                      alt={stores[1].name}
                      className="h-12 xs:h-16 sm:h-20 md:h-28 object-contain" 
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Third Store Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="w-full bg-black text-white overflow-hidden shadow-lg transition-all duration-300"
          >
            <Link href={stores[2].href} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-center py-4 xs:py-6 sm:py-8 md:py-12 px-3 xs:px-4 sm:px-6">
                <div className="text-center">
                  <p className="text-base xs:text-lg sm:text-xl font-medium mb-2 sm:mb-3 md:mb-4">Shop on</p>
                  <div className="flex justify-center items-center">
                    <img 
                      src={stores[2].logo} 
                      alt={stores[2].name}
                      className="h-12 xs:h-16 sm:h-18 md:h-24 object-contain" 
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-8 sm:mt-12"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default StoreLinks; 