"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CircularText } from '@/components/ui';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Animation that loops continuously
  const rotateAnimation = {
    animate: { 
      rotate: 360,
      transition: { 
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }
    }
  };

  // CSS keyframes for ellipse drawing animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ellipseDraw {
        0% {
          stroke-dashoffset: 300;
        }
        50% {
          stroke-dashoffset: 0;
        }
        100% {
          stroke-dashoffset: -300;
        }
      }
      
      .animate-ellipse-draw {
        animation: ellipseDraw 4s ease-in-out infinite;
      }
      
      @keyframes dotRotate {
        from {
          transform: rotate(0deg) translateX(170px) rotate(0deg);
        }
        to {
          transform: rotate(360deg) translateX(170px) rotate(-360deg);
        }
      }
      
      .animate-dot-rotate {
        animation: dotRotate 12s linear infinite;
        transform-origin: center center;
      }
      
      @keyframes pulsate {
        0% {
          transform: scale(1);
          opacity: 0.7;
        }
        50% {
          transform: scale(1.05);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 0.7;
        }
      }
      
      .animate-pulsate {
        animation: pulsate 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      ref={heroRef} 
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-primary pt-24 sm:pt-28"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>
      
      {/* Main content */}
      <div className="container-padding mx-auto relative z-10 py-0 md:py-12">
        <div className="flex flex-col items-start justify-center">
          {/* Center Content */}
          <div className="w-full text-text-primary mb-16">
            {/* Main heading with Yeseva One font */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-yeseva heading-xl mb-10 md:mb-8 relative text-primary"
              style={{ 
                letterSpacing: "0.02em", 
                fontSize: "clamp(2.5rem, 10vw, 5.5rem)",
                lineHeight: "1",
                fontWeight: "700"
              }}
            >
              <div className="flex flex-col text-left max-w-4xl mx-auto px-4 sm:px-8">
                <span className="relative block mb-2 sm:mb-4">
                  RAMBUT
                </span>
                <span className="relative block mb-2 sm:mb-4 ml-0 md:ml-[20%] lg:ml-[28%]">
                  SEHAT,
                </span>
                <span className="relative block mb-2 sm:mb-4 ml-0">
                  PRAKTIS
                </span>
                <span className="relative block ml-0 md:ml-[10%] lg:ml-[14%]">
                  TANPA <span className="relative inline-block">
                    <span className="relative z-10">RIBET</span>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      {/* Circular animation around "RIBET" */}
                      <div className="absolute" style={{ width: "380px", height: "380px", top: "-190px", left: "-190px" }}>
                        <svg width="380" height="380" viewBox="0 0 380 380">
                          <circle 
                            cx="190" 
                            cy="190" 
                            r="170" 
                            fill="none" 
                            stroke="rgba(255, 203, 138, 0.3)" 
                            strokeWidth="1.5" 
                            strokeDasharray="4,8" 
                          />
                        </svg>
                        {/* Dot that rotates around the circle */}
                        <div 
                          className="absolute animate-dot-rotate" 
                          style={{ 
                            width: "12px", 
                            height: "12px", 
                            top: "190px", 
                            left: "190px" 
                          }}
                        >
                          <div 
                            className="w-full h-full rounded-full bg-accent animate-pulsate"
                          ></div>
                        </div>
                      </div>
                    
                      {/* Elips di sekitar "RIBET" */}
                      <svg 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
                        width="350" 
                        height="160" 
                        viewBox="0 0 350 160"
                      >
                        <defs>
                          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                          </filter>
                        </defs>
                        <ellipse
                          cx="175"
                          cy="80"
                          rx="170"
                          ry="65"
                          fill="none"
                          stroke="#F3C088"
                          strokeWidth="3"
                          strokeDasharray="1050"
                          className="animate-ellipse-draw"
                          filter="url(#glow)"
                        />
                      </svg>
                    </div>
                  </span>
                  <motion.div 
                    className="absolute -bottom-4 sm:-bottom-6 left-0 h-1.5 sm:h-2 bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: 1.2, 
                      ease: "easeOut",
                      delay: 0.5
                    }}
                  />
                </span>
              </div>
            </motion.h1>

            {/* Call to action button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4"
            >
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 