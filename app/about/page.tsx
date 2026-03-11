import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Ekkos Technologies Inc.',
  description: 'Learn about Ekkos Technologies Inc. and our mission to provide cognitive infrastructure for AI systems.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="dark" className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            About EKKOS Technologies Inc.
          </h1>
          <p className="text-xl text-neutral-300">
            EKKOS Technologies Inc. builds the cognitive substrate and memory infrastructure for intelligent systems.
          </p>
        </div>
      </Section>

      {/* Company Identity */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Company Identity</h2>
          <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
            EKKOS Technologies Inc. is a Canadian AI infrastructure company building ekkOS, a cognitive memory platform that enables AI systems to retain experience, learn over time, and demonstrate continuity across sessions. ekkOS is a production-grade memory substrate used by developer teams and AI engineering organizations to solve context loss, agent forgetfulness, and long-horizon reasoning challenges.
          </p>
        </div>
      </Section>

      {/* Mission */}
      <Section variant="dark-alt">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">Mission</h2>
          <div className="space-y-4 text-neutral-300">
            <p className="text-lg">
              Our mission is to provide the cognitive substrate and memory infrastructure for agents, robotics, 
              applications, and enterprise AI systems. We believe intelligent systems need persistent memory, 
              long-horizon reasoning, and safe learning loops—not session-based amnesia.
            </p>
            <p className="text-lg">
              ekkOS is the AI OS—the cognitive operating system that provides memory, structure, continuity, 
              and safety. Through event-sourced memory, episodic segmentation, pattern intelligence, and 
              privacy-by-architecture, we're building the foundation layer that makes AI systems truly capable.
            </p>
          </div>
        </div>
      </Section>

      {/* Story */}
      <Section variant="dark-alt">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why ekkOS exists</h2>
          <div className="space-y-4 text-neutral-300">
            <p className="text-lg">
              Intelligent systems need memory, structure, and continuity. Without a cognitive substrate, 
              agents reset to zero with every session. Robotics systems can't learn from experience. 
              Enterprise AI can't maintain long-horizon context. This fundamental limitation prevents 
              systems from building on past experiences and improving over time.
            </p>
            <p className="text-lg">
              ekkOS solves this by providing event-sourced memory substrate, episodic segmentation, 
              pattern intelligence, and long-horizon reasoning. Systems capture events, form learning 
              episodes, extract patterns, and maintain multimodal context. All while maintaining 
              privacy-by-architecture with row-level security, isolated tenants, and zero-access model.
            </p>
            <p className="text-lg">
              We're not building another AI model or chat interface. We're building the cognitive 
              infrastructure—the AI OS—that makes all intelligent systems smarter, more capable, 
              and more useful.
            </p>
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Leadership</h2>
          <div className="flex justify-center">
            <Card className="max-w-md text-center">
              <div className="flex justify-center mb-6">
                <Image
                  src="/seann-macdougall.png"
                  alt="Seann MacDougall — Founder & CEO, EKKOS Technologies Inc."
                  width={160}
                  height={160}
                  className="rounded-full object-cover grayscale"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1">Seann MacDougall</h3>
              <p className="text-sm text-neutral-500 mb-4">Founder & CEO</p>
              <p className="text-neutral-600 leading-relaxed">
                Seann MacDougall is the founder and CEO of EKKOS Technologies Inc. Based in Toronto,
                he leads the development of ekkOS—the cognitive memory platform providing persistent
                memory infrastructure for AI systems, agents, and robotics.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Company Footprint */}
      <Section variant="dark-alt">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Built in Toronto — SOC 2 compliant</h2>
          <div className="space-y-4 text-neutral-300">
            <p className="text-lg">
              EKKOS Technologies Inc. operates as a serious infrastructure provider, architected 
              with privacy-by-architecture and multi-tenant isolation as first principles. ekkOS is built in Toronto and adheres to SOC 2 controls and enterprise security posture, ready for serious integrations.
            </p>
            <p className="text-lg">
              Our systems are designed to handle enterprise-scale workloads while maintaining strict data boundaries 
              and zero-access architecture. We believe that cognitive infrastructure should be accessible, secure, and reliable. 
              That's why we've built ekkOS with event-sourcing, row-level security, episodic segmentation, 
              pattern intelligence, and multimodal memory from the ground up. Privacy is not an afterthought—it's 
              the architecture.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}



