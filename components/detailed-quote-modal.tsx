
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Mail, Phone, Building, User } from "lucide-react"

interface DetailedQuoteModalProps {
  isOpen: boolean
  onClose: () => void
  estimatedCost: number
  selectedFeatures: string[]
  projectDetails: {
    complexity: string
    timeline: number
    teamSize: number
    includeSupport: boolean
    includeHosting: boolean
  }
}

export function DetailedQuoteModal({
  isOpen,
  onClose,
  estimatedCost,
  selectedFeatures,
  projectDetails,
}: DetailedQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Quote request submitted:", {
      ...formData,
      estimatedCost,
      selectedFeatures,
      projectDetails,
    })
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
      })
    }, 3000)
  }

  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md bg-gray-900 border-gray-700">
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">Quote Request Sent!</h3>
            <p className="text-gray-400">
              We'll get back to you within 24 hours with a detailed proposal.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-gray-900 border-gray-700 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">Get Detailed Quote</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project Summary */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-white font-bold mb-4">Project Summary</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Estimated Cost:</span>
                  <span className="text-white font-bold">{formatIndianCurrency(estimatedCost)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">Complexity:</span>
                  <Badge variant="outline" className="border-gray-600 text-gray-300 capitalize">
                    {projectDetails.complexity}
                  </Badge>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">Timeline:</span>
                  <span className="text-white">{projectDetails.timeline} weeks</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">Team Size:</span>
                  <span className="text-white">{projectDetails.teamSize} people</span>
                </div>
              </div>

              {selectedFeatures.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-white font-semibold mb-2">Selected Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedFeatures.slice(0, 6).map((feature) => (
                      <Badge key={feature} variant="outline" className="border-purple-500/50 text-purple-300 text-xs">
                        {feature.replace("-", " ")}
                      </Badge>
                    ))}
                    {selectedFeatures.length > 6 && (
                      <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                        +{selectedFeatures.length - 6} more
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-white">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-white">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="text-white">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div>
                <Label htmlFor="company" className="text-white">
                  <Building className="w-4 h-4 inline mr-2" />
                  Company Name
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="projectType" className="text-white">Project Type</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="mobile-app">Mobile App</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="design">Design Services</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="budget" className="text-white">Budget Range</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                    <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                    <SelectItem value="1l-2l">₹1,00,000 - ₹2,00,000</SelectItem>
                    <SelectItem value="2l+">₹2,00,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="timeline" className="text-white">Preferred Timeline</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="When do you need this completed?" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="asap">ASAP (Rush)</SelectItem>
                  <SelectItem value="1-month">Within 1 month</SelectItem>
                  <SelectItem value="2-3-months">2-3 months</SelectItem>
                  <SelectItem value="flexible">Flexible timeline</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description" className="text-white">Project Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-gray-800 border-gray-600 text-white min-h-[100px]"
                placeholder="Tell us more about your project requirements, goals, and any specific features you need..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
            >
              Send Detailed Quote Request
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
