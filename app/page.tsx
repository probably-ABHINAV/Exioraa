
import { HeroSection } from '@/components/HeroSection'
import { ServicesGrid } from '@/components/ServicesGrid'
import { WorkSlider } from '@/components/WorkSlider'
import { AboutSection } from '@/components/AboutSection'
import { ScrollTriggerWrapper } from '@/components/ScrollTriggerWrapper'

export default function Home() {
  useEffect(() => {
    const headings = document.querySelectorAll('h1, h2');
    const paragraphs = document.querySelectorAll('p:not(.no-split)');
    
    headings.forEach(heading => {
      animateHeading(heading as HTMLElement);
    });
    
    paragraphs.forEach(paragraph => {
      animateParagraph(paragraph as HTMLElement);
    });
  }, []);
  return (
    <main className="min-h-screen">
      <HeroSection 
        title="Creative Digital Solutions That Drive Results" 
        subtitle="We create digital experiences that transform brands and grow businesses"
      />
      
      <ScrollTriggerWrapper>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-white">Our Services</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We provide comprehensive digital solutions tailored to your unique business needs
              </p>
            </div>
            <ServicesGrid />
          </div>
        </section>
      </ScrollTriggerWrapper>
      
      <ScrollTriggerWrapper>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-white">Our Work</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore some of our recent projects and creative solutions
              </p>
            </div>
            <WorkSlider />
          </div>
        </section>
      </ScrollTriggerWrapper>
      
      <ScrollTriggerWrapper>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <AboutSection />
          </div>
        </section>
      </ScrollTriggerWrapper>
      
      <ScrollTriggerWrapper>
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Let's create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <a href="/contact" className="px-8 py-4 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors">
              Get in Touch
            </a>
          </div>
        </section>
      </ScrollTriggerWrapper>
    </main>
  )
}
