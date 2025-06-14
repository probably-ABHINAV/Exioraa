
"use client"

import { useRef, Suspense, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Text, PerspectiveCamera, Environment } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dna, Sparkles, Code2 } from "lucide-react"
import * as THREE from "three"

const technologies = [
  {
    name: "React",
    color: "#61dafb",
    description: "Component-based UI library for building interactive interfaces",
    usage: "Frontend framework powering our user interfaces",
    codeSnippet: "const App = () => <Component />",
  },
  {
    name: "Next.js",
    color: "#ffffff",
    description: "Full-stack React framework with SSR and API routes",
    usage: "Server-side rendering and routing foundation",
    codeSnippet: "export default function Page() { return <div>Hello</div> }",
  },
  {
    name: "TypeScript",
    color: "#3178c6",
    description: "Statically typed JavaScript for safer, more maintainable code",
    usage: "Type safety across our entire codebase",
    codeSnippet: "interface User { id: number; name: string }",
  },
  {
    name: "Tailwind",
    color: "#38bdf8",
    description: "Utility-first CSS framework for rapid UI development",
    usage: "Consistent styling and responsive design system",
    codeSnippet: "className='bg-blue-500 hover:bg-blue-700 text-white'",
  },
  {
    name: "Three.js",
    color: "#ffffff",
    description: "3D graphics library for immersive web experiences",
    usage: "Creating stunning 3D visualizations and interactions",
    codeSnippet: "new THREE.Mesh(geometry, material)",
  },
  {
    name: "Node.js",
    color: "#8cc84b",
    description: "JavaScript runtime for scalable backend applications",
    usage: "Server-side processing and API development",
    codeSnippet: "app.get('/api/users', (req, res) => res.json(users))",
  },
  {
    name: "MongoDB",
    color: "#47a248",
    description: "NoSQL database for flexible, scalable data storage",
    usage: "Document-based data persistence and queries",
    codeSnippet: "db.users.find({ active: true })",
  },
  {
    name: "Vercel",
    color: "#ffffff",
    description: "Edge-optimized deployment platform for modern web apps",
    usage: "Global deployment with instant scaling",
    codeSnippet: "vercel --prod",
  },
  {
    name: "Framer Motion",
    color: "#ff0055",
    description: "Animation library for smooth, performant interactions",
    usage: "Fluid animations and gesture-based interactions",
    codeSnippet: "<motion.div animate={{ x: 100 }} />",
  },
  {
    name: "Prisma",
    color: "#2d3748",
    description: "Type-safe database ORM with auto-generated queries",
    usage: "Database modeling and type-safe data access",
    codeSnippet: "prisma.user.findMany({ where: { active: true } })",
  },
]

function DNANode({
  tech,
  position,
  rotation,
  side,
  onClick,
  onHover,
  isSelected,
}: {
  tech: typeof technologies[0]
  position: [number, number, number]
  rotation: number
  side: "left" | "right"
  onClick: () => void
  onHover: (hovered: boolean) => void
  isSelected: boolean
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const textRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 2 + rotation) * 0.1
      
      // Rotation around center
      const time = clock.getElapsedTime() * 0.3
      const radius = side === "left" ? 1.5 : 1.5
      meshRef.current.position.x = Math.cos(time + rotation) * radius * (side === "left" ? -1 : 1)
      meshRef.current.position.z = Math.sin(time + rotation) * radius * 0.3

      // Scale on hover/selection
      const targetScale = hovered || isSelected ? 1.3 : 1
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    }

    if (textRef.current) {
      // Make text face camera
      textRef.current.lookAt(0, 0, 10)
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {/* Glowing sphere */}
      <mesh
        onPointerOver={() => {
          setHovered(true)
          onHover(true)
          document.body.style.cursor = "pointer"
        }}
        onPointerOut={() => {
          setHovered(false)
          onHover(false)
          document.body.style.cursor = "default"
        }}
        onClick={onClick}
      >
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color={tech.color}
          emissive={tech.color}
          emissiveIntensity={hovered || isSelected ? 0.4 : 0.2}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.4, 0.02, 8, 32]} />
        <meshBasicMaterial
          color={tech.color}
          transparent
          opacity={hovered || isSelected ? 0.6 : 0.3}
        />
      </mesh>

      {/* Tech name */}
      <Text
        ref={textRef}
        position={[side === "left" ? -0.8 : 0.8, 0, 0]}
        fontSize={0.15}
        color={tech.color}
        anchorX={side === "left" ? "right" : "left"}
        anchorY="middle"
      >
        {tech.name}
      </Text>

      {/* Particle burst effect for selected */}
      {isSelected && (
        <group>
          {Array.from({ length: 12 }).map((_, i) => (
            <Float key={i} speed={3} rotationIntensity={2} floatIntensity={2}>
              <mesh
                position={[
                  Math.cos((i / 12) * Math.PI * 2) * 0.8,
                  Math.sin((i / 12) * Math.PI * 2) * 0.8,
                  (Math.random() - 0.5) * 0.5,
                ]}
              >
                <sphereGeometry args={[0.02]} />
                <meshBasicMaterial color={tech.color} />
              </mesh>
            </Float>
          ))}
        </group>
      )}
    </group>
  )
}

