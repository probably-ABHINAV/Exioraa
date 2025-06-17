"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Calendar,
  BarChart3,
  BookOpen,
  Clock,
  User,
  Building,
} from "lucide-react"

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  budget: string
  timeline: string
  message: string
}

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Branding & Identity",
  "3D Design & Animation",
  "SEO & Marketing",
  "Consulting",
  "Other",
]

const budgets = ["Under $5K", "$5K - $15K", "$15K - $50K", "$50K - $100K", "$100K+", "Let's discuss"]

const timelines = ["ASAP", "1-2 months", "3-6 months", "6+ months", "Flexible"]

export function FunctionalContact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState<"contact" | "planning" | "analysis" | "booking">("contact")

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      })
    }, 3000)
  }

  const isFormValid = formData.name && formData.email && formData.service && formData.message

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
        <div className="bg-green-900/20 border border-green-500/50 rounded-2xl p-8 max-w-md mx-auto">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
          <p className="text-gray-300 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-2">What's Next?</h4>
            <ul className="text-gray-300 text-sm space-y-1 text-left">
              <li>• We'll review your project requirements</li>
              <li>• Schedule a discovery call within 24 hours</li>
              <li>• Provide a detailed proposal and timeline</li>
              <li>• Begin planning your digital solution</li>
            </ul>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="contact" data-section="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-6">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Start
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Your Project?
            </span>
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800/50 rounded-lg p-1 border border-gray-700">
            {[
              { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
              { id: "planning", label: "Planning", icon: <BookOpen className="w-4 h-4" /> },
              { id: "analysis", label: "Analysis", icon: <BarChart3 className="w-4 h-4" /> },
              { id: "booking", label: "Booking", icon: <Calendar className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                  activeTab === tab.id ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-8">
                {activeTab === "contact" && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="bg-gray-900/50 border-gray-600 text-white"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-gray-900/50 border-gray-600 text-white"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="bg-gray-900/50 border-gray-600 text-white"
                          placeholder="Company Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="bg-gray-900/50 border-gray-600 text-white"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Needed *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => handleInputChange("service", e.target.value)}
                        className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 text-white"
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => handleInputChange("budget", e.target.value)}
                          className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 text-white"
                        >
                          <option value="">Select budget</option>
                          {budgets.map((budget) => (
                            <option key={budget} value={budget}>
                              {budget}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => handleInputChange("timeline", e.target.value)}
                          className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 text-white"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((timeline) => (
                            <option key={timeline} value={timeline}>
                              {timeline}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="bg-gray-900/50 border-gray-600 text-white"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}

                {activeTab === "planning" && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Project Planning</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-900/50 rounded-lg p-6">
                        <BookOpen className="w-8 h-8 text-purple-400 mb-4" />
                        <h4 className="text-lg font-semibold text-white mb-2">Discovery Phase</h4>
                        <p className="text-gray-400 text-sm">
                          We analyze your requirements, target audience, and business goals to create a comprehensive
                          project roadmap.
                        </p>
                      </div>
                      <div className="bg-gray-900/50 rounded-lg p-6">
                        <User className="w-8 h-8 text-cyan-400 mb-4" />
                        <h4 className="text-lg font-semibold text-white mb-2">User Research</h4>
                        <p className="text-gray-400 text-sm">
                          Understanding your users' needs and behaviors to design solutions that truly resonate.
                        </p>
                      </div>
                      <div className="bg-gray-900/50 rounded-lg p-6">
                        <Building className="w-8 h-8 text-green-400 mb-4" />
                        <h4 className="text-lg font-semibold text-white mb-2">Architecture</h4>
                        <p className="text-gray-400 text-sm">
                          Designing scalable and maintainable system architecture for long-term success.
                        </p>
                      </div>
                      <div className="bg-gray-900/50 rounded-lg p-6">
                        <Clock className="w-8 h-8 text-orange-400 mb-4" />
                        <h4 className="text-lg font-semibold text-white mb-2">Timeline</h4>
                        <p className="text-gray-400 text-sm">
                          Creating realistic timelines with clear milestones and deliverables.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "analysis" && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Project Analysis</h3>
                    <div className="bg-gray-900/50 rounded-lg p-6">
                      <BarChart3 className="w-12 h-12 text-purple-400 mb-4" />
                      <h4 className="text-xl font-semibold text-white mb-4">Comprehensive Analysis</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Market Research</span>
                          <div className="w-32 bg-gray-700 rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full w-4/5"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Competitor Analysis</span>
                          <div className="w-32 bg-gray-700 rounded-full h-2">
                            <div className="bg-cyan-500 h-2 rounded-full w-3/5"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Technical Feasibility</span>
                          <div className="w-32 bg-gray-700 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full w-5/6"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">ROI Projection</span>
                          <div className="w-32 bg-gray-700 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full w-3/4"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "booking" && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Schedule a Consultation</h3>
                    <div className="bg-gray-900/50 rounded-lg p-6">
                      <Calendar className="w-12 h-12 text-purple-400 mb-4" />
                      <h4 className="text-xl font-semibold text-white mb-4">Book Your Free Consultation</h4>
                      <p className="text-gray-400 mb-6">
                        Schedule a 30-minute consultation to discuss your project requirements and get expert advice.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-purple-400">30min</div>
                          <div className="text-gray-300 text-sm">Free Consultation</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-cyan-400">24h</div>
                          <div className="text-gray-300 text-sm">Response Time</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-green-400">100%</div>
                          <div className="text-gray-300 text-sm">Satisfaction</div>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Now
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-gray-400 text-sm">hello@exioraa.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium">Phone</div>
                      <div className="text-gray-400 text-sm">+91 77xxxxxx02</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-white font-medium">Location</div>
                      <div className="text-gray-400 text-sm">Greater Noida,Delhi NCR</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">1+ years of experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">100+ successful projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">24/7 support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">Money-back guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}