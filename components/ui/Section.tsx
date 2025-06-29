"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '@/types';

/**
 * Reusable section component with animation
 */
const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  title,
  subtitle,
}) => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 container-padding ${className}`}
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full"
      >
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16 text-center">
            {title && (
              <motion.h2
                variants={itemVariants}
                className="heading-lg text-text-primary mb-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={itemVariants}
                className="text-text-primary/70 max-w-2xl mx-auto text-lg"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default Section; 