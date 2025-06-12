
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, Tag, ArrowRight, Eye, Heart, Share2 } from "lucide-react"

const blogCategories = ["All", "Web Development", "Mobile Development", "Design", "AI/ML", "Digital Marketing", "Tech Trends"]

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping web development, from AI integration to progressive web apps and sustainable coding practices that are revolutionizing how we build for the web.",
    content: `
      <h2>Introduction</h2>
      <p>The web development landscape is evolving at an unprecedented pace. As we navigate through 2024, several key trends are reshaping how we build, deploy, and maintain web applications.</p>
      
      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow. Tools like GitHub Copilot, ChatGPT, and custom AI assistants are helping developers write code faster and more efficiently.</p>
      
      <h2>2. Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to bridge the gap between web and native applications, offering app-like experiences with web technologies. They provide offline functionality, push notifications, and native app feel while being discoverable through search engines.</p>
      
      <h2>3. Sustainable Web Development</h2>
      <p>With growing awareness of climate change, developers are focusing on building more sustainable applications. This includes optimizing for performance, reducing carbon footprint, and implementing green coding practices.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of possibilities. By staying updated with these trends and continuously learning, developers can build better, more efficient applications that serve users and the planet.</p>
    `,
    author: "Arjun Sharma",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    tags: ["React", "Next.js", "AI", "PWA", "Sustainability"],
    views: 1245,
    likes: 89,
    featured: true
  },
  {
    id: 2,
    title: "Building Scalable Mobile Apps with React Native",
    excerpt: "Learn best practices for creating performant, scalable mobile applications that work seamlessly across iOS and Android platforms using React Native and modern development patterns.",
    content: `
      <h2>Why React Native?</h2>
      <p>React Native has revolutionized mobile app development by allowing developers to write once and deploy everywhere. It combines the best of native development with React's developer experience.</p>
      
      <h2>Architecture Patterns</h2>
      <p>Implementing proper architecture patterns is crucial for scalability. We'll explore Clean Architecture, MVVM, and Redux patterns that help maintain large codebases.</p>
      
      <h2>Performance Optimization</h2>
      <p>Performance is key in mobile apps. Learn about memory management, lazy loading, image optimization, and other techniques to keep your app running smoothly.</p>
      
      <h2>Testing Strategies</h2>
      <p>Comprehensive testing ensures app reliability. We'll cover unit testing, integration testing, and end-to-end testing approaches for React Native apps.</p>
    `,
    author: "Priya Patel",
    date: "2024-01-12",
    readTime: "10 min read",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    tags: ["React Native", "Mobile", "Performance", "Architecture"],
    views: 967,
    likes: 72,
    featured: true
  },
  {
    id: 3,
    title: "UI/UX Design Principles for Modern Digital Products",
    excerpt: "Discover essential design principles that create intuitive, accessible, and engaging user experiences in today's digital landscape, with practical examples and implementation strategies.",
    content: `
      <h2>User-Centered Design</h2>
      <p>Everything starts with understanding your users. Learn how to conduct user research, create personas, and design with empathy at the core of your process.</p>
      
      <h2>Accessibility First</h2>
      <p>Inclusive design isn't optional—it's essential. We'll explore WCAG guidelines, color contrast, keyboard navigation, and screen reader compatibility.</p>
      
      <h2>Visual Hierarchy</h2>
      <p>Guide users through your interface with effective visual hierarchy. Learn about typography, spacing, color theory, and layout principles that enhance usability.</p>
      
      <h2>Micro-interactions</h2>
      <p>Small details make big differences. Discover how micro-interactions, animations, and feedback mechanisms create delightful user experiences.</p>
    `,
    author: "Rahul Kumar",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop",
    tags: ["UI/UX", "Design Systems", "Accessibility", "User Research"],
    views: 1156,
    likes: 94,
    featured: false
  },
  {
    id: 4,
    title: "Machine Learning Integration in Web Applications",
    excerpt: "Explore how to seamlessly integrate machine learning models into web applications, from TensorFlow.js to cloud-based AI services, with real-world implementation examples.",
    content: `
      <h2>ML in the Browser</h2>
      <p>TensorFlow.js enables machine learning directly in web browsers, providing real-time inference without server round-trips. Perfect for privacy-sensitive applications.</p>
      
      <h2>Cloud AI Services</h2>
      <p>Leverage powerful cloud platforms like Google Cloud AI, AWS SageMaker, and Azure Cognitive Services to add sophisticated AI capabilities to your applications.</p>
      
      <h2>Real-world Applications</h2>
      <p>From image recognition to natural language processing, discover practical use cases and implementation strategies for common ML scenarios in web development.</p>
      
      <h2>Performance Considerations</h2>
      <p>Learn how to optimize ML models for web deployment, including model compression, caching strategies, and progressive loading techniques.</p>
    `,
    author: "Dr. Sneha Reddy",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Machine Learning", "TensorFlow.js", "AI", "Cloud Services"],
    views: 834,
    likes: 61,
    featured: false
  },
  {
    id: 5,
    title: "Advanced Next.js 14: App Router and Server Components",
    excerpt: "Deep dive into Next.js 14's App Router, Server Components, and streaming features that are revolutionizing how we build React applications with better performance and user experience.",
    content: `
      <h2>The App Router Revolution</h2>
      <p>Next.js 14's App Router introduces a new paradigm for building React applications with improved performance, better developer experience, and enhanced SEO capabilities.</p>
      
      <h2>Server Components Explained</h2>
      <p>Understand the difference between Server and Client Components, when to use each, and how they work together to create optimal user experiences.</p>
      
      <h2>Streaming and Suspense</h2>
      <p>Learn how to implement streaming for faster page loads, progressive rendering, and better perceived performance using React Suspense boundaries.</p>
      
      <h2>Migration Strategies</h2>
      <p>Practical guidance for migrating existing Next.js applications to the App Router, common pitfalls to avoid, and best practices for a smooth transition.</p>
    `,
    author: "Vikram Singh",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    tags: ["Next.js", "React", "Server Components", "Performance"],
    views: 1523,
    likes: 118,
    featured: true
  },
  {
    id: 6,
    title: "Digital Marketing Automation with AI",
    excerpt: "Transform your digital marketing strategy with AI-powered automation tools, personalization techniques, and data-driven insights that drive real business results.",
    content: `
      <h2>AI-Powered Personalization</h2>
      <p>Learn how AI algorithms can analyze user behavior to deliver personalized content, product recommendations, and targeted marketing messages at scale.</p>
      
      <h2>Marketing Automation Tools</h2>
      <p>Explore the latest marketing automation platforms, from email marketing to social media management, and how AI enhances their effectiveness.</p>
      
      <h2>Predictive Analytics</h2>
      <p>Use machine learning to predict customer behavior, optimize ad spend, and identify high-value prospects before your competitors do.</p>
      
      <h2>ROI Measurement</h2>
      <p>Implement comprehensive tracking and analytics to measure the true impact of your AI-driven marketing campaigns and optimize for maximum ROI.</p>
    `,
    author: "Anita Desai",
    date: "2024-01-03",
    readTime: "6 min read",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    tags: ["Digital Marketing", "AI", "Automation", "Analytics"],
    views: 692,
    likes: 45,
    featured: false
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          <Button
            variant="outline"
            onClick={() => setSelectedPost(null)}
            className="border-gray-600 text-gray-300 hover:bg-gray-800 mb-6"
          >
            ← Back to Blog
          </Button>

          <article>
            <div className="mb-8">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white mb-4">
                {selectedPost.category}
              </Badge>
              
              <h1 className="text-4xl font-bold text-white mb-4">{selectedPost.title}</h1>
              
              <div className="flex items-center space-x-6 text-gray-400 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>{selectedPost.views}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Heart className="w-4 h-4 mr-2" />
                  {selectedPost.likes}
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />

            <div className="flex flex-wrap gap-2 mt-8">
              {selectedPost.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-gray-600 text-gray-300">
                  {tag}
                </Badge>
              ))}
            </div>
          </article>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-6">
            <Tag className="w-4 h-4 mr-2" />
            Tech Insights
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Our</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Blog
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from our team of digital innovation experts.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {blogCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === "All" && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).slice(0, 2).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6" onClick={() => setSelectedPost(post)}>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
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
          </div>
        )}

        {/* All Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden cursor-pointer h-full">
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
                
                <CardContent className="p-6 flex flex-col flex-1" onClick={() => setSelectedPost(post)}>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors flex-1">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-0 text-xs">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
