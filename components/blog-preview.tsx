
'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Clock, User, Tag } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping web development, from AI integration to progressive web apps and sustainable coding practices.",
    author: "Arjun Sharma",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    tags: ["React", "Next.js", "AI", "PWA"]
  },
  {
    id: 2,
    title: "Building Scalable Mobile Apps with React Native",
    excerpt: "Learn best practices for creating performant, scalable mobile applications that work seamlessly across iOS and Android platforms.",
    author: "Priya Patel",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    tags: ["React Native", "Mobile", "Performance", "Cross-platform"]
  },
  {
    id: 3,
    title: "UI/UX Design Principles for Modern Digital Products",
    excerpt: "Discover essential design principles that create intuitive, accessible, and engaging user experiences in today's digital landscape.",
    author: "Rahul Kumar",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
    tags: ["UI/UX", "Design Systems", "Accessibility", "User Research"]
  }
]

export function BlogPreview() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-6">
            <Tag className="w-4 h-4 mr-2" />
            Latest Insights
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">From Our</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Blog
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from our team of digital innovation experts.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="border-gray-600 text-gray-400 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-0">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 text-white px-8 py-3">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
