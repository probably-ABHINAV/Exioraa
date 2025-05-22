import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollTriggerWrapperProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scale';
  threshold?: number; // Trigger threshold (0 to 1)
  duration?: number;
  delay?: number;
  className?: string;
}

const ScrollTriggerWrapper: React.FC<ScrollTriggerWrapperProps> = ({
  children,
  animation = 'fadeIn',
  threshold = 0.2,
  duration = 0.8,
  delay = 0,
  className = '',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    
    if (section) {
      let from = {};
      
      // Define animation parameters based on animation type
      switch(animation) {
        case 'fadeIn':
          from = { opacity: 0 };
          break;
        case 'slideUp':
          from = { opacity: 0, y: 100 };
          break;
        case 'slideInLeft':
          from = { opacity: 0, x: -100 };
          break;
        case 'slideInRight':
          from = { opacity: 0, x: 100 };
          break;
        case 'scale':
          from = { opacity: 0, scale: 0.8 };
          break;
        default:
          from = { opacity: 0 };
      }
      
      // Create animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: `top ${threshold * 100}%`,
          end: 'bottom 80%',
          toggleActions: 'play none none reverse',
        }
      });
      
      tl.fromTo(
        section,
        from,
        { 
          opacity: 1, 
          x: 0, 
          y: 0, 
          scale: 1, 
          duration: duration,
          delay: delay,
          ease: 'power3.out'
        }
      );
      
      // Clean up
      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === section) {
            st.kill();
          }
        });
      };
    }
  }, [animation, threshold, duration, delay]);
  
  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollTriggerWrapper;
