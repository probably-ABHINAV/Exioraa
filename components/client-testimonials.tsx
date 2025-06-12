
'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO, TechStart India",
    company: "TechStart India",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "Exioraa transformed our outdated website into a modern, high-performing platform. Their expertise in React and Next.js is exceptional. We saw a 300% increase in user engagement within the first month.",
    project: "E-commerce Platform",
    results: "300% increase in engagement"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Founder, HealthTech Solutions",
    company: "HealthTech Solutions",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "The mobile app Exioraa developed for us is incredibly intuitive and robust. Their attention to detail and user experience design principles really shine through. Highly recommended!",
    project: "Healthcare Mobile App",
    results: "4.9★ App Store Rating"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Marketing Director, GreenEnergi",
    company: "GreenEnergi",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "Working with Exioraa was a game-changer. They didn't just build our platform; they understood our vision and brought innovative solutions we hadn't even considered.",
    project: "SaaS Dashboard",
    results: "90% user adoption rate"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Co-founder, EduLearn",
    company: "EduLearn",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "The team at Exioraa delivered exceptional work on our educational platform. Their technical expertise combined with creative design thinking made all the difference.",
    project: "EdTech Platform",
    results: "50K+ active users"
  }
]

const companyLogos = [
  "TechStart India", "HealthTech Solutions", "GreenEnergi", "EduLearn", 
  "FinanceFlow", "RetailMax", "CloudNine", "DataVision"
]

export function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="border-cyan-500/50 text-cyan-300 mb-6">
            <Star className="w-4 h-4 mr-2" />
            Client Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Trusted by</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients say about working with Exioraa.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          key={currentTestimonial.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-purple-500/30">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <Quote className="w-12 h-12 text-purple-400 mb-6" />
                  <blockquote className="text-xl lg:text-2xl text-white mb-6 leading-relaxed">
                    "{currentTestimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} />
                        <AvatarFallback className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                          {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-white font-semibold">{currentTestimonial.name}</div>
                        <div className="text-gray-400">{currentTestimonial.role}</div>
                        <div className="text-purple-400 text-sm">{currentTestimonial.company}</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-400">{currentTestimonial.project}</div>
                      <div className="text-sm text-cyan-400 font-semibold">{currentTestimonial.results}</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-16">
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="border-gray-600 text-gray-400 hover:text-white hover:border-purple-500"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-purple-500 w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="border-gray-600 text-gray-400 hover:text-white hover:border-purple-500"
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-8">Trusted by companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-purple-500/50 transition-colors"
              >
                <div className="text-gray-400 text-sm font-medium">{company}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
