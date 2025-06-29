import { ReactNode } from 'react';
import { Product } from './product';

/**
 * Base props for all components
 */
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

/**
 * Props for the product card component
 */
export interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  index: number;
}

/**
 * Props for the product grid component
 */
export interface ProductGridProps {
  products: Product[];
  title?: string;
}

/**
 * Props for section components
 */
export interface SectionProps extends BaseComponentProps {
  id?: string;
  title?: string;
  subtitle?: string;
}

/**
 * Props for button components
 */
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  fullWidth?: boolean;
} 