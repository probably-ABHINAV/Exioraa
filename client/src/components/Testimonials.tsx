import Reveal from './ui/reveal';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <p className="text-primary mb-4">What Clients Say</p>
            <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6">
              Client <span className="text-accent">Testimonials</span>
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              Hear from the brands we've helped transform through our creative solutions.
            </p>
          </div>
        </Reveal>
        
        <Reveal stagger width="100%" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 stagger-item hoverable"
              >
                <div className="flex items-center mb-6">
                  <div className="text-primary">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill"></i>
                    ))}
                  </div>
                </div>
                <p className="text-white/80 mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full ${testimonial.initialsBackground} flex items-center justify-center ${testimonial.initialsColor} font-bold mr-4`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-white/60">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
