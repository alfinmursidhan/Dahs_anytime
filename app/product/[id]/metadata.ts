import { Metadata } from 'next';
import { products } from './products';

/**
 * Generate metadata for product detail page
 */
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const product = products[params.id];
  
  if (!product) {
    return {
      title: 'Product Not Found - Dahs',
      description: 'The product you are looking for does not exist.',
    };
  }
  
  return {
    title: `${product.name} - Dahs`,
    description: product.description,
  };
} 