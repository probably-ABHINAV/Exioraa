"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Calculator, DollarSign, Clock, Users } from "lucide-react"

interface ProjectFeature {
  id: string
  name: string
  basePrice: number
  description: string
  category: string
}

const projectFeatures: ProjectFeature[] = [
  // Web Development
  {
    id: "basic-website",
    name: "Basic Website (5-10 pages)",
    basePrice: 25000, // ₹25,000 (was $5,000)
    description: "Landing page, about, services, contact",
    category: "web",
  },
  {
    id: "ecommerce",
    name: "E-commerce Platform",
    basePrice: 75000, // ₹75,000 (was $15,000)
    description: "Online store with payment integration",
    category: "web",
  },
  {
    id: "custom-webapp",
    name: "Custom Web Application",
    basePrice: 150000, // ₹1,50,000 (was $25,000)
    description: "Complex functionality and user management",
    category: "web",
  },

  // Mobile Development
  {
    id: "mobile-app",
    name: "Mobile App (iOS/Android)",
    basePrice: 120000, // ₹1,20,000 (was $20,000)
    description: "Native or cross-platform mobile application",
    category: "mobile",
  },
  {
    id: "app-backend",
    name: "Backend API",
    basePrice: 50000, // ₹50,000 (was $8,000)
    description: "Server-side logic and database",
    category: "mobile",
  },

  // Design
  {
    id: "ui-design",
    name: "UI/UX Design",
    basePrice: 20000, // ₹20,000 (was $4,000)
    description: "User interface and experience design",
    category: "design",
  },
  {
    id: "branding",
    name: "Brand Identity",
    basePrice: 35000, // ₹35,000 (was $6,000)
    description: "Logo, colors, typography, guidelines",
    category: "design",
  },
  {
    id: "design-system",
    name: "Design System",
    basePrice: 45000, // ₹45,000 (was $8,000)
    description: "Comprehensive component library",
    category: "design",
  },

  // Additional Services
  {
    id: "seo",
    name: "SEO Optimization",
    basePrice: 15000, // ₹15,000 (was $2,000)
    description: "Search engine optimization setup",
    category: "marketing",
  },
  {
    id: "cms",
    name: "Content Management System",
    basePrice: 18000, // ₹18,000 (was $3,000)
    description: "Easy content editing capabilities",
    category: "web",
  },
  {
    id: "analytics",
    name: "Analytics & Tracking",
    basePrice: 8000, // ₹8,000 (was $1,500)
    description: "Performance monitoring setup",
    category: "marketing",
  },
]

const complexityMultipliers = {
  simple: { label: "Simple", multiplier: 0.8, description: "Basic functionality, standard design" },
  medium: { label: "Medium", multiplier: 1.0, description: "Custom features, unique design elements" },
  complex: { label: "Complex", multiplier: 1.5, description: "Advanced functionality, integrations" },
  enterprise: { label: "Enterprise", multiplier: 2.0, description: "Large scale, multiple integrations" },
}

