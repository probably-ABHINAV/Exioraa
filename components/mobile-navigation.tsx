"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Menu, Home, Briefcase, User, Phone, Wrench, ExternalLink } from "lucide-react"

interface MobileNavigationProps {
  onNavigate: (section: string) => void
  onAboutClick: () => void
}

export function MobileNavigation({ onNavigate, onAboutClick }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when clicking outside or on navigation
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const menuItems = [
    {
      label: "Home",
      icon: <Home className="w-5 h-5" />,
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    { label: "Services", icon: <Briefcase className="w-5 h-5" />, action: () => onNavigate("services") },
    { label: "About", icon: <User className="w-5 h-5" />, action: () => onAboutClick },
    { label: "Work", icon: <Briefcase className="w-5 h-5" />, action: () => onNavigate("work") },
    { label: "Tools", icon: <Wrench className="w-5 h-5" />, action: () => onNavigate("tools") },
    { label: "Blog", icon: <ExternalLink className="w-5 h-5" />, action: () => window.open("/blog", "_blank") },
    { label: "Contact", icon: <Phone className="w-5 h-5" />, action: () => onNavigate("contact") },
    { label: "Portal", icon: <ExternalLink className="w-5 h-5" />, action: () => window.open("/portal", "_blank") },
  ]

  const handleItemClick = (action: () => void) => {
    action()
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-white hover:text-purple-400 hover:bg-gray-800/50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-gray-900 border-l border-gray-800 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Menu
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 py-6">
                  <nav className="space-y-2 px-6">
                    {menuItems.map((item, index) => (
                      <motion.button
                        key={item.label}
                        className="w-full flex items-center space-x-4 p-4 rounded-lg text-left text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 group"
                        onClick={() => handleItemClick(item.action)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="text-purple-400 group-hover:text-cyan-400 transition-colors">{item.icon}</div>
                        <span className="font-medium">{item.label}</span>
                      </motion.button>
                    ))}
                  </nav>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-800">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                    onClick={() => handleItemClick(() => onNavigate("contact"))}
                  >
                    Get Started
                  </Button>
                  <p className="text-center text-gray-400 text-sm mt-4">© 2024-2025 Exioraa. All rights reserved.</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}