
import { ContactForm } from '@/components/ContactForm'

export default function Contact() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <ContactForm />
      </div>
    </main>
  )
}
