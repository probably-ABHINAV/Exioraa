"use client"

import { useRef, useState } from "react"
import { Header } from "@/components/header"
import { AboutModal } from "@/components/about-modal"
import { Hero3D } from "@/components/hero-3d"
import { AnimatedServices } from "@/components/animated-services"
import { SkillProgressBars } from "@/components/skill-progress-bars"
import { ParallaxProjects } from "@/components/parallax-projects"
import { BlogCaseStudies } from "@/components/blog-case-studies"
import { TechFusionCore } from "@/components/tech-fusion-core"
import { Testimonials } from "@/components/testimonials"
import { FunctionalContact } from "@/components/functional-contact"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { LiveChat } from "@/components/live-chat"
import { StructuredData } from "@/components/structured-data"
import { PerformanceMonitor } from "@/components/performance-monitor"

export default function HomePage() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  const servicesRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const workRef = useRef<HTMLElement>(null)
  const blogRef = useRef<HTMLElement>(null)
  const techStackRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollToSection = (sectionName: string) => {
    const refs = {
      services: servicesRef,
      skills: skillsRef,
      work: workRef,
      blog: blogRef,
      "tech-stack": techStackRef,
      testimonials: testimonialsRef,
      contact: contactRef,
    }

    const targetRef = refs[sectionName as keyof typeof refs]
    if (targetRef?.current) {
      const offsetTop = targetRef.current.offsetTop - 80 // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <StructuredData />
      <PerformanceMonitor />

      {/* Header */}
      <Header 
        onNavigate={scrollToSection} 
        onAboutClick={() => setIsAboutOpen(true)} 
      />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen">
          <Hero3D />
        </section>

        {/* Services Section */}
        <section id="services" data-section="services" ref={servicesRef} className="py-20">
          <AnimatedServices />
        </section>

        {/* Skills Section */}
        <section id="skills" data-section="skills" ref={skillsRef} className="py-20">
          <SkillProgressBars />
        </section>

        {/* Work/Projects Section */}
        <section id="work" data-section="work" ref={workRef} className="py-20">
          <ParallaxProjects />
        </section>

        {/* Blog & Case Studies Section */}
        <section id="blog" data-section="blog" ref={blogRef} className="py-20">
          <BlogCaseStudies />
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" data-section="tech-stack" ref={techStackRef}>
          <TechFusionCore />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" data-section="testimonials" ref={testimonialsRef} className="py-20">
          <Testimonials />
        </section>

        {/* Contact Section */}
        <section id="contact" data-section="contact" ref={contactRef} className="py-20">
          <FunctionalContact />
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <NewsletterSignup />
        </section>
      </main>

      {/* About Modal */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />

      {/* Live Chat */}
      <LiveChat />
    </>
  )
}