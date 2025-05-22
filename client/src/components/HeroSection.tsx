import React, { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Import the SCSS module
import styles from '../styles/HeroSection.module.scss';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const heroCTARef = useRef<HTMLDivElement>(null);

  // Setup animations
  useEffect(() => {
    // Hero title animation with SplitType
    if (heroTitleRef.current) {
      const splitTitle = new SplitType(heroTitleRef.current, { types: 'words,chars' });

      gsap.from(splitTitle.chars, {
        opacity: 0,
        y: 50,
        rotateX: -90,
        stagger: 0.02,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 0.5
      });
    }

    // Hero subtitle animation
    if (heroSubtitleRef.current) {
      gsap.from(heroSubtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1.2
      });
    }

    // Hero CTA animation
    if (heroCTARef.current) {
      gsap.from(heroCTARef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 1.5
      });
    }

    return () => {
      // Clean up scroll triggers
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section className={styles.hero}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent/20 opacity-10"></div>

      {/* Animated particles background (CSS-based fallback) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={heroTitleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            {title}
          </h1>
          {subtitle && (
            <p 
              ref={heroSubtitleRef}
              className="text-xl md:text-2xl text-secondary mb-8"
            >
              {subtitle}
            </p>
          )}
          <div ref={heroCTARef} className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/work" 
              className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-all duration-300 transform hover:-translate-y-1"
            >
              See Our Work
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-sm mb-2 text-secondary">Scroll Down</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Animated particles styled in index.css */}
    </section>
  );
};

export default HeroSection;