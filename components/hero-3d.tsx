"use client"

import { useRef, useEffect, Suspense, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  Float,
  Environment,
  Sphere,
  MeshDistortMaterial,
  Stars,
  Torus,
  Box,
  Icosahedron,
  Tetrahedron,
} from "@react-three/drei"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Zap } from "lucide-react"
import { motion, useScroll as useScrollMotion, useTransform } from "framer-motion"
import * as THREE from "three"

function AdvancedGrid() {
  const gridRef = useRef<THREE.Group>(null)
  const linesRef = useRef<THREE.LineSegments[]>([])

  const gridData = useMemo(() => {
    const lines = []
    const colors = ["#8b5cf6", "#06b6d4", "#ec4899", "#10b981", "#f59e0b", "#ef4444"]

    // Create complex interconnected grid
    for (let i = 0; i < 50; i++) {
      const points = []
      const segments = 30

      for (let j = 0; j <= segments; j++) {
        const angle = (j / segments) * Math.PI * 4
        const radius = 5 + Math.sin(angle * 2) * 3
        const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 2
        const y = Math.sin(angle) * radius + (Math.random() - 0.5) * 2
        const z = Math.sin(angle * 3) * 2 + (Math.random() - 0.5) * 3
        points.push(new THREE.Vector3(x, y, z))
      }

      lines.push({
        points,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.03 + 0.01,
        phase: Math.random() * Math.PI * 2,
      })
    }

    return lines
  }, [])

  useFrame(({ clock }) => {
    if (gridRef.current) {
      try {
        const time = clock.getElapsedTime()
        gridRef.current.rotation.x = Math.sin(time * 0.1) * 0.3
        gridRef.current.rotation.y = Math.sin(time * 0.05) * 0.4
        gridRef.current.rotation.z = Math.sin(time * 0.08) * 0.2

        // Complex group transformations
        gridRef.current.position.y = Math.sin(time * 0.2) * 1
        gridRef.current.scale.setScalar(1 + Math.sin(time * 0.3) * 0.1)

        // Animate individual lines
        linesRef.current.forEach((line, index) => {
          if (line) {
            const lineData = gridData[index]
            line.rotation.x += lineData.speed
            line.rotation.y += lineData.speed * 0.7
            line.rotation.z += lineData.speed * 0.3
            line.position.y = Math.sin(time * lineData.speed * 15 + lineData.phase) * 3
            line.position.x = Math.cos(time * lineData.speed * 10 + lineData.phase) * 2
          }
        })
      } catch (error) {
        console.warn("Grid animation error:", error)
      }
    }
  })

  return (
    <group ref={gridRef}>
      {gridData.map((lineData, index) => (
        <line
          key={index}
          ref={(el) => {
            if (el) linesRef.current[index] = el
          }}
        >
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attachObject={["attributes", "position"]}
              count={lineData.points.length}
              array={new Float32Array(lineData.points.flatMap((p) => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            attach="material"
            color={lineData.color}
            opacity={0.4}
            transparent
            linewidth={3}
            blending={THREE.AdditiveBlending}
          />
        </line>
      ))}
    </group>
  )
}

function ComplexGeometries() {
  const geometriesRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (geometriesRef.current) {
      const time = clock.getElapsedTime()
      geometriesRef.current.rotation.y = time * 0.1
      geometriesRef.current.position.z = Math.sin(time * 0.2) * 2
    }
  })

  return (
    <group ref={geometriesRef}>
      {/* Central Icosahedron */}
      <Float speed={0.5} rotationIntensity={2} floatIntensity={1} position={[0, 0, 0]}>
        <Icosahedron args={[2]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            distort={0.8}
            speed={2}
            roughness={0}
            metalness={1}
            emissive="#8b5cf6"
            emissiveIntensity={0.2}
          />
        </Icosahedron>
      </Float>

      {/* Orbiting Tetrahedrons */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2
        const radius = 8
        return (
          <Float
            key={i}
            speed={1.5 + i * 0.2}
            rotationIntensity={1.5}
            floatIntensity={1.2}
            position={[Math.cos(angle) * radius, Math.sin(angle) * radius * 0.5, Math.sin(angle * 2) * 3]}
          >
            <Tetrahedron args={[0.8]}>
              <MeshDistortMaterial
                color={`hsl(${(i * 60) % 360}, 70%, 60%)`}
                distort={0.5}
                speed={1 + i * 0.3}
                roughness={0.1}
                metalness={0.9}
                emissive={`hsl(${(i * 60) % 360}, 70%, 30%)`}
                emissiveIntensity={0.3}
              />
            </Tetrahedron>
          </Float>
        )
      })}

      {/* Floating Torus Array */}
      {Array.from({ length: 4 }).map((_, i) => (
        <Float
          key={`torus-${i}`}
          speed={1.2 + i * 0.3}
          rotationIntensity={1}
          floatIntensity={0.8}
          position={[(Math.random() - 0.5) * 16, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 8]}
        >
          <Torus args={[1.5, 0.4, 16, 100]}>
            <MeshDistortMaterial
              color="#06b6d4"
              distort={0.6}
              speed={3 + i}
              roughness={0}
              metalness={0.8}
              emissive="#06b6d4"
              emissiveIntensity={0.1}
            />
          </Torus>
        </Float>
      ))}

      {/* Complex Box Structures */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Float
          key={`box-${i}`}
          speed={0.8 + i * 0.1}
          rotationIntensity={1.5}
          floatIntensity={0.6}
          position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10]}
        >
          <Box args={[1, 1, 1]}>
            <MeshDistortMaterial
              color="#ec4899"
              distort={0.8 + Math.random() * 0.4}
              speed={1.5 + i * 0.2}
              roughness={0.2}
              metalness={0.7}
              emissive="#ec4899"
              emissiveIntensity={0.15}
            />
          </Box>
        </Float>
      ))}

      {/* Sphere Constellation */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float
          key={`sphere-${i}`}
          speed={1 + i * 0.1}
          rotationIntensity={0.5}
          floatIntensity={1.2}
          position={[(Math.random() - 0.5) * 25, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 15]}
        >
          <Sphere args={[0.2 + Math.random() * 0.4, 32, 32]}>
            <MeshDistortMaterial
              color={`hsl(${Math.random() * 360}, 80%, 70%)`}
              distort={0.3 + Math.random() * 0.5}
              speed={1 + Math.random() * 3}
              roughness={0}
              metalness={0.9}
              emissive={`hsl(${Math.random() * 360}, 80%, 30%)`}
              emissiveIntensity={0.2}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  )
}

