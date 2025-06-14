"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calculator,
  Search,
  Calendar,
  Lightbulb,
  Zap,
  ArrowRight,
  Smartphone,
  BarChart3,
  Users,
  Target,
  Clock,
  Shield,
} from "lucide-react"

interface Feature {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  category: string
  benefits: string[]
  demo?: React.ReactNode
}

const features: Feature[] = [
  {
    id: "service-explorer",
    title: "Strategic Consultation",
    description: "Receive expert recommendations tailored to your business objectives, industry requirements, and growth targets",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "#8b5cf6",
    category: "Strategy",
    benefits: [
      "Customized business solutions",
      "Industry expertise",
      "ROI-focused approach",
      "Strategic roadmapping",
    ],
    demo: (
      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <Target className="w-4 h-4 text-purple-400" />
          </div>
          <span className="text-white text-sm">What's your primary goal?</span>
        </div>
        <div className="space-y-2">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-2 text-xs text-purple-300">
            ✓ Increase Sales & Revenue
          </div>
          <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-2 text-xs text-gray-400">
            Build Brand Awareness
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "budget-calculator",
    title: "Investment Planning Tool",
    description: "Get accurate project estimates with detailed cost breakdowns, timeline projections, and resource allocation",
    icon: <Calculator className="w-6 h-6" />,
    color: "#06b6d4",
    category: "Planning",
    benefits: [
      "Transparent pricing",
      "Detailed cost analysis",
      "Resource optimization",
      "Timeline forecasting",
    ],
    demo: (
      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
        <div className="text-center mb-3">
          <div className="text-2xl font-bold text-cyan-400">$25,000</div>
          <div className="text-xs text-gray-400">Estimated Project Cost</div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-gray-700/50 rounded p-2 text-center">
            <Clock className="w-3 h-3 mx-auto mb-1 text-purple-400" />
            <div className="text-white">12 weeks</div>
          </div>
          <div className="bg-gray-700/50 rounded p-2 text-center">
            <Users className="w-3 h-3 mx-auto mb-1 text-cyan-400" />
            <div className="text-white">4 people</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "website-analyzer",
    title: "Digital Performance Audit",
    description: "Comprehensive analysis of your digital presence including performance metrics, SEO optimization, user experience, and security assessment",
    icon: <Search className="w-6 h-6" />,
    color: "#10b981",
    category: "Analysis",
    benefits: ["Performance optimization", "SEO enhancement", "UX/UI improvements", "Security compliance"],
    demo: (
      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white text-sm">Overall Score</span>
          <span className="text-2xl font-bold text-green-400">78</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Performance</span>
            <span className="text-yellow-400">72</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">SEO</span>
            <span className="text-red-400">45</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Mobile</span>
            <span className="text-green-400">88</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "consultation-booking",
    title: "Strategic Consultation Booking",
    description: "Schedule personalized consultations with our digital transformation experts to discuss your business objectives and solution requirements",
    icon: <Calendar className="w-6 h-6" />,
    color: "#ec4899",
    category: "Consultation",
    benefits: ["Expert guidance", "Flexible scheduling", "Strategic planning", "Solution architecture"],
    demo: (
      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
        <div className="flex items-center space-x-3 mb-3">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
            alt="Expert"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="text-white text-sm">Alex Chen</div>
            <div className="text-gray-400 text-xs">CEO & Strategy</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 text-xs">
          <div className="bg-purple-500/20 border border-purple-500/30 rounded p-1 text-center text-purple-300">
            9:00 AM
          </div>
          <div className="bg-gray-700/50 border border-gray-600 rounded p-1 text-center text-gray-400">10:00 AM</div>
          <div className="bg-gray-700/50 border border-gray-600 rounded p-1 text-center text-gray-400">11:00 AM</div>
        </div>
      </div>
    ),
  },
]

const stats = [
  { label: "Tools Available", value: "4+", icon: <Zap className="w-5 h-5" /> },
  { label: "Minutes to Complete", value: "< 5", icon: <Clock className="w-5 h-5" /> },
  { label: "Accuracy Rate", value: "95%", icon: <Target className="w-5 h-5" /> },
  { label: "User Satisfaction", value: "98%", icon: <Users className="w-5 h-5" /> },
]

export function FeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="border-cyan-500/50 text-cyan-300 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Interactive Tools & Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Strategic Digital Solutions
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tailored for Your Business
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leverage our comprehensive suite of professional tools and services to streamline your digital transformation, optimize performance, and drive measurable business results.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="text-purple-400 mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${feature.color}20` }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div style={{ color: feature.color }}>{feature.icon}</div>
                      </motion.div>
                      <div>
                        <Badge variant="outline" className="border-gray-600 text-gray-300 mb-2">
                          {feature.category}
                        </Badge>
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm">Key Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Demo Preview */}
                  <AnimatePresence>
                    {(hoveredFeature === feature.id || activeFeature === feature.id) && feature.demo && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4"
                      >
                        {feature.demo}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 group-hover:border-purple-500 group-hover:text-purple-300 transition-all duration-300"
                    onClick={() => setActiveFeature(feature.id)}
                  >
                    Try {feature.title}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Features */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">More Tools Coming Soon</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: <Smartphone className="w-6 h-6" />, name: "Mobile App Tester", color: "#f59e0b" },
              { icon: <BarChart3 className="w-6 h-6" />, name: "Performance Monitor", color: "#3b82f6" },
              { icon: <Shield className="w-6 h-6" />, name: "Security Scanner", color: "#10b981" },
              { icon: <Users className="w-6 h-6" />, name: "Team Collaboration", color: "#ec4899" },
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-3 flex justify-center" style={{ color: tool.color }}>
                  {tool.icon}
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm">{tool.name}</h4>
                <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                  Coming Soon
                </Badge>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-2xl p-8 border border-purple-500/50">
            <h4 className="text-xl font-bold text-white mb-4">Early Access Program</h4>
            <p className="text-gray-300 mb-6">
              Join our exclusive early access program to be among the first to experience our advanced digital solutions. Get priority access to new features, dedicated support, and special pricing as we launch our comprehensive platform.
            </p>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              onClick={() => window.location.href = '/beta'}
            >
              Request Early Access
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