export function BudgetCalculator() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [complexity, setComplexity] = useState<keyof typeof complexityMultipliers>("medium")
  const [timeline, setTimeline] = useState([12]) // weeks
  const [teamSize, setTeamSize] = useState([3])
  const [includeSupport, setIncludeSupport] = useState(false)
  const [includeHosting, setIncludeHosting] = useState(false)

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId],
    )
  }

  const calculateTotal = () => {
    const baseTotal = selectedFeatures.reduce((total, featureId) => {
      const feature = projectFeatures.find((f) => f.id === featureId)
      return total + (feature?.basePrice || 0)
    }, 0)

    const complexityAdjusted = baseTotal * complexityMultipliers[complexity].multiplier

    // Timeline adjustment (rush jobs cost more)
    const timelineMultiplier = timeline[0] < 8 ? 1.3 : timeline[0]ne[0] < 12 ? 1.1 : 1.0

    // Team size adjustment
    const teamMultiplier = 1 + (teamSize[0] - 3) * 0.1

    let finalTotal = complexityAdjusted * timelineMultiplier * teamMultiplier

    // Add-ons
    if (includeSupport) finalTotal += finalTotal * 0.15 // 15% for support
    if (includeHosting) finalTotal += 12000 // ₹12,000 for hosting setup

    return Math.round(finalTotal)
  }

  const getTimelineEstimate = () => {
    const baseWeeks = selectedFeatures.length * 2
    const complexityWeeks = baseWeeks * complexityMultipliers[complexity].multiplier
    return Math.max(4, Math.round(complexityWeeks))
  }

  const categorizedFeatures = projectFeatures.reduce(
    (acc, feature) => {
      if (!acc[feature.category]) acc[feature.category] = []
      acc[feature.category].push(feature)
      return acc
    },
    {} as Record<string, ProjectFeature[]>,
  )

  const categoryLabels = {
    web: "Web Development",
    mobile: "Mobile Development",
    design: "Design Services",
    marketing: "Marketing & SEO",
  }

  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
    }).format(amount)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-4">
          <Calculator className="w-4 h-4 mr-2" />
          Project Calculator
        </Badge>
        <h2 className="text-3xl font-bold text-white mb-4">Estimate Your Project Cost</h2>
        <p className="text-gray-400">Get a ballpark estimate for your digital project in Indian Rupees</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project Features */}
          {Object.entries(categorizedFeatures).map(([category, features]) => (
            <Card key={category} className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">{categoryLabels[category as keyof typeof categoryLabels]}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {features.map((feature) => (
                    <motion.div
                      key={feature.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                        selectedFeatures.includes(feature.id)
                          ? "border-purple-500 bg-purple-500/10"
                          : "border-gray-600 hover:border-gray-500"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => toggleFeature(feature.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-white font-semibold">{feature.name}</h4>
                          <p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                        <Badge variant="outline" className="border-gray-600 text-gray-300">
                          {formatIndianCurrency(feature.basePrice)}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Project Settings */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Project Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Complexity */}
              <div>
                <label className="text-white font-semibold mb-3 block">Project Complexity</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {Object.entries(complexityMultipliers).map(([key, value]) => (
                    <button
                      key={key}
                      className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                        complexity === key
                          ? "border-purple-500 bg-purple-500/10 text-purple-300"
                          : "border-gray-600 text-gray-300 hover:border-gray-500"
                      }`}
                      onClick={() => setComplexity(key as keyof typeof complexityMultipliers)}
                    >
                      <div className="font-semibold">{value.label}</div>
                      <div className="text-xs opacity-75">{value.multiplier}x</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="text-white font-semibold mb-3 block">Preferred Timeline: {timeline[0]} weeks</label>
                <Slider value={timeline} onValueChange={setTimeline} max={24} min={4} step={2} className="w-full" />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>4 weeks (Rush)</span>
                  <span>24 weeks (Flexible)</span>
                </div>
              </div>

              {/* Team Size */}
              <div>
                <label className="text-white font-semibold mb-3 block">Team Size: {teamSize[0]} people</label>
                <Slider value={teamSize} onValueChange={setTeamSize} max={8} min={1} step={1} className="w-full" />
              </div>

              {/* Add-ons */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white font-semibold">Ongoing Support</span>
                    <p className="text-gray-400 text-sm">6 months of maintenance & updates</p>
                  </div>
                  <Switch checked={includeSupport} onCheckedChange={setIncludeSupport} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white font-semibold">Hosting Setup</span>
                    <p className="text-gray-400 text-sm">Domain, hosting, and deployment</p>
                  </div>
                  <Switch checked={includeHosting} onCheckedChange={setIncludeHosting} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Panel */}
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 border-purple-500/50 sticky top-24">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                Project Estimate
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{formatIndianCurrency(calculateTotal())}</div>
                <p className="text-gray-300">Estimated Total Cost</p>
                <p className="text-gray-400 text-sm">*Excluding GST (18%)</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <Clock className="w-5 h-5 mx-auto mb-1 text-purple-400" />
                  <div className="text-white font-semibold">{getTimelineEstimate()} weeks</div>
                  <div className="text-gray-400 text-xs">Timeline</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <Users className="w-5 h-5 mx-auto mb-1 text-cyan-400" />
                  <div className="text-white font-semibold">{teamSize[0]} people</div>
                  <div className="text-gray-400 text-xs">Team Size</div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Base Cost:</span>
                  <span>
                    {formatIndianCurrency(
                      selectedFeatures.reduce((total, id) => {
                        const feature = projectFeatures.find((f) => f.id === id)
                        return total + (feature?.basePrice || 0)
                      }, 0),
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Complexity ({complexityMultipliers[complexity].label}):</span>
                  <span>{complexityMultipliers[complexity].multiplier}x</span>
                </div>
                {timeline[0] < 12 && (
                  <div className="flex justify-between text-gray-300">
                    <span>Rush Timeline:</span>
                    <span>+{timeline[0] < 8 ? "30" : "10"}%</span>
                  </div>
                )}
                {includeSupport && (
                  <div className="flex justify-between text-gray-300">
                    <span>Support Package:</span>
                    <span>+15%</span>
                  </div>
                )}
                {includeHosting && (
                  <div className="flex justify-between text-gray-300">
                    <span>Hosting Setup:</span>
                    <span>+₹12,000</span>
                  </div>
                )}
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                Get Detailed Quote
              </Button>

              <div className="text-xs text-gray-400 text-center space-y-1">
                <p>This is an estimate. Final pricing may vary based on specific requirements.</p>
                <p>All prices are in Indian Rupees (INR)</p>
                <p>GST (18%) will be added as per Indian tax regulations</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
