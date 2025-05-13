import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

// Text reveal animation
export const splitTextAnimation = (element: HTMLElement, delay = 0) => {
  const splitText = new SplitType(element, { types: 'chars,words,lines' });
  
  gsap.from(splitText.chars, {
    opacity: 0,
    y: 50,
    stagger: 0.02,
    duration: 0.8,
    ease: 'power4.out',
    delay
  });
};

// Stagger element animation
export const staggerAnimationY = (elements: NodeListOf<Element>, delay = 0) => {
  gsap.from(elements, {
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out',
    delay,
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 80%',
    }
  });
};

// Horizontal scroll animation
export const horizontalScrollAnimation = (element: HTMLElement) => {
  const scrollWidth = element.scrollWidth;
  const clientWidth = element.clientWidth;
  
  if (scrollWidth > clientWidth) {
    gsap.to(element, {
      x: -(scrollWidth - clientWidth),
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top 20%",
        end: `+=${scrollWidth - clientWidth + 100}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });
  }
};

// Parallax scroll effect
export const parallaxEffect = (element: HTMLElement, speed = 0.5) => {
  gsap.to(element, {
    y: `${-speed * 100}%`,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};
