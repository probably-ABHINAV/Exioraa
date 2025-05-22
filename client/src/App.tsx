import { useEffect } from "react";
import { Switch, Route, Link } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Work from "@/pages/Work";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initSmoothScroll } from "@/utils/smoothScroll";

function Router() {
  useEffect(() => {
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Add meta tags for SEO
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Exioraa - A modern digital agency offering SEO Optimization, Web Development, UI/UX Design, and more. We create bold digital experiences.';
    document.head.appendChild(meta);
    
    // Add title
    document.title = 'Exioraa | We Create Bold Digital Experiences';
    
    // Add Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Exioraa | Modern Digital Agency');
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'We create bold digital experiences with innovative design and cutting-edge technology.');
    document.head.appendChild(ogDescription);
    
    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    document.head.appendChild(ogType);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
