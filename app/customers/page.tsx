import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customers & Use Cases | ekkOS',
  description: 'Learn how AI agent platforms, IDE vendors, and enterprise teams use ekkOS.',
}

export default function CustomersPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="dark" className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            Who uses ekkOS
          </h1>
          <p className="text-xl text-neutral-300">
            The cognitive infrastructure powering agents, robotics, apps, and enterprise AI systems
          </p>
        </div>
      </Section>

      {/* Who Uses ekkOS */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Built for AI infrastructure teams</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <h3 className="text-xl font-bold mb-3">Developer Tools & IDEs</h3>
              <p className="text-neutral-600">
                Integrate cognitive infrastructure into development tools. Pattern-based procedural learning 
                and contextual memory for developer workflows.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-3">AI Agent Platforms</h3>
              <p className="text-neutral-600">
                Provide agents with persistent memory substrate and long-horizon reasoning. Agents maintain 
                context across sessions and learn from episodic experiences.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-3">Enterprise AI Systems</h3>
              <p className="text-neutral-600">
                Deploy cognitive infrastructure at enterprise scale. Privacy-by-architecture, multi-tenant 
                isolation, and zero-access model for sensitive workloads.
              </p>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold mb-3">Robotics & Autonomous Systems</h3>
              <p className="text-neutral-600">
                Long-horizon memory, multimodal context, and pattern-based procedural learning for 
                autonomous systems operating over extended timeframes.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-3">Enterprise Applications</h3>
              <p className="text-neutral-600">
                Build applications with persistent memory, episodic understanding, and safe collective 
                intelligence. The cognitive OS for intelligent applications.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Use Case Cards */}
      <Section variant="dark-alt">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Use cases</h2>
          <div className="space-y-8">
            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-2xl font-bold mb-4">AI Agent Memory Substrate</h3>
              <p className="text-neutral-300 mb-4">
                Agents need persistent memory substrate, not session-based amnesia. ekkOS provides 
                event-sourced memory, episodic segmentation, and long-horizon reasoning. Agents 
                maintain context across sessions and learn from episodic experiences.
              </p>
              <div className="bg-navy-900 rounded-lg p-4 mt-4">
                <p className="text-sm text-neutral-400 font-mono">
                  Integration: Capture agent interactions as events, form learning episodes, extract 
                  patterns, and retrieve relevant context for long-horizon reasoning.
                </p>
              </div>
            </Card>

            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-2xl font-bold mb-4">Developer Tools & Pattern Learning</h3>
              <p className="text-neutral-300 mb-4">
                Development tools can learn from developer workflows. ekkOS captures coding patterns, 
                extracts procedural knowledge, and enables pattern-based learning. Multimodal memory 
                (images, audio) stored as Forever Memory™.
              </p>
              <div className="bg-navy-900 rounded-lg p-4 mt-4">
                <p className="text-sm text-neutral-400 font-mono">
                  Integration: Track code edits, function additions, and bug fixes as events. Extract 
                  patterns from successful workflows. Store screenshots and audio as Forever Memory™.
                </p>
              </div>
            </Card>

            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-2xl font-bold mb-4">Enterprise AI Infrastructure</h3>
              <p className="text-neutral-300 mb-4">
                Enterprise systems need cognitive infrastructure that scales, maintains privacy-by-architecture, 
                and integrates with existing systems. ekkOS provides multi-tenant isolation, zero-access 
                model, and enterprise-grade APIs.
              </p>
              <div className="bg-navy-900 rounded-lg p-4 mt-4">
                <p className="text-sm text-neutral-400 font-mono">
                  Integration: Multi-tenant deployment with RLS-enforced isolation. REST APIs, TypeScript 
                  SDK, and MCP access. Zero company access to raw user memory.
                </p>
              </div>
            </Card>

            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-2xl font-bold mb-4">Robotics & Autonomous Systems</h3>
              <p className="text-neutral-300 mb-4">
                Autonomous systems need long-horizon memory, multimodal context, and pattern-based procedural 
                learning. ekkOS provides episodic memory, Forever Memory™ for images/audio, and pattern 
                extraction for continuous improvement.
              </p>
              <div className="bg-navy-900 rounded-lg p-4 mt-4">
                <p className="text-sm text-neutral-400 font-mono">
                  Integration: Capture sensor data and actions as events. Form episodes from successful 
                  task completions. Extract patterns for procedural learning. Store images/audio as Forever Memory™.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Logo Strip Placeholder */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-neutral-400">
            The cognitive foundation for intelligent systems
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-32 h-16 bg-neutral-200 rounded flex items-center justify-center text-neutral-400 text-sm"
              >
                Logo {i}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}



