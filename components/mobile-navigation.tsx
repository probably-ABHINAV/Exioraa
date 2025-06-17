
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

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  const menuItems = [
    {
      label: "Home",
      icon: <Home className="w-5 h-5" />,
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    { label: "Services", icon: <Briefcase className="w-5 h-5" />, action: () => onNavigate("services") },
    { label: "About", icon: <User className="w-5 h-5" />, action: onAboutClick },
    { label: "Work", icon: <Briefcase className="w-5 h-5" />, action: () => onNavigate("work") },
    { label: "Tools", icon: <Wrench className="w-5 h-5" />, action: () => onNavigate("tools") },
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
        className="md:hidden relative group p-2 rounded-lg bg-black/60 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] focus:shadow-[0_0_20px_rgba(168,85,247,0.6)] focus:outline-none focus:ring-2 focus:ring-purple-400/50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="relative z-10"
            >
              <X className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Menu className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
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
              className="fixed inset-0 z-40 bg-black/80 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-[#0a0a0a]/95 border-l border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.3)] md:hidden"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                opacity: { duration: 0.2 }
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-title"
            >
              {/* Neon inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-cyan-900/10 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
              
              <div className="flex flex-col h-full relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
                  <h2 
                    id="mobile-menu-title"
                    className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]"
                  >
                    Menu
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-white bg-black/40 border border-purple-500/20 hover:border-purple-400/40 rounded-lg hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]" />
                  </Button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 py-6 overflow-y-auto">
                  <nav className="space-y-3 px-6" role="navigation" aria-label="Mobile navigation">
                    {menuItems.map((item, index) => (
                      <motion.button
                        key={item.label}
                        className="w-full flex items-center space-x-4 p-4 rounded-xl text-left text-gray-300 hover:text-white bg-black/30 hover:bg-black/50 border border-purple-500/10 hover:border-purple-400/30 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50"
                        onClick={() => handleItemClick(item.action)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3, ease: "easeOut" }}
                        whileHover={{ 
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ 
                          scale: 0.98,
                          transition: { duration: 0.1 }
                        }}
                        tabIndex={0}
                      >
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-cyan-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="text-purple-400 group-hover:text-cyan-400 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] relative z-10">
                          {item.icon}
                        </div>
                        <span className="font-medium relative z-10 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
                          {item.label}
                        </span>
                      </motion.button>
                    ))}
                  </nav>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-purple-500/20">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 border border-purple-500/20 hover:border-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                    onClick={() => handleItemClick(() => onNavigate("contact"))}
                  >
                    <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                      Get Started
                    </span>
                  </Button>
                  <p className="text-center text-gray-400 text-sm mt-4 drop-shadow-[0_0_4px_rgba(168,85,247,0.3)]">
                    © 2024-2025 Exioraa. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
