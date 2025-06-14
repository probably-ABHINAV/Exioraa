
"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, ArrowRight, TrendingUp, Code, Zap } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Performance Optimization: 3x Speed Increase",
    excerpt: "How we reduced load times from 8s to 2.5s for a major retail client, resulting in 40% higher conversion rates.",
    category: "Performance",
    readTime: "8 min read",
    date: "Dec 2024",
    icon: <TrendingUp className="w-5 h-5" />,
    gradient: "from-green-500 to-emerald-600",
    tags: ["React", "Next.js", "Performance", "CDN"]
  },
  {
    id: 2,
    title: "AI-Powered Customer Support: Reducing Response Time by 80%",
    excerpt: "Implementing intelligent chatbots and automated workflows that handle 90% of customer inquiries instantly.",
    category: "AI/ML",
    readTime: "12 min read",
    date: "Nov 2024",
    icon: <Zap className="w-5 h-5" />,
    gradient: "from-purple-500 to-violet-600",
    tags: ["AI", "Node.js", "NLP", "Automation"]
  },
  {
    id: 3,
    title: "Scalable Microservices: From Monolith to Modern Architecture",
    excerpt: "Complete system redesign enabling 10x user growth while reducing infrastructure costs by 35%.",
    category: "Architecture",
    readTime: "15 min read",
    date: "Oct 2024",
    icon: <Code className="w-5 h-5" />,
    gradient: "from-blue-500 to-cyan-600",
    tags: ["Microservices", "Docker", "AWS", "GraphQL"]
  }
]

const blogPosts = [
  {
    id: 1,
    title: "10 React Performance Optimization Techniques That Actually Work",
    excerpt: "Practical strategies to make your React apps lightning fast, with real-world examples and benchmarks.",
    readTime: "6 min read",
    date: "Jan 2025",
    category: "Development Tips"
  },
  {
    id: 2,
    title: "The Future of Web Development: What to Expect in 2025",
    excerpt: "Emerging trends, tools, and technologies that will shape how we build web applications this year.",
    readTime: "10 min read",
    date: "Jan 2025",
    category: "Industry Insights"
  },
  {
    id: 3,
    title: "Building Accessible Web Applications: A Complete Guide",
    excerpt: "Step-by-step approach to creating inclusive digital experiences that work for everyone.",
    readTime: "14 min read",
    date: "Dec 2024",
    category: "Accessibility"
  }
]

export function BlogCaseStudies() {
  return (
    <section className="py-24 px-6 bg-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Insights & Case Studies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Learn From</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Real Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dive deep into our problem-solving process and discover actionable insights from our latest projects.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Case Studies
            </span>
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`bg-gradient-to-r ${study.gradient} p-2 rounded-lg`}>
                        {study.icon}
                      </div>
                      <Badge variant="secondary" className="bg-gray-700/50 text-gray-300">
                        {study.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {study.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {study.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-gray-600/50 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.readTime}
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                      >
                        Read Case Study
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div>
          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Latest Insights
            </span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/20 border-gray-700/30 backdrop-blur-sm hover:bg-gray-800/40 transition-all duration-300 group h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="border-cyan-500/50 text-cyan-300 text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-gray-500 text-sm">{post.date}</span>
                    </div>
                    <CardTitle className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-8 py-6 text-lg"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
