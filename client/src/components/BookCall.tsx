import { useEffect, useRef } from 'react';
import Reveal from './ui/reveal';
import MagneticButton from './ui/magnetic-button';
import { gsap } from 'gsap';

const BookCall = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) {
      // Parallax effect on the background
      gsap.to(bgRef.current, {
        y: '10%',
        scrollTrigger: {
          trigger: bgRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }, []);

  return (
    <section className="py-24 px-8 md:px-16 relative overflow-hidden" id="book-call">
      {/* Background elements */}
      <div ref={bgRef} className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/20 blur-[100px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Reveal width="100%">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-clash font-bold leading-tight mb-6">
                  Ready to Discuss Your <span className="text-primary">Project</span>?
                </h2>
                <p className="text-xl text-white/70 mb-8">
                  Schedule a 30-minute discovery call with our creative team to explore how we can transform your digital presence.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 mt-1">
                      <i className="ri-check-line text-xl"></i>
                    </div>
                    <p className="text-white/80">
                      No pressure conversations focused on understanding your goals
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 mt-1">
                      <i className="ri-check-line text-xl"></i>
                    </div>
                    <p className="text-white/80">
                      Custom insights and recommendations for your specific challenges
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 mt-1">
                      <i className="ri-check-line text-xl"></i>
                    </div>
                    <p className="text-white/80">
                      Clear next steps and timeline projections
                    </p>
                  </div>
                </div>

                <MagneticButton 
                  href="https://calendly.com/xoxogroovy" 
                  className="bg-primary text-background px-10 py-5 rounded-full font-medium inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!window.Calendly) {
                      console.error('Calendly not loaded');
                      window.open('https://calendly.com/xoxogroovy', '_blank');
                      return;
                    }
                    window.Calendly.initPopupWidget({
                      url: 'https://calendly.com/xoxogroovy'
                    });
                  }}
                >
                  Book Your Free Consultation <i className="ri-calendar-line ml-2"></i>
                </MagneticButton>
              </div>

              <div className="order-first md:order-last">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80" 
                    alt="Team brainstorming session" 
                    className="rounded-2xl w-full object-cover hoverable"
                    style={{aspectRatio: "4/5"}}
                  />
                  <div className="absolute -bottom-6 -right-6 bg-background/80 backdrop-blur-md p-6 rounded-xl border border-white/10 max-w-xs">
                    <div className="flex items-center mb-4">
                      <div className="flex -space-x-4 mr-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                            {["JM", "AR", "SK"][i-1]}
                          </div>
                        ))}
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">Our Team</p>
                        <p className="text-white/60">Creative Strategists</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">
                      "We believe in collaborative discovery to ensure your vision is fully realized."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default BookCall;