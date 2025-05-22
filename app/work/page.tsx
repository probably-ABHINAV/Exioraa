
import { WorkSlider } from '@/components/WorkSlider'
import { ScrollTriggerWrapper } from '@/components/ScrollTriggerWrapper'

export default function Work() {
  return (
    <main className="min-h-screen py-20">
      <ScrollTriggerWrapper>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Work</h1>
          <WorkSlider />
        </div>
      </ScrollTriggerWrapper>
    </main>
  )
}
