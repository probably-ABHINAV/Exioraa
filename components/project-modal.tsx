"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { X, ExternalLink, Github, Calendar, Users, Target, ArrowRight } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  category: string
  image: string
  color: string
  fullDescription: string
  technologies: string[]
  duration: string
  team: string
  challenge: string
  solution: string
  results: string[]
  liveUrl?: string
  githubUrl?: string
  gallery: string[]
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-gray-800"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Hero Image */}
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
              <Image
                src={project.gallery[activeImageIndex] || project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                style={{
                  background: `linear-gradient(to top, ${project.color}20, transparent)`,
                }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge
                  className="mb-3"
                  style={{
                    backgroundColor: project.color,
                    color: "white",
                  }}
                >
                  {project.category}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-200 text-lg">{project.description}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Project Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-purple-400 mr-2" />
                      <span className="text-sm text-gray-400">Duration</span>
                    </div>
                    <p className="text-white font-semibold">{project.duration}</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-cyan-400 mr-2" />
                      <span className="text-sm text-gray-400">Team Size</span>
                    </div>
                    <p className="text-white font-semibold">{project.team}</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Target className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-sm text-gray-400">Category</span>
                    </div>
                    <p className="text-white font-semibold">{project.category}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{project.fullDescription}</p>

                  <h4 className="text-lg font-semibold text-white mb-3">The Challenge</h4>
                  <p className="text-gray-400 leading-relaxed mb-6">{project.challenge}</p>

                  <h4 className="text-lg font-semibold text-white mb-3">Our Solution</h4>
                  <p className="text-gray-400 leading-relaxed">{project.solution}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:border-gray-500"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start text-gray-400">
                        <ArrowRight className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image Gallery */}
              {project.gallery.length > 1 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Project Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer border-2 ${
                          activeImageIndex === index ? "border-purple-500" : "border-gray-700"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setActiveImageIndex(index)}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} gallery ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {project.liveUrl && (
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-800"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </Button>
                )}
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  Contact About This Project
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
