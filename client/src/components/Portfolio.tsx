import { useEffect, useRef } from 'react';
import Reveal from './ui/reveal';
import { Link } from 'wouter';
import { projects } from '../data/portfolio';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (scrollRef.current) {
      // Horizontal scroll animation
      const scrollElement = scrollRef.current;
      const scrollWidth = scrollElement.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      if (scrollWidth > viewportWidth) {
        gsap.to(scrollElement, {
          x: -(scrollWidth - viewportWidth + 32),
          ease: "none",
          scrollTrigger: {
            trigger: scrollElement,
            start: "top top",
            end: `+=${scrollWidth - viewportWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          }
        });
      }
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section className="py-24 px-8 md:px-16" id="work">
      <div className="max-w-6xl mx-auto">
        <Reveal width="100%">
          <div className="mb-16">
            <p className="text-primary mb-4">Our Portfolio</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between">
              <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6 md:mb-0">
                Recent <span className="text-accent">Projects</span>
              </h2>
              <Link 
                href="/work" 
                className="text-white border border-white/20 px-6 py-3 rounded-full inline-flex items-center hoverable"
              >
                View All Work <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="horizontal-scroll pb-8 -mx-4" ref={scrollRef}>
          {projects.slice(0, 4).map((project, index) => (
            <Reveal key={index} delay={0.1 * index} className="scroll-item w-[80vw] md:w-[40vw] px-4">
              <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hoverable group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{aspectRatio: "16/9"}}
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-clash font-semibold mb-2">{project.title}</h3>
                      <p className="text-white/70">{project.categories.join(', ')}</p>
                    </div>
                    <div className={`${project.tagBg} ${project.tagColor} px-3 py-1 rounded-full text-sm`}>
                      {project.tag}
                    </div>
                  </div>
                  <p className="text-white/70 mb-6">
                    {project.description}
                  </p>
                  <a href="#" className={`${project.accentColor} flex items-center font-medium`}>
                    View Case Study <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
