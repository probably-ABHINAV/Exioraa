import Lenis from '@studio-freight/lenis';

export const initLenis = () => {
  // Check if Lenis already exists
  if ((window as any).lenis) {
    return;
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Make lenis accessible globally
  (window as any).lenis = lenis;

  return lenis;
};
