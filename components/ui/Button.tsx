"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ButtonProps } from '@/types';

/**
 * Button component that can be rendered as a button or a link
 */
const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  type = 'button',
  href,
  fullWidth = false,
}) => {
  // Base classes for all button variants
  const baseClasses = `
    inline-block font-medium relative overflow-hidden transition-all duration-300 text-center
    ${size === 'sm' ? 'py-2 px-4 text-sm' : size === 'lg' ? 'py-4 px-8 text-lg' : 'py-3 px-6'}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  // Variant-specific classes
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-modern',
    outline: 'btn-modern-outline',
    text: 'text-primary hover:underline',
  };

  // Motion variants
  const motionVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} passHref>
        <motion.a
          className={`${baseClasses} ${variantClasses[variant]}`}
          initial="initial"
          whileHover={!disabled ? "hover" : "initial"}
          whileTap={!disabled ? "tap" : "initial"}
          variants={motionVariants}
        >
          {children}
        </motion.a>
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      initial="initial"
      whileHover={!disabled ? "hover" : "initial"}
      whileTap={!disabled ? "tap" : "initial"}
      variants={motionVariants}
    >
      {children}
    </motion.button>
  );
};

export default Button; 