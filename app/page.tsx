'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Menu, 
  X, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Check
} from 'lucide-react'

import { Hero3D } from '@/components/hero-3d'
import { AnimatedServices } from '@/components/animated-services'
import { TechStack3D } from '@/components/tech-stack-3d'
import { ParallaxProjects } from '@/components/parallax-projects'
import { FeaturesShowcase } from '@/components/features-showcase'
import { InteractiveServiceExplorer } from '@/components/interactive-service-explorer'
import { BudgetCalculator } from '@/components/budget-calculator'
import { FunctionalContact } from '@/components/functional-contact'
import { WebsiteAnalyzer } from '@/components/website-analyzer'
import { ContentProofreader } from '@/components/content-proofreader'
import { ImageOptimizer } from '@/components/image-optimizer'
import { Testimonials } from '@/components/testimonials'
import { NewsletterSignup } from '@/components/newsletter-signup'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Exioraa
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm transition-colors ${
                    activeSection === item.id 
                      ? 'text-purple-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4 border-t border-gray-700"
              >
                <div className="flex flex-col space-y-2 pt-4">
                  {[
                    { id: 'home', label: 'Home' },
                    { id: 'services', label: 'Services' },
                    { id: 'about', label: 'About' },
                    { id: 'projects', label: 'Projects' },
                    { id: 'contact', label: 'Contact' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left px-3 py-2 text-sm transition-colors ${
                        activeSection === item.id 
                          ? 'text-purple-400' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <Hero3D />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Digital Innovation Studio
            </Badge>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Transform Ideas Into
              <br />
              Digital Reality
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We create cutting-edge web applications, mobile solutions, and digital experiences 
              that drive business growth and user engagement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6">
        <AnimatedServices />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="border-cyan-500/50 text-cyan-300 mb-6">
              <Users className="w-4 h-4 mr-2" />
              About Exioraa
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Crafting Digital Excellence Since 2020
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We're a passionate team of designers, developers, and strategists dedicated to 
              creating digital solutions that make a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "50+ Projects",
                description: "Successfully delivered across various industries"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Happy Clients",
                description: "95% client satisfaction rate"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Growth Focused",
                description: "Avg 300% increase in user engagement"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-gray-700 text-center">
                  <CardContent className="p-6">
                    <div className="text-cyan-400 mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-gray-400">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <TechStack3D />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <ParallaxProjects />
      </section>

      {/* Features Showcase */}
      <FeaturesShowcase />

      {/* Interactive Service Explorer */}
      <InteractiveServiceExplorer />

      {/* Budget Calculator */}
      <BudgetCalculator />

      {/* Website Analyzer */}
      <WebsiteAnalyzer />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <FunctionalContact />
      </section>

      {/* Tools Section */}
      <ContentProofreader />
      <ImageOptimizer />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  )
}