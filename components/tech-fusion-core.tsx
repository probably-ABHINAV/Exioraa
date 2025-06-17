"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Zap, ExternalLink, Code2 } from "lucide-react"
import { NoSSR } from "@/components/no-ssr"

const technologies = [
  {
    id: "react",
    name: "React",
    logo: "⚛️",
    color: "#61dafb",
    gradient: "from-cyan-400 to-blue-500",
    description: "Component-based UI library for building interactive interfaces",
    useCase: "Dynamic UI with hooks & components",
    poweringExioraa: "Enables reactive user interfaces with component reusability and state management for seamless user experiences.",
    orbit: 1,
    angle: 0,
  },
  {
    id: "nextjs",
    name: "Next.js",
    logo: "▲",
    color: "#ffffff",
    gradient: "from-white to-gray-300",
    description: "Full-stack React framework with SSR and API routes",
    useCase: "Server-side rendering & routing foundation",
    poweringExioraa: "Provides SEO-optimized server-side rendering and API routes for full-stack development capabilities.",
    orbit: 1,
    angle: 72,
  },
  {
    id: "typescript",
    name: "TypeScript",
    logo: "📘",
    color: "#3178c6",
    gradient: "from-blue-500 to-blue-700",
    description: "Statically typed JavaScript for safer, more maintainable code",
    useCase: "Type safety across entire codebase",
    poweringExioraa: "Ensures code reliability and developer productivity through compile-time error checking and IntelliSense.",
    orbit: 1,
    angle: 144,
  },
  {
    id: "tailwind",
    name: "Tailwind",
    logo: "🎨",
    color: "#38bdf8",
    gradient: "from-cyan-400 to-sky-500",
    description: "Utility-first CSS framework for rapid UI development",
    useCase: "Consistent styling & responsive design",
    poweringExioraa: "Accelerates UI development with utility classes and maintains design consistency across all components.",
    orbit: 1,
    angle: 216,
  },
  {
    id: "threejs",
    name: "Three.js",
    logo: "🎲",
    color: "#ffffff",
    gradient: "from-white to-purple-300",
    description: "3D graphics library for immersive web experiences",
    useCase: "Stunning 3D visualizations & interactions",
    poweringExioraa: "Creates immersive 3D experiences and interactive visualizations that set us apart from competitors.",
    orbit: 1,
    angle: 288,
  },
  {
    id: "nodejs",
    name: "Node.js",
    logo: "🟢",
    color: "#8cc84b",
    gradient: "from-green-400 to-green-600",
    description: "JavaScript runtime for scalable backend applications",
    useCase: "Server-side processing & API development",
    poweringExioraa: "Powers our backend services and APIs with high-performance, scalable server-side JavaScript execution.",
    orbit: 2,
    angle: 0,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    logo: "🍃",
    color: "#47a248",
    gradient: "from-green-500 to-emerald-600",
    description: "NoSQL database for flexible, scalable data storage",
    useCase: "Document-based data persistence",
    poweringExioraa: "Provides flexible, scalable data storage solutions that adapt to evolving business requirements.",
    orbit: 2,
    angle: 72,
  },
  {
    id: "vercel",
    name: "Vercel",
    logo: "▼",
    color: "#ffffff",
    gradient: "from-white to-gray-400",
    description: "Edge-optimized deployment platform for modern web apps",
    useCase: "Global deployment with instant scaling",
    poweringExioraa: "Ensures lightning-fast global delivery with edge computing and automatic scaling capabilities.",
    orbit: 2,
    angle: 144,
  },
  {
    id: "framer",
    name: "Framer Motion",
    logo: "🎭",
    color: "#ff0055",
    gradient: "from-pink-500 to-rose-600",
    description: "Animation library for smooth, performant interactions",
    useCase: "Fluid animations & gesture interactions",
    poweringExioraa: "Brings interfaces to life with smooth animations and gesture-based interactions for enhanced UX.",
    orbit: 2,
    angle: 216,
  },
  {
    id: "gsap",
    name: "GSAP",
    logo: "🚀",
    color: "#88ce02",
    gradient: "from-lime-400 to-green-500",
    description: "High-performance animation engine for complex sequences",
    useCase: "Advanced timeline animations",
    poweringExioraa: "Enables complex, high-performance animations and interactive sequences that captivate users.",
    orbit: 2,
    angle: 288,
  },
]

// Generate deterministic particle positions to avoid hydration mismatch
const particlePositions = Array.from({ length: 20 }, (_, i) => ({
  left: (i * 37 + 23) % 100, // Pseudo-random but deterministic
  top: (i * 41 + 17) % 100,
  duration: 3 + (i % 3),
  delay: (i % 4) * 0.5,
}))

