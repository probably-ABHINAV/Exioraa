"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Search, Smartphone, Zap, Shield, AlertTriangle, CheckCircle, XCircle, Globe, Clock, Eye } from "lucide-react"

interface AnalysisResult {
  category: string
  score: number
  status: "good" | "warning" | "error"
  issues: string[]
  recommendations: string[]
  icon: React.ReactNode
}

const mockAnalysisResults: AnalysisResult[] = [
  {
    category: "Performance",
    score: 72,
    status: "warning",
    issues: [
      "Large image files detected (2.3MB total)",
      "No image compression optimization",
      "Missing browser caching headers",
    ],
    recommendations: [
      "Compress images using WebP format",
      "Implement lazy loading for images",
      "Enable browser caching for static assets",
    ],
    icon: <Zap className="w-5 h-5" />,
  },
  {
    category: "SEO",
    score: 45,
    status: "error",
    issues: ["Missing meta descriptions on 8 pages", "No structured data markup", "Duplicate title tags found"],
    recommendations: [
      "Add unique meta descriptions to all pages",
      "Implement schema.org structured data",
      "Create unique, descriptive title tags",
    ],
    icon: <Search className="w-5 h-5" />,
  },
  {
    category: "Mobile Friendliness",
    score: 88,
    status: "good",
    issues: ["Small touch targets on navigation menu"],
    recommendations: ["Increase button sizes for better mobile usability", "Test on various mobile devices"],
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    category: "Security",
    score: 91,
    status: "good",
    issues: [],
    recommendations: ["Consider implementing Content Security Policy", "Regular security audits recommended"],
    icon: <Shield className="w-5 h-5" />,
  },
]

export function WebsiteAnalyzer() {
  const [url, setUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [email, setEmail] = useState("")
  const [showEmailCapture, setShowEmailCapture] = useState(false)

  const handleAnalyze = async () => {
    if (!url) return

    setIsAnalyzing(true)

    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsAnalyzing(false)
    setShowResults(true)

    // Show email capture after showing results
    setTimeout(() => setShowEmailCapture(true), 2000)
  }

  const getOverallScore = () => {
    return Math.round(mockAnalysisResults.reduce((sum, result) => sum + result.score, 0) / mockAnalysisResults.length)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400"
    if (score >= 60) return "text-yellow-400"
    return "text-red-400"
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good":
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
      case "error":
        return <XCircle className="w-5 h-5 text-red-400" />
      default:
        return null
    }
  }

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">Website Analysis Results</h3>
          <p className="text-gray-400 mb-4">
            Analysis for: <span className="text-purple-400">{url}</span>
          </p>

          <div className="inline-flex items-center space-x-4 bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <div className="text-center">
              <div className={`text-4xl font-bold ${getScoreColor(getOverallScore())}`}>{getOverallScore()}</div>
              <div className="text-gray-400">Overall Score</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <Globe className="w-6 h-6 mx-auto mb-1 text-blue-400" />
                <div className="text-white font-semibold">Live</div>
                <div className="text-gray-400 text-xs">Status</div>
              </div>
              <div>
                <Clock className="w-6 h-6 mx-auto mb-1 text-purple-400" />
                <div className="text-white font-semibold">2.3s</div>
                <div className="text-gray-400 text-xs">Load Time</div>
              </div>
              <div>
                <Eye className="w-6 h-6 mx-auto mb-1 text-cyan-400" />
                <div className="text-white font-semibold">Mobile</div>
                <div className="text-gray-400 text-xs">Ready</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 mb-8">
          {mockAnalysisResults.map((result, index) => (
            <motion.div
              key={result.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-purple-400">{result.icon}</div>
                      <span className="text-white">{result.category}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(result.status)}
                      <span className={`font-bold ${getScoreColor(result.score)}`}>{result.score}/100</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={result.score} className="mb-4" />

                  {result.issues.length > 0 && (
                    <div className="mb-4">
                      <h5 className="text-red-400 font-semibold mb-2">Issues Found:</h5>
                      <ul className="space-y-1">
                        {result.issues.map((issue, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start">
                            <XCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h5 className="text-green-400 font-semibold mb-2">Recommendations:</h5>
                    <ul className="space-y-1">
                      {result.recommendations.map((rec, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Email Capture */}
        {showEmailCapture && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-lg p-6 border border-purple-500/50"
          >
            <h4 className="text-xl font-bold text-white mb-4 text-center">Want a Detailed Report?</h4>
            <p className="text-gray-300 text-center mb-6">
              Get a comprehensive 20-page analysis with actionable recommendations sent to your email.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800/50 border-gray-700 text-white"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                Get Report
              </Button>
            </div>
          </motion.div>
        )}

        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => {
              setShowResults(false)
              setShowEmailCapture(false)
              setUrl("")
            }}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            Analyze Another Website
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-6">
          <Search className="w-4 h-4 mr-2" />
          Free Website Analysis
        </Badge>

        <h2 className="text-3xl font-bold text-white mb-4">Analyze Your Website Performance</h2>
        <p className="text-gray-400 mb-8">
          Get instant insights on your website's performance, SEO, mobile-friendliness, and security. Completely free,
          no signup required.
        </p>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <Input
                type="url"
                placeholder="Enter your website URL (e.g., https://example.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400"
                disabled={isAnalyzing}
              />
              <Button
                onClick={handleAnalyze}
                disabled={!url || isAnalyzing}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 min-w-[120px]"
              >
                {isAnalyzing ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </div>
                ) : (
                  "Analyze"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {isAnalyzing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h4 className="text-white font-semibold mb-4">Analyzing your website...</h4>
              <div className="space-y-3">
                {[
                  "Checking page load speed...",
                  "Analyzing SEO elements...",
                  "Testing mobile responsiveness...",
                  "Scanning for security issues...",
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.7 }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-400 mr-3"></div>
                    {step}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: <Zap className="w-6 h-6" />, label: "Performance", color: "text-yellow-400" },
            { icon: <Search className="w-6 h-6" />, label: "SEO", color: "text-green-400" },
            { icon: <Smartphone className="w-6 h-6" />, label: "Mobile", color: "text-blue-400" },
            { icon: <Shield className="w-6 h-6" />, label: "Security", color: "text-purple-400" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-800/30 rounded-lg p-4">
              <div className={`${item.color} mx-auto mb-2`}>{item.icon}</div>
              <div className="text-gray-300 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
