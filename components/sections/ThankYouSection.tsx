"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

const ThankYouSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { src: "/images/thankyou card.jpg", alt: "Thank You Card" },
    { src: "/images/dahs2.jpeg", alt: "Dahs2" }
  ];
  const swipeThreshold = 50; // minimum distance required for a swipe

  // Auto-slide function
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Manual slide change
  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // Keep track of direction for animation
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    setPage([currentImageIndex, currentImageIndex > page ? 1 : -1]);
  }, [currentImageIndex]);

  // Handle drag end
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    
    // If user dragged more than threshold or with high velocity
    if (offset.x < -swipeThreshold || velocity.x < -0.5) {
      // Swipe left, go to next slide
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (offset.x > swipeThreshold || velocity.x > 0.5) {
      // Swipe right, go to previous slide
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="w-full bg-white py-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-full relative"
      >
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden touch-pan-y">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="absolute w-full h-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={handleDragEnd}
            >
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                fill
                className="object-cover object-center cursor-grab active:cursor-grabbing sm:object-top"
                priority={currentImageIndex === 0}
                sizes="100vw"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ThankYouSection; 