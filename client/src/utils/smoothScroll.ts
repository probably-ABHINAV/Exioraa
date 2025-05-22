import Lenis from '@studio-freight/lenis';

// Store lenis instance globally
let lenis: Lenis | null = null;

/**
 * Initialize smooth scrolling with Lenis
 */
export const initSmoothScroll = (): void => {
  if (lenis) return; // Prevent multiple instances
  
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Improved easing
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false, // Not applied on touch devices by default to keep native behavior
    infinite: false
  });

  function raf(time: number) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }

  console.log('Smooth scrolling initialized');
  requestAnimationFrame(raf);
};

/**
 * Scroll to a specific section
 * @param target Target element or selector
 * @param options Scroll options
 */
export const scrollTo = (
  target: string | HTMLElement, 
  options?: { offset?: number; duration?: number; immediate?: boolean }
): void => {
  if (!lenis) return;

  const defaultOptions = {
    offset: 0,
    duration: 1.2,
    immediate: false
  };

  const mergedOptions = { ...defaultOptions, ...options };
  lenis.scrollTo(target, mergedOptions);
};

/**
 * Stop smooth scrolling
 */
export const stopSmoothScroll = (): void => {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
};