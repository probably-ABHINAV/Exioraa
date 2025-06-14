"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, Target, Lightbulb, CheckCircle } from "lucide-react"

interface Question {
  id: string
  question: string
  options: Array<{
    id: string
    label: string
    value: string
    icon?: React.ReactNode
  }>
}

interface ServiceRecommendation {
  service: string
  confidence: number
  reason: string
  color: string
  icon: React.ReactNode
}

const questions: Question[] = [
  {
    id: "goal",
    question: "What's your primary business goal?",
    options: [
      { id: "growth", label: "Increase Sales & Revenue", value: "growth", icon: <Target className="w-5 h-5" /> },
      { id: "brand", label: "Build Brand Awareness", value: "brand", icon: <Lightbulb className="w-5 h-5" /> },
      { id: "efficiency", label: "Improve Operations", value: "efficiency", icon: <CheckCircle className="w-5 h-5" /> },
      { id: "digital", label: "Digital Transformation", value: "digital", icon: <ArrowRight className="w-5 h-5" /> },
    ],
  },
  {
    id: "industry",
    question: "What industry are you in?",
    options: [
      { id: "ecommerce", label: "E-commerce & Retail", value: "ecommerce" },
      { id: "fintech", label: "Finance & Banking", value: "fintech" },
      { id: "healthcare", label: "Healthcare & Medical", value: "healthcare" },
      { id: "tech", label: "Technology & SaaS", value: "tech" },
      { id: "education", label: "Education & Training", value: "education" },
      { id: "other", label: "Other", value: "other" },
    ],
  },
  {
    id: "challenge",
    question: "What's your biggest digital challenge?",
    options: [
      { id: "website", label: "Outdated Website", value: "website" },
      { id: "mobile", label: "Need Mobile App", value: "mobile" },
      { id: "branding", label: "Inconsistent Branding", value: "branding" },
      { id: "conversion", label: "Low Conversion Rates", value: "conversion" },
      { id: "visibility", label: "Poor Online Visibility", value: "visibility" },
    ],
  },
  {
    id: "timeline",
    question: "What's your preferred timeline?",
    options: [
      { id: "urgent", label: "ASAP (1-2 months)", value: "urgent" },
      { id: "normal", label: "Standard (3-4 months)", value: "normal" },
      { id: "flexible", label: "Flexible (6+ months)", value: "flexible" },
    ],
  },
]

const serviceRecommendations: Record<string, ServiceRecommendation[]> = {
  "growth-ecommerce-website": [
    {
      service: "E-Commerce Platform Development",
      confidence: 95,
      reason: "Perfect for increasing sales with a modern, conversion-optimized platform",
      color: "#8b5cf6",
      icon: <Target className="w-6 h-6" />,
    },
    {
      service: "SEO Optimization",
      confidence: 85,
      reason: "Essential for driving organic traffic to your new platform",
      color: "#06b6d4",
      icon: <Lightbulb className="w-6 h-6" />,
    },
  ],
  "brand-tech-branding": [
    {
      service: "Brand Identity System",
      confidence: 98,
      reason: "Complete brand overhaul to establish strong market presence",
      color: "#ec4899",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      service: "Marketing Website",
      confidence: 90,
      reason: "Professional website to showcase your new brand identity",
      color: "#10b981",
      icon: <ArrowRight className="w-6 h-6" />,
    },
  ],
  // Add more combinations...
  default: [
    {
      service: "Website Development",
      confidence: 80,
      reason: "A modern website is the foundation of digital success",
      color: "#8b5cf6",
      icon: <Target className="w-6 h-6" />,
    },
    {
      service: "UI/UX Design",
      confidence: 75,
      reason: "Great user experience drives better business results",
      color: "#06b6d4",
      icon: <Lightbulb className="w-6 h-6" />,
    },
  ],
}

export function InteractiveServiceExplorer() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const progress = ((currentStep + 1) / questions.length) * 100

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300)
    } else {
      setTimeout(() => setShowResults(true), 300)
    }
  }

  const getRecommendations = (): ServiceRecommendation[] => {
    const key = `${answers.goal}-${answers.industry}-${answers.challenge}`
    return serviceRecommendations[key] || serviceRecommendations.default
  }

  const resetExplorer = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    const recommendations = getRecommendations()

    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">Your Personalized Recommendations</h3>
          <p className="text-gray-400">
            Based on your answers, here are the services that would best help you achieve your goals:
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg" style={{ backgroundColor: `${rec.color}20` }}>
                        <div style={{ color: rec.color }}>{rec.icon}</div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{rec.service}</h4>
                        <p className="text-gray-400">{rec.reason}</p>
                      </div>
                    </div>
                    <Badge className="text-white" style={{ backgroundColor: rec.color }}>
                      {rec.confidence}% Match
                    </Badge>
                  </div>
                  <Progress value={rec.confidence} className="mb-4" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
          >
            Get a Custom Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" onClick={resetExplorer} className="border-gray-600 text-gray-300 hover:bg-gray-800">
            Start Over
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-400">
            Question {currentStep + 1} of {questions.length}
          </span>
          <span className="text-sm text-gray-400">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="mb-6" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{questions[currentStep].question}</h3>

              <div className="grid gap-3">
                {questions[currentStep].options.map((option) => (
                  <motion.button
                    key={option.id}
                    className="flex items-center space-x-3 p-4 rounded-lg border border-gray-600 hover:border-purple-500 hover:bg-gray-700/50 transition-all duration-300 text-left group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                  >
                    {option.icon && (
                      <div className="text-gray-400 group-hover:text-purple-400 transition-colors">{option.icon}</div>
                    )}
                    <span className="text-white group-hover:text-purple-300 transition-colors">{option.label}</span>
                  </motion.button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {currentStep > 0 && (
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(currentStep - 1)}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Previous Question
          </Button>
        </div>
      )}
    </div>
  )
}
