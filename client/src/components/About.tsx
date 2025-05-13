import Reveal from './ui/reveal';

const About = () => {
  return (
    <section className="py-24 px-8 md:px-16" id="about">
      <div className="max-w-6xl mx-auto">
        <Reveal stagger width="100%">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-clash font-bold mb-8 stagger-item">
                We bring <span className="text-primary">ideas</span> to life
              </h2>
              <p className="text-lg text-white/70 mb-6 stagger-item">
                Exioraa is a creative powerhouse that blends strategic thinking with cutting-edge design to help brands make meaningful connections.
              </p>
              <p className="text-lg text-white/70 mb-8 stagger-item">
                We believe in pushing boundaries, challenging conventions, and crafting experiences that leave lasting impressions.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 stagger-item">
                <div>
                  <h3 className="text-5xl font-clash font-bold text-primary mb-2">8+</h3>
                  <p className="text-white/70">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-5xl font-clash font-bold text-primary mb-2">150+</h3>
                  <p className="text-white/70">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-5xl font-clash font-bold text-primary mb-2">50+</h3>
                  <p className="text-white/70">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative stagger-item">
              <img 
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80" 
                alt="Creative team collaborating" 
                className="rounded-2xl w-full h-auto object-cover hoverable"
                style={{aspectRatio: "4/5"}}
              />
              <div className="absolute -bottom-8 -left-8 bg-primary/10 backdrop-blur-md p-6 rounded-xl border border-primary/20 max-w-xs">
                <p className="text-lg font-medium mb-2">Our Philosophy</p>
                <p className="text-sm text-white/70">We don't just create designs; we craft experiences that tell your brand's unique story.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
