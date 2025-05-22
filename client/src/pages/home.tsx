import React, { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMonitor, FiPenTool, FiShoppingBag, FiBarChart2, FiSmartphone, FiGlobe } from 'react-icons/fi';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.from(heroRef.current.querySelector('.hero-title'), {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
        .from(
          heroRef.current.querySelector('.hero-subtitle'),
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .from(
          heroRef.current.querySelector('.hero-cta'),
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          heroRef.current.querySelector('.hero-image'),
          {
            x: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.8'
        );
    }

    // Services section animation
    if (servicesRef.current) {
      gsap.from(servicesRef.current.querySelector('.services-title'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(servicesRef.current.querySelectorAll('.service-card'), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }

    // About section animation
    if (aboutRef.current) {
      gsap.from(aboutRef.current.querySelector('.about-image'), {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(aboutRef.current.querySelector('.about-content'), {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Work section animation
    if (workRef.current) {
      gsap.from(workRef.current.querySelector('.work-title'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: workRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(workRef.current.querySelectorAll('.work-card'), {
        scale: 0.9,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: workRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Testimonials section animation
    if (testimonialsRef.current) {
      gsap.from(testimonialsRef.current.querySelector('.testimonials-title'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(testimonialsRef.current.querySelectorAll('.testimonial-card'), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }

    // CTA section animation
    if (ctaRef.current) {
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    return () => {
      // Clean up scroll triggers
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-br from-primary to-primary-dark dark:from-primary-dark dark:to-black"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full opacity-10">
            {/* Animated background elements */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent rounded-full filter blur-3xl animate-blob opacity-30"></div>
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-highlight rounded-full filter blur-3xl animate-blob animation-delay-2000 opacity-20"></div>
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-success rounded-full filter blur-3xl animate-blob animation-delay-4000 opacity-20"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Creating Digital <span className="text-accent">Experiences</span> That Inspire
              </h1>
              <p className="hero-subtitle text-xl md:text-2xl text-white/80 mb-8 max-w-lg">
                We transform your ideas into exceptional digital products through creative design and innovative technology.
              </p>
              <div className="hero-cta flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/work" 
                  className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-medium rounded-md transition-colors duration-300 text-center"
                >
                  View Our Work
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-medium rounded-md transition-colors duration-300 text-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 hero-image">
              <div className="relative w-full h-[400px] md:h-[500px]">
                {/* Modern digital agency hero image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-black/40">
                    {/* Hero image with proper styling */}
                    <img 
                      src="/images/projects/project1.jpg" 
                      alt="Creative team working together in modern office" 
                      className="w-full h-full object-cover object-center opacity-90 transition-transform duration-700 hover:scale-105"
                      loading="eager"
                      style={{ maxWidth: '100%', height: '100%' }}
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-accent/50"></div>
                    
                    {/* Floating elements overlay */}
                    <div className="absolute inset-0 overflow-hidden">
                      {/* Animated geometric elements */}
                      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-highlight/40 backdrop-blur-sm rounded-md transform rotate-45 animate-float"></div>
                      <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-success/30 backdrop-blur-sm rounded-full animate-float animation-delay-1000"></div>
                      <div className="absolute top-1/2 right-1/3 w-24 h-12 bg-warning/30 backdrop-blur-sm rounded-xl transform -rotate-12 animate-float animation-delay-2000"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border-4 border-white/30 backdrop-blur-sm rounded-lg transform rotate-12 animate-float animation-delay-3000"></div>
                      
                      {/* Animated dots */}
                      <div className="absolute top-10 left-10 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      <div className="absolute top-20 right-40 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-1000"></div>
                      <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-white rounded-full animate-pulse animation-delay-2000"></div>
                      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-white rounded-full animate-pulse animation-delay-1500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="py-20 bg-white dark:bg-primary"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="services-title text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of digital solutions to help your business thrive in the online world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Design & Development */}
            <div className="service-card bg-white dark:bg-primary-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="h-28 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-xl flex items-center justify-center">
                <FiMonitor className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Web Design & Development</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Beautiful, responsive websites that showcase your brand and convert visitors into customers.
                </p>
                <Link to="/services#web-design" className="text-accent hover:text-accent-dark dark:hover:text-accent-light font-medium flex items-center">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Branding & Identity */}
            <div className="service-card bg-white dark:bg-primary-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="h-28 bg-gradient-to-r from-pink-500 to-orange-500 rounded-t-xl flex items-center justify-center">
                <FiPenTool className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Branding & Identity</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Distinctive brand identity that helps you stand out and connect with your target audience.
                </p>
                <Link to="/services#brand-identity" className="text-accent hover:text-accent-dark dark:hover:text-accent-light font-medium flex items-center">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="service-card bg-white dark:bg-primary-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="h-28 bg-gradient-to-r from-green-500 to-teal-500 rounded-t-xl flex items-center justify-center">
                <FiBarChart2 className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Digital Marketing</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Strategic marketing campaigns that generate leads and drive business growth.
                </p>
                <Link to="/services#digital-marketing" className="text-accent hover:text-accent-dark dark:hover:text-accent-light font-medium flex items-center">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* E-Commerce */}
            <div className="service-card bg-white dark:bg-primary-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="h-28 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-xl flex items-center justify-center">
                <FiShoppingBag className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">E-Commerce Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Powerful online stores that maximize sales and deliver exceptional customer experiences.
                </p>
                <Link to="/services#ecommerce" className="text-accent hover:text-accent-dark dark:hover:text-accent-light font-medium flex items-center">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Mobile Apps */}
            <div className="service-card bg-white dark:bg-primary-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="h-28 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-t-xl flex items-center justify-center">
                <FiSmartphone className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Mobile Applications</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Native and cross-platform apps that provide seamless experiences across all devices.
                </p>
                <Link to="/services#mobile-apps" className="text-accent hover:text-accent-dark dark:hover:text-accent-light font-medium flex items-center">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* SEO & Content */}
            <div className="service-card bg-white dark:bg-primary-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="h-28 bg-gradient-to-r from-amber-500 to-red-500 rounded-t-xl flex items-center justify-center">
                <FiGlobe className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">SEO & Content Strategy</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Data-driven strategies that improve your visibility and engage your audience.
                </p>
                <Link to="/services#content-strategy" className="text-accent hover:text-accent-dark dark:hover:text-accent-light font-medium flex items-center">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-md transition-colors duration-300"
            >
              View All Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        className="py-20 bg-gray-50 dark:bg-primary-800"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 about-image">
              <div className="relative">
                <div className="w-full h-[450px] bg-gradient-to-br from-accent to-highlight overflow-hidden rounded-xl shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center opacity-90">
                    <div className="w-full h-full bg-gradient-to-b from-transparent to-primary-dark/60 flex items-center justify-center p-10">
                      <div className="text-center text-white">
                        <h3 className="text-3xl font-bold mb-4">Exioraa Digital</h3>
                        <p className="text-xl mb-6">Innovating since 2015</p>
                        <div className="flex justify-center space-x-6">
                          <div className="text-center">
                            <div className="text-4xl font-bold mb-1">350+</div>
                            <div className="text-sm">Projects</div>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl font-bold mb-1">40+</div>
                            <div className="text-sm">Team Members</div>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl font-bold mb-1">15+</div>
                            <div className="text-sm">Awards</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-success rounded-lg transform rotate-12"></div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent/70 rounded-full"></div>
              </div>
            </div>
            <div className="lg:w-1/2 about-content">
              <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">
                Crafting Digital Excellence Since 2015
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                At Exioraa Digital, we blend creativity with technology to deliver exceptional digital experiences. Our passionate team of designers, developers, and strategists work together to transform your ideas into reality.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We believe in creating long-lasting partnerships with our clients, understanding their unique challenges, and providing tailored solutions that drive meaningful results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-primary dark:text-white">User-Centered Approach</h4>
                    <p className="text-gray-600 dark:text-gray-300">We put users at the heart of everything we create.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-primary dark:text-white">Passionate Team</h4>
                    <p className="text-gray-600 dark:text-gray-300">Our team is driven by passion and creativity.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-primary dark:text-white">Innovative Solutions</h4>
                    <p className="text-gray-600 dark:text-gray-300">We leverage cutting-edge technology and trends.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-primary dark:text-white">Client Partnerships</h4>
                    <p className="text-gray-600 dark:text-gray-300">We build lasting relationships with our clients.</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors duration-300"
              >
                Learn More About Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section 
        ref={workRef}
        className="py-20 bg-white dark:bg-primary"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="work-title text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
              Our Featured Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore some of our most successful projects and see how we've helped businesses achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="work-card group">
              <div className="relative overflow-hidden rounded-xl shadow-lg h-[350px]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-dark opacity-80"></div>
                <div className="h-full bg-gradient-to-br from-blue-500/40 to-purple-600/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-accent/80 text-white text-xs font-medium rounded-full mb-3">
                    Web Design
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">Quantum Financial</h3>
                  <p className="text-white/90 mb-4">
                    A modern banking platform with intuitive user experience and robust security features.
                  </p>
                  <Link 
                    to="/work#quantum-financial" 
                    className="inline-flex items-center text-white font-medium group-hover:underline"
                  >
                    View Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="work-card group">
              <div className="relative overflow-hidden rounded-xl shadow-lg h-[350px]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-dark opacity-80"></div>
                <div className="h-full bg-gradient-to-br from-pink-500/40 to-orange-500/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-highlight/80 text-white text-xs font-medium rounded-full mb-3">
                    Branding
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">Nimble Athletics</h3>
                  <p className="text-white/90 mb-4">
                    A brand identity for a premium fitness apparel company targeting modern athletes.
                  </p>
                  <Link 
                    to="/work#nimble-athletics" 
                    className="inline-flex items-center text-white font-medium group-hover:underline"
                  >
                    View Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="work-card group">
              <div className="relative overflow-hidden rounded-xl shadow-lg h-[350px]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-dark opacity-80"></div>
                <div className="h-full bg-gradient-to-br from-green-500/40 to-teal-500/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-success/80 text-white text-xs font-medium rounded-full mb-3">
                    E-Commerce
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">Urban Harvest</h3>
                  <p className="text-white/90 mb-4">
                    An organic food marketplace connecting local farmers with urban consumers.
                  </p>
                  <Link 
                    to="/work#urban-harvest" 
                    className="inline-flex items-center text-white font-medium group-hover:underline"
                  >
                    View Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/work" 
              className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-md transition-colors duration-300"
            >
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="py-20 bg-gray-50 dark:bg-primary-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="testimonials-title text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what some of our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="testimonial-card bg-white dark:bg-primary-900 rounded-xl shadow-md p-8 relative">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mr-4">
                    <span className="text-lg font-bold">SV</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary dark:text-white">Sarah Vaughan</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Quantum Financial</p>
                  </div>
                </div>
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "Exioraa Digital transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Their team was professional, responsive, and delivered beyond our expectations."
              </p>
              <div className="flex text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card bg-white dark:bg-primary-900 rounded-xl shadow-md p-8 relative">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-highlight/20 flex items-center justify-center text-highlight mr-4">
                    <span className="text-lg font-bold">MJ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary dark:text-white">Michael Johnson</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Founder, Nimble Athletics</p>
                  </div>
                </div>
                <div className="text-highlight">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "The branding work that Exioraa Digital did for us completely transformed our company's image. Their strategic approach and creative design helped us stand out in a competitive market and connect with our target audience."
              </p>
              <div className="flex text-highlight">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card bg-white dark:bg-primary-900 rounded-xl shadow-md p-8 relative">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center text-success mr-4">
                    <span className="text-lg font-bold">ER</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary dark:text-white">Emily Rodriguez</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Director, Urban Harvest</p>
                  </div>
                </div>
                <div className="text-success">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "Exioraa Digital's e-commerce solution helped us increase our online sales by over 200% in just six months. Their attention to detail and focus on user experience made all the difference. I highly recommend their services."
              </p>
              <div className="flex text-success">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="py-20 bg-gradient-to-r from-accent to-primary-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let's create something amazing together. Our team of experts is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-accent hover:bg-gray-100 transition-colors font-medium rounded-md"
            >
              Get in Touch
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 transition-colors font-medium rounded-md"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          
          @keyframes float {
            0% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(4deg);
            }
            100% {
              transform: translateY(0px) rotate(0deg);
            }
          }

          .animate-blob {
            animation: blob 7s infinite;
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}
      </style>
    </div>
  );
};

export default Home;