import Reveal from './ui/reveal';

const Process = () => {
  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description: "We dive deep into understanding your brand, goals, audience, and competitive landscape to form a solid foundation."
    },
    {
      number: "2",
      title: "Strategy",
      description: "We develop a comprehensive roadmap that outlines approaches, technologies, and timelines tailored to your objectives."
    },
    {
      number: "3",
      title: "Design & Development",
      description: "Our creative team brings ideas to life through iterative design and development, keeping you involved at every stage."
    },
    {
      number: "4",
      title: "Launch & Optimization",
      description: "We ensure a smooth deployment and provide ongoing support to maintain and enhance performance over time."
    }
  ];
  
  return (
    <section className="py-24 px-8 md:px-16 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <p className="text-primary mb-4">How We Work</p>
            <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6">
              Our Creative <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              We follow a structured yet flexible approach to deliver exceptional results for every project.
            </p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80" 
              alt="Creative design process" 
              className="rounded-2xl w-full h-auto object-cover hoverable"
              style={{aspectRatio: "4/5"}}
            />
          </Reveal>
          
          <div>
            <Reveal stagger width="100%" delay={0.2}>
              <div className="space-y-10">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex stagger-item">
                    <div className="mr-6">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-clash font-bold text-xl">
                        {step.number}
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="w-0.5 h-16 bg-primary/20 mx-auto mt-2 mb-2"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-clash font-semibold mb-3">{step.title}</h3>
                      <p className="text-white/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
