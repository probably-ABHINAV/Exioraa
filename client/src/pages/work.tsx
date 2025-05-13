import { useEffect } from 'react';
import Reveal from '@/components/ui/reveal';
import { projects } from '@/data/portfolio';
import ContactCTA from '@/components/ContactCTA';

const Work = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Set page title and meta description
    document.title = 'Our Work | Exioraa Creative Agency';
  }, []);
  
  return (
    <main className="pt-32">
      <section className="px-8 md:px-16 mb-24">
        <div className="max-w-6xl mx-auto">
          <Reveal width="100%">
            <h1 className="text-5xl md:text-7xl font-clash font-bold mb-8">
              Our <span className="text-primary">Work</span>
            </h1>
            <p className="text-xl text-white/70 max-w-xl mb-16">
              Explore our portfolio of creative projects that showcase our expertise in design, development, and digital strategy.
            </p>
          </Reveal>
          
          <Reveal width="100%" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.concat(projects).map((project, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all hover:-translate-y-2 hoverable group"
                >
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
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      
      <ContactCTA />
    </main>
  );
};

export default Work;
