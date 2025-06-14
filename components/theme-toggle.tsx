
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setDarkMode(savedTheme === "dark")
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", darkMode)
      localStorage.setItem("theme", darkMode ? "dark" : "light")
    }
  }, [darkMode, mounted])

  if (!mounted) return null

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: darkMode ? 1 : 0,
          rotate: darkMode ? 0 : 180,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="w-4 h-4 text-gray-300" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: darkMode ? 0 : 1,
          rotate: darkMode ? 180 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="w-4 h-4 text-yellow-400" />
      </motion.div>
    </Button>
  )
}
