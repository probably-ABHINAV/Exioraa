import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

/**
 * Sets up text reveal animation for the specified selector
 * @param selector CSS selector for the text element
 */
export const setupTextReveal = (selector: string): void => {
  // Get all elements matching the selector
  const elements = document.querySelectorAll(selector);
  
  if (!elements.length) return;
  
  elements.forEach(element => {
    // Split text into characters for animation
    const splitText = new SplitType(element as HTMLElement, { 
      types: 'chars, words, lines',
      tagName: 'span'
    });
    
    if (splitText.chars) {
      gsap.fromTo(
        splitText.chars,
        { 
          y: 100, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 0.8,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  });
};

/**
 * Sets up hero section animations
 * @param titleElement Hero title element
 * @param subtitleElement Hero subtitle element
 * @param buttonElement Hero CTA button element
 * @param scrollIndicatorElement Scroll down indicator element
 */
export const setupHeroAnimation = (
  titleElement: HTMLElement,
  subtitleElement: HTMLElement,
  buttonElement: HTMLElement,
  scrollIndicatorElement: HTMLElement
): void => {
  // Create timeline for sequenced animation
  const tl = gsap.timeline({ delay: 0.5 });
  
  // Split title text
  const splitTitle = new SplitType(titleElement, { 
    types: 'chars, words',
    tagName: 'span'
  });
  
  // Animate each character of the title
  if (splitTitle.chars) {
    tl.fromTo(
      splitTitle.chars,
      { 
        y: 100, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.8,
        ease: 'power4.out'
      }
    );
  } else {
    // Fallback if split doesn't work
    tl.fromTo(
      titleElement,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }
  
  // Animate subtitle
  tl.fromTo(
    subtitleElement,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
    '-=0.4' // Start slightly before previous animation ends
  );
  
  // Animate button
  tl.fromTo(
    buttonElement,
    { y: 30, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
    '-=0.6'
  );
  
  // Animate scroll indicator
  tl.fromTo(
    scrollIndicatorElement,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
    '-=0.4'
  );
};

/**
 * Creates a parallax scrolling effect
 * @param element Element to apply parallax to
 * @param speed Speed multiplier (positive for slower than scroll, negative for reverse direction)
 */
export const setupParallax = (element: HTMLElement, speed: number = 0.5): void => {
  gsap.to(element, {
    y: () => speed * 100 + '%',
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};

/**
 * Creates a staggered reveal animation for a list of elements
 * @param parentSelector Parent element containing the items
 * @param childSelector Child elements to animate
 * @param staggerAmount Time between each animation in seconds
 */
export const setupStaggeredReveal = (
  parentSelector: string,
  childSelector: string,
  staggerAmount: number = 0.1
): void => {
  const parent = document.querySelector(parentSelector);
  
  if (!parent) return;
  
  const children = parent.querySelectorAll(childSelector);
  
  gsap.fromTo(
    children,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: staggerAmount,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: parent,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};

/**
 * Creates a magnetic effect on an element
 * @param element The element to apply the effect to
 * @param strength The strength of the magnetic pull (default: 0.3)
 */
export const setupMagneticEffect = (element: HTMLElement, strength: number = 0.3): void => {
  const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "power3" });
  const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "power3" });
  
  element.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = element.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    xTo(x * strength);
    yTo(y * strength);
  });
  
  element.addEventListener("mouseleave", () => {
    xTo(0);
    yTo(0);
  });
};
