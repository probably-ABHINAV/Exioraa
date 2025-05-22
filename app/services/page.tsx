
import { ServicesGrid } from '@/components/ServicesGrid'
import { ScrollTriggerWrapper } from '@/components/ScrollTriggerWrapper'

export default function Services() {
  return (
    <main className="min-h-screen py-20">
      <ScrollTriggerWrapper>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
          <ServicesGrid />
        </div>
      </ScrollTriggerWrapper>
    </main>
  )
}
