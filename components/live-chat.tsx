"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User, Sparkles, Clock } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
  typing?: boolean
}

const quickReplies = [
  "What services do you offer?",
  "How much does a website cost?",
  "What's your typical timeline?",
  "Can I see your portfolio?"
]

const faqResponses: Record<string, string> = {
  "services": "We specialize in web development, mobile apps, UI/UX design, e-commerce solutions, and digital marketing. Each project is tailored to your specific needs and goals.",
  "price|cost|pricing": "Our pricing is project-based and depends on scope, complexity, and timeline. Basic websites start at $2,500, while custom applications range from $10,000+. Would you like a personalized quote?",
  "time|timeline|deadline|duration": "Most projects take 4-12 weeks depending on complexity. Simple websites: 2-4 weeks, E-commerce: 6-8 weeks, Custom applications: 8-16 weeks. What's your target launch date?",
  "portfolio|work|examples": "You can view our featured projects in the 'Our Work' section above, or visit our full portfolio page. We've completed 100+ projects across various industries.",
  "contact|reach|email|phone": "You can reach us at hello@exioraa.com, call us at (555) 123-4567, or use the contact form. We respond within 4 hours during business hours!",
  "start|begin|get started": "Great! Let's start with understanding your project needs. What type of digital solution are you looking for? Website, mobile app, or something else?",
  "support|maintenance": "We provide ongoing support and maintenance packages starting at $200/month. This includes updates, security monitoring, backups, and priority support.",
  "technology|tech stack": "We use modern technologies like React, Next.js, Node.js, Python, AWS, and more. Our tech stack is chosen based on your project requirements for optimal performance."
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi! I'm your AI assistant. I can help answer questions about our services, pricing, timelines, and more. What would you like to know?",
      sender: "bot",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = (text?: string) => {
    const messageText = text || inputValue
    if (!messageText.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(messageText.toLowerCase())
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (input: string): string => {
    // Check for FAQ matches
    for (const [keywords, response] of Object.entries(faqResponses)) {
      const keywordList = keywords.split("|")
      if (keywordList.some(keyword => input.includes(keyword))) {
        return response
      }
    }

    // Greeting responses
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hello! Great to meet you! 🎉 I'm here to help you learn more about our digital solutions. What brings you here today?"
    }

    // Thank you responses
    if (input.includes("thank") || input.includes("thanks")) {
      return "You're very welcome! 😊 Is there anything else I can help you with today?"
    }

    // Default response with call-to-action
    return "That's a great question! For detailed information about your specific needs, I'd recommend scheduling a free consultation with our team. They can provide personalized recommendations and accurate timelines. Would you like me to connect you with a specialist?"
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <div className="relative">
          {/* Notification Badge */}
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 3 }}
          >
            <span className="text-xs text-white font-bold">1</span>
          </motion.div>

          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 shadow-2xl shadow-purple-500/25 hover:scale-110 transition-transform duration-200"
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
                  key="chat"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            <Card className="bg-gray-900/95 backdrop-blur-md border-gray-700/50 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border-b border-gray-700/50 pb-3">
                <CardTitle className="flex items-center gap-2 text-white">
                  <div className="relative">
                    <Bot className="w-5 h-5 text-cyan-400" />
                    <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1" />
                  </div>
                  AI Assistant
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400">Online</span>
                  </div>
                </CardTitle>
                <p className="text-xs text-gray-400 mt-1">Typically responds instantly</p>
              </CardHeader>
              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`max-w-[85%] ${
                          message.sender === "user" ? "ml-4" : "mr-4"
                        }`}>
                          <div className={`p-3 rounded-2xl ${
                            message.sender === "user"
                              ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-br-md"
                              : "bg-gray-800 text-gray-300 border border-gray-700/50 rounded-bl-md"
                          }`}>
                            <div className="flex items-start gap-2">
                              {message.sender === "bot" && (
                                <Bot className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                              )}
                              <p className="text-sm leading-relaxed">{message.text}</p>
                            </div>
                          </div>
                          <div className={`flex items-center gap-1 mt-1 text-xs text-gray-500 ${
                            message.sender === "user" ? "justify-end" : "justify-start"
                          }`}>
                            <Clock className="w-3 h-3" />
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-800 border border-gray-700/50 p-3 rounded-2xl rounded-bl-md mr-4">
                        <div className="flex items-center gap-1">
                          <Bot className="w-4 h-4 text-cyan-400" />
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <div className="px-4 pb-2">
                    <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, index) => (
                        <motion.button
                          key={reply}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => sendMessage(reply)}
                          className="text-xs bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700/30 hover:border-purple-500/50 transition-all duration-200"
                        >
                          {reply}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-gray-700/50">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      placeholder="Ask me anything..."
                      className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 rounded-full"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={() => sendMessage()}
                      size="sm"
                      disabled={isTyping || !inputValue.trim()}
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-full px-4"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    🤖 Powered by AI • Available 24/7
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}