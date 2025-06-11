"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, Video, MessageSquare } from "lucide-react"

interface TimeSlot {
  id: string
  time: string
  available: boolean
}

interface TeamMember {
  id: string
  name: string
  role: string
  avatar: string
  specialties: string[]
}

const teamMembers: TeamMember[] = [
  {
    id: "alex",
    name: "Alex Chen",
    role: "CEO & Strategy",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    specialties: ["Business Strategy", "Digital Transformation", "Project Planning"],
  },
  {
    id: "sarah",
    name: "Sarah Johnson",
    role: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    specialties: ["UI/UX Design", "Brand Strategy", "Design Systems"],
  },
  {
    id: "marcus",
    name: "Marcus Rodriguez",
    role: "CTO",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    specialties: ["Technical Architecture", "Development Strategy", "Technology Consulting"],
  },
]

const timeSlots: TimeSlot[] = [
  { id: "9am", time: "9:00 AM", available: true },
  { id: "10am", time: "10:00 AM", available: false },
  { id: "11am", time: "11:00 AM", available: true },
  { id: "1pm", time: "1:00 PM", available: true },
  { id: "2pm", time: "2:00 PM", available: true },
  { id: "3pm", time: "3:00 PM", available: false },
  { id: "4pm", time: "4:00 PM", available: true },
  { id: "5pm", time: "5:00 PM", available: true },
]

const meetingTypes = [
  {
    id: "consultation",
    name: "Free Consultation",
    duration: "30 minutes",
    description: "Discuss your project goals and get initial recommendations",
    icon: <MessageSquare className="w-5 h-5" />,
    color: "purple",
  },
  {
    id: "strategy",
    name: "Strategy Session",
    duration: "60 minutes",
    description: "Deep dive into your business needs and digital strategy",
    icon: <User className="w-5 h-5" />,
    color: "cyan",
  },
  {
    id: "technical",
    name: "Technical Review",
    duration: "45 minutes",
    description: "Review technical requirements and architecture planning",
    icon: <Video className="w-5 h-5" />,
    color: "green",
  },
]

