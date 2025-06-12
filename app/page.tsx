"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"
import { Hero3D } from "@/components/hero-3d"
import { TechStack3D } from "@/components/tech-stack-3d"
import { ParallaxProjects } from "@/components/parallax-projects"
import { ClientTestimonials } from "@/components/client-testimonials"
import { FeaturesShowcase } from "@/components/features-showcase"
import { BlogPreview } from "@/components/blog-preview"
import { BudgetCalculator } from "@/components/budget-calculator"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { FunctionalContact } from "@/components/functional-contact"
import { EnhancedLiveChat } from "@/components/enhanced-live-chat"
import { AboutModal } from "@/components/about-modal"
import { MobileNavigation } from "@/components/mobile-navigation"
import { TrustedCompanies } from "@/components/trusted-companies"
import { GlassmorphicNav } from "@/components/glassmorphic-nav"

export default function ExioraaWebsite() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined') return
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80 // Height of fixed navigation
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // Scroll to top function
  const scrollToTop = () => {
    if (typeof window === 'undefined') return
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Glassmorphic Navigation */}
      {mounted && <GlassmorphicNav onNavigate={scrollToSection} onAboutClick={() => setIsAboutModalOpen(true)} />}

      <main id="main-content" className="pt-20">
        <section id="home">
          {mounted && <Hero3D />}
        </section>
        <section id="services">
          {mounted && <TechStack3D />}
          {mounted && <FeaturesShowcase />}
        </section>
        <section id="work">
          {mounted && <ParallaxProjects />}
        </section>
        {mounted && <TrustedCompanies />}
        <section id="tools" className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Tools & Technologies
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
              We use cutting-edge tools and technologies to deliver exceptional digital experiences
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS",
                "Docker", "MongoDB", "PostgreSQL", "Redis", "GraphQL", "REST API"
              ].map((tool, index) => (
                <div
                  key={tool}
                  className="group p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 border border-gray-700/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold">
                    {tool.charAt(0)}
                  </div>
                  <h3 className="text-white font-semibold text-sm">{tool}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        {mounted && <BlogPreview />}
        {mounted && <BudgetCalculator />}
        <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6">
            {mounted && <NewsletterSignup />}
          </div>
        </div>
        <section id="contact">
          {mounted && <FunctionalContact />}
        </section>
        {mounted && <EnhancedLiveChat />}
      </main>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <button
                onClick={scrollToTop}
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300"
              >
                Exioraa
              </button>
              <p className="text-gray-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                We design, build, and scale digital experiences that drive growth and innovation for forward-thinking
                brands across India and globally.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {[
                  {
                    icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
                    href: "https://github.com/exioraa",
                    label: "GitHub",
                  },
                  {
                    icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />,
                    href: "https://twitter.com/exioraa",
                    label: "Twitter",
                  },
                  {
                    icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
                    href: "https://linkedin.com/company/exioraa",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
                    href: "https://instagram.com/exioraa",
                    label: "Instagram",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3 sm:mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Web Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors text-left"
                  >
                    UI/UX Design
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors text-left"
                  >
                    App Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors text-left"
                  >
                    SEO Optimization
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3 sm:mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <button
                    onClick={() => setIsAboutModalOpen(true)}
                    className="hover:text-white transition-colors text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("work")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Work
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("tools")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Tools
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024-2025 Exioraa. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                GST: 29XXXXX1234X1ZX
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* About Modal */}
      {mounted && <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />}
    </div>
  )
}