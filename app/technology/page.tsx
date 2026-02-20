import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technology | ekkOS',
  description: 'The memory layer for AI - secure, private, enterprise-ready.',
}

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="dark" className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            The Memory Layer for AI
          </h1>
          <p className="text-xl text-neutral-300">
            Give AI systems persistent memory, learning, and enterprise-grade security
          </p>
        </div>
      </Section>

      {/* What We Do */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What ekkOS Does</h2>
          <div className="space-y-4 text-lg text-neutral-700">
            <p>
              ekkOS provides the cognitive infrastructure that makes AI systems genuinely smarter over time:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Persistent Memory:</strong> AI remembers context between sessions, across tools, and over time.</li>
              <li><strong>Pattern Learning:</strong> Solutions get captured and refined. What works becomes reusable.</li>
              <li><strong>User Preferences:</strong> Your rules and preferences override generic AI suggestions.</li>
              <li><strong>Conflict Detection:</strong> Catches contradictions before AI implements bad suggestions.</li>
              <li><strong>Cross-Platform:</strong> Same memory across Cursor, Claude Code, VS Code, and any MCP-compatible tool.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* How You Benefit */}
      <Section variant="dark-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">How You Benefit</h2>
          <p className="text-lg text-neutral-300 mb-8 text-center max-w-3xl mx-auto">
            AI that actually learns and improves, not just retrieves documents.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-2xl font-bold mb-4">For Developers</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>Stop re-explaining your codebase</li>
                <li>Never debug the same issue twice</li>
                <li>2-10x faster development over time</li>
                <li>Your AI gets smarter every session</li>
              </ul>
            </Card>
            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-2xl font-bold mb-4">For Teams</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>Shared knowledge across team members</li>
                <li>Instant onboarding for new hires</li>
                <li>Consistent AI suggestions across tools</li>
                <li>Team standards enforced automatically</li>
              </ul>
            </Card>
            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-2xl font-bold mb-4">For Enterprise</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>SOC 2 compliant infrastructure</li>
                <li>Complete data isolation</li>
                <li>Audit logs for all AI decisions</li>
                <li>Self-hosted deployment options</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Privacy & Security */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Privacy & Security</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold mb-3">Zero-Access Model</h3>
              <p className="text-neutral-600">
                We cannot access your data, even with database credentials.
                Your memory is encrypted, isolated, and protected by security policies our own team cannot bypass.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-3">Complete Data Isolation</h3>
              <p className="text-neutral-600">
                Multi-tenant isolation ensures your data is completely separate from other users.
                Isolated memory, isolated patterns, isolated everything.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-3">You Control Your Data</h3>
              <p className="text-neutral-600">
                You control visibility and retention for all memory.
                Nothing is shared without your explicit consent.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-3">Enterprise Ready</h3>
              <p className="text-neutral-600">
                SOC 2 certification in progress. HIPAA-ready.
                Self-hosted deployment available for organizations with strict compliance requirements.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Integrations */}
      <Section variant="dark-alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Works With Your Stack</h2>
          <p className="text-lg text-neutral-300 mb-8">
            ekkOS integrates with the tools you already use. One memory layer, all your AI tools.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Cursor', 'Claude Code', 'VS Code', 'Claude Desktop', 'Windsurf', 'ChatGPT', 'Custom Agents', 'REST API'].map((tool) => (
              <div key={tool} className="p-4 bg-navy-800 rounded-lg border border-navy-700">
                <p className="text-white font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Give your AI persistent memory in under 5 minutes. Free tier available.
          </p>
          <a
            href="https://platform.ekkos.dev/signup"
            className="inline-block px-8 py-4 bg-navy-950 text-white font-semibold rounded-lg hover:bg-navy-900 transition-colors"
          >
            Start Free
          </a>
        </div>
      </Section>
    </>
  )
}
