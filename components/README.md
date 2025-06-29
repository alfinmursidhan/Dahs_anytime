# Components

This directory contains all React components used in the application, organized by their function:

## Directory Structure

- `layout/`: Components related to the application layout (Navbar, Footer, etc.)
- `products/`: Components for displaying product information (ProductCard, ProductGrid, ProductShowcase)
- `sections/`: Page sections components used on home and other pages
- `ui/`: Reusable UI components like buttons, form elements, etc.

## Usage

Components are exported via the main `index.ts` file for cleaner imports. To use any component:

```tsx
import { ComponentName } from '@/components';
``` 