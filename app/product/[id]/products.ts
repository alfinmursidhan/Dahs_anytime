import { Product } from '@/types';

/**
 * Define products database type
 */
interface ProductsDatabase {
  [key: string]: Product;
}

/**
 * This is a sample product database that would normally come from a real database or API
 */
export const products: ProductsDatabase = {
  'deep-cleanse-shampoo': {
    id: 'deep-cleanse-shampoo',
    name: 'Deep Cleanse Shampoo',
    description: 'For intensive scalp cleansing, pH balanced',
    fullDescription: 'Our Deep Cleanse Shampoo thoroughly cleans your scalp and hair, removing buildup while maintaining the natural pH balance. Formulated with natural ingredients for a deep clean without drying your hair.',
    image: '/images/product-1.jpg',
    price: 15.99,
    features: [
      'Intensive scalp cleansing',
      'pH balanced formula',
      'Natural ingredients',
      'Suitable for all hair types'
    ]
  },
  'calming-shampoo': {
    id: 'calming-shampoo',
    name: 'Calming Shampoo',
    description: 'Gently cleanse scalp & hair, PH balanced',
    fullDescription: 'Our Calming Shampoo gently cleanses your scalp and hair while soothing irritation. Specially formulated with natural extracts to provide a gentle wash that won\'t strip your hair of its natural oils.',
    image: '/images/product-2.jpg',
    price: 14.99,
    features: [
      'Gentle cleansing formula',
      'Soothes scalp irritation',
      'pH balanced',
      'Natural extracts'
    ]
  },
  'condi-masque': {
    id: 'condi-masque',
    name: 'Hair & Scalp Condi-Masque',
    description: 'Packed with nutrients for scalp',
    fullDescription: 'Our Hair & Scalp Condi-Masque is a deep conditioning treatment that nourishes both your hair and scalp. Packed with nutrients, this mask repairs damaged hair, prevents breakage, and promotes a healthy scalp.',
    image: '/images/product-3.jpg',
    price: 18.99,
    features: [
      'Deep conditioning treatment',
      'Nourishes hair and scalp',
      'Repairs damaged hair',
      'Prevents breakage'
    ]
  },
  'creamy-clay': {
    id: 'creamy-clay',
    name: 'No.1 Creamy Clay',
    description: 'High hold, natural finish, easy to wash',
    fullDescription: 'Our No.1 Creamy Clay offers high hold with a natural matte finish that lasts all day. The water-based formula makes it easy to wash out, while natural ingredients ensure your hair stays healthy.',
    image: '/images/product-4.jpg',
    price: 16.99,
    features: [
      'High hold formula',
      'Natural matte finish',
      'Water-based for easy washing',
      'Scent: Organic Bergamot & Patchouli'
    ]
  }
}; 