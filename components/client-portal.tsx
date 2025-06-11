"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Lock,
  User,
  FileText,
  MessageSquare,
  Calendar,
  Download,
  Upload,
  CheckCircle,
  Clock,
  AlertCircle,
  Eye,
  Send,
} from "lucide-react"

interface Project {
  id: string
  name: string
  status: "in-progress" | "review" | "completed"
  progress: number
  deadline: string
  lastUpdate: string
  team: string[]
  budget: string
  files: Array<{
    name: string
    type: string
    size: string
    date: string
  }>
  messages: Array<{
    id: string
    sender: string
    message: string
    timestamp: string
    type: "client" | "team"
  }>
}

const mockProject: Project = {
  id: "proj-001",
  name: "E-commerce Platform for Fashion Brand",
  status: "in-progress",
  progress: 65,
  deadline: "2024-03-15",
  lastUpdate: "2024-01-10",
  budget: "₹2,50,000",
  team: ["Arjun Sharma", "Priya Patel", "Rahul Kumar"],
  files: [
    { name: "Design_Mockups_v3.fig", type: "Figma", size: "12.5 MB", date: "2024-01-10" },
    { name: "Technical_Specs.pdf", type: "PDF", size: "2.1 MB", date: "2024-01-08" },
    { name: "Brand_Guidelines.pdf", type: "PDF", size: "5.8 MB", date: "2024-01-05" },
    { name: "Wireframes_Mobile.sketch", type: "Sketch", size: "8.2 MB", date: "2024-01-03" },
  ],
  messages: [
    {
      id: "msg-1",
      sender: "Priya Patel",
      message:
        "Hi! I've uploaded the latest design mockups. Please review and let me know your thoughts on the new checkout flow. We've incorporated UPI and other Indian payment methods.",
      timestamp: "2024-01-10 14:30",
      type: "team",
    },
    {
      id: "msg-2",
      sender: "You",
      message:
        "The designs look fantastic! I love the simplified navigation and the Indian payment integration. Could we explore a different color scheme for the CTA buttons to match our brand better?",
      timestamp: "2024-01-10 16:45",
      type: "client",
    },
    {
      id: "msg-3",
      sender: "Arjun Sharma",
      message:
        "We'll prepare 3 alternative color schemes for the CTAs that align with your brand guidelines. Expect them by tomorrow along with mobile responsiveness tests.",
      timestamp: "2024-01-11 09:15",
      type: "team",
    },
  ],
}

