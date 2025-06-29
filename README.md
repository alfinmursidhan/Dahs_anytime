# dahs - Premium Hair Products Website

A modern, responsive website for premium hair products built with Next.js, TypeScript, and Tailwind CSS.

## Custom Fonts

This project uses the following custom fonts:

- **Montserrat** (from Google Fonts) for regular text
- **The Seasons** (commercial font) for headings and display text

### Installing The Seasons Font

1. Purchase The Seasons font from a legitimate source
2. Add the following files to the `public/fonts/theseasons/` directory:
   - `TheSeasons-Regular.woff2`
   - `TheSeasons-Bold.woff2`
3. Ensure the filenames match exactly as shown above
4. Restart the development server

**Note:** The Seasons is a commercial font. Make sure you have the proper license to use it in your project.

## Project Structure

The project follows a clean, modular structure:

```
├── app/                 # Next.js App Router structure
│   ├── about/           # About page
│   ├── connect/         # Contact page
│   ├── product/         # Product details page
│   ├── reviews/         # Reviews page
│   ├── shop/            # Shop product listing
│   ├── styles/          # Page-specific styles
│   ├── tagline/         # Tagline page
│   ├── globals.css      # Global CSS
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── products/        # Product-related components
│   ├── sections/        # Page section components
│   └── ui/              # Reusable UI components
├── data/                # Static data
├── public/              # Static assets
├── types/               # TypeScript type definitions
└── utils/               # Utility functions and hooks
```

## Technologies

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: Static typing for JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **GSAP**: Animation toolkit

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build production version
- `npm run start`: Run production server
- `npm run lint`: Run ESLint
- `npm run clean`: Clean build cache
- `npm run download-fonts`: Download required fonts

## Code Optimization

This project follows best practices for clean code:

1. Modular component structure
2. Clear separation of concerns
3. Consistent naming conventions
4. Optimized asset loading
5. Proper TypeScript typing

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Key Features

- Modern UI with animations using Framer Motion
- Responsive design for all screen sizes
- Type-safe code with TypeScript
- Component-based architecture
- Custom utility functions and hooks
- Clean and maintainable code structure

## Code Organization Principles

1. **Component Structure**: Components are organized by their functionality (UI, layout, sections, products)
2. **Type Safety**: Comprehensive TypeScript definitions for all components and data
3. **Reusability**: Common components and utilities are abstracted for reuse
4. **Clean Code**: Consistent naming conventions, documentation, and code style
5. **Single Responsibility**: Each file has a clear purpose and responsibility
6. **DRY Principle**: Common patterns are extracted into utilities and hooks

## Contact

For any questions or suggestions, please contact us at info@dahs.com 