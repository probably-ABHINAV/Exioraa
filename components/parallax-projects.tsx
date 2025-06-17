"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Filter } from "lucide-react"
import Image from "next/image"
import { ProjectModal } from "./project-modal"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    color: "#8b5cf6",
    fullDescription:
      "A comprehensive e-commerce platform built for a fashion retailer, featuring advanced product filtering, real-time inventory management, and a streamlined checkout process. The platform handles over 10,000 products and serves customers across multiple countries.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "Tailwind CSS"],
    duration: "4 months",
    team: "5 developers",
    challenge:
      "The client needed a scalable e-commerce solution that could handle high traffic during sales events while providing a smooth user experience across all devices.",
    solution:
      "We implemented a microservices architecture with advanced caching strategies, progressive web app features, and optimized the checkout flow to reduce cart abandonment by 40%.",
    results: [
      "300% increase in conversion rates",
      "50% reduction in page load times",
      "40% decrease in cart abandonment",
      "99.9% uptime during peak sales",
    ],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=700&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=650&h=450&fit=crop",
    ],
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive financial management",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    color: "#06b6d4",
    fullDescription:
      "A cutting-edge mobile banking application that revolutionizes personal finance management. Features include biometric authentication, real-time transaction tracking, budget planning tools, and seamless money transfers.",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Plaid API", "Biometric Auth"],
    duration: "6 months",
    team: "8 developers",
    challenge:
      "Creating a secure, user-friendly banking app that meets strict financial regulations while providing innovative features that differentiate it from competitors.",
    solution:
      "We implemented bank-grade security with biometric authentication, real-time fraud detection, and an intuitive UI that makes complex financial operations simple and accessible.",
    results: [
      "500K+ downloads in first quarter",
      "4.8/5 app store rating",
      "60% increase in user engagement",
      "Zero security incidents",
    ],
    liveUrl: "https://app.example-bank.com",
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=700&h=500&fit=crop",
    ],
  },
  {
    title: "Brand Identity System",
    description: "Complete visual identity for tech startup",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    color: "#ec4899",
    fullDescription:
      "A comprehensive brand identity system for an AI startup, including logo design, color palette, typography, marketing materials, and brand guidelines. The identity reflects innovation while maintaining approachability.",
    technologies: ["Adobe Creative Suite", "Figma", "After Effects", "Principle", "Sketch"],
    duration: "3 months",
    team: "4 designers",
    challenge:
      "Creating a brand identity that communicates cutting-edge AI technology while remaining approachable and trustworthy to enterprise clients.",
    solution:
      "We developed a modular brand system with dynamic elements that adapt across different touchpoints, combining geometric precision with organic curves to represent the balance between technology and humanity.",
    results: [
      "200% increase in brand recognition",
      "150% boost in website engagement",
      "300% growth in social media following",
      "Won 3 design awards",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=700&h=500&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=650&h=450&fit=crop",
    ],
  },
  {
    title: "3D Product Visualization",
    description: "Interactive 3D models for product showcase",
    category: "3D Design",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    color: "#10b981",
    fullDescription:
      "An immersive 3D product visualization platform for a furniture company, allowing customers to view, customize, and interact with products in photorealistic detail before purchase.",
    technologies: ["Three.js", "Blender", "WebGL", "React", "Node.js", "AWS S3"],
    duration: "5 months",
    team: "6 developers",
    challenge:
      "Creating photorealistic 3D models that load quickly on web browsers while providing smooth interaction and customization options.",
    solution:
      "We optimized 3D models using advanced compression techniques, implemented progressive loading, and created an intuitive interface for real-time customization.",
    results: [
      "85% reduction in product returns",
      "120% increase in online sales",
      "70% improvement in customer satisfaction",
      "Featured in design publications",
    ],
    liveUrl: "https://3d.example-furniture.com",
    githubUrl: "https://github.com/example/3d-showcase",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&h=500&fit=crop",
    ],
  },
  {
    title: "SaaS Dashboard",
    description: "Data-driven interface for business analytics",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "#f59e0b",
    fullDescription:
      "A comprehensive analytics dashboard for a SaaS platform, providing real-time insights, customizable reports, and intuitive data visualization for business intelligence.",
    technologies: ["React", "D3.js", "TypeScript", "GraphQL", "PostgreSQL", "Docker"],
    duration: "4 months",
    team: "7 developers",
    challenge:
      "Designing a dashboard that can handle complex data sets while remaining intuitive for users with varying technical expertise.",
    solution:
      "We created a modular dashboard system with drag-and-drop widgets, intelligent data filtering, and progressive disclosure to manage complexity.",
    results: [
      "90% user adoption rate",
      "50% reduction in support tickets",
      "200% increase in data engagement",
      "Industry recognition for UX design",
    ],
    liveUrl: "https://dashboard.example-saas.com",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=650&h=450&fit=crop",
    ],
  },
  {
    title: "Marketing Website",
    description: "High-converting landing pages with SEO optimization",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    color: "#3b82f6",
    fullDescription:
      "A high-performance marketing website with advanced SEO optimization, A/B testing capabilities, and conversion-focused design for a B2B software company.",
    technologies: ["Next.js", "TypeScript", "Sanity CMS", "Vercel", "Google Analytics", "Hotjar"],
    duration: "3 months",
    team: "4 developers",
    challenge:
      "Creating a website that ranks highly in search results while maintaining fast load times and high conversion rates.",
    solution:
      "We implemented advanced SEO strategies, optimized for Core Web Vitals, and used data-driven design decisions based on user behavior analysis.",
    results: [
      "400% increase in organic traffic",
      "250% improvement in conversion rate",
      "95+ PageSpeed Insights score",
      "Top 3 ranking for target keywords",
    ],
    liveUrl: "https://example-marketing.com",
    githubUrl: "https://github.com/example/marketing-site",
    gallery: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&h=500&fit=crop",
    ],
  },
]

