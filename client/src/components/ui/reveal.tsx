import { useRef, useEffect, ReactNode } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  stagger?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const Reveal = ({ 
  children, 
  width = "fit-content", 
  stagger = false,
  direction = 'up',
  delay = 0,
  className = ''
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const directionVariants: Record<string, Variants> = {
    up: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    down: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    },
    left: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    right: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    }
  };
  
  const variants = directionVariants[direction];
  
  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };
  
  useEffect(() => {
    if (isInView && stagger && ref.current) {
      const staggerItems = (ref.current as HTMLElement).querySelectorAll('.stagger-item');
      
      staggerItems.forEach((item, index) => {
        setTimeout(() => {
          (item as HTMLElement).style.transition = 'all 0.8s ease';
          (item as HTMLElement).style.opacity = '1';
          (item as HTMLElement).style.transform = 'translateY(0)';
        }, 100 * index);
      });
    }
  }, [isInView, stagger]);
  
  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={stagger ? childVariants : variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ 
          duration: 0.5, 
          delay: delay,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
