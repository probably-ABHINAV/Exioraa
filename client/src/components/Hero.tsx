import { useEffect, useRef } from 'react';
import Reveal from './ui/reveal';
import MagneticButton from './ui/magnetic-button';
import { gsap } from 'gsap';
import SplitType from 'split-type';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Initialize SplitType for text animations
    if (headingRef.current) {
      const splitHeading = new SplitType(headingRef.current, { 
        types: 'chars,words',
        tagName: 'span'
      });
      
      gsap.fromTo(
        splitHeading.chars,
        { 
          opacity: 0,
          y: 50 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5,
          stagger: 0.02,
          ease: "power4.out",
          delay: 0.2
        }
      );
    }
    
  }, []);
  
  return (
    <section className="relative h-screen flex items-center px-8 md:px-16 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-1/2 right-10 md:right-20 transform -translate-y-1/2 w-60 h-60 md:w-96 md:h-96 rounded-full bg-primary opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 md:left-20 w-40 h-40 md:w-80 md:h-80 rounded-full bg-accent opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <Reveal>
          <p className="text-primary mb-4">Elevate Your Digital Presence</p>
        </Reveal>
        
        <h1 
          ref={headingRef}
          className="text-5xl md:text-7xl lg:text-8xl font-clash font-bold leading-tight mb-8"
        >
          We Design <br />
          <span className="text-primary opacity-90">Creative</span> Digital <br />
          <span className="text-accent opacity-90">Experiences</span>
        </h1>
        
        <Reveal delay={0.6}>
          <p className="text-lg md:text-xl max-w-lg mb-8 text-white/70">
            We help brands stand out through innovative design, compelling experiences, and strategic digital solutions.
          </p>
        </Reveal>
        
        <Reveal direction="up" delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-6">
            <MagneticButton 
              href="#work" 
              className="bg-primary text-background px-8 py-4 rounded-full font-medium inline-block"
            >
              View Our Work
            </MagneticButton>
            
            <MagneticButton 
              href="/contact" 
              className="border border-white/20 text-white px-8 py-4 rounded-full font-medium inline-block"
            >
              Get In Touch <i className="ri-arrow-right-line ml-2"></i>
            </MagneticButton>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-white/50 mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border border-white/20 rounded-full mx-auto flex justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
