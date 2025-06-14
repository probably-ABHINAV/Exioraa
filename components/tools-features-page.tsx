"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, Search, Calendar, Lightbulb, Palette, Code, BarChart3, Smartphone, Zap } from "lucide-react"
import { InteractiveServiceExplorer } from "./interactive-service-explorer"
import { BudgetCalculator } from "./budget-calculator"
import { WebsiteAnalyzer } from "./website-analyzer"
import { SchedulingSystem } from "./scheduling-system"

interface Tool {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  category: string
  color: string
  component: React.ComponentType
}

const tools: Tool[] = [
  {
    id: "service-explorer",
    name: "Service Explorer",
    description: "Get personalized service recommendations based on your business goals",
    icon: <Lightbulb className="w-6 h-6" />,
    category: "Planning",
    color: "#8b5cf6",
    component: InteractiveServiceExplorer,
  },
  {
    id: "budget-calculator",
    name: "Budget Calculator",
    description: "Estimate your project cost with our interactive calculator",
    icon: <Calculator className="w-6 h-6" />,
    category: "Planning",
    color: "#06b6d4",
    component: BudgetCalculator,
  },
  {
    id: "website-analyzer",
    name: "Website Analyzer",
    description: "Free analysis of your website's performance, SEO, and mobile-friendliness",
    icon: <Search className="w-6 h-6" />,
    category: "Analysis",
    color: "#10b981",
    component: WebsiteAnalyzer,
  },
  {
    id: "scheduling",
    name: "Book Consultation",
    description: "Schedule a free consultation with our experts",
    icon: <Calendar className="w-6 h-6" />,
    category: "Booking",
    color: "#ec4899",
    component: SchedulingSystem,
  },
]

const categories = ["All", "Planning", "Analysis", "Booking"]

export function ToolsFeaturesPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeTool, setActiveTool] = useState<string | null>(null)

  const filteredTools = activeCategory === "All" ? tools : tools.filter((tool) => tool.category === activeCategory)

  const ActiveComponent = activeTool ? tools.find((tool) => tool.id === activeTool)?.component : null

  if (activeTool && ActiveComponent) {
    return (
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => setActiveTool(null)}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 mb-4"
            >
              ← Back to Tools
            </Button>
          </div>

          <ActiveComponent />
        </div>
      </section>
    )
  }

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
            Free Tools & Resources
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powerful Tools to
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Accelerate Your Success
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our collection of free tools designed to help you plan, analyze, and optimize your digital presence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className={
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredTools.map((tool, index) => (
              <motion.div
                key={`${tool.id}-${activeCategory}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 group h-full cursor-pointer">
                  <CardContent className="p-6" onClick={() => setActiveTool(tool.id)}>
                    <motion.div
                      className="inline-flex p-4 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${tool.color}20` }}
                    >
                      <div style={{ color: tool.color }}>{tool.icon}</div>
                    </motion.div>

                    <Badge variant="outline" className="border-gray-600 text-gray-300 mb-3">
                      {tool.category}
                    </Badge>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {tool.name}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">{tool.description}</p>

                    <motion.div
                      className="flex items-center text-purple-400 group-hover:text-cyan-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-semibold">Try it now</span>
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        →
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Additional Features Preview */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">More Tools Coming Soon</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Palette className="w-8 h-8" />, name: "Color Palette Generator", status: "Coming Soon" },
              { icon: <Code className="w-8 h-8" />, name: "Code Snippet Library", status: "Coming Soon" },
              { icon: <BarChart3 className="w-8 h-8" />, name: "Performance Monitor", status: "Coming Soon" },
              { icon: <Smartphone className="w-8 h-8" />, name: "Mobile Tester", status: "Coming Soon" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/30 rounded-lg p-6 border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-gray-400 mb-3">{feature.icon}</div>
                <h4 className="text-white font-semibold mb-2">{feature.name}</h4>
                <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                  {feature.status}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-2xl p-8 border border-purple-500/50">
            <h3 className="text-2xl font-bold text-white mb-4">Need Something Custom?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our tools are just the beginning. Let's discuss how we can create custom solutions tailored specifically
              to your business needs.
            </p>
            <Button
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              onClick={() => setActiveTool("scheduling")}
            >
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
