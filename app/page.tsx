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
      {/* Enhanced Brand Header */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 transition-all duration-300 relative" style={{ position: 'fixed' }}>
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Animated Logo */}
            <button
              onClick={scrollToTop}
              className="text-xl sm:text-2xl font-bold text-white hover:scale-110 transition-all duration-500 hover:rotate-3 relative group"
            >
              <span className="relative z-10 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Exioraa
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
            </button>

            {/* Desktop Navigation with Animations */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {[
                { label: "Services", action: () => scrollToSection("services") },
                { label: "About", action: () => setIsAboutModalOpen(true) },
                { label: "Work", action: () => scrollToSection("work") },
                { label: "Tools", action: () => window.open("/tools", "_blank") },
                { label: "Contact", action: () => scrollToSection("contact") },
                { label: "Portal", action: () => window.open("/portal", "_blank") },
              ].map((item, index) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="relative text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden text-sm lg:text-base"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                    {item.label}
                  </span>
                  {/* Hover underline animation */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-500 ease-out"></div>
                  {/* Hover background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <Button
              className="hidden md:flex relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 hover:scale-105 transition-all duration-300 overflow-hidden group text-sm lg:text-base"
              onClick={() => scrollToSection("contact")}
            >
              <span className="relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                Get Started
              </span>
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
            </Button>

            {/* Mobile Navigation */}
            <MobileNavigation onNavigate={scrollToSection} onAboutClick={() => setIsAboutModalOpen(true)} />
          </div>

          {/* Navigation background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-cyan-900/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/40 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/2 right-1/4 w-1.5 h-1.5 bg-purple-300/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </nav>

      <main id="main-content" className="pt-20">
        {mounted && <Hero3D />}
        {mounted && <TechStack3D />}
        {mounted && <ParallaxProjects />}
        {mounted && <TrustedCompanies />}
        {mounted && <FeaturesShowcase />}
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
        {mounted && <FunctionalContact />}
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