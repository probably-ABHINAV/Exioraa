
'use client'

import { useEffect, useState } from 'react'

export function AccessibilityImprovements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Add skip link for keyboard navigation
    if (!document.querySelector('[href="#main-content"]')) {
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50'
      skipLink.setAttribute('tabindex', '0')
      document.body.insertBefore(skipLink, document.body.firstChild)
    }

    // Improve focus management
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key closes modals
      if (e.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"], [data-modal]')
        modals.forEach(modal => {
          const closeButton = modal.querySelector('[aria-label="Close"], [data-close]')
          if (closeButton instanceof HTMLElement) {
            closeButton.click()
          }
        })
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return null
}
