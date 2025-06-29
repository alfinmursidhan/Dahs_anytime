/**
 * Product interface for all products in the application
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category?: string;
  fullDescription?: string;
  features?: string[];
  inStock?: boolean;
  quantity?: number;
}

/**
 * Filter option interface for product filtering
 */
export interface FilterOption {
  id: string;
  name: string;
  count: number;
}

/**
 * Export all types from the application
 */
export * from './product';
export * from './components'; 