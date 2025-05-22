import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add scroll event listener to change navbar style on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Animate navbar on initial load
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      );
    }

    // Setup animation for navbar appearance on scroll
    ScrollTrigger.create({
      start: 'top -100',
      end: 99999,
      toggleClass: { className: 'scrolled', targets: navbarRef.current }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Animate mobile menu
  useEffect(() => {
    if (mobileMenuRef.current && isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  return (
    <>
      <header 
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 dark:bg-primary backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-accent">
              Exioraa
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className={`navbar-link relative ${
                  location === '/' ? 'text-accent' : 'hover:text-accent'
                }`}
              >
                Home
                {location === '/' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></span>}
              </Link>
              <Link 
                href="/about" 
                className={`navbar-link relative ${
                  location === '/about' ? 'text-accent' : 'hover:text-accent'
                }`}
              >
                About
                {location === '/about' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></span>}
              </Link>
              <Link 
                href="/services" 
                className={`navbar-link relative ${
                  location === '/services' ? 'text-accent' : 'hover:text-accent'
                }`}
              >
                Services
                {location === '/services' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></span>}
              </Link>
              <Link 
                href="/work" 
                className={`navbar-link relative ${
                  location === '/work' ? 'text-accent' : 'hover:text-accent'
                }`}
              >
                Work
                {location === '/work' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></span>}
              </Link>
              <Link 
                href="/contact"
                className={`px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded hover:bg-accent/90 transition-colors ${
                  location === '/contact' ? 'ring-2 ring-accent/30' : ''
                }`}
              >
                Contact
              </Link>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div 
          ref={mobileMenuRef}
          className="fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-white dark:bg-primary z-40 md:hidden"
        >
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col space-y-6">
              <Link 
                href="/" 
                className={`text-2xl font-medium ${location === '/' ? 'text-accent' : ''}`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`text-2xl font-medium ${location === '/about' ? 'text-accent' : ''}`}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className={`text-2xl font-medium ${location === '/services' ? 'text-accent' : ''}`}
              >
                Services
              </Link>
              <Link 
                href="/work" 
                className={`text-2xl font-medium ${location === '/work' ? 'text-accent' : ''}`}
              >
                Work
              </Link>
              <Link 
                href="/contact" 
                className={`text-2xl font-medium ${location === '/contact' ? 'text-accent' : ''}`}
              >
                Contact
              </Link>
            </nav>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="mb-4 text-lg font-medium">Get in touch</p>
              <p className="mb-2">hello@exioraa.com</p>
              <p>+1 (555) 123-4567</p>
              
              <div className="mt-8">
                <p className="mb-4 text-lg font-medium">Follow us</p>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Facebook" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">FB</a>
                  <a href="#" aria-label="Twitter" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">TW</a>
                  <a href="#" aria-label="Instagram" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">IG</a>
                  <a href="#" aria-label="LinkedIn" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">LI</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;