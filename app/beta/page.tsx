"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Rocket, Sparkles, Zap, Star, ArrowRight, Mail, CheckCircle, Clock, Users, Gift } from "lucide-react"

const floatingElements = [
  { id: 1, x: 10, y: 20, delay: 0 },
  { id: 2, x: 80, y: 10, delay: 0.5 },
  { id: 3, x: 20, y: 70, delay: 1 },
  { id: 4, x: 90, y: 60, delay: 1.5 },
  { id: 5, x: 50, y: 30, delay: 2 },
  { id: 6, x: 70, y: 80, delay: 2.5 },
]

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Enterprise Performance",
    description: "Optimized platform delivering exceptional speed and reliability for business-critical operations",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI-Driven Insights",
    description: "Advanced analytics and intelligent automation to optimize your business processes",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Premium Access",
    description: "Early access to cutting-edge features and priority support from our expert team",
  },
]

export default function BetaPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30) // 30 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/30"></div>

        {/* Floating Elements */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-20"
            style={{ left: `${element.x}%`, top: `${element.y}%` }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-purple-500/20"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.01,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
              <Rocket className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Exioraa Beta
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Digital Excellence
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Launching Soon
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Be among the first to experience our comprehensive digital transformation platform. Join our exclusive early access program and gain priority access to advanced business solutions designed to accelerate your growth.
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {[
                { label: "Days", value: countdown.days },
                { label: "Hours", value: countdown.hours },
                { label: "Minutes", value: countdown.minutes },
                { label: "Seconds", value: countdown.seconds },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
                  animate={{
                    scale: item.label === "Seconds" ? [1, 1.05, 1] : 1,
                  }}
                  transition={{
                    duration: 1,
                    repeat: item.label === "Seconds" ? Number.POSITIVE_INFINITY : 0,
                  }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-purple-400 mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Email Signup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="max-w-md mx-auto"
                >
                  <form onSubmit={handleSubmit} className="flex gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 backdrop-blur-sm"
                      required
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-8"
                    >
                      {isLoading ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      ) : (
                        <>
                          Join Beta
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                  <p className="text-gray-400 text-sm mt-3">Join leading businesses preparing for digital transformation</p>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/20 border border-green-500/50 rounded-lg p-6 max-w-md mx-auto"
                >
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Welcome to Early Access</h3>
                  <p className="text-gray-300 mb-4">
                    Thank you for joining our exclusive early access program. We'll notify you when the platform is ready for preview.
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Gift className="w-4 h-4" />
                      Early access
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Beta community
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Beta Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: <Clock className="w-4 h-4" />, text: "Early Access" },
              { icon: <Star className="w-4 h-4" />, text: "Exclusive Features" },
              { icon: <Users className="w-4 h-4" />, text: "Beta Community" },
              { icon: <Gift className="w-4 h-4" />, text: "Special Pricing" },
            ].map((benefit, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-purple-500/50 text-purple-300 bg-purple-900/20 backdrop-blur-sm px-4 py-2"
              >
                {benefit.icon}
                <span className="ml-2">{benefit.text}</span>
              </Badge>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-4">Trusted by innovators worldwide</p>
            <div className="flex justify-center items-center gap-8 opacity-50">
              {["TechCorp", "InnovateLab", "FutureWorks", "DigitalPro"].map((company, index) => (
                <motion.div
                  key={company}
                  className="text-gray-500 font-semibold"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Action Elements */}
      <div className="fixed bottom-8 right-8 z-20">
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-full shadow-2xl"
            onClick={() => window.scrollTo({ top: document.querySelector('form')?.offsetTop || 0, behavior: 'smooth' })}
          >
            <Mail className="w-5 h-5 mr-2" />
            Get Notified
          </Button>
        </motion.div>
      </div>
    </div>
  )
}