const categories = ["All", "Web Development", "App Development", "Branding", "3D Design", "UI/UX Design"]

export function ParallaxProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const yOffset1 = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const yOffset2 = useTransform(scrollYProgress, [0, 1], [50, -50])

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  const handleViewProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section ref={containerRef} id="work" data-section="work" className="relative py-24 px-6 bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
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
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Our Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Featured</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Explore our latest projects and see how we've helped brands achieve their digital goals.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 mt-2" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className={`text-xs sm:text-sm ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="relative">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0
            const yOffset = isEven ? yOffset1 : yOffset2

            return (
              <motion.div
                key={`${project.title}-${activeCategory}`}
                className="mb-16 sm:mb-24 lg:mb-32 relative z-10"
                style={{
                  y: yOffset,
                }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                layout
              >
                <div
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-6 sm:gap-8`}
                >
                  <motion.div
                    className="w-full lg:w-1/2 relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-2xl blur-2xl opacity-30"
                      style={{ backgroundColor: project.color }}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                    <motion.div
                      className="relative overflow-hidden rounded-2xl border border-gray-800 group perspective cursor-pointer"
                      whileHover={{
                        rotateY: isEven ? 5 : -5,
                        rotateX: 2,
                        scale: 1.05,
                      }}
                      transition={{ duration: 0.3 }}
                      onClick={() => handleViewProject(project)}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute bottom-4 left-4 right-4">
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            <Badge
                              className="mb-2 text-xs sm:text-sm"
                              style={{
                                backgroundColor: project.color,
                                color: "white",
                              }}
                            >
                              {project.category}
                            </Badge>
                            <h4 className="text-white font-bold text-base sm:text-lg">{project.title}</h4>
                            <p className="text-gray-200 text-xs sm:text-sm mt-1">Click to view details</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.div whileHover={{ x: isEven ? 10 : -10 }} transition={{ duration: 0.3 }}>
                      <Badge
                        variant="secondary"
                        className="mb-3 animate-shimmer text-xs sm:text-sm"
                        style={{
                          backgroundColor: `${project.color}20`,
                          color: project.color,
                          borderColor: `${project.color}40`,
                        }}
                      >
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          className="border-gray-700 hover:bg-gray-800 hover:border-gray-600 group text-sm sm:text-base"
                          onClick={() => handleViewProject(project)}
                        >
                          View Project Details
                          <motion.div
                            className="ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 animate-border-glow">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  )
}