
import { ScrollTriggerWrapper } from '@/components/ScrollTriggerWrapper'
import { AboutSection } from '@/components/AboutSection'

export default function About() {
  return (
    <main className="min-h-screen py-20">
      <ScrollTriggerWrapper>
        <div className="container mx-auto px-4">
          <AboutSection />
        </div>
      </ScrollTriggerWrapper>
    </main>
  )
}