function FusionCore({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <motion.div
        className="relative w-32 h-32 rounded-full flex items-center justify-center"
        animate={{
          rotate: 360,
          scale: isActive ? 1.2 : 1,
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 0.3 }
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-500/30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Core */}
        <motion.div
          className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 flex items-center justify-center relative overflow-hidden"
          animate={{
            boxShadow: [
              "0 0 20px rgba(168, 85, 247, 0.5)",
              "0 0 40px rgba(168, 85, 247, 0.8)",
              "0 0 20px rgba(168, 85, 247, 0.5)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            mixBlendMode: "screen"
          }}
        >
          <motion.div
            className="text-2xl font-bold text-white"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            E
          </motion.div>

          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400"
            animate={{
              scale: [1, 1.5],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

function TechOrb({ 
  tech, 
  orbitRadius, 
  onHover, 
  onClick, 
  isHovered 
}: { 
  tech: typeof technologies[0]
  orbitRadius: number
  onHover: (hovered: boolean) => void
  onClick: () => void
  isHovered: boolean
}) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-16 h-16 cursor-pointer"
      style={{ 
        marginLeft: -32, 
        marginTop: -32,
      }}
      animate={{
        rotate: 360,
        x: Math.cos((tech.angle * Math.PI) / 180) * orbitRadius,
        y: Math.sin((tech.angle * Math.PI) / 180) * orbitRadius,
        scale: isHovered ? 1.2 : 1,
      }}
      transition={{
        rotate: { 
          duration: tech.orbit === 1 ? 30 : 45, 
          repeat: Infinity, 
          ease: "linear" 
        },
        scale: { duration: 0.2 },
        x: { 
          duration: tech.orbit === 1 ? 30 : 45, 
          repeat: Infinity, 
          ease: "linear" 
        },
        y: { 
          duration: tech.orbit === 1 ? 30 : 45, 
          repeat: Infinity, 
          ease: "linear" 
        },
      }}
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
    >
      <div
        className={`w-full h-full rounded-full bg-gradient-to-br ${tech.gradient} flex items-center justify-center text-white font-bold text-lg border-2 border-white/20 backdrop-blur-sm relative overflow-hidden`}
        style={{
          boxShadow: `0 0 ${isHovered ? '30px' : '15px'} ${tech.color}50`,
        }}
      >
        <span className="text-2xl relative z-10">{tech.logo}</span>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, ${tech.color}40 0%, transparent 70%)`,
          }}
          animate={{
            opacity: isHovered ? [0.5, 1, 0.5] : [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap z-50 backdrop-blur-md border border-white/20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="font-semibold">{tech.name}</div>
            <div className="text-xs text-gray-300">{tech.useCase}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function TechFusionCoreContent() {
  const [selectedTech, setSelectedTech] = useState<typeof technologies[0] | null>(null)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleTechClick = (tech: typeof technologies[0]) => {
    setSelectedTech(tech)
  }

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 bg-gray-950 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>

        {/* Static background particles */}
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge 
            variant="outline" 
            className="border-purple-500/50 text-purple-300 mb-6 bg-purple-500/10"
          >
            <Zap className="w-4 h-4 mr-2" />
            Fusion Core Technology
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powered by
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Technology
            </span>
          </h2>
          <p className="text-gray-400 mb-4 max-w-2xl mx-auto text-lg">
            Our Fusion Core harnesses cutting-edge technologies in perfect harmony. 
            Hover over the orbiting tech orbs to discover their power, click to explore deeper.
          </p>
        </motion.div>

        {/* Fusion Core and Orbs */}
        <div className="relative h-[600px] max-w-4xl mx-auto">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Central Fusion Core */}
            <FusionCore isActive={!!selectedTech} />

            {/* Orbit rings visualization */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="w-80 h-80 rounded-full border border-purple-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-cyan-500/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Tech Orbs */}
            {technologies.map((tech) => (
              <motion.div
                key={tech.id}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                }}
                animate={isVisible ? { 
                  opacity: 1, 
                  scale: 1,
                } : {}}
                transition={{ 
                  duration: 1,
                  delay: 0.8 + (tech.orbit * 0.2),
                  type: "spring",
                  stiffness: 100
                }}
              >
                <TechOrb
                  tech={tech}
                  orbitRadius={tech.orbit === 1 ? 160 : 200}
                  onHover={(hovered) => setHoveredTech(hovered ? tech.id : null)}
                  onClick={() => handleTechClick(tech)}
                  isHovered={hoveredTech === tech.id}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tech Details Modal */}
      <Dialog open={!!selectedTech} onOpenChange={() => setSelectedTech(null)}>
        <DialogContent className="max-w-2xl bg-gray-900/95 border-gray-700 backdrop-blur-md">
          {selectedTech && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-3 text-2xl">
                  <span className="text-3xl">{selectedTech.logo}</span>
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {selectedTech.name}
                  </span>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <p className="text-gray-300 text-lg">{selectedTech.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-300 font-semibold mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      How it powers Exioraa:
                    </h4>
                    <p className="text-gray-400">{selectedTech.poweringExioraa}</p>
                  </div>

                  <div>
                    <h4 className="text-cyan-300 font-semibold mb-2 flex items-center">
                      <Code2 className="w-4 h-4 mr-2" />
                      Use Case:
                    </h4>
                    <p className="text-gray-400">{selectedTech.useCase}</p>
                  </div>
                </div>

                <motion.div
                  className="flex items-center justify-center py-4"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${selectedTech.gradient} flex items-center justify-center text-white text-2xl border-2 border-white/20`}
                    style={{
                      boxShadow: `0 0 30px ${selectedTech.color}80`,
                    }}
                  >
                    {selectedTech.logo}
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

export function TechFusionCore() {
  return (
    <NoSSR 
      fallback={
        <section id="tech-fusion" data-section="tech-fusion" className="py-24 px-6 bg-gray-950 relative overflow-hidden min-h-screen flex items-center">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Fusion Core Technology
              </Badge>
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent block mb-2">
                  Powered by
                </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent block">
                  Fusion Core Technology
                </span>
              </h2>
              <p className="text-gray-400 mb-4 max-w-2xl mx-auto text-lg">
                Our Fusion Core harnesses cutting-edge technologies in perfect harmony. 
                Hover over the orbiting tech orbs to discover their power, click to explore deeper.
              </p>
            </div>
            <div className="relative h-[600px] max-w-4xl mx-auto flex items-center justify-center">
              <div className="text-purple-300 animate-pulse">Loading Tech Stack...</div>
            </div>
          </div>
        </section>
      }
    >
      <TechFusionCoreContent />
    </NoSSR>
  )
}