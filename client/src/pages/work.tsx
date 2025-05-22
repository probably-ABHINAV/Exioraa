import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../lib/sanity';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Define project interface
interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  featured: boolean;
}

// Project data fetching hook
const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  });
};

const Work: React.FC = () => {
  // Refs for animations
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // State for filter
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Use the useProjects hook to fetch projects
  const { data: projects = [], isLoading } = useProjects();

  // Get filtered projects
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);

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

    // Featured section animation
    if (featuredRef.current) {
      gsap.from(featuredRef.current.querySelectorAll('.featured-project'), {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: featuredRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    }

    // Projects section animation
    if (projectsRef.current) {
      gsap.from(projectsRef.current.querySelectorAll('.project-card'), {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    }

    // Process section animation
    if (processRef.current) {
      gsap.from(processRef.current.querySelectorAll('.process-step'), {
        opacity: 0,
        x: (index: number) => index % 2 === 0 ? -30 : 30,
        stagger: 0.15,
        duration: 0.7,
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    }

    // CTA section animation
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
  }, [filter]);

  return (
    <div className="relative">
      {/* Hero section */}
      <section 
        ref={heroRef}
        className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-br from-primary to-primary-dark dark:from-primary-dark dark:to-black"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full opacity-10">
            {/* SVG background pattern */}
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <circle cx="50" cy="50" r="30" fill="rgba(255,255,255,0.1)" />
              <circle cx="70" cy="30" r="20" fill="rgba(255,255,255,0.05)" />
              <circle cx="20" cy="70" r="15" fill="rgba(255,255,255,0.05)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Explore our portfolio of innovative digital projects spanning web development, branding, mobile apps, and marketing campaigns.
          </p>
        </div>
      </section>

      {/* Featured projects section */}
      <section ref={featuredRef} className="py-20 bg-white dark:bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-white">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore some of our most impactful and innovative projects that showcase our expertise and creativity.
            </p>
          </div>

          {isLoading ? (
            <p className="text-center">Loading projects...</p>
          ) : (
            <div className="space-y-24">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`featured-project flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  <div className="lg:w-1/2">
                    <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                        <span className="px-3 py-1 bg-accent text-white text-sm font-medium rounded-full w-fit mb-4">
                          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-white/80 mb-4">{project.client}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-3xl font-bold mb-4 text-primary dark:text-white">{project.title}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{project.fullDescription}</p>
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-3 text-primary dark:text-white">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button 
                      className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-md transition-colors"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Project Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project grid section */}
      <section ref={projectsRef} className="py-20 bg-gray-50 dark:bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-white">All Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Browse our complete portfolio of work across different industries and specialties.
            </p>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'all' 
                    ? 'bg-accent text-white' 
                    : 'bg-gray-200 text-gray-800 dark:bg-primary-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-primary-600'
                }`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'web' 
                    ? 'bg-accent text-white' 
                    : 'bg-gray-200 text-gray-800 dark:bg-primary-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-primary-600'
                }`}
                onClick={() => setFilter('web')}
              >
                Web Development
              </button>
              <button 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'branding' 
                    ? 'bg-accent text-white' 
                    : 'bg-gray-200 text-gray-800 dark:bg-primary-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-primary-600'
                }`}
                onClick={() => setFilter('branding')}
              >
                Branding
              </button>
              <button 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'mobile' 
                    ? 'bg-accent text-white' 
                    : 'bg-gray-200 text-gray-800 dark:bg-primary-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-primary-600'
                }`}
                onClick={() => setFilter('mobile')}
              >
                Mobile Apps
              </button>
              <button 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'marketing' 
                    ? 'bg-accent text-white' 
                    : 'bg-gray-200 text-gray-800 dark:bg-primary-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-primary-600'
                }`}
                onClick={() => setFilter('marketing')}
              >
                Marketing
              </button>
              <button 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'ecommerce' 
                    ? 'bg-accent text-white' 
                    : 'bg-gray-200 text-gray-800 dark:bg-primary-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-primary-600'
                }`}
                onClick={() => setFilter('ecommerce')}
              >
                E-commerce
              </button>
            </div>
          </div>
          {isLoading ? (
            <p className="text-center">Loading projects...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="project-card bg-white dark:bg-primary-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="relative h-60">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary dark:text-white">{project.title}</h3>
                    <p className="text-sm text-accent mb-3">{project.client}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">{project.description}</p>
                    <button 
                      className="text-accent font-medium flex items-center hover:underline"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process section */}
      <section ref={processRef} className="py-20 bg-white dark:bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-white">Our Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results for every project.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Process step connector line */}
            <div className="absolute h-full w-1 bg-gray-200 dark:bg-primary-700 left-[15px] md:left-1/2 md:-ml-[0.5px] top-0 z-0"></div>

            {/* Step 1 */}
            <div className="process-step relative flex flex-col md:flex-row items-center md:items-start mb-16">
              <div className="flex-none w-8 h-8 bg-accent rounded-full flex items-center justify-center z-10 md:ml-auto md:mr-auto">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">Discovery</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We begin by understanding your goals, audience, industry, and unique challenges. This phase includes stakeholder interviews, competitive analysis, and market research.
                </p>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>

            {/* Step 2 */}
            <div className="process-step relative flex flex-col md:flex-row items-center md:items-start mb-16">
              <div className="flex-none w-8 h-8 bg-accent rounded-full flex items-center justify-center z-10 md:ml-auto md:mr-auto">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
              <div className="md:w-1/2 pl-8 md:pl-12">
                <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">Strategy</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Based on our discovery findings, we develop a comprehensive strategy including project scope, timelines, deliverables, and technical specifications to ensure alignment.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="process-step relative flex flex-col md:flex-row items-center md:items-start mb-16">
              <div className="flex-none w-8 h-8 bg-accent rounded-full flex items-center justify-center z-10 md:ml-auto md:mr-auto">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our creative team crafts visually stunning designs that align with your brand and project objectives. We create wireframes, mockups, and interactive prototypes.
                </p>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>

            {/* Step 4 */}
            <div className="process-step relative flex flex-col md:flex-row items-center md:items-start mb-16">
              <div className="flex-none w-8 h-8 bg-accent rounded-full flex items-center justify-center z-10 md:ml-auto md:mr-auto">
                <span className="text-white font-bold">4</span>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
              <div className="md:w-1/2 pl-8 md:pl-12">
                <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our skilled developers bring designs to life using the latest technologies. We follow agile methodologies, with regular reviews and feedback integration.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="process-step relative flex flex-col md:flex-row items-center md:items-start">
              <div className="flex-none w-8 h-8 bg-accent rounded-full flex items-center justify-center z-10 md:ml-auto md:mr-auto">
                <span className="text-white font-bold">5</span>
              </div>
              <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">Launch & Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  After rigorous testing, we launch your project and provide ongoing support, monitoring, and optimization to ensure continued success.
                </p>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-r from-accent to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let's create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white hover:bg-gray-100 text-accent font-medium rounded-md transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Project details modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" onClick={() => setSelectedProject(null)}></div>
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="bg-white dark:bg-primary-900 rounded-xl shadow-xl max-w-4xl w-full overflow-hidden relative">
              <button 
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative h-80">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <span className="px-3 py-1 bg-accent text-white text-sm font-medium rounded-full w-fit mb-4">
                    {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-white/80">Client: {selectedProject.client}</p>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-xl font-bold mb-4 text-primary dark:text-white">Project Overview</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedProject.fullDescription}</p>

                <h4 className="text-xl font-bold mb-4 text-primary dark:text-white">Technologies Used</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button 
                  className="w-full py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-md transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;