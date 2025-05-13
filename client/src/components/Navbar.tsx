import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  const navLinks = [
    { label: 'About', path: '/#about' },
    { label: 'Services', path: '/#services' },
    { label: 'Work', path: '/work' },
    { label: 'Contact', path: '/contact' }
  ];
  
  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 py-6 px-8 md:px-16 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg py-4' : ''
        }`}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold font-clash tracking-tight text-white hoverable">
            EXIORAA
          </Link>
          
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.path}
                className={`text-white opacity-80 hover:opacity-100 transition-opacity hoverable ${
                  location === link.path ? 'opacity-100' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <button 
            className="block md:hidden text-white hoverable"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>
      </nav>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-background z-40 pt-24 px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.label}
                  href={link.path}
                  className="text-2xl font-clash font-medium text-white py-3 border-b border-white/10 hoverable"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