export function ClientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState<"overview" | "files" | "messages" | "timeline">("overview")
  const [newMessage, setNewMessage] = useState("")
  const [loginForm, setLoginForm] = useState({ email: "", password: "" })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login
    setIsLoggedIn(true)
  }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage("")
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400"
      case "in-progress":
        return "text-blue-400"
      case "review":
        return "text-yellow-400"
      default:
        return "text-gray-400"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />
      case "in-progress":
        return <Clock className="w-4 h-4" />
      case "review":
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Client Portal</CardTitle>
              <p className="text-gray-400">Access your project dashboard</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  className="bg-gray-900/50 border-gray-600 text-white"
                  required
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="bg-gray-900/50 border-gray-600 text-white"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                >
                  Sign In
                </Button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">Demo credentials: client@example.com / password123</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Welcome back, Rajesh!</h1>
                <p className="text-gray-400 text-sm">Project Dashboard</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsLoggedIn(false)}
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">{mockProject.name}</h2>
              <div className="flex items-center space-x-4 mt-2">
                <Badge className={`${getStatusColor(mockProject.status)} border-current`} variant="outline">
                  {getStatusIcon(mockProject.status)}
                  <span className="ml-1 capitalize">{mockProject.status.replace("-", " ")}</span>
                </Badge>
                <span className="text-gray-400 text-sm">Last updated: {mockProject.lastUpdate}</span>
                <span className="text-gray-400 text-sm">Budget: {mockProject.budget}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{mockProject.progress}%</div>
              <div className="text-gray-400 text-sm">Complete</div>
            </div>
          </div>
          <Progress value={mockProject.progress} className="h-2" />
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-800 mb-8">
          <div className="flex space-x-8">
            {[
              { id: "overview", label: "Overview", icon: <Eye className="w-4 h-4" /> },
              { id: "files", label: "Files", icon: <FileText className="w-4 h-4" /> },
              { id: "messages", label: "Messages", icon: <MessageSquare className="w-4 h-4" /> },
              { id: "timeline", label: "Timeline", icon: <Calendar className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-purple-500 text-purple-400"
                    : "border-transparent text-gray-400 hover:text-gray-300"
                }`}
                onClick={() => setActiveTab(tab.id as any)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Project Stats */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Project Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: "Design", progress: 90, color: "bg-purple-500" },
                        { label: "Development", progress: 60, color: "bg-blue-500" },
                        { label: "Testing", progress: 30, color: "bg-yellow-500" },
                        { label: "Deployment", progress: 0, color: "bg-gray-500" },
                      ].map((phase, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-white mb-1">{phase.progress}%</div>
                          <div className="text-gray-400 text-sm mb-2">{phase.label}</div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className={`${phase.color} h-2 rounded-full transition-all duration-500`}
                              style={{ width: `${phase.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { action: "Payment gateway integration completed", time: "2 hours ago", user: "Rahul Kumar" },
                        { action: "Mobile responsive design uploaded", time: "1 day ago", user: "Priya Patel" },
                        { action: "Client feedback incorporated", time: "2 days ago", user: "You" },
                        { action: "Sprint planning meeting completed", time: "3 days ago", user: "Arjun Sharma" },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <div className="flex-1">
                            <div className="text-white text-sm">{activity.action}</div>
                            <div className="text-gray-400 text-xs">
                              {activity.user} • {activity.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Team & Info */}
              <div className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Project Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockProject.team.map((member, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              {member
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <span className="text-white text-sm">{member}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Deadline:</span>
                      <span className="text-white">{mockProject.deadline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">12 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Budget:</span>
                      <span className="text-white">{mockProject.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">GST (18%):</span>
                      <span className="text-white">₹45,000</span>
                    </div>
                    <div className="border-t border-gray-700 pt-2 flex justify-between font-semibold">
                      <span className="text-gray-300">Total:</span>
                      <span className="text-white">₹2,95,000</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {activeTab === "files" && (
            <motion.div
              key="files"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">Project Files</CardTitle>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-cyan-600">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload File
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockProject.files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-purple-400" />
                          <div>
                            <div className="text-white text-sm">{file.name}</div>
                            <div className="text-gray-400 text-xs">
                              {file.size} • {file.date}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "messages" && (
            <motion.div
              key="messages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Project Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {mockProject.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.type === "client" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                            message.type === "client"
                              ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                              : "bg-gray-700 text-gray-100"
                          }`}
                        >
                          <div className="text-sm mb-1">{message.message}</div>
                          <div className={`text-xs ${message.type === "client" ? "text-purple-100" : "text-gray-400"}`}>
                            {message.sender} • {message.timestamp}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="bg-gray-900/50 border-gray-600 text-white"
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <Button
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "timeline" && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Project Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { phase: "Discovery & Planning", status: "completed", date: "Dec 15 - Dec 22", progress: 100 },
                      { phase: "Design & Prototyping", status: "completed", date: "Dec 23 - Jan 12", progress: 100 },
                      { phase: "Development Phase 1", status: "in-progress", date: "Jan 13 - Jan 27", progress: 75 },
                      { phase: "Payment Integration", status: "in-progress", date: "Jan 20 - Feb 5", progress: 60 },
                      { phase: "Testing & QA", status: "pending", date: "Feb 6 - Feb 15", progress: 0 },
                      { phase: "Launch & Deployment", status: "pending", date: "Feb 16 - Feb 22", progress: 0 },
                    ].map((phase, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div
                          className={`w-4 h-4 rounded-full ${
                            phase.status === "completed"
                              ? "bg-green-500"
                              : phase.status === "in-progress"
                                ? "bg-blue-500"
                                : "bg-gray-500"
                          }`}
                        ></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white font-semibold">{phase.phase}</span>
                            <span className="text-gray-400 text-sm">{phase.date}</span>
                          </div>
                          <Progress value={phase.progress} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
