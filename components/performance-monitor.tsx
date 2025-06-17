
"use client"

import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    // Core Web Vitals monitoring
    const observeWebVitals = () => {
      // Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log('LCP candidate:', lastEntry.startTime)
      }).observe({ type: 'largest-contentful-paint', buffered: true })

      // First Input Delay
      new PerformanceObserver((entryList) => {
        const firstInput = entryList.getEntries()[0]
        if (firstInput) {
          console.log('FID:', firstInput.processingStart - firstInput.startTime)
        }
      }).observe({ type: 'first-input', buffered: true })

      // Cumulative Layout Shift
      let clsValue = 0
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            console.log('Current CLS value:', clsValue)
          }
        }
      }).observe({ type: 'layout-shift', buffered: true })
    }

    // Only run in production
    if (process.env.NODE_ENV === 'production') {
      observeWebVitals()
    }

    // Monitor resource loading
    const monitorResources = () => {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.fetchStart)
        
        // Monitor critical resources
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
        resources.forEach(resource => {
          if (resource.name.includes('.js') || resource.name.includes('.css')) {
            console.log(`${resource.name}: ${resource.responseEnd - resource.fetchStart}ms`)
          }
        })
      })
    }

    monitorResources()
  }, [])

  return null
}
