"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const EthicalSection = () => {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Scroll-based animations - only active on client side
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const features = [
    {
      title: "Not Tested on Animals",
      description: "We never test our products on animals and source ingredients ethically."
    },
    {
      title: "BPOM Approved",
      description: "All our products are BPOM certified and comply with regulations."
    },
    {
      title: "Natural Ingredients",
      description: "We use high-quality natural ingredients for all our products."
    },
    {
      title: "Safe for Hair & Scalp",
      description: "Specially formulated to be gentle on your hair and scalp."
    }
  ];

  // Static version for SSR
  if (!isMounted) {
    return (
      <section id="ethical" className="py-16 md:py-32 bg-white overflow-hidden" ref={ref}>
        <div className="container-padding mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div className="max-w-xl mx-auto lg:mx-0">
              <div className="h-1 bg-accent mb-4 sm:mb-8 w-0"></div>
              
              <h2 className="font-helvetica-neue-bold heading-lg mb-4 sm:mb-8 relative text-text-primary">
                <span className="relative z-10">ETHICALLY MADE</span>
                <br />
                <span className="relative z-10">WITH GOOD PURPOSE</span>
              </h2>
              
              <p className="font-the-seasons text-text-primary/80 mb-6 sm:mb-10 leading-relaxed text-base sm:text-lg">
                A solution oriented brand based in Indonesia. Focusing on minimalism, 
                creating and developing grooming needs based on our years of 
                professional experience. Each line of products is designed uniquely, 
                with our own idealism, best formula, and of course, good purpose.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mr-2 sm:mr-3">
                      <div className="bg-amber-400 w-5 h-5 rounded-full flex items-center justify-center">
                        <FiCheck className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm mb-0 text-text-primary">{feature.title}</h3>
                      <p className="text-text-primary/70 leading-relaxed text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative mt-10 lg:mt-0">
              <div className="absolute -inset-4 rounded-xl bg-accent/10 z-0"></div>
              
              <div className="rounded-xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px] relative z-10 shadow-2xl">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/Handy, Quick, and Effortless.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 lg:-left-20 bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl max-w-xs z-20">
                <h3 className="font-the-seasons text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-text-primary">#LooksMoreNatural</h3>
                <p className="text-text-primary/70 text-sm sm:text-base">
                  Join our movement for better hair care with products made from natural ingredients.
                </p>
                
                <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg lg:text-xl">
                  LooksMoreNatural
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section id="ethical" className="py-16 md:py-32 bg-white overflow-hidden" ref={ref}>
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "80px" } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-accent mb-4 sm:mb-8"
            />
            
            <h2 className="font-helvetica-neue-bold heading-lg mb-4 sm:mb-8 relative text-text-primary">
              <span className="relative z-10">ETHICALLY MADE</span>
              <br />
              <span className="relative z-10">WITH GOOD PURPOSE</span>
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: "25%" } : { height: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute bottom-0 left-0 w-full bg-accent/10 -z-0"
              />
            </h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-the-seasons text-text-primary/80 mb-6 sm:mb-10 leading-relaxed text-base sm:text-lg"
            >
              A solution oriented brand based in Indonesia. Focusing on minimalism, 
              creating and developing grooming needs based on our years of 
              professional experience. Each line of products is designed uniquely, 
              with our own idealism, best formula, and of course, good purpose.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-y-5">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-2 sm:mr-3">
                    <div className="bg-amber-400 w-5 h-5 rounded-full flex items-center justify-center">
                      <FiCheck className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-0 text-text-primary">{feature.title}</h3>
                    <p className="text-text-primary/70 leading-relaxed text-xs">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mt-10 lg:mt-0"
            ref={imageRef}
          >
            <motion.div
              className="absolute -inset-4 rounded-xl bg-accent/10 z-0"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            
            <motion.div 
              className="rounded-xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px] relative z-10 shadow-2xl"
              style={{ scale }}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/Handy, Quick, and Effortless.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 lg:-left-20 bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl max-w-xs z-20"
            >
              <h3 className="font-the-seasons text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-text-primary">#LooksMoreNatural</h3>
              <p className="text-text-primary/70 text-sm sm:text-base">
                Join our movement for better hair care with products made from natural ingredients.
              </p>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 1, type: "spring" }}
                className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg lg:text-xl"
              >
                LooksMoreNatural
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EthicalSection; 