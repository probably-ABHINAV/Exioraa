"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  X,
  Users,
  Target,
  Award,
  Calendar,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Heart,
  Lightbulb,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  MapPin,
} from "lucide-react"
import Image from "next/image"

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

const teamMembers = [
  {
    name: "Gaurav Pratap Singh",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1581093458791-9d42e1d4a4e3?w=300&h=300&fit=crop&crop=center",
    bio: "Visionary founder and CEO driving Exioraa's mission to democratize digital excellence across India. With deep understanding of the Indian market and global standards, Gaurav leads strategic initiatives that make world-class digital solutions accessible to businesses of all sizes.",
    skills: ["Strategic Leadership", "Business Development", "Market Strategy", "Product Vision"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Abhinav Raj",
    role: "Co-Founder & CTO",
    image: "https://images.unsplash.com/photo-1581093458791-9d42e1d4a4e3?w=300&h=300&fit=crop&crop=center",
    bio: "Co-founder and Chief Technology Officer spearheading Exioraa's technical excellence. Abhinav's innovative approach to scalable solutions and emerging technologies drives our commitment to delivering cutting-edge digital experiences that transform businesses across India.",
    skills: ["Technical Leadership", "System Architecture", "Innovation Strategy", "Team Building"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Coming Soon",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1581093458791-9d42e1d4a4e3?w=300&h=300&fit=crop&crop=center",
    bio: "We're growing our team and looking for exceptional talent to join our creative division.",
    skills: ["UI/UX Design", "Brand Strategy", "Creative Direction"],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Coming Soon",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1581093458791-9d42e1d4a4e3?w=300&h=300&fit=crop&crop=center",
    bio: "Join our development team and help us build the future of digital experiences.",
    skills: ["React/Next.js", "TypeScript", "Performance Optimization"],
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Coming Soon",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1581093458791-9d42e1d4a4e3?w=300&h=300&fit=crop&crop=center",
    bio: "We're expanding our strategic team to drive business growth and client success.",
    skills: ["Business Strategy", "Digital Marketing", "Analytics"],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Coming Soon",
    role: "UX Research Lead",
    image: "https://images.unsplash.com/photo-1581093458791-9d42e1d4a4e3?w=300&h=300&fit=crop&crop=center",
    bio: "Help us understand user needs and create human-centered design solutions.",
    skills: ["User Research", "Data Analysis", "Design Thinking"],
    social: {
      linkedin: "#",
    },
  },
]

const companyValues = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation First",
    description:
      "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions for the Indian market.",
    color: "#f59e0b",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Client-Centric",
    description:
      "Every decision we make is guided by our commitment to exceeding client expectations and building long-term relationships.",
    color: "#ec4899",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Quality Assurance",
    description:
      "We maintain the highest standards in code quality, design, and project delivery while keeping costs competitive.",
    color: "#10b981",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Agile Approach",
    description:
      "Fast iteration, continuous improvement, and adaptive planning drive our methodology for rapid delivery.",
    color: "#8b5cf6",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Standards",
    description:
      "We deliver international quality solutions while understanding local Indian market needs and preferences.",
    color: "#06b6d4",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Continuous Growth",
    description: "We invest in our team's development and stay ahead of industry trends and emerging technologies.",
    color: "#3b82f6",
  },
]

const milestones = [
  {
    year: "April 2025",
    title: "Exioraa Founded",
    description: "Gaurav Pratap Singh and Abhinav Raj co-founded Exioraa in Greater Noida, Delhi NCR with a revolutionary vision to democratize digital excellence across India",
    icon: <Target className="w-6 h-6" />,
  },
  {
    year: "Q2 2025",
    title: "Building Phase",
    description: "Currently assembling our core team and developing our signature tools and processes to deliver exceptional digital experiences",
    icon: <Users className="w-6 h-6" />,
  },
  {
    year: "Q3 2025",
    title: "Beta Launch",
    description: "Preparing to launch our beta platform with select early clients to refine our processes and tools",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    year: "Q4 2025",
    title: "Public Launch",
    description: "Official public launch with full service offerings and our innovative digital tools platform",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    year: "2026",
    title: "Market Expansion",
    description: "Planned expansion to serve clients across major Indian cities and select international markets",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    year: "2027",
    title: "Innovation Hub",
    description: "Establishing our R&D division focusing on AI, blockchain, and next-generation digital technologies",
    icon: <Award className="w-6 h-6" />,
  },
]

