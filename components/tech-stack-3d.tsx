"use client"

import { useRef, Suspense, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Float, PerspectiveCamera } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code } from "lucide-react"
import type * as THREE from "three"

const technologies = [
  {
    name: "React",
    position: [-3, 2, -2],
    color: "#61dafb",
    description: "A JavaScript library for building user interfaces",
  },
  { name: "Next.js", position: [3, -1, -3], color: "#ffffff", description: "The React framework for production" },
  { name: "TypeScript", position: [-2, -2, -4], color: "#3178c6", description: "JavaScript with syntax for types" },
  { name: "Tailwind", position: [4, 1, -5], color: "#38bdf8", description: "A utility-first CSS framework" },
  { name: "Three.js", position: [0, 3, -6], color: "#ffffff", description: "JavaScript 3D library" },
  { name: "Figma", position: [-4, 0, -3], color: "#a259ff", description: "Collaborative interface design tool" },
  { name: "Node.js", position: [2, -3, -4], color: "#8cc84b", description: "JavaScript runtime built on Chrome's V8" },
  { name: "Blender", position: [-1, 4, -5], color: "#ea7600", description: "Open source 3D creation suite" },
  { name: "WordPress", position: [5, -2, -6], color: "#21759b", description: "Content management system" },
  { name: "Vercel", position: [1, -4, -3], color: "#ffffff", description: "Platform for frontend frameworks" },
]

function TechBubble({
  name,
  position,
  color,
  description,
  onClick,
  isExploded,
}: {
  name: string
  position: [number, number, number]
  color: string
  description: string
  onClick: () => void
  isExploded: boolean
}) {
  const textRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock, camera }) => {
    if (textRef.current && camera && !isExploded) {
      try {
        textRef.current.lookAt(camera.position)
        textRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + position[0] * 10) * 0.1
      } catch (error) {
        console.warn("Text animation error:", error)
      }
    }

    if (groupRef.current && isExploded) {
      // Explosion animation
      const time = clock.getElapsedTime()
      groupRef.current.scale.setScalar(1 + Math.sin(time * 10) * 0.5)
      groupRef.current.rotation.x = time * 5
      groupRef.current.rotation.y = time * 3
      groupRef.current.rotation.z = time * 7
    }
  })

  if (isExploded) {
    return (
      <group ref={groupRef} position={position}>
        {/* Explosion particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <Float key={i} speed={5} rotationIntensity={2} floatIntensity={3}>
            <Text
              position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10]}
              color={color}
              fontSize={0.2}
              anchorX="center"
              anchorY="middle"
            >
              {name.charAt(i % name.length)}
            </Text>
          </Float>
        ))}
      </group>
    )
  }

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position} onClick={onClick}>
        {/* Glowing sphere background */}
        <mesh>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.1} />
        </mesh>

        {/* Outer ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1, 0.05, 8, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.3} />
        </mesh>

        <Text
          ref={textRef}
          color={color}
          fontSize={0.5}
          anchorX="center"
          anchorY="middle"
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerOut={() => (document.body.style.cursor = "default")}
        >
          {name}
        </Text>
      </group>
    </Float>
  )
}

function TechCloud() {
  const groupRef = useRef<THREE.Group>(null)
  const [explodedTech, setExplodedTech] = useState<string | null>(null)

  useFrame(({ clock }) => {
    if (groupRef.current && !explodedTech) {
      try {
        groupRef.current.rotation.y = clock.getElapsedTime() * 0.1
      } catch (error) {
        console.warn("Tech cloud animation error:", error)
      }
    }
  })

  const handleTechClick = (techName: string) => {
    setExplodedTech(techName)
    // Reset after animation
    setTimeout(() => setExplodedTech(null), 3000)
  }

  return (
    <group ref={groupRef}>
      {technologies.map((tech, index) => (
        <TechBubble
          key={index}
          name={tech.name}
          position={tech.position}
          color={tech.color}
          description={tech.description}
          onClick={() => handleTechClick(tech.name)}
          isExploded={explodedTech === tech.name}
        />
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <TechCloud />
    </>
  )
}

function TechStackFallback() {
  return (
    <div className="h-[500px] w-full flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 animate-pulse cursor-pointer hover:scale-105 transition-transform"
            onClick={() => {
              // Fallback burst animation
              const element = document.getElementById(`tech-${index}`)
              if (element) {
                element.style.transform = "scale(1.5) rotate(360deg)"
                element.style.opacity = "0"
                setTimeout(() => {
                  element.style.transform = "scale(1) rotate(0deg)"
                  element.style.opacity = "1"
                }, 500)
              }
            }}
          >
            <div
              id={`tech-${index}`}
              className="w-8 h-8 rounded-full transition-all duration-500"
              style={{ backgroundColor: tech.color }}
            ></div>
            <span className="text-sm text-gray-400 mt-2">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TechStack3D() {
  const [selectedTech, setSelectedTech] = useState<(typeof technologies)[0] | null>(null)

  return (
    <section className="py-24 px-6 bg-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-6">
            <Code className="w-4 h-4 mr-2" />
            Technology Stack
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Powered by</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Technology
            </span>
          </h2>
          <p className="text-gray-400 mb-4">Click on any technology bubble to see it burst!</p>
        </motion.div>

        <div className="h-[500px] w-full">
          <Suspense fallback={<TechStackFallback />}>
            <Canvas
              onCreated={({ gl }) => {
                try {
                  gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
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

        {/* Tech Info Panel */}
        <AnimatePresence>
          {selectedTech && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="mt-8 bg-gray-800/50 rounded-lg p-6 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-white mb-2" style={{ color: selectedTech.color }}>
                {selectedTech.name}
              </h3>
              <p className="text-gray-400">{selectedTech.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
