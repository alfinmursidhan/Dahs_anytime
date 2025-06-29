import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position and determine active section
 * @returns Object containing scrolled state and active section
 */
export function useScrollPosition() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state based on scroll position
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine which section is currently in view
      const sections = ['home', 'connect', 'about', 'shop', 'ethical', 'reviews'];
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in the viewport (with some offset)
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Set initial active section from URL hash
    const hash = window.location.hash.replace('#', '') || 'home';
    setActiveSection(hash);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrolled, activeSection };
} 