"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FiStar } from 'react-icons/fi';

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const reviews = [
    {
      id: 1,
      name: "L**a",
      rating: 5,
      text: "Packing sangat rapi, suka banget sama hasilnya. cocok buat rambut jadi lebih halus dan lembut"
    },
    {
      id: 2,
      name: "A***n",
      rating: 5,
      text: "Bahan dari sisirnya lembut, ga bikin rambut rontok dan praktis dibawa kemana aja."
    },
    {
      id: 3,
      name: "D****a",
      rating: 5,
      text: "Hair Powder cocok di kulit kepala rambut jadi lebih bervolume dan yang penting jadi lebih lembut"
    },
      {
      id: 4,
      name: "G**n",
      rating: 5,
      text: "Bahan dari sisirnya lembut, ga bikin rambut rontok ga mudah patah dan praktis dibawa kemana aja"
    },
    
  ];
  
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    
    return () => {
      resetTimeout();
    };
  }, [currentIndex, reviews.length]);
  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  
  return (
    <section 
      id="reviews" 
      className="py-16 sm:py-24 md:py-32 lg:py-40 relative w-full"
      style={{
        backgroundImage: "url('/images/Sampul Profil.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="w-[85%] sm:w-[75%] md:max-w-2xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          {/* Header with REVIEWS text */}
          <div className="bg-black bg-opacity-80 py-3 px-6 backdrop-blur-sm border-b border-gray-500/30">
            <h2 className="text-white text-center text-xl font-medium uppercase tracking-wider">REVIEWS</h2>
          </div>
          
          {/* Review content */}
          <div 
            className="backdrop-blur-md bg-white/20 p-6 sm:p-8"
            style={{
              backdropFilter: "blur(12px)",
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              borderRight: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
          >
            {/* Stars */}
            <div className="flex mb-5 sm:mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <FiStar key={star} className="text-amber-400 w-5 h-5 sm:w-6 sm:h-6 mr-1 fill-current drop-shadow-md" />
              ))}
            </div>
            
            {/* Review text */}
            <p className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-sm">
              "{reviews[currentIndex].text}"
            </p>
            
            {/* Reviewer name */}
            <p className="text-sm sm:text-base text-white/90 mb-3 sm:mb-4 font-light">
              {reviews[currentIndex].name}
            </p>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-3 sm:mt-4 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;