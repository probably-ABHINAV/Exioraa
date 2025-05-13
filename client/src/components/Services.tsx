import { useState } from 'react';
import Reveal from './ui/reveal';
import { services } from '../data/services';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  
  const openServiceDetails = (index: number) => {
    setSelectedService(index);
  };
  
  const closeServiceDetails = () => {
    setSelectedService(null);
  };
  
  return (
    <section className="py-24 px-8 md:px-16 bg-background/50" id="services">
      <div className="max-w-6xl mx-auto">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <p className="text-primary mb-4">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              We offer comprehensive solutions tailored to elevate your brand and drive digital success.
            </p>
          </div>
        </Reveal>
        
        <Reveal stagger width="100%" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all hover:translate-y-[-10px] stagger-item hoverable"
              >
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <i className={`${service.icon} text-3xl ${service.iconColor}`}></i>
                </div>
                <h3 className="text-2xl font-clash font-semibold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">
                  {service.description}
                </p>
                <button 
                  onClick={() => openServiceDetails(index)} 
                  className={`${service.textColor} flex items-center font-medium hoverable bg-transparent border-none p-0 cursor-pointer`}
                >
                  Learn more <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      
      {/* Service Details Dialog */}
      <Dialog open={selectedService !== null} onOpenChange={closeServiceDetails}>
        <DialogContent className="bg-background/95 backdrop-blur-md border border-white/10 max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedService !== null && (
            <>
              <DialogHeader>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${services[selectedService].bgColor} rounded-xl flex items-center justify-center mr-4`}>
                    <i className={`${services[selectedService].icon} text-2xl ${services[selectedService].iconColor}`}></i>
                  </div>
                  <DialogTitle className="text-3xl font-clash font-bold">{services[selectedService].title}</DialogTitle>
                </div>
                <DialogDescription className="text-white/80 text-lg">
                  {services[selectedService].description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6">
                <p className="text-white/90 mb-8">
                  {services[selectedService].detailedDescription}
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-xl font-clash font-semibold mb-4 text-primary">What We Offer</h4>
                    <ul className="space-y-3">
                      {services[selectedService].features?.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className={`w-6 h-6 ${services[selectedService].bgColor} rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5 flex-shrink-0`}>
                            <i className="ri-check-line"></i>
                          </div>
                          <span className="text-white/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-clash font-semibold mb-4 text-accent">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {services[selectedService].technologies?.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="bg-white/5 text-white/70 border-white/10 hover:border-primary/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <h4 className="text-xl font-clash font-semibold mb-4">Ready to get started?</h4>
                      <div className="flex flex-wrap gap-4">
                        <a 
                          href="/contact" 
                          className="bg-primary text-background px-6 py-3 rounded-full font-medium inline-block hoverable"
                        >
                          Get a Quote
                        </a>
                        <a 
                          href="#" 
                          className="border border-white/20 text-white px-6 py-3 rounded-full font-medium inline-block hoverable"
                          onClick={(e) => {
                            e.preventDefault();
                            closeServiceDetails();
                          }}
                        >
                          View Other Services
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
