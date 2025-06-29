"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

// Helper components defined first
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      href={href} 
      className="text-text-secondary hover:text-white transition-colors duration-300 flex items-center group"
    >
      <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
      <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0" />
    </Link>
  </li>
);

// Updated SocialIcon component with consistent width and alignment
const SocialIcon = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => (
  <Link 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gray-800 hover:bg-accent transition-all duration-300 group text-white w-28 sm:w-32"
  >
    <span className="flex items-center justify-center w-5">
      {icon}
    </span>
    <span className="text-xs sm:text-sm font-medium">{label}</span>
  </Link>
);

// Main component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-text-secondary pt-8 sm:pt-16 md:pt-20 pb-6 sm:pb-8">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 sm:mb-10 md:mb-12 flex flex-col items-center"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-6">RAMBUT SEHAT, PRAKTIS TANPA RIBET</h2>
          <div className="relative w-20 h-20 sm:w-40 sm:h-40 mx-auto">
            <Image 
              src="/images/LOGObg.png"
              alt="DAHS Logo"
              width={80}
              height={80}
              className="object-contain sm:hidden"
            />
            <Image 
              src="/images/LOGObg.png"
              alt="DAHS Logo"
              width={160}
              height={160}
              className="object-contain hidden sm:block"
            />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-6 sm:gap-10 mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-0 sm:mt-0 flex flex-col"
          >
            <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-6 relative inline-block">
              Shop
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 bg-accent/60" />
            </h3>
            <ul className="space-y-1 sm:space-y-3 text-xs sm:text-base mb-3 sm:mb-6">
              <FooterLink href="/shop/all">All Products</FooterLink>
            </ul>
            
            <div className="flex flex-col gap-2 sm:gap-3 mt-1 sm:mt-2">
              <SocialIcon icon={<FiInstagram size={14} />} href="https://www.instagram.com/dahs_id?igsh=MTl1aDhlNGV0M2hjNQ==" label="Instagram" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-0 sm:mt-0"
          >
            <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-6 relative inline-block">
              Information
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 bg-accent/60" />
            </h3>
            <ul className="space-y-1 sm:space-y-3 text-xs sm:text-base">
              <FooterLink href="/about">About Us</FooterLink>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-4 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-start items-start"
        >
          <p className="text-text-secondary/70 text-xs sm:text-sm mb-3 md:mb-0 text-left">
            © {currentYear} TimKemajuan<br />
            Dahs Hair Care<br />
            TrplPolinela. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6 md:ml-auto self-start">
            <Link href="/privacy" className="text-text-secondary/70 text-xs sm:text-sm hover:text-accent transition">Privacy Policy</Link>
            <Link href="/terms" className="text-text-secondary/70 text-xs sm:text-sm hover:text-accent transition">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 
