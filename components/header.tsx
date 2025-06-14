"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MobileNavigation } from "@/components/mobile-navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ExternalLink } from "lucide-react"

interface HeaderProps {
  onNavigate: (section: string) => void
  onAboutClick: () => void
}

export function Header({ onNavigate, onAboutClick }: HeaderProps) {
  const navigationItems = [
    { label: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: "Services", action: () => onNavigate("services") },
    { label: "Skills", action: () => onNavigate("skills") },
    { label: "Work", action: () => onNavigate("work") },
    { label: "Blog", action: () => onNavigate("blog") },
    { label: "Contact", action: () => onNavigate("contact") },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300">
              Exioraa
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-6 lg:space-x-8">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <Button
                      variant="ghost"
                      className="text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                      onClick={item.action}
                    >
                      {item.label}
                    </Button>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <Button
                    variant="outline"
                    className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300"
                    onClick={() => window.open("/portal", "_blank")}
                  >
                    Portal
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNavigation onNavigate={onNavigate} onAboutClick={onAboutClick} />
          </div>
        </div>
      </div>
    </header>
  )
}