function HyperParticles({ count = 500 }) {
  const mesh = useRef<THREE.InstancedMesh>(null)
  const { viewport } = useThree()
  const particlesData = useRef<
    Array<{
      position: [number, number, number]
      velocity: [number, number, number]
      size: number
      color: THREE.Color
      phase: number
      trail: THREE.Vector3[]
    }>
  >([])

  useEffect(() => {
    if (!mesh.current || !viewport) return

    try {
      const dummy = new THREE.Object3D()
      const particles = []
      const colors = [
        new THREE.Color("#8b5cf6"),
        new THREE.Color("#06b6d4"),
        new THREE.Color("#ec4899"),
        new THREE.Color("#10b981"),
        new THREE.Color("#f59e0b"),
        new THREE.Color("#ef4444"),
      ]

      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * viewport.width * 4
        const y = (Math.random() - 0.5) * viewport.height * 4
        const z = (Math.random() - 0.5) * 20
        const size = Math.random() * 0.2 + 0.05
        const color = colors[Math.floor(Math.random() * colors.length)]
        const phase = Math.random() * Math.PI * 2

        particles.push({
          position: [x, y, z],
          velocity: [(Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.02],
          size,
          color,
          phase,
          trail: [],
        })

        dummy.position.set(x, y, z)
        dummy.scale.set(size, size, size)
        dummy.updateMatrix()

        mesh.current.setMatrixAt(i, dummy.matrix)
      }

      particlesData.current = particles
      mesh.current.instanceMatrix.needsUpdate = true
    } catch (error) {
      console.warn("Particles initialization error:", error)
    }
  }, [count, viewport])

  useFrame(({ clock }) => {
    if (!mesh.current || particlesData.current.length === 0) return

    try {
      const time = clock.getElapsedTime()
      const dummy = new THREE.Object3D()

      for (let i = 0; i < count; i++) {
        const particle = particlesData.current[i]
        if (!particle) continue

        // Complex orbital motion
        const orbitRadius = 5 + Math.sin(time * 0.1 + particle.phase) * 3
        const orbitSpeed = 0.5 + Math.sin(particle.phase) * 0.3

        const x =
          particle.position[0] +
          Math.sin(time * orbitSpeed + particle.phase) * orbitRadius +
          Math.cos(time * 0.3 + i) * 2
        const y =
          particle.position[1] +
          Math.cos(time * orbitSpeed + particle.phase) * orbitRadius +
          Math.sin(time * 0.2 + i) * 3
        const z = particle.position[2] + Math.sin(time * 0.8 + particle.phase) * 2 + Math.cos(time * 0.4 + i) * 1.5

        // Dynamic sizing with pulsing
        const scale = particle.size * (1 + Math.sin(time * 3 + particle.phase) * 0.5)

        // Complex rotation
        const rotX = time * (0.5 + Math.sin(particle.phase)) + particle.phase
        const rotY = time * (0.3 + Math.cos(particle.phase)) + particle.phase
        const rotZ = time * (0.7 + Math.sin(particle.phase * 2)) + particle.phase

        dummy.position.set(x, y, z)
        dummy.scale.set(scale, scale, scale)
        dummy.rotation.set(rotX, rotY, rotZ)
        dummy.updateMatrix()
        mesh.current.setMatrixAt(i, dummy.matrix)
      }

      mesh.current.instanceMatrix.needsUpdate = true
    } catch (error) {
      console.warn("Particles animation error:", error)
    }
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <octahedronGeometry args={[0.1, 0]} />
      <meshStandardMaterial
        color="#ffffff"
        transparent
        opacity={0.8}
        emissive="#ffffff"
        emissiveIntensity={0.3}
        metalness={0.8}
        roughness={0.2}
      />
    </instancedMesh>
  )
}

function AdvancedLighting() {
  const lightRef = useRef<THREE.PointLight>(null)
  const light2Ref = useRef<THREE.PointLight>(null)
  const light3Ref = useRef<THREE.PointLight>(null)
  const light4Ref = useRef<THREE.PointLight>(null)
  const spotLightRef = useRef<THREE.SpotLight>(null)

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(time * 0.5) * 15
      lightRef.current.position.y = Math.cos(time * 0.3) * 12
      lightRef.current.position.z = Math.sin(time * 0.7) * 8
      lightRef.current.intensity = 2 + Math.sin(time * 2) * 1
    }

    if (light2Ref.current) {
      light2Ref.current.position.x = Math.cos(time * 0.4) * 12
      light2Ref.current.position.y = Math.sin(time * 0.6) * 10
      light2Ref.current.position.z = Math.cos(time * 0.5) * 6
      light2Ref.current.intensity = 1.5 + Math.cos(time * 1.5) * 0.8
    }

    if (light3Ref.current) {
      light3Ref.current.position.x = Math.sin(time * 0.8) * 10
      light3Ref.current.position.y = Math.cos(time * 0.9) * 8
      light3Ref.current.position.z = Math.sin(time * 0.4) * 12
      light3Ref.current.intensity = 1.2 + Math.sin(time * 3) * 0.6
    }

    if (light4Ref.current) {
      light4Ref.current.position.x = Math.cos(time * 0.6) * 8
      light4Ref.current.position.y = Math.sin(time * 0.4) * 6
      light4Ref.current.position.z = Math.cos(time * 0.8) * 10
      light4Ref.current.intensity = 1 + Math.cos(time * 2.5) * 0.5
    }

    if (spotLightRef.current) {
      spotLightRef.current.position.x = Math.sin(time * 0.3) * 20
      spotLightRef.current.position.y = 15 + Math.cos(time * 0.2) * 5
      spotLightRef.current.position.z = Math.cos(time * 0.4) * 15
      spotLightRef.current.target.position.set(0, 0, 0)
      spotLightRef.current.intensity = 3 + Math.sin(time * 1.8) * 1.5
    }
  })

  return (
    <>
      <ambientLight intensity={0.4} color="#1a1a2e" />
      <pointLight ref={lightRef} color="#8b5cf6" intensity={2} distance={30} decay={2} />
      <pointLight ref={light2Ref} color="#06b6d4" intensity={1.5} distance={25} decay={2} />
      <pointLight ref={light3Ref} color="#ec4899" intensity={1.2} distance={28} decay={2} />
      <pointLight ref={light4Ref} color="#10b981" intensity={1} distance={22} decay={2} />
      <spotLight
        ref={spotLightRef}
        color="#f59e0b"
        intensity={3}
        distance={50}
        angle={Math.PI / 6}
        penumbra={0.5}
        decay={2}
        castShadow
      />
      <directionalLight position={[20, 20, 10]} intensity={0.8} color="#ffffff" castShadow />
    </>
  )
}

