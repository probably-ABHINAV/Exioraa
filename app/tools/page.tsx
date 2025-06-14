"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import { InteractiveServiceExplorer } from "@/components/interactive-service-explorer"
import { BudgetCalculator } from "@/components/budget-calculator"
import { WebsiteAnalyzer } from "@/components/website-analyzer"
import { SchedulingSystem } from "@/components/scheduling-system"
import { ToolsFeaturesPage } from "@/components/tools-features-page"

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState<string | null>(null)

  const tools = [
    { id: "service-explorer", name: "Service Explorer", component: InteractiveServiceExplorer },
    { id: "budget-calculator", name: "Budget Calculator", component: BudgetCalculator },
    { id: "website-analyzer", name: "Website Analyzer", component: WebsiteAnalyzer },
    { id: "scheduling", name: "Book Consultation", component: SchedulingSystem },
  ]

  const ActiveComponent = activeTool ? tools.find((tool) => tool.id === activeTool)?.component : null

  if (activeTool && ActiveComponent) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-6 py-8">
          <Button
            variant="outline"
            onClick={() => setActiveTool(null)}
            className="border-gray-600 text-gray-300 hover:bg-gray-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-4">
              {tools.find((tool) => tool.id === activeTool)?.name}
            </Badge>
          </motion.div>

          <ActiveComponent />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        <Button
          variant="outline"
          onClick={() => window.history.back()}
          className="border-gray-600 text-gray-300 hover:bg-gray-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <ToolsFeaturesPage />

        {/* Tool Selection Handler */}
        <div className="hidden">
          {tools.map((tool) => (
            <button key={tool.id} onClick={() => setActiveTool(tool.id)} className="hidden" />
          ))}
        </div>
      </div>
    </div>
  )
}
