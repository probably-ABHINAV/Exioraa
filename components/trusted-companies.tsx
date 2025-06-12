
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, MapPin, Calendar, ExternalLink, X } from "lucide-react"

const trustedCompanies = [
  {
    id: 1,
    name: "TechCorp India",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
    industry: "Software Solutions",
    location: "Bangalore, India",
    yearStarted: 2022,
    description: "Leading software solutions provider specializing in enterprise applications and digital transformation.",
    projectType: "Enterprise Web Application",
    testimonial: "Exioraa delivered beyond our expectations. Their technical expertise and attention to detail were outstanding.",
    rating: 5,
    employees: "500+",
    website: "techcorp.in",
    color: "#3b82f6"
  },
  {
    id: 2,
    name: "InnovateX",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&h=100&fit=crop",
    industry: "Fintech",
    location: "Mumbai, India",
    yearStarted: 2023,
    description: "Revolutionary fintech startup transforming digital payments and financial services across India.",
    projectType: "Mobile Banking App",
    testimonial: "The mobile app they built for us has over 100k downloads and 4.8 star rating. Incredible work!",
    rating: 5,
    employees: "150+",
    website: "innovatex.co",
    color: "#10b981"
  },
  {
    id: 3,
    name: "EcomGlobal",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop",
    industry: "E-commerce",
    location: "Delhi, India",
    yearStarted: 2021,
    description: "Global e-commerce platform connecting millions of buyers and sellers across multiple countries.",
    projectType: "E-commerce Platform",
    testimonial: "Our sales increased by 300% after the platform redesign. Exioraa's expertise in e-commerce is unmatched.",
    rating: 5,
    employees: "200+",
    website: "ecomglobal.com",
    color: "#f59e0b"
  },
  {
    id: 4,
    name: "HealthTech Solutions",
    logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=100&fit=crop",
    industry: "Healthcare",
    location: "Hyderabad, India",
    yearStarted: 2022,
    description: "Healthcare technology company revolutionizing patient care through innovative digital solutions.",
    projectType: "Telemedicine Platform",
    testimonial: "The telemedicine platform has helped us serve 50,000+ patients remotely. Excellent technical implementation.",
    rating: 5,
    employees: "80+",
    website: "healthtech.in",
    color: "#ef4444"
  },
  {
    id: 5,
    name: "EduNext",
    logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=100&fit=crop",
    industry: "Education",
    location: "Pune, India",
    yearStarted: 2023,
    description: "EdTech platform providing innovative learning solutions for students and educational institutions.",
    projectType: "Learning Management System",
    testimonial: "Our student engagement increased by 400% with the new LMS. Outstanding user experience design.",
    rating: 5,
    employees: "120+",
    website: "edunext.edu",
    color: "#8b5cf6"
  },
  {
    id: 6,
    name: "GreenEnergy Co",
    logo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=200&h=100&fit=crop",
    industry: "Renewable Energy",
    location: "Chennai, India",
    yearStarted: 2022,
    description: "Leading renewable energy company focusing on solar and wind power solutions for sustainable future.",
    projectType: "Energy Management Dashboard",
    testimonial: "The real-time energy monitoring dashboard has optimized our operations by 35%. Fantastic work!",
    rating: 5,
    employees: "300+",
    website: "greenenergy.co.in",
    color: "#22c55e"
  }
]

interface CompanyPopupProps {
  company: typeof trustedCompanies[0]
  onClose: () => void
}

function CompanyPopup({ company, onClose }: CompanyPopupProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900 border border-gray-700 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${company.color}20` }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-12 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{company.name}</h3>
                <Badge variant="outline" className="border-gray-600 text-gray-300 mt-1">
                  {company.industry}
                </Badge>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>{company.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>{company.employees} employees</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Calendar className="w-4 h-4 text-green-400" />
                <span>Partnership since {company.yearStarted}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <span>{company.website}</span>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Project Type</h4>
              <p className="text-gray-300 mb-3">{company.projectType}</p>
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(company.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-400 text-sm">Client Rating</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3">About {company.name}</h4>
            <p className="text-gray-300 leading-relaxed">{company.description}</p>
          </div>

          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-lg p-4 border border-purple-500/50">
            <h4 className="text-white font-semibold mb-2">Client Testimonial</h4>
            <p className="text-gray-300 italic">"{company.testimonial}"</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function TrustedCompanies() {
  const [selectedCompany, setSelectedCompany] = useState<typeof trustedCompanies[0] | null>(null)

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-6">
            <Users className="w-4 h-4 mr-2" />
            Our Partners
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Trusted by Companies
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We've partnered with leading companies across various industries to deliver innovative digital solutions that drive real business results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustedCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedCompany(company)}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${company.color}10 0%, transparent 70%)`
                  }}
                />
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${company.color}20` }}
                      whileHover={{ rotate: 5 }}
                    >
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-8 h-6 object-contain"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {company.name}
                      </h3>
                      <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                        {company.industry}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <MapPin className="w-3 h-3" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Users className="w-3 h-3" />
                      <span>{company.employees} employees</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>Since {company.yearStarted}</span>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                    <p className="text-gray-300 text-sm font-medium mb-1">{company.projectType}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(company.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <motion.div
                    className="flex items-center text-purple-400 group-hover:text-cyan-400 transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-semibold">View Details</span>
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </motion.div>
                </CardContent>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(45deg, ${company.color}, transparent, ${company.color})`
                  }}
                  animate={{
                    background: [
                      `linear-gradient(0deg, ${company.color}, transparent, ${company.color})`,
                      `linear-gradient(360deg, ${company.color}, transparent, ${company.color})`
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { label: "Global Clients", value: "50+" },
            { label: "Countries Served", value: "15+" },
            { label: "Success Rate", value: "99%" },
            { label: "Industries", value: "20+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCompany && (
          <CompanyPopup 
            company={selectedCompany} 
            onClose={() => setSelectedCompany(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}
