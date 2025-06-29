import { Product } from '@/types';

/**
 * Mock product data used throughout the application
 */
export const products: Product[] = [
  {
    id: 'hair-powder',
    name: 'Hair Powder',
    description: 'Lightweight volumizing powder for instant lift and texture.',
    image: '/images/products/hairpowdermodel.png',
    price: 34.99,
    category: 'styling',
    fullDescription: 'Our lightweight volumizing powder adds instant lift and texture to your hair without weighing it down. Perfect for creating voluminous styles that last all day.',
    features: [
      'Adds instant volume and texture',
      'Lightweight formula',
      'Absorbs excess oil',
      'Natural ingredients',
      'No harsh chemicals'
    ],
    inStock: true,
    quantity: 50
  },
  {
    id: 'hair-serum',
    name: 'Hair Serum',
    description: 'Smoothing serum that tames frizz and adds shine to all hair types.',
    image: '/images/products/Detangler+.png',
    price: 29.99,
    category: 'treatment',
    fullDescription: 'Our smoothing serum is designed to tame frizz and add shine to all hair types. The lightweight formula won\'t weigh your hair down while providing all-day protection against humidity.',
    features: [
      'Tames frizz and flyaways',
      'Adds natural shine',
      'Protects against humidity',
      'Heat protection',
      'Lightweight formula'
    ],
    inStock: true,
    quantity: 35
  },
  {
    id: 'natural-shampoo',
    name: 'Natural Shampoo',
    description: 'Gentle cleansing shampoo with natural ingredients for daily use.',
    image: '/images/product-3.jpg',
    price: 24.99,
    category: 'shampoo',
    fullDescription: 'Our natural shampoo gently cleanses your hair without stripping its natural oils. Made with natural ingredients, it\'s perfect for daily use and all hair types.',
    features: [
      'Gentle cleansing',
      'Natural ingredients',
      'Suitable for daily use',
      'No sulfates or parabens',
      'For all hair types'
    ],
    inStock: true,
    quantity: 45
  },
  {
    id: 'hair-mask',
    name: 'Hydrating Hair Mask',
    description: 'Deep conditioning treatment that repairs and restores damaged hair.',
    image: '/images/product-4.jpg',
    price: 39.99,
    category: 'treatment',
    fullDescription: 'Our hydrating hair mask is a deep conditioning treatment that repairs and restores damaged hair. Use once a week for healthy, shiny, and manageable hair.',
    features: [
      'Deep conditioning',
      'Repairs damaged hair',
      'Intense hydration',
      'For weekly use',
      'Natural oils and extracts'
    ],
    inStock: true,
    quantity: 20
  }
]; 