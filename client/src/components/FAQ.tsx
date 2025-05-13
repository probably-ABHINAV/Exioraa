import { useState } from 'react';
import Reveal from './ui/reveal';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Exioraa offer?",
      answer: "We offer a comprehensive range of creative services including web design and development, branding and identity design, UI/UX design, mobile application development, digital marketing, and motion design. Our team specializes in creating immersive digital experiences that help brands connect with their audiences."
    },
    {
      question: "How does your design process work?",
      answer: "Our design process begins with a discovery phase where we understand your goals, audience, and competitive landscape. We then develop a strategic approach followed by conceptualization, design, development, testing, and launch. Throughout the process, we maintain open communication and collaborative feedback sessions to ensure your vision is realized."
    },
    {
      question: "What is your typical timeline for projects?",
      answer: "Project timelines vary depending on scope and complexity. A typical website design and development project might take 8-12 weeks from discovery to launch. Branding projects typically range from 4-8 weeks, while larger digital platforms can take 3-6 months. We'll provide a detailed timeline during our initial project scoping."
    },
    {
      question: "How do you handle project pricing?",
      answer: "We tailor our pricing to each project's specific requirements. Rather than offering one-size-fits-all packages, we evaluate the scope, complexity, and objectives of your project to provide a custom quote. This approach ensures you get exactly what your project needs without paying for unnecessary services."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, we provide ongoing support and maintenance for all our projects. We offer various support packages that include regular updates, performance monitoring, content updates, and technical support. We're committed to ensuring your digital products continue to perform optimally long after launch."
    },
    {
      question: "How do you measure the success of a project?",
      answer: "Success metrics are defined at the beginning of each project based on your specific goals. These might include conversion rates, user engagement, brand awareness, or business growth. We implement analytics tools to track these metrics and provide regular reporting to demonstrate ROI and identify optimization opportunities."
    }
  ];

  return (
    <section className="py-24 px-8 md:px-16" id="faq">
      <div className="max-w-4xl mx-auto">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <p className="text-primary mb-4">Questions & Answers</p>
            <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              Find answers to common questions about our services, process, and approach.
            </p>
          </div>
        </Reveal>
        
        <Reveal width="100%" delay={0.2}>
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-xl font-medium font-clash hover:text-primary data-[state=open]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        
        <Reveal width="100%" delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-white/70 mb-6">Still have questions? We're here to help.</p>
            <a 
              href="/contact" 
              className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/20 text-white px-8 py-4 rounded-full transition-all hoverable"
            >
              Contact Us <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;