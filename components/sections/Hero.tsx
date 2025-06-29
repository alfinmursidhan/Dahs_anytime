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
          stroke-dashoffset: 800;
        }
        50% {
          stroke-dashoffset: 0;
        }
        100% {
          stroke-dashoffset: -800;
        }
      }
      
      .animate-ellipse-draw {
        animation: ellipseDraw 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
      
      @keyframes dotRotate {
        from {
          transform: rotate(0deg) translateX(150px) rotate(0deg);
        }
        to {
          transform: rotate(360deg) translateX(150px) rotate(-360deg);
        }
      }

      @keyframes dotRotateMobile {
        from {
          transform: rotate(0deg) translateX(75px) rotate(0deg);
        }
        to {
          transform: rotate(360deg) translateX(75px) rotate(-360deg);
        }
      }
      
      .animate-dot-rotate {
        animation: dotRotate 12s linear infinite;
        transform-origin: center center;
      }

      .animate-dot-rotate-mobile {
        animation: dotRotateMobile 12s linear infinite;
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
      {/* Cover for the top orange line */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-secondary z-10"></div>
      
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
                <span className="relative block mb-2 sm:mb-4 ml-0 md:ml-[10%] lg:ml-[14%]">
                  <span className="inline-block whitespace-nowrap relative">
                    TANPA <span className="relative inline-block" id="ribet-text">RIBET</span>
                  </span>

                  {/* Ellipse animation container specifically for "RIBET" */}
                  <span 
                    className="absolute" 
                    style={{ 
                      width: '0',
                      height: '0',
                      overflow: 'visible',
                      display: 'inline-block',
                      top: '50%',
                      left: '84%', /* Position adjusted to target "RIBET" more precisely */
                      transform: 'translate(-50%, -50%)',
                      pointerEvents: 'none'
                    }}
                  >
                    {/* Circular animation around "RIBET" - Hidden on mobile */}
                    <div className="absolute hidden md:block" style={{ width: "320px", height: "320px", top: "-160px", left: "-160px" }}>
                      <svg width="320" height="320" viewBox="0 0 320 320" className="animate-spin-slow">
                        <circle 
                          cx="160" 
                          cy="160" 
                          r="150" 
                          fill="none" 
                          stroke="rgba(255, 203, 138, 0.3)" 
                          strokeWidth="2.5" 
                          strokeDasharray="4,8" 
                        />
                      </svg>
                      {/* Dot that rotates around the circle */}
                      <div 
                        className="absolute animate-dot-rotate" 
                        style={{ 
                          width: "12px", 
                          height: "12px", 
                          top: "160px", 
                          left: "160px",
                          transformOrigin: "center center"
                        }}
                      >
                        <div 
                          className="w-full h-full rounded-full bg-accent animate-pulsate"
                        ></div>
                      </div>
                    </div>

                    {/* Mobile version - smaller circular animation */}
                    <div className="absolute block md:hidden" style={{ width: "160px", height: "160px", top: "-80px", left: "-80px" }}>
                      <svg width="160" height="160" viewBox="0 0 160 160" className="animate-spin-slow">
                        <circle 
                          cx="80" 
                          cy="80" 
                          r="75" 
                          fill="none" 
                          stroke="rgba(255, 203, 138, 0.3)" 
                          strokeWidth="2" 
                          strokeDasharray="2,4" 
                        />
                      </svg>
                      {/* Smaller dot for mobile */}
                      <div 
                        className="absolute animate-dot-rotate-mobile" 
                        style={{ 
                          width: "8px", 
                          height: "8px", 
                          top: "80px", 
                          left: "80px",
                          transformOrigin: "center center"
                        }}
                      >
                        <div 
                          className="w-full h-full rounded-full bg-accent animate-pulsate"
                        ></div>
                      </div>
                    </div>
                  
                    {/* Ellipse around "RIBET" - Desktop version */}
                    <svg 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block" 
                      width="300" 
                      height="180" 
                      viewBox="0 0 300 180"
                      style={{
                        filter: 'drop-shadow(0px 0px 4px rgba(243, 192, 136, 0.5))'
                      }}
                    >
                      <defs>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="2" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      <ellipse
                        cx="150"
                        cy="90"
                        rx="145"
                        ry="80"
                        fill="none"
                        stroke="#F3C088"
                        strokeWidth="4"
                        strokeDasharray="800"
                        strokeLinecap="round"
                        className="animate-ellipse-draw"
                      />
                    </svg>

                    {/* Ellipse around "RIBET" - Mobile version */}
                    <svg 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 block md:hidden" 
                      width="150" 
                      height="90" 
                      viewBox="0 0 150 90"
                      style={{
                        filter: 'drop-shadow(0px 0px 2px rgba(243, 192, 136, 0.5))'
                      }}
                    >
                      <defs>
                        <filter id="glow-mobile" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="1" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      <ellipse
                        cx="75"
                        cy="45"
                        rx="70"
                        ry="40"
                        fill="none"
                        stroke="#F3C088"
                        strokeWidth="3"
                        strokeDasharray="400"
                        strokeLinecap="round"
                        className="animate-ellipse-draw"
                      />
                    </svg>
                  </span>
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