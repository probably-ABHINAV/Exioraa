"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Grid, List, Star, Calendar, Users, ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout and advanced product filtering",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    color: "#8b5cf6",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "Tailwind CSS"],
    duration: "4 months",
    team: "5 developers",
    status: "Completed",
    year: "2024-2025",
    client: "Fashion Retailer",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure and intuitive financial management with biometric authentication",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    color: "#06b6d4",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Plaid API", "Biometric Auth"],
    duration: "6 months",
    team: "8 developers",
    status: "Completed",
    year: "2024-2025",
    client: "FinTech Startup",
    liveUrl: "https://app.example-bank.com",
  },
  {
    id: 3,
    title: "Brand Identity System",
    description: "Complete visual identity for tech startup with dynamic brand elements",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    color: "#ec4899",
    technologies: ["Adobe Creative Suite", "Figma", "After Effects", "Principle", "Sketch"],
    duration: "3 months",
    team: "4 designers",
    status: "Completed",
    year: "2024-2025",
    client: "AI Startup",
  },
  {
    id: 4,
    title: "3D Product Visualization",
    description: "Interactive 3D models for product showcase with real-time customization",
    category: "3D Design",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    color: "#10b981",
    technologies: ["Three.js", "Blender", "WebGL", "React", "Node.js", "AWS S3"],
    duration: "5 months",
    team: "6 developers",
    status: "Completed",
    year: "2024-2025",
    client: "Furniture Company",
    liveUrl: "https://3d.example-furniture.com",
    githubUrl: "https://github.com/example/3d-showcase",
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    description: "Data-driven interface for business analytics with customizable widgets",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "#f59e0b",
    technologies: ["React", "D3.js", "TypeScript", "GraphQL", "PostgreSQL", "Docker"],
    duration: "4 months",
    team: "7 developers",
    status: "Completed",
    year: "2024-2025",
    client: "SaaS Platform",
    liveUrl: "https://dashboard.example-saas.com",
  },
  {
    id: 6,
    title: "Marketing Website",
    description: "High-converting landing pages with advanced SEO optimization",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    color: "#3b82f6",
    technologies: ["Next.js", "TypeScript", "Sanity CMS", "Vercel", "Google Analytics", "Hotjar"],
    duration: "3 months",
    team: "4 developers",
    status: "Completed",
    year: "2024-2025",
    client: "B2B Software",
    liveUrl: "https://example-marketing.com",
    githubUrl: "https://github.com/example/marketing-site",
  },
  {
    id: 7,
    title: "Healthcare Platform",
    description: "Telemedicine platform with video consultations and patient management",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    color: "#ef4444",
    technologies: ["React", "Node.js", "WebRTC", "PostgreSQL", "Socket.io", "Stripe"],
    duration: "8 months",
    team: "10 developers",
    status: "In Progress",
    year: "2024-2025",
    client: "Healthcare Provider",
  },
  {
    id: 8,
    title: "AI Content Generator",
    description: "Machine learning powered content creation tool with natural language processing",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    color: "#8b5cf6",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Redis"],
    duration: "6 months",
    team: "6 developers",
    status: "In Progress",
    year: "2024-2025",
    client: "Content Agency",
  },
]

const categories = ["All", "Web Development", "App Development", "Branding", "3D Design", "UI/UX Design", "AI/ML"]
const statuses = ["All", "Completed", "In Progress", "Planning"]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeStatus, setActiveStatus] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = activeCategory === "All" || project.category === activeCategory
    const matchesStatus = activeStatus === "All" || project.status === activeStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Complete Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">All</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our complete collection of digital solutions, from web applications to AI-powered platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 border-b border-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-900/50 border-gray-700 text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  className={
                    activeCategory === category
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600"
                      : "border-gray-600 text-gray-300 hover:bg-gray-800"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Status Filter & View Mode */}
            <div className="flex items-center gap-4">
              <select
                value={activeStatus}
                onChange={(e) => setActiveStatus(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-white"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>

              <div className="flex border border-gray-700 rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-6 text-gray-400">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="text-xs" style={{ backgroundColor: project.color, color: "white" }}>
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                      <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {project.team}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-gray-700 text-gray-400 text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="border-gray-700 text-gray-400 text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <Button size="sm" variant="outline" className="flex-1 text-xs">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="outline" className="flex-1 text-xs">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-gray-900/50 rounded-2xl border border-gray-800 p-6 hover:border-gray-700 transition-all duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/3">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                          <p className="text-gray-400">{project.description}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge style={{ backgroundColor: project.color, color: "white" }}>{project.category}</Badge>
                          <Badge variant="outline" className="border-gray-600 text-gray-300">
                            {project.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 mb-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {project.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {project.team}
                        </div>
                        <div>Client: {project.client}</div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-gray-700 text-gray-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <Button variant="outline">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="outline">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                        )}
                        <Button>
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No projects found matching your criteria</div>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setActiveCategory("All")
                  setActiveStatus("All")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}