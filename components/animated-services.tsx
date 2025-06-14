"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Smartphone, Search, Box, Brush, Database, Play, Layers } from "lucide-react"

const services = [
  {
    icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Website Development",
    description: "Custom websites built with modern frameworks, optimized for performance and scalability.",
    gradient: "from-blue-500 to-purple-600",
    delay: 0,
  },
  {
    icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    gradient: "from-purple-500 to-pink-600",
    delay: 0.1,
  },
  {
    icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "App Development",
    description: "Native and cross-platform mobile applications that users love to use.",
    gradient: "from-green-500 to-teal-600",
    delay: 0.2,
  },
  {
    icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "SEO Optimization",
    description: "Strategic SEO that drives organic traffic and improves search rankings.",
    gradient: "from-orange-500 to-red-600",
    delay: 0.3,
  },
  {
    icon: <Box className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "3D & Vector Art",
    description: "Stunning 3D models and vector graphics that bring your brand to life.",
    gradient: "from-cyan-500 to-blue-600",
    delay: 0.4,
  },
  {
    icon: <Brush className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Digital Branding",
    description: "Complete brand identity systems that resonate with your audience.",
    gradient: "from-pink-500 to-purple-600",
    delay: 0.5,
  },
  {
    icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "CMS & Backend",
    description: "Robust content management systems and scalable backend solutions.",
    gradient: "from-indigo-500 to-purple-600",
    delay: 0.6,
  },
  {
    icon: <Play className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Motion Graphics",
    description: "Dynamic animations and motion graphics that captivate and engage.",
    gradient: "from-yellow-500 to-orange-600",
    delay: 0.7,
  },
]

export function AnimatedServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="border-cyan-500/50 text-cyan-300 mb-4 sm:mb-6 text-xs sm:text-sm">
            <Layers className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Our Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Services That Drive
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Success
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            We combine creativity, technology, and strategy to deliver exceptional digital experiences.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="h-full"
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 group h-full">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <motion.div
                    className={`inline-flex p-2 sm:p-3 rounded-lg bg-gradient-to-r ${service.gradient} mb-4 sm:mb-6`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
