import { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if device is touch-enabled
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsVisible(!isTouchDevice);
    
    if (isTouchDevice) return;
    
    const cursor = cursorRef.current;
    const cursorFollower = cursorFollowerRef.current;
    
    if (!cursor || !cursorFollower) return;
    
    const onMouseMove = (e: MouseEvent) => {
      // Main cursor follows cursor immediately
      requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
      
      // Follower lags slightly
      setTimeout(() => {
        if (cursorFollower) {
          cursorFollower.style.left = `${e.clientX}px`;
          cursorFollower.style.top = `${e.clientY}px`;
        }
      }, 80);
    };
    
    // Add event for cursor movement
    document.addEventListener('mousemove', onMouseMove);
    
    // Add event for hoverable elements
    const hoverableElements = document.querySelectorAll('.hoverable');
    
    const onMouseEnter = () => {
      cursor.classList.add('scale-150');
      cursor.classList.add('bg-accent');
      cursorFollower.classList.add('scale-125');
    };
    
    const onMouseLeave = () => {
      cursor.classList.remove('scale-150');
      cursor.classList.remove('bg-accent');
      cursorFollower.classList.remove('scale-125');
    };
    
    hoverableElements.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      
      hoverableElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <>
      <div 
        ref={cursorRef} 
        className="w-5 h-5 rounded-full bg-primary fixed pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-all duration-300"
      />
      <div 
        ref={cursorFollowerRef} 
        className="w-10 h-10 border border-white/30 rounded-full fixed pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100"
      />
    </>
  )
};

export default Cursor;
