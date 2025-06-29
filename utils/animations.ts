/**
 * Common animation variants for Framer Motion
 */

// Fade in animation variants
export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7 
    }
  }
};

// Staggered fade in for multiple items
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Card animation variants
export const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9 
  },
  visible: (index: number) => ({ 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      delay: index * 0.1,
      ease: [0.25, 1, 0.5, 1]
    }
  })
};

// Image hover animation variants
export const imageHoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { 
      duration: 0.8, 
      ease: [0.19, 1, 0.22, 1] 
    }
  }
};

// Underline animation variants
export const underlineVariants = {
  initial: { width: 0 },
  hover: { 
    width: "100%", 
    transition: { 
      duration: 0.5, 
      ease: [0.65, 0, 0.35, 1] 
    } 
  }
};

// Button animation variants
export const buttonVariants = {
  initial: { 
    y: 20, 
    opacity: 0 
  },
  hover: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    }
  },
  exit: {
    y: 10,
    opacity: 0,
    transition: { 
      duration: 0.2, 
      ease: "easeIn" 
    }
  }
}; 