function DNAStrand() {
  const strandRef = useRef<THREE.Group>(null)
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  useFrame(({ clock }) => {
    if (strandRef.current) {
      // Slow rotation of entire strand
      strandRef.current.rotation.y = clock.getElapsedTime() * 0.1
      // Gentle vertical movement
      strandRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  const handleTechClick = (techName: string) => {
    setSelectedTech(selectedTech === techName ? null : techName)
    
    // Mutation effect - brief color change
    setTimeout(() => {
      if (selectedTech === techName) setSelectedTech(null)
    }, 2000)
  }

  return (
    <group ref={strandRef}>
      {/* DNA backbone connections */}
      {technologies.map((_, index) => {
        if (index === technologies.length - 1) return null
        return (
          <line key={`backbone-${index}`}>
            <bufferGeometry>
              <bufferAttribute
                attachObject={["attributes", "position"]}
                count={2}
                array={new Float32Array([
                  0, -index * 1.2, 0,
                  0, -(index + 1) * 1.2, 0,
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#444444" opacity={0.3} transparent />
          </line>
        )
      })}

      {/* Tech nodes */}
      {technologies.map((tech, index) => (
        <group key={tech.name}>
          {/* Left side node */}
          <DNANode
            tech={tech}
            position={[0, -index * 1.2, 0]}
            rotation={index * 0.6}
            side="left"
            onClick={() => handleTechClick(tech.name)}
            onHover={(hovered) => setHoveredTech(hovered ? tech.name : null)}
            isSelected={selectedTech === tech.name}
          />
          
          {/* Right side node (offset tech if available) */}
          {technologies[index + 1] && (
            <DNANode
              tech={technologies[index + 1] || tech}
              position={[0, -index * 1.2 - 0.6, 0]}
              rotation={index * 0.6 + Math.PI}
              side="right"
              onClick={() => handleTechClick(technologies[index + 1]?.name || tech.name)}
              onHover={(hovered) => setHoveredTech(hovered ? technologies[index + 1]?.name || tech.name : null)}
              isSelected={selectedTech === (technologies[index + 1]?.name || tech.name)}
            />
          )}

          {/* Connection between nodes */}
          <line>
            <bufferGeometry>
              <bufferAttribute
                attachObject={["attributes", "position"]}
                count={2}
                array={new Float32Array([
                  -1.5, -index * 1.2, 0,
                  1.5, -index * 1.2, 0,
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={selectedTech === tech.name ? tech.color : "#333333"}
              opacity={0.4}
              transparent
            />
          </line>
        </group>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-5, -5, 5]} intensity={1} color="#06b6d4" />
      <spotLight
        position={[0, 10, 10]}
        angle={0.3}
        penumbra={0.5}
        intensity={2}
        color="#ffffff"
      />
      <DNAStrand />
      <Environment preset="night" />
    </>
  )
}

function DNAFallback() {
  return (
    <div className="h-[600px] w-full flex items-center justify-center">
      <div className="relative">
        {/* Animated DNA helix fallback */}
        <div className="flex flex-col space-y-8">
          {technologies.slice(0, 6).map((tech, index) => (
            <div key={tech.name} className="flex items-center justify-between w-80">
              <motion.div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold border-2"
                style={{ 
                  backgroundColor: tech.color + "20", 
                  borderColor: tech.color,
                  color: tech.color
                }}
                animate={{ 
                  x: [0, 20, 0],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: index * 0.2 
                }}
              >
                {tech.name.slice(0, 2)}
              </motion.div>
              
              <motion.div
                className="flex-1 h-0.5 mx-4"
                style={{ backgroundColor: tech.color + "40" }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
              />
              
              <motion.div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold border-2"
                style={{ 
                  backgroundColor: tech.color + "20", 
                  borderColor: tech.color,
                  color: tech.color
                }}
                animate={{ 
                  x: [0, -20, 0],
                  rotate: [0, -180, -360] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: index * 0.2 + 0.5 
                }}
              >
                {tech.name.slice(-2)}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function TechDNAStrand() {
  const [selectedTech, setSelectedTech] = useState<typeof technologies[0] | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    }
    
    checkTheme()
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    
    return () => observer.disconnect()
  }, [])

  const dnaColor = isDarkMode ? "#00ff88" : "#8b5cf6"

  return (
    <section className="py-24 px-6 bg-gray-900/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${
          isDarkMode 
            ? "from-emerald-900/20 via-black to-cyan-900/20" 
            : "from-purple-900/20 via-gray-900 to-cyan-900/20"
        }`}></div>
        {/* DNA pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${encodeURIComponent(dnaColor)}' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge 
            variant="outline" 
            className={`border-purple-500/50 text-purple-300 mb-6 ${
              isDarkMode ? "bg-emerald-500/10" : "bg-purple-500/10"
            }`}
          >
            <Dna className="w-4 h-4 mr-2" />
            Tech DNA Strand
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technology is in our
            </span>
            <br />
            <span 
              className={`bg-gradient-to-r ${
                isDarkMode 
                  ? "from-emerald-400 to-cyan-400" 
                  : "from-purple-400 to-cyan-400"
              } bg-clip-text text-transparent`}
            >
              Digital DNA
            </span>
          </h2>
          <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
            Explore our technology helix—each node represents the core technologies 
            that form the genetic code of our digital solutions. Click to mutate and discover!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D DNA Strand */}
          <div className="h-[600px] w-full">
            <Suspense fallback={<DNAFallback />}>
              <Canvas
                onCreated={({ gl }) => {
                  try {
                    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
                    gl.setClearColor("#000000", 0)
                  } catch (error) {
                    console.warn("WebGL setup error:", error)
                  }
                }}
                onError={(error) => {
                  console.warn("Canvas error:", error)
                }}
              >
                <Scene />
              </Canvas>
            </Suspense>
          </div>

          {/* Tech Information Panel */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {technologies.slice(0, 6).map((tech, index) => (
                <motion.button
                  key={tech.name}
                  className={`p-3 rounded-lg border transition-all duration-300 text-left ${
                    selectedTech?.name === tech.name
                      ? "border-purple-500 bg-purple-500/20"
                      : "border-gray-700 bg-gray-800/30 hover:bg-gray-800/50"
                  }`}
                  onClick={() => setSelectedTech(tech)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    <span className="text-sm font-medium text-white">{tech.name}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {selectedTech && (
                <motion.div
                  key={selectedTech.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div 
                          className="w-6 h-6 rounded-full"
                          style={{ backgroundColor: selectedTech.color }}
                        />
                        <h3 className="text-xl font-bold text-white">{selectedTech.name}</h3>
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                      </div>
                      
                      <p className="text-gray-300 mb-4">{selectedTech.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-semibold text-purple-300 mb-1">Our Usage:</h4>
                          <p className="text-sm text-gray-400">{selectedTech.usage}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-cyan-300 mb-2 flex items-center">
                            <Code2 className="w-3 h-3 mr-1" />
                            Code Sample:
                          </h4>
                          <code className="text-xs bg-gray-900/50 text-green-400 p-2 rounded block font-mono">
                            {selectedTech.codeSnippet}
                          </code>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            {!selectedTech && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <Dna className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-pulse" />
                <p className="text-gray-400">
                  Click on any technology in our DNA strand to explore how we use it 
                  to build exceptional digital experiences.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
