
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { 
  Home, 
  User, 
  Briefcase, 
  Settings, 
  Phone, 
  Search,
  ChevronDown,
  Sparkles,
  Moon,
  Sun,
  Command
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface GlassmorphicNavProps {
  onNavigate: (section: string) => void
  onAboutClick: () => void
}

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  action: () => void
  accent: string
}

export function GlassmorphicNav({ onNavigate, onAboutClick }: GlassmorphicNavProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [activeItem, setActiveItem] = useState('home')
  const [isCommandOpen, setIsCommandOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)

  const navItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: <Home className="w-5 h-5" />,
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      accent: 'from-blue-400 to-cyan-400'
    },
    {
      id: 'about',
      label: 'About',
      icon: <User className="w-5 h-5" />,
      action: onAboutClick,
      accent: 'from-purple-400 to-pink-400'
    },
    {
      id: 'work',
      label: 'Work',
      icon: <Briefcase className="w-5 h-5" />,
      action: () => onNavigate('work'),
      accent: 'from-green-400 to-emerald-400'
    },
    {
      id: 'tech',
      label: 'Tech',
      icon: <Settings className="w-5 h-5" />,
      action: () => onNavigate('tools'),
      accent: 'from-orange-400 to-red-400'
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <Phone className="w-5 h-5" />,
      action: () => onNavigate('contact'),
      accent: 'from-indigo-400 to-blue-400'
    }
  ]

  const commandItems = [
    { label: 'Services', action: () => onNavigate('services') },
    { label: 'Projects', action: () => onNavigate('work') },
    { label: 'Tech Stack', action: () => onNavigate('tools') },
    { label: 'Blog', action: () => window.open('/blog', '_blank') },
    { label: 'Contact', action: () => onNavigate('contact') },
    { label: 'Portal', action: () => window.open('/portal', '_blank') }
  ]

  const filteredCommands = commandItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up"
    const difference = Math.abs(latest - lastScrollY.current)
    
    if (difference > 50) {
      setIsVisible(direction === "up" || latest < 100)
      lastScrollY.current = latest
    }
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsCommandOpen(!isCommandOpen)
      }
      if (e.key === 'Escape') {
        setIsCommandOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isCommandOpen])

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-4xl"
      >
        <div className="relative">
          {/* Glassmorphic Background */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 rounded-2xl" />
          
          {/* Navigation Content */}
          <div className="relative flex items-center justify-between px-6 py-3">
            
            {/* Logo Section */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Exioraa
              </span>
            </motion.div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  className="relative group p-3 rounded-xl transition-all duration-300"
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  onClick={() => {
                    setActiveItem(item.id)
                    item.action()
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Hover Glow Effect */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${item.accent} opacity-20 rounded-xl blur-sm`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.2, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Active Indicator */}
                  {activeItem === item.id && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.accent} opacity-10 rounded-xl`}
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Icon */}
                  <div className={`relative z-10 ${hoveredItem === item.id ? 'text-white' : 'text-gray-300'} transition-colors duration-200`}>
                    {item.icon}
                  </div>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded-lg border border-white/10"
                        initial={{ opacity: 0, y: -10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45 border-l border-t border-white/10" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <motion.button
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all duration-200"
                onClick={() => setIsDarkMode(!isDarkMode)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </motion.button>

              {/* Command Menu Button */}
              <motion.button
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:to-cyan-500/30 border border-purple-500/30 text-white transition-all duration-200"
                onClick={() => setIsCommandOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Command className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:block">⌘K</span>
              </motion.button>
            </div>
          </div>

          {/* Floating Underline */}
          <motion.div
            className="absolute bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
            style={{
              left: `${(navItems.findIndex(item => item.id === activeItem) * 20) + 30}%`,
              width: '10%'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </motion.nav>

      {/* Command Palette */}
      <AnimatePresence>
        {isCommandOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsCommandOpen(false)}
            />
            
            {/* Command Menu */}
            <motion.div
              className="relative w-full max-w-md bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search commands..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
                    autoFocus
                  />
                  <Badge variant="outline" className="text-xs border-white/20 text-gray-400">
                    ESC
                  </Badge>
                </div>
              </div>

              {/* Commands */}
              <div className="max-h-64 overflow-y-auto">
                {filteredCommands.map((command, index) => (
                  <motion.button
                    key={command.label}
                    className="w-full px-4 py-3 text-left hover:bg-white/5 transition-colors duration-200 flex items-center justify-between group"
                    onClick={() => {
                      command.action()
                      setIsCommandOpen(false)
                      setSearchQuery('')
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {command.label}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-300 rotate-[-90deg] transition-all duration-200" />
                  </motion.button>
                ))}
                
                {filteredCommands.length === 0 && (
                  <div className="px-4 py-8 text-center text-gray-500">
                    No commands found
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-white/10 bg-white/5">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Navigate with arrow keys</span>
                  <span>Press Enter to select</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
