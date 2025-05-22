import React, { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiMonitor, 
  FiPenTool, 
  FiBarChart2, 
  FiLayout, 
  FiFileText, 
  FiShoppingBag 
} from 'react-icons/fi';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const featuredServicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Service data
  const services = [
    {
      id: 'web-design',
      title: 'Web Design & Development',
      shortDescription: 'Creating stunning, functional websites that convert visitors into customers.',
      description: "Our web design and development team creates beautiful, responsive websites that not only look great but also perform exceptionally well. We focus on user experience, conversion optimization, and SEO best practices to ensure your site stands out from the competition.",
      features: [
        'Custom responsive design',
        'User experience (UX) design',
        'Frontend development',
        'Backend development',
        'E-commerce solutions',
        'CMS implementation',
        'Performance optimization',
        'SEO integration'
      ],
      icon: <FiMonitor className="h-10 w-10" />,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'brand-identity',
      title: 'Branding & Identity',
      shortDescription: 'Crafting unique brand identities that resonate with your target audience.',
      description: "Your brand is more than just a logo—it's the entire experience customers have with your company. Our branding experts work closely with you to develop a strong, consistent brand identity that communicates your values and connects with your audience on a deeper level.",
      features: [
        'Brand strategy',
        'Logo design',
        'Visual identity systems',
        'Brand guidelines',
        'Packaging design',
        'Brand messaging',
        'Brand positioning',
        'Rebranding'
      ],
      icon: <FiPenTool className="h-10 w-10" />,
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      shortDescription: 'Strategic campaigns that generate leads and drive business growth.',
      description: "In today's digital landscape, your online marketing strategy can make or break your business. Our data-driven approach to digital marketing helps you reach the right audience, with the right message, at the right time—resulting in higher engagement, conversion rates, and ROI.",
      features: [
        'Search engine optimization (SEO)',
        'Pay-per-click advertising (PPC)',
        'Social media marketing',
        'Content marketing',
        'Email marketing',
        'Conversion rate optimization',
        'Marketing automation',
        'Analytics and reporting'
      ],
      icon: <FiBarChart2 className="h-10 w-10" />,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      shortDescription: 'Creating intuitive user experiences that delight and engage.',
      description: "Great user experience is at the heart of successful digital products. Our UI/UX design team combines aesthetics with functionality to create intuitive, enjoyable experiences that keep users coming back. We use research, testing, and iteration to ensure your product meets both user needs and business goals.",
      features: [
        'User research',
        'User journey mapping',
        'Wireframing and prototyping',
        'User interface design',
        'Interaction design',
        'Usability testing',
        'Design systems',
        'Mobile app design'
      ],
      icon: <FiLayout className="h-10 w-10" />,
      gradient: 'from-violet-500 to-indigo-600'
    },
    {
      id: 'content-strategy',
      title: 'Content Strategy',
      shortDescription: 'Developing engaging content that tells your brand story and drives action.',
      description: "Content is the cornerstone of digital marketing. Our content strategists work to understand your audience's needs and create compelling, valuable content that positions your brand as an authority in your industry while driving engagement and conversions.",
      features: [
        'Content auditing',
        'Content strategy development',
        'Copywriting',
        'Blog post creation',
        'Video content',
        'Social media content',
        'SEO content',
        'Email content'
      ],
      icon: <FiFileText className="h-10 w-10" />,
      gradient: 'from-amber-500 to-red-500'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Solutions',
      shortDescription: 'Building powerful online stores that maximize sales and customer satisfaction.',
      description: "E-commerce is more than just setting up an online store—it's about creating a seamless shopping experience. Our e-commerce specialists develop custom solutions that handle everything from product showcasing to checkout, helping you increase conversions and grow your online revenue.",
      features: [
        'E-commerce platform development',
        'Shopping cart optimization',
        'Payment gateway integration',
        'Product catalog management',
        'Inventory management',
        'Order processing',
        'Customer account management',
        'Abandoned cart recovery'
      ],
      icon: <FiShoppingBag className="h-10 w-10" />,
      gradient: 'from-cyan-500 to-blue-600'
    }
  ];

  // Process methodologies
  const methodologies = [
    {
      title: 'Discovery & Strategy',
      description: 'We start by deeply understanding your business, goals, audience, and competitive landscape. This phase lays the foundation for everything that follows.',
      steps: ['Initial consultation', 'Business analysis', 'User research', 'Competitive analysis', 'Goal definition', 'Strategic planning']
    },
    {
      title: 'Design & Prototyping',
      description: 'With a clear strategy in place, we move to the creative phase, designing the look and feel of your project and creating interactive prototypes.',
      steps: ['Wireframing', 'Visual design', 'User interface design', 'Prototype development', 'User testing', 'Design refinement']
    },
    {
      title: 'Development & Implementation',
      description: 'Our development team brings the designs to life, writing clean, efficient code that ensures your project works flawlessly across all devices.',
      steps: ['Frontend development', 'Backend development', 'Content integration', 'Functionality testing', 'Performance optimization', 'Quality assurance']
    },
    {
      title: 'Launch & Growth',
      description: 'After thorough testing, we launch your project and help you implement growth strategies to achieve your business objectives.',
      steps: ['Final testing', 'Deployment', 'Training & documentation', 'Launch strategy', 'Analytics setup', 'Growth planning']
    }
  ];

  // Setup animations
  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.from(heroRef.current.querySelector('h1'), { 
        opacity: 0, 
        y: 50, 
        duration: 1,
        ease: 'power3.out' 
      });
      
      gsap.from(heroRef.current.querySelector('p'), { 
        opacity: 0, 
        y: 30, 
        duration: 1,
        delay: 0.3,
        ease: 'power3.out' 
      });
    }

    // Services grid animation
    if (servicesGridRef.current) {
      gsap.from(servicesGridRef.current.querySelectorAll('.service-card'), {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: servicesGridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });
    }

    // Featured services animation
    if (featuredServicesRef.current) {
      gsap.from(featuredServicesRef.current.querySelectorAll('.featured-service'), {
        opacity: 0,
        x: (index: number) => index % 2 === 0 ? -50 : 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: featuredServicesRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });
    }

    // Process animation
    if (processRef.current) {
      gsap.from(processRef.current.querySelectorAll('.process-step'), {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });
    }

    // Pricing animation
    if (pricingRef.current) {
      gsap.from(pricingRef.current.querySelectorAll('.pricing-card'), {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: pricingRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });
    }

    // CTA animation
    if (ctaRef.current) {
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    }

    return () => {
      // Clean up scroll triggers
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero section */}
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

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the online world
          </p>
        </div>
      </section>

      {/* Services grid section */}
      <section className="py-20 bg-white dark:bg-primary">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary dark:text-white">What We Offer</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our comprehensive range of services is designed to help your business establish a strong online presence, connect with your audience, and achieve sustainable growth.
            </p>
          </div>

          <div ref={servicesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card bg-white dark:bg-primary-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white`}>
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/80">{service.shortDescription}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a 
                      href={`#${service.id}`} 
                      className="text-accent font-medium flex items-center hover:underline"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured services section */}
      <section ref={featuredServicesRef} className="py-20 bg-gray-50 dark:bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary dark:text-white">Our Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dive deeper into our core service offerings and discover how we can help your business succeed in the digital landscape.
            </p>
          </div>

          {services.slice(0, 3).map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`featured-service bg-white dark:bg-primary-900 rounded-xl shadow-lg overflow-hidden mb-16 last:mb-0 ${
                index % 2 === 0 ? 'lg:flex' : 'lg:flex lg:flex-row-reverse'
              }`}
            >
              <div className="lg:w-1/2">
                <div className={`h-full bg-gradient-to-r ${service.gradient} p-12 flex items-center justify-center text-white`}>
                  <div className="max-w-lg">
                    <div className="mb-6 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-xl mb-6">{service.shortDescription}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-12 flex items-center">
                <div>
                  <h4 className="text-2xl font-bold mb-6 text-primary dark:text-white">How We Can Help</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4 flex-shrink-0">
                          <span className="font-semibold">{idx + 1}</span>
                        </div>
                        <div>
                          <p className="font-medium text-primary dark:text-white">{feature}</p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Our expert team delivers {feature.toLowerCase()} solutions tailored to your specific needs.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
                    >
                      Discuss Your Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our process section */}
      <section ref={processRef} className="py-20 bg-white dark:bg-primary">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary dark:text-white">Our Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {methodologies.map((method, index) => (
              <div key={index} className="process-step bg-gray-50 dark:bg-primary-900 rounded-xl p-8 shadow-lg">
                <div className="w-14 h-14 mb-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary dark:text-white">{method.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{method.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {method.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section ref={pricingRef} className="py-20 bg-gray-50 dark:bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary dark:text-white">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer flexible pricing options to accommodate businesses of all sizes. Choose the plan that works best for your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="pricing-card bg-white dark:bg-primary-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="p-8 border-b border-gray-200 dark:border-primary-700">
                <h3 className="text-2xl font-bold mb-2 text-primary dark:text-white">Starter</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Perfect for small businesses and startups</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-primary dark:text-white">$1,999</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/ project</span>
                </div>
                <Link
                  to="/contact"
                  className="block w-full py-3 px-4 bg-accent text-white rounded-md text-center hover:bg-accent/90 transition-colors"
                >
                  Get Started
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">5-page responsive website</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Basic SEO setup</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Contact form</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Mobile responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">2 weeks delivery</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Business Plan */}
            <div className="pricing-card relative bg-white dark:bg-primary-900 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 transform scale-105 z-10">
              <div className="absolute top-0 right-0 bg-accent text-white py-1 px-4 text-sm font-medium rounded-bl-lg">Popular</div>
              <div className="p-8 border-b border-gray-200 dark:border-primary-700">
                <h3 className="text-2xl font-bold mb-2 text-primary dark:text-white">Business</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Ideal for growing businesses</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-primary dark:text-white">$4,999</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/ project</span>
                </div>
                <Link
                  to="/contact"
                  className="block w-full py-3 px-4 bg-accent text-white rounded-md text-center hover:bg-accent/90 transition-colors"
                >
                  Get Started
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">10-page custom website</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Advanced SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">CMS integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">E-commerce functionality</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Social media integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">4 weeks delivery</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card bg-white dark:bg-primary-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="p-8 border-b border-gray-200 dark:border-primary-700">
                <h3 className="text-2xl font-bold mb-2 text-primary dark:text-white">Enterprise</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">For established businesses with complex needs</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-primary dark:text-white">Custom</span>
                </div>
                <Link
                  to="/contact"
                  className="block w-full py-3 px-4 bg-primary text-white rounded-md text-center hover:bg-primary-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Custom web application</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Full-stack development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Custom API integrations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">High-traffic infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Dedicated project manager</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Priority support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section 
        ref={ctaRef}
        className="py-20 bg-gradient-to-r from-accent to-primary-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let's discuss how our services can help your business achieve its goals. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-accent rounded-md hover:bg-gray-100 transition-colors font-medium"
            >
              Contact Us
            </Link>
            <Link 
              to="/work" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md hover:bg-white/10 transition-colors font-medium"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Animation CSS */}
      <style jsx>{`
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
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Services;