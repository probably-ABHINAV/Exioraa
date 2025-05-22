import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Search, Code, Palette, Smartphone, 
  Zap, BarChart3, Globe, RefreshCw 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation } from 'wouter';

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: <Search className="w-12 h-12 text-accent" />,
    title: 'SEO Optimization',
    description: 'Increase your visibility and drive organic traffic with our data-driven SEO strategies.'
  },
  {
    icon: <Code className="w-12 h-12 text-accent" />,
    title: 'Web Development',
    description: 'Custom web solutions built with cutting-edge technologies for optimal performance.'
  },
  {
    icon: <Palette className="w-12 h-12 text-accent" />,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive, engaging digital experiences.'
  },
  {
    icon: <Smartphone className="w-12 h-12 text-accent" />,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.'
  },
  {
    icon: <Zap className="w-12 h-12 text-accent" />,
    title: 'Branding',
    description: 'Strategic brand development to help you stand out in a competitive marketplace.'
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-accent" />,
    title: 'Digital Marketing',
    description: 'Multi-channel marketing strategies to grow your audience and drive conversions.'
  }
];

const ServicesGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [_, navigate] = useLocation();

  useEffect(() => {
    if (gridRef.current) {
      const serviceCards = gridRef.current.querySelectorAll('.service-card');
      
      gsap.fromTo(
        serviceCards,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.8,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const navigateToServices = () => {
    navigate('/services');
  };

  return (
    <div ref={gridRef} className="services-grid">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="service-card overflow-hidden hover:shadow-lg transition-all duration-300 border-2 border-border group">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent/5 rounded-full transform transition-transform duration-500 group-hover:scale-150"></div>
            <CardHeader className="relative z-10">
              <div className="mb-4">{service.icon}</div>
              <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="mb-6">{service.description}</p>
              <Button 
                variant="outline" 
                className="mt-2 border-accent text-accent hover:bg-accent hover:text-white"
                onClick={navigateToServices}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button 
          onClick={navigateToServices}
          className="bg-accent text-white hover:bg-accent/90 px-8 py-6"
        >
          View All Services
        </Button>
      </div>
    </div>
  );
};

export default ServicesGrid;