export function SchedulingSystem() {
  const [step, setStep] = useState(1)
  const [selectedMeetingType, setSelectedMeetingType] = useState("")
  const [selectedMember, setSelectedMember] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    // Handle booking submission
    console.log("Booking submitted:", {
      meetingType: selectedMeetingType,
      member: selectedMember,
      date: selectedDate,
      time: selectedTime,
      contact: contactInfo,
    })
    setStep(5) // Show confirmation
  }

  const getNextWeekDays = () => {
    const days = []
    const today = new Date()
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      days.push({
        date: date.toISOString().split("T")[0],
        label: date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      })
    }
    return days
  }

  if (step === 5) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-lg p-8 border border-green-500/50">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Meeting Scheduled!</h3>
          <p className="text-gray-300 mb-6">
            Your {meetingTypes.find((t) => t.id === selectedMeetingType)?.name} with{" "}
            {teamMembers.find((m) => m.id === selectedMember)?.name} has been scheduled for {selectedDate} at{" "}
            {selectedTime}.
          </p>
          <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
            <h4 className="text-white font-semibold mb-2">What's Next?</h4>
            <ul className="text-gray-300 text-sm space-y-1 text-left">
              <li>• You'll receive a calendar invite within 5 minutes</li>
              <li>• Meeting link will be included in the invite</li>
              <li>• We'll send a preparation guide 24 hours before</li>
              <li>• Feel free to reach out if you have any questions</li>
            </ul>
          </div>
          <Button
            onClick={() => {
              setStep(1)
              setSelectedMeetingType("")
              setSelectedMember("")
              setSelectedDate("")
              setSelectedTime("")
              setContactInfo({ name: "", email: "", company: "", phone: "", message: "" })
            }}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            Schedule Another Meeting
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          Book a Meeting
        </Badge>
        <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Consultation</h2>
        <p className="text-gray-400">Let's discuss your project and explore how we can help you succeed</p>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-4">
          {[1, 2, 3, 4].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= stepNum ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-400"
                }`}
              >
                {stepNum}
              </div>
              {stepNum < 4 && <div className={`w-12 h-0.5 ${step > stepNum ? "bg-purple-600" : "bg-gray-700"}`} />}
            </div>
          ))}
        </div>
      </div>

      <Card className="bg-gray-800/50 border-gray-700">
        <CardContent className="p-6">
          {/* Step 1: Meeting Type */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h3 className="text-xl font-bold text-white mb-6">What type of meeting would you like?</h3>
              <div className="grid gap-4">
                {meetingTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    className={`p-4 rounded-lg border text-left transition-all duration-300 ${
                      selectedMeetingType === type.id
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-gray-600 hover:border-gray-500"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedMeetingType(type.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg bg-${type.color}-500/20 text-${type.color}-400`}>
                          {type.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{type.name}</h4>
                          <p className="text-gray-400 text-sm">{type.description}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        {type.duration}
                      </Badge>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Team Member */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h3 className="text-xl font-bold text-white mb-6">Who would you like to meet with?</h3>
              <div className="grid gap-4">
                {teamMembers.map((member) => (
                  <motion.button
                    key={member.id}
                    className={`p-4 rounded-lg border text-left transition-all duration-300 ${
                      selectedMember === member.id
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-gray-600 hover:border-gray-500"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedMember(member.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{member.name}</h4>
                        <p className="text-purple-400 text-sm">{member.role}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {member.specialties.slice(0, 2).map((specialty, index) => (
                            <Badge key={index} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Date & Time */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h3 className="text-xl font-bold text-white mb-6">Select date and time</h3>

              {/* Date Selection */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Choose a date:</h4>
                <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
                  {getNextWeekDays().map((day) => (
                    <button
                      key={day.date}
                      className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                        selectedDate === day.date
                          ? "border-purple-500 bg-purple-500/10 text-purple-300"
                          : "border-gray-600 text-gray-300 hover:border-gray-500"
                      }`}
                      onClick={() => setSelectedDate(day.date)}
                    >
                      <div className="text-sm">{day.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div>
                  <h4 className="text-white font-semibold mb-3">Choose a time:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.id}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                          !slot.available
                            ? "border-gray-700 text-gray-500 cursor-not-allowed"
                            : selectedTime === slot.time
                              ? "border-purple-500 bg-purple-500/10 text-purple-300"
                              : "border-gray-600 text-gray-300 hover:border-gray-500"
                        }`}
                        onClick={() => slot.available && setSelectedTime(slot.time)}
                      >
                        <Clock className="w-4 h-4 mx-auto mb-1" />
                        <div className="text-sm">{slot.time}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Step 4: Contact Information */}
          {step === 4 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h3 className="text-xl font-bold text-white mb-6">Your contact information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input
                  placeholder="Full Name *"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  className="bg-gray-900/50 border-gray-600 text-white"
                />
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className="bg-gray-900/50 border-gray-600 text-white"
                />
                <Input
                  placeholder="Company Name"
                  value={contactInfo.company}
                  onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                  className="bg-gray-900/50 border-gray-600 text-white"
                />
                <Input
                  placeholder="Phone Number"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  className="bg-gray-900/50 border-gray-600 text-white"
                />
              </div>
              <Textarea
                placeholder="Tell us about your project or what you'd like to discuss..."
                value={contactInfo.message}
                onChange={(e) => setContactInfo({ ...contactInfo, message: e.target.value })}
                className="bg-gray-900/50 border-gray-600 text-white"
                rows={4}
              />
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Back
            </Button>

            {step < 4 ? (
              <Button
                onClick={handleNext}
                disabled={
                  (step === 1 && !selectedMeetingType) ||
                  (step === 2 && !selectedMember) ||
                  (step === 3 && (!selectedDate || !selectedTime))
                }
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!contactInfo.name || !contactInfo.email}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              >
                Schedule Meeting
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
