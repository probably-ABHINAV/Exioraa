
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check, ArrowRight, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1500)
  }

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">You're all set!</h3>
        <p className="text-gray-400">Thanks for subscribing. We'll keep you updated with our latest insights and innovations.</p>
      </motion.div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-xl p-8">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Stay in the Loop</h3>
        <p className="text-gray-400 mb-4">
          Get exclusive insights, industry trends, and updates on cutting-edge digital innovations.
        </p>
        
        {/* Social Proof */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">2,500+ subscribers</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Weekly insights</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
            required
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 whitespace-nowrap"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Subscribing...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </Button>
        </div>
        
        <p className="text-xs text-gray-500 text-center">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </form>

      {/* Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
        <Badge variant="outline" className="border-purple-500/50 text-purple-300 justify-center py-2">
          Industry Insights
        </Badge>
        <Badge variant="outline" className="border-cyan-500/50 text-cyan-300 justify-center py-2">
          Tech Updates
        </Badge>
        <Badge variant="outline" className="border-green-500/50 text-green-300 justify-center py-2">
          Case Studies
        </Badge>
      </div>
    </div>
  )
}
