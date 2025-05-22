import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [_, navigate] = useLocation();

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelector('.about-heading'),
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      gsap.fromTo(
        sectionRef.current.querySelector('.about-text'),
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
    
    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      
      gsap.fromTo(
        timelineItems,
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          stagger: 0.2, 
          duration: 0.6,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      gsap.fromTo(
        timelineRef.current.querySelector('.timeline-line'),
        { scaleY: 0 },
        { 
          scaleY: 1, 
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 0.5
          }
        }
      );
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const navigateToAbout = () => {
    navigate('/about');
  };

  return (
    <section ref={sectionRef} className="section bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="about-heading section-title">About Us</h2>
          <p className="about-text text-lg md:text-xl max-w-3xl mx-auto">
            We're a team of designers, developers, and strategists passionate about creating 
            exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1" ref={timelineRef}>
            <div className="relative">
              <div className="timeline-line absolute left-8 top-0 bottom-0 w-1 bg-accent origin-top"></div>
              
              <div className="space-y-12">
                <div className="timeline-item flex">
                  <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold relative z-10">
                    01
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2">Discovery</h3>
                    <p>
                      We begin by deeply understanding your business goals, target audience, 
                      and market position to form a strategic foundation.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item flex">
                  <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold relative z-10">
                    02
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2">Strategy</h3>
                    <p>
                      We develop a comprehensive plan that outlines the approach, timeline, 
                      resources, and metrics for success.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item flex">
                  <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold relative z-10">
                    03
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2">Execution</h3>
                    <p>
                      Our team brings the strategy to life through design, development, 
                      and deployment, with rigorous testing at every stage.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item flex">
                  <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold relative z-10">
                    04
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2">Optimization</h3>
                    <p>
                      We continuously monitor, analyze, and refine your digital assets 
                      to ensure they deliver optimal results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative h-80 md:h-96 bg-muted rounded-lg overflow-hidden">
              {/* This would be an about image in real implementation */}
              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <p className="text-lg font-medium">About image would be here</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-6">
                To empower businesses with innovative digital solutions that enhance 
                their brand presence, drive engagement, and accelerate growth.
              </p>
              <Button 
                onClick={navigateToAbout}
                className="bg-accent text-white hover:bg-accent/90"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
