
"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Server, Smartphone, Database, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-500" },
      { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-teal-500" },
      { name: "Vue.js", level: 85, color: "from-green-500 to-emerald-500" }
    ]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    gradient: "from-purple-500 to-violet-500",
    skills: [
      { name: "Node.js", level: 93, color: "from-green-600 to-green-500" },
      { name: "Python", level: 88, color: "from-yellow-500 to-orange-500" },
      { name: "GraphQL", level: 85, color: "from-pink-500 to-rose-500" },
      { name: "REST APIs", level: 95, color: "from-purple-500 to-violet-500" }
    ]
  },
  {
    title: "Database & Cloud",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "PostgreSQL", level: 90, color: "from-blue-600 to-indigo-600" },
      { name: "MongoDB", level: 87, color: "from-green-600 to-green-500" },
      { name: "AWS", level: 82, color: "from-orange-500 to-yellow-500" },
      { name: "Docker", level: 85, color: "from-blue-500 to-cyan-500" }
    ]
  },
  {
    title: "Design & UX",
    icon: <Palette className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-500",
    skills: [
      { name: "UI/UX Design", level: 88, color: "from-pink-500 to-rose-500" },
      { name: "Figma", level: 92, color: "from-purple-500 to-pink-500" },
      { name: "Responsive Design", level: 95, color: "from-indigo-500 to-purple-500" },
      { name: "Animation", level: 80, color: "from-violet-500 to-purple-500" }
    ]
  }
]

function AnimatedProgress({ value, color, delay = 0 }: { value: number; color: string; delay?: number }) {
  const [progress, setProgress] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(value)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isInView, value, delay])

  return (
    <div ref={ref} className="w-full">
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-gray-700/50">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: delay / 1000 }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={{ x: ["0%", "100%"] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export function SkillProgressBars() {
  return (
    <section className="py-24 px-6 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Technical Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Skills &</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Proficiencies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise levels across different domains.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className={`bg-gradient-to-r ${category.gradient} p-2 rounded-lg`}>
                      {category.icon}
                    </div>
                    <span className="text-white">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <AnimatedProgress
                        value={skill.level}
                        color={skill.color}
                        delay={categoryIndex * 200 + skillIndex * 100}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { label: "Years Experience", value: "5+", icon: "🚀" },
            { label: "Technologies", value: "25+", icon: "⚡" },
            { label: "Projects Completed", value: "100+", icon: "✨" },
            { label: "Client Satisfaction", value: "99%", icon: "🎯" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-6 text-center backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