function InteractiveCameraController() {
  const { camera } = useThree()

  useFrame(({ clock, mouse }) => {
    const time = clock.getElapsedTime()

    // Advanced camera movement with multiple layers
    const baseX = Math.sin(time * 0.1) * 2
    const baseY = Math.cos(time * 0.15) * 1.5
    const baseZ = 8 + Math.sin(time * 0.05) * 2

    // Mouse influence
    const mouseInfluence = 2
    const targetX = baseX + mouse.x * mouseInfluence
    const targetY = baseY + mouse.y * mouseInfluence
    const targetZ = baseZ

    // Smooth camera interpolation
    camera.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.02)

    // Dynamic look-at with offset
    const lookAtX = mouse.x * 3
    const lookAtY = mouse.y * 2
    const lookAtZ = Math.sin(time * 0.2) * 1

    camera.lookAt(lookAtX, lookAtY, lookAtZ)

    // Subtle camera roll
    camera.rotation.z = Math.sin(time * 0.1) * 0.02 + mouse.x * 0.01
  })

  return null
}

function Scene() {
  return (
    <>
      <AdvancedLighting />
      <AdvancedGrid />
      <ComplexGeometries />
      <HyperParticles count={600} />
      <InteractiveCameraController />
      <Stars radius={150} depth={80} count={2000} factor={6} saturation={0.3} fade speed={2} />
      <Environment preset="night" />
      <fog attach="fog" args={["#000000", 15, 80]} />
    </>
  )
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.03%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-60"></div>
    </div>
  )
}

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScrollMotion({
    target: containerRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Scroll functions
  const scrollToSection = (sectionId: string) => {
    // Handle both direct element and section ref approach
    let element = document.getElementById(sectionId)

    // If not found by ID, try querySelector for section with data attribute
    if (!element) {
      element = document.querySelector(`[data-section="${sectionId}"]`)
    }

    if (element) {
      const navHeight = 100 // Increased for better spacing
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    } else {
      console.warn(`Section "${sectionId}" not found`)
    }
  }
  useEffect(() => {
   
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<LoadingFallback />}>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 75 }}
            onCreated={({ gl, scene }) => {
              try {
                gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
                gl.setClearColor("#000000")
                gl.shadowMap.enabled = true
                gl.shadowMap.type = THREE.PCFSoftShadowMap
                gl.toneMapping = THREE.ACESFilmicToneMapping
                gl.toneMappingExposure = 1.2
                scene.fog = new THREE.Fog("#000000", 15, 80)
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

      <motion.div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto" style={{ y, opacity }}>
        <motion.div
          className="mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Badge
            variant="outline"
            className="border-purple-500/50 text-purple-300 mb-6 sm:mb-8 text-xs sm:text-sm backdrop-blur-md bg-black/30 shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Digital Innovation Studio
          </Badge>
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 leading-[0.9] tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        >
          <motion.span 
            className="bg-gradient-to-r from-white via-gray-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl block mb-2 font-extrabold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Transform Your Business
          </motion.span>
          <motion.span 
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl block font-extrabold"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            With Digital Excellence
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-10 leading-relaxed max-w-5xl mx-auto font-light tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
            We partner with <span className="text-cyan-300 font-medium">visionary businesses</span> to deliver cutting-edge digital solutions that drive <span className="text-purple-300 font-medium">exponential growth</span>, enhance user experience, and maximize ROI.
          </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
        >
          <Button
            size="lg"
            className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-base lg:text-lg px-8 sm:px-10 py-5 sm:py-7 hover:scale-105 transition-all duration-300 backdrop-blur-md shadow-2xl border border-purple-400/30 relative overflow-hidden"
            onClick={() => scrollToSection("tech-fusion")}
          >
            <span className="relative z-10 font-semibold">Explore the Tech Stack</span>
            <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group w-full sm:w-auto border-2 border-cyan-400/50 text-white hover:bg-cyan-400/10 hover:border-cyan-400 text-base lg:text-lg px-8 sm:px-10 py-5 sm:py-7 hover:scale-105 transition-all duration-300 backdrop-blur-md shadow-2xl relative overflow-hidden"
            onClick={() => scrollToSection("work")}
          >
            <span className="relative z-10 font-semibold">View Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="group w-full sm:w-auto text-gray-300 hover:text-white border border-gray-600/50 hover:border-gray-400/50 text-base lg:text-lg px-8 sm:px-10 py-5 sm:py-7 hover:scale-105 transition-all duration-300 backdrop-blur-md shadow-xl"
            onClick={() => scrollToSection("contact")}
          >
            <span className="relative z-10 font-medium">Get Started</span>
          </Button>
        </motion.div>
        <motion.button
          className="mt-12 sm:mt-16 animate-bounce cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => scrollToSection("services")}
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-gray-400 hover:text-white transition-colors drop-shadow-lg" />
        </motion.button>
      </motion.div>
    </section>
  )
}