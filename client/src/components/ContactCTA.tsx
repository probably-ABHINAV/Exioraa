import Reveal from './ui/reveal';
import MagneticButton from './ui/magnetic-button';
import { Link } from 'wouter';

const ContactCTA = () => {
  return (
    <section className="py-24 px-8 md:px-16 bg-background/50" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal stagger width="100%">
          <h2 className="text-4xl md:text-6xl font-clash font-bold leading-tight mb-8 stagger-item">
            Ready to <span className="text-primary">Elevate</span> Your <br /> Digital <span className="text-accent">Presence</span>?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto stagger-item">
            Let's collaborate to create memorable experiences that drive results and set your brand apart.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 stagger-item">
            <MagneticButton 
              href="/contact" 
              className="bg-primary text-background px-10 py-5 rounded-full font-medium inline-block text-lg"
            >
              Start a Project
            </MagneticButton>
            
            <MagneticButton 
              href="/contact" 
              className="border border-white/20 text-white px-10 py-5 rounded-full font-medium inline-block text-lg"
            >
              Schedule a Call <i className="ri-arrow-right-line ml-2"></i>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactCTA;
