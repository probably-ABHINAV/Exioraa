import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import BookCall from '@/components/BookCall';
import ContactCTA from '@/components/ContactCTA';

const Home = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Set page title and meta description
    document.title = 'Exioraa | Creative Agency';
  }, []);
  
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <BookCall />
      <ContactCTA />
    </main>
  );
};

export default Home;
