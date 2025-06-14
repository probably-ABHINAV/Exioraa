
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight, Users } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO, TechFlow Solutions",
    company: "TechFlow Solutions",
    content: "Exioraa transformed our digital presence completely. Their attention to detail and innovative approach resulted in a 300% increase in our online conversions. The team's expertise in both design and development is exceptional.",
    rating: 5,
    avatar: "RK",
    project: "E-commerce Platform Redesign",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Founder, EcoVibe",
    company: "EcoVibe",
    content: "Working with Exioraa was a game-changer for our startup. They delivered a beautiful, user-friendly mobile app that our customers love. The project was completed on time and within budget.",
    rating: 5,
    avatar: "PS",
    project: "Mobile App Development",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Marketing Director, GrowthLab",
    company: "GrowthLab",
    content: "The team at Exioraa doesn't just build websites; they craft digital experiences. Our new website not only looks stunning but also performs exceptionally well in search rankings.",
    rating: 5,
    avatar: "AP",
    project: "Website Development & SEO",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Product Manager, FinTech Innovations",
    company: "FinTech Innovations",
    content: "Exioraa's UI/UX design expertise helped us create an intuitive financial dashboard that our users find easy to navigate. The results speak for themselves - 85% improvement in user satisfaction.",
    rating: 5,
    avatar: "SR",
    project: "Dashboard UI/UX Design",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-4 sm:mb-6">
            <Users className="w-4 h-4 mr-2" />
            Client Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about their experience working with us.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Card className="bg-gray-800/50 border-gray-700 max-w-4xl w-full">
                <CardContent className="p-8 sm:p-12">
                  <div className="flex flex-col items-center text-center">
                    <Quote className="w-12 h-12 text-purple-400 mb-6" />
                    
                    <blockquote className="text-xl sm:text-2xl text-gray-100 mb-8 leading-relaxed max-w-3xl">
                      "{currentTestimonial.content}"
                    </blockquote>

                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{currentTestimonial.avatar}</span>
                      </div>
                      <div className="text-left">
                        <div className="text-white font-bold text-lg">{currentTestimonial.name}</div>
                        <div className="text-purple-400">{currentTestimonial.role}</div>
                        <div className="text-gray-400 text-sm">{currentTestimonial.company}</div>
                      </div>
                    </div>

                    <Badge variant="outline" className="mt-4 border-cyan-500/50 text-cyan-300">
                      {currentTestimonial.project}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-purple-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { number: "100+", label: "Happy Clients" },
            { number: "150+", label: "Projects Completed" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
