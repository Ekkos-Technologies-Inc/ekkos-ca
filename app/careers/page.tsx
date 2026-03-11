import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | Ekkos Technologies Inc.',
  description: 'Join the team building cognitive infrastructure for AI systems.',
}

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="dark" className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            Careers at Ekkos Technologies
          </h1>
          <p className="text-xl text-neutral-300">
            Building the cognitive infrastructure layer for the next generation of AI systems
          </p>
        </div>
      </Section>

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Work on deep-tech AI infrastructure</h2>
          <div className="space-y-4 text-lg text-neutral-700">
            <p>
              We're building ekkOS—the cognitive infrastructure layer that powers memory, reasoning, 
              and pattern intelligence for AI agents and applications. This is infrastructure work 
              at the intersection of AI, distributed systems, and privacy-preserving technology.
            </p>
            <p>
              If you're excited about building systems that make AI agents smarter, more capable, and 
              more useful, we'd love to hear from you.
            </p>
          </div>
        </div>
      </Section>

      {/* Open Roles */}
      <Section variant="dark-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Open roles</h2>
          <div className="text-center py-12">
            <p className="text-xl text-neutral-300 mb-6">
              We don't have any open roles listed at the moment, but we're always interested in 
              hearing from exceptional engineers and researchers.
            </p>
            <Button href="/contact" variant="primary">
              Reach out
            </Button>
          </div>
        </div>
      </Section>

      {/* Benefits & Culture */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits & culture</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold mb-3">Competitive compensation</h3>
              <p className="text-neutral-600">
                We offer competitive salaries, equity packages, and comprehensive benefits.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-3">Remote-first</h3>
              <p className="text-neutral-600">
                Work from anywhere. We're a distributed team focused on results, not hours.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-3">Deep technical work</h3>
              <p className="text-neutral-600">
                Work on challenging problems in AI infrastructure, distributed systems, and privacy-preserving technology.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-3">Impact</h3>
              <p className="text-neutral-600">
                Build infrastructure that will power the next generation of AI systems. Your work 
                will be used by teams building the future of AI.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}




















































































































































































































