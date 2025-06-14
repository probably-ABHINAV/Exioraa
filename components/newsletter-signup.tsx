
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, CheckCircle, Sparkles } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center"
      >
        <Card className="bg-green-900/20 border-green-500/50">
          <CardContent className="p-6">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Successfully Subscribed!</h3>
            <p className="text-green-300">Thank you for joining our newsletter. You'll receive our latest insights and updates.</p>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <Card className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border-purple-500/30">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Stay Updated
          </Badge>
          <h3 className="text-2xl font-bold text-white mb-2">Digital Innovation Insights</h3>
          <p className="text-gray-300">
            Get the latest trends, case studies, and expert tips delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800/50 border-gray-600 text-white"
              required
            />
            <Button
              type="submit"
              disabled={!email || isLoading}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 min-w-[100px]"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </>
              )}
            </Button>
          </div>
          <p className="text-xs text-gray-400 text-center">
            No spam, unsubscribe at any time. Privacy policy compliant.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
