
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

export function DownloadResume() {
  const handleDownload = () => {
    // Create a mock PDF download
    const element = document.createElement('a')
    const file = new Blob([`
EXIORAA DIGITAL INNOVATION STUDIO
Professional Portfolio & Resume

ABOUT:
Exioraa is a cutting-edge digital innovation studio specializing in web development,
mobile applications, UI/UX design, and digital transformation solutions.

SERVICES:
• Website Development - Custom, responsive, and performant websites
• Mobile App Development - Native and cross-platform applications  
• UI/UX Design - User-centered design that creates engaging experiences
• SEO Optimization - Strategic SEO that drives organic traffic
• 3D & Vector Art - Stunning 3D models and vector graphics
• Digital Branding - Complete brand identity systems
• CMS & Backend - Robust content management and scalable solutions
• Motion Graphics - Dynamic animations and motion graphics

EXPERTISE:
• React, Next.js, TypeScript
• Node.js, Python, PostgreSQL
• Three.js, WebGL, GSAP
• Adobe Creative Suite, Figma
• AWS, Vercel, Docker

CONTACT:
Email: hello@exioraa.com
Phone: +91 77xxxxxx02
Location: Greater Noida, Delhi NCR
Website: https://exioraa.com

© 2024-2025 Exioraa. All rights reserved.
    `], { type: 'text/plain' })
    
    element.href = URL.createObjectURL(file)
    element.download = 'Exioraa_Digital_Studio_Resume.txt'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        onClick={handleDownload}
        variant="outline"
        className="border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 group"
      >
        <FileText className="w-4 h-4 mr-2 group-hover:text-purple-400 transition-colors" />
        Download Resume
        <Download className="w-4 h-4 ml-2 group-hover:text-purple-400 transition-colors" />
      </Button>
    </motion.div>
  )
}