const officeLocations = [
  {
    city: "Greater Noida",
    address: "Delhi NCR, Uttar Pradesh",
    type: "Headquarters & Founders' Office",
    team: "Co-Founders Gaurav & Abhinav",
  },
]

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const [activeTab, setActiveTab] = useState<"team" | "story" | "values" | "culture">("team")
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-gray-800"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Header */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-purple-700/80 to-cyan-600/80"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Exioraa</h2>
                <p className="text-xl text-gray-200">
                  Crafting digital excellence from India's tech capital to the world
                </p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-gray-800 px-6">
              <div className="flex space-x-8 overflow-x-auto">
                {[
                  { id: "team", label: "Our Team", icon: <Users className="w-4 h-4" /> },
                  { id: "story", label: "Our Story", icon: <Calendar className="w-4 h-4" /> },
                  { id: "values", label: "Our Values", icon: <Heart className="w-4 h-4" /> },
                  { id: "culture", label: "Culture", icon: <Zap className="w-4 h-4" /> },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
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

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Team Tab */}
              {activeTab === "team" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-4">Meet Our Team</h3>
                    <p className="text-gray-400 text-lg">
                      Our diverse team of experts brings together creativity, technical excellence, and strategic
                      thinking to deliver exceptional results for clients across India and globally.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {teamMembers.map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card
                          className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer group"
                          onClick={() => setSelectedMember(member)}
                        >
                          <CardContent className="p-6">
                            <div className="relative mb-4">
                              <Image
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                width={300}
                                height={300}
                                className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-2 left-2 right-2">
                                  <p className="text-white text-sm">Click to learn more</p>
                                </div>
                              </div>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                            <p className="text-purple-400 mb-3">{member.role}</p>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{member.bio}</p>
                            <div className="flex flex-wrap gap-1 mb-4">
                              {member.skills.slice(0, 2).map((skill, skillIndex) => (
                                <Badge
                                  key={skillIndex}
                                  variant="outline"
                                  className="border-gray-600 text-gray-300 text-xs"
                                >
                                  {skill}
                                </Badge>
                              ))}
                              {member.skills.length > 2 && (
                                <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
                                  +{member.skills.length - 2}
                                </Badge>
                              )}
                            </div>
                            <div className="flex space-x-2">
                              {member.social.linkedin && (
                                <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                                  <Linkedin className="w-4 h-4" />
                                </Button>
                              )}
                              {member.social.twitter && (
                                <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                                  <Twitter className="w-4 h-4" />
                                </Button>
                              )}
                              {member.social.github && (
                                <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                                  <Github className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* Office Locations */}
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-6">Our Locations</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {officeLocations.map((location, index) => (
                        <Card key={index} className="bg-gray-800/50 border-gray-700">
                          <CardContent className="p-6">
                            <div className="flex items-center mb-3">
                              <MapPin className="w-5 h-5 text-purple-400 mr-2" />
                              <h5 className="text-lg font-bold text-white">{location.city}</h5>
                            </div>
                            <p className="text-gray-400 mb-2">{location.address}</p>
                            <div className="flex justify-between items-center">
                              <Badge variant="outline" className="border-gray-600 text-gray-300">
                                {location.type}
                              </Badge>
                              <span className="text-gray-400 text-sm">{location.team}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Story Tab */}
              {activeTab === "story" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-4">Our Journey</h3>
                    <p className="text-gray-400 text-lg">
                      From a visionary idea in April 2025 to building India's next-generation digital innovation studio that will serve clients across India and globally.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-4">The Founding Vision</h4>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Exioraa was co-founded in 2024-2025 by <strong>Gaurav Pratap Singh</strong> and <strong>Abhinav Raj</strong> in Greater Noida, Delhi NCR with a revolutionary vision: to bridge the gap between cutting-edge technology and exceptional user experiences while making world-class digital solutions accessible to Indian businesses at competitive pricing.
                      </p>
                      <p className="text-gray-400 leading-relaxed">
                        Currently in our building phase, our co-founders are assembling a world-class team and developing innovative tools that will redefine digital excellence. Gaurav's strategic vision combined with Abhinav's technical expertise is laying the foundation for what will become India's premier digital innovation studio, preparing to serve businesses from startups to enterprises across India and globally.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        We believe that great digital experiences have the power to transform businesses and improve
                        lives. Our mission is to craft solutions that not only meet today's needs but anticipate
                        tomorrow's challenges while staying true to Indian values and global standards.
                      </p>
                      <blockquote className="text-gray-300 mb-6 leading-relaxed italic text-lg border-l-4 border-purple-500 pl-6 bg-gray-900/30 p-6 rounded-r-lg">
              "Our mission is to democratize digital excellence for Indian businesses. We combine cutting-edge technology with strategic insights to deliver solutions that not only meet today's needs but prepare our clients for tomorrow's opportunities."
            </blockquote>
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-lg border border-purple-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                AB
              </div>
              <div>
                <div className="font-semibold text-white text-lg">Abhinav Raj</div>
                <div className="text-sm text-purple-300">Co-Founder & Chief Technology Officer</div>
                <div className="text-xs text-gray-400 mt-1">Digital Innovation Strategist</div>
              </div>
            </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-8">Key Milestones</h4>
                    <div className="space-y-8">
                      {milestones.map((milestone, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                            {milestone.icon}
                          </div>
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                                {milestone.year}
                              </Badge>
                              <h5 className="text-xl font-bold text-white">{milestone.title}</h5>
                            </div>
                            <p className="text-gray-400">{milestone.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Values Tab */}
              {activeTab === "values" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-4">Our Core Values</h3>
                    <p className="text-gray-400 text-lg">
                      These principles guide every decision we make and every project we undertake, ensuring we deliver
                      exceptional value to our Indian and international clients.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {companyValues.map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 h-full">
                          <CardContent className="p-6">
                            <div
                              className="inline-flex p-3 rounded-lg mb-4"
                              style={{ backgroundColor: `${value.color}20` }}
                            >
                              <div style={{ color: value.color }}>{value.icon}</div>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                            <p className="text-gray-400 leading-relaxed">{value.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Culture Tab */}
              {activeTab === "culture" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-4">Our Culture</h3>
                    <p className="text-gray-400 text-lg">
                      We've built a culture that fosters creativity, collaboration, and continuous learning while
                      embracing Indian values and global best practices.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-6">Work Environment</h4>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <Zap className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-white mb-2">Flexible & Hybrid-First</h5>
                            <p className="text-gray-400">
                              Work from our modern offices in Bangalore, Mumbai, or Delhi, or remotely with flexible
                              hours that suit your lifestyle and peak productivity times.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <Lightbulb className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-white mb-2">Innovation Time</h5>
                            <p className="text-gray-400">
                              20% of work time dedicated to personal projects, learning new technologies, and
                              experimenting with emerging trends in the Indian tech ecosystem.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-white mb-2">Collaborative Spirit</h5>
                            <p className="text-gray-400">
                              Cross-functional teams that work together to solve complex challenges, share knowledge,
                              and celebrate both individual and team achievements.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-white mb-6">Benefits & Perks</h4>
                      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                        <ul className="space-y-3">
                          <li className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            Competitive salary + performance bonuses + equity options
                          </li>
                          <li className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                            Comprehensive health insurance + family coverage
                          </li>
                          <li className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            ₹50,000 annual learning & development budget
                          </li>
                          <li className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                            Latest tech equipment + software licenses + home office setup
                          </li>
                          <li className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                            Annual team retreats + tech conferences + skill workshops
                          </li>
                          <li className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            Flexible PTO policy + festival holidays + mental health days
                          </li>
                          <li className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                            Free meals + snacks + gym membership + wellness programs
                          </li>
                        </ul>
                      </div>

                      <div className="mt-6">
                        <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                          <Mail className="w-4 h-4 mr-2" />
                          Join Our Team
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Team Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-60 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative w-full max-w-2xl bg-gray-900 rounded-2xl border border-gray-800 p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setSelectedMember(null)}
              >
                <X className="w-5 h-5" />
              </Button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Image
                    src={selectedMember.image || "/placeholder.svg"}
                    alt={selectedMember.name}
                    width={300}
                    height={300}
                    className="w-full h-64 md:h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedMember.name}</h3>
                  <p className="text-purple-400 text-lg mb-4">{selectedMember.role}</p>
                  <p className="text-gray-300 leading-relaxed mb-6">{selectedMember.bio}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="border-gray-600 text-gray-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    {selectedMember.social.linkedin &&(
                      <Button size="sm" variant="outline" className="border-gray-600">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    )}
                    {selectedMember.social.twitter && (
                      <Button size="sm" variant="outline" className="border-gray-600">
                        <Twitter className="w-4 h-4 mr-2" />
                        Twitter
                      </Button>
                    )}
                    {selectedMember.social.github && (
                      <Button size="sm" variant="outline" className="border-gray-600">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}