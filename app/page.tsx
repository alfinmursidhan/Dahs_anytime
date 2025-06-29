import React, { Suspense } from 'react';
import {
  Navbar,
  Hero,
  Features,
  ReviewSection,
  StoreLinks,
  EthicalSection,
  Footer,
  ThankYouSection
} from '@/components';

/**
 * Loading fallback component displayed during suspense
 */
const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
  </div>
);

/**
 * Home page component
 */
export default function Home() {
  return (
    <main>
      <Navbar key="navbar" />
      
      <Suspense fallback={<LoadingFallback />}>
        <Hero key="hero" />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <ThankYouSection key="thankYouSection" />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <StoreLinks key="storeLinks" />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Features key="features" />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <EthicalSection key="ethicalSection" />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <ReviewSection key="reviewSection" />
      </Suspense>
      
      <Footer key="footer" />
    </main>
  );
} 