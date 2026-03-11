'use client'

import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    useCase: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
      setFormData({ name: '', company: '', email: '', message: '', useCase: '' })
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Hero */}
      <Section variant="dark" className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            Request a Paid Pilot
          </h1>
          <p className="text-xl text-neutral-300 mb-4">
            Get in touch to request a paid pilot, schedule a demo, or discuss your use case with our team.
          </p>
          <p className="text-lg text-neutral-400">
            We work with enterprise buyers, pilot prospects, and partners to deploy ekkOS cognitive infrastructure.
          </p>
        </div>
      </Section>

      {/* Contact Form */}
      <Section>
        <div className="max-w-2xl mx-auto">
          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-3xl">&#10003;</span>
              </div>
              <p className="text-green-800 text-lg font-semibold mb-2">Thank you for reaching out!</p>
              <p className="text-green-700 mb-6">We&apos;ll get back to you within 1-2 business days.</p>
              <button
                onClick={() => setStatus('idle')}
                className="text-electric-500 font-medium hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                  {errorMessage}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none transition-all disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none transition-all disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none transition-all disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="useCase" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none transition-all bg-white disabled:opacity-50"
                >
                  <option value="">Select an inquiry type...</option>
                  <option value="paid-pilot">Request a Paid Pilot</option>
                  <option value="demo">Request a Demo</option>
                  <option value="sales">Contact Sales</option>
                  <option value="partnership">Partnership / Investment Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none transition-all resize-none disabled:opacity-50"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full text-lg py-4"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Submit Request'}
              </Button>
            </form>
          )}
        </div>
      </Section>
    </>
  )
}
