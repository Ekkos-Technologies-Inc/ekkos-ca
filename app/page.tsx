import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ekkOS - The MCP Server That Gets Smarter Over Time',
  description: 'ekkOS is an MCP-native memory server that learns from outcomes. Most AI memory stores. ekkOS learns from your mistakes — so you never repeat them.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="dark" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/30 mb-6">
            <span className="text-sm text-electric-400 font-medium">MCP-Native Memory Infrastructure</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            The MCP Server That Gets Smarter Over Time
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Most AI memory stores. ekkOS learns from your mistakes — so you never repeat them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
              Request a Paid Pilot
            </Button>
            <Button href="/contact" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10">
              Contact Sales / Request Demo
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-electric-400 rounded-full"></span>
              Built in Toronto — SOC 2 compliant
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-electric-400 rounded-full"></span>
              Privacy-by-architecture (RLS, zero-access)
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-electric-400 rounded-full"></span>
              Enterprise-ready
            </div>
          </div>
        </div>
      </Section>

      {/* Company Identity */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">About EKKOS Technologies Inc.</h2>
          <p className="text-lg text-neutral-700 mb-4">
            EKKOS Technologies Inc. is a Canadian AI infrastructure company building ekkOS, an MCP-native memory server with 65 tools that enables AI systems to learn from outcomes over time. Unlike static memory that returns the same answer whether it worked or not, ekkOS tracks what worked, demotes what failed, and compounds intelligence with every interaction. We serve developer teams and AI engineering organizations solving context loss, pattern forgetfulness, and the challenge of building AI that genuinely improves.
          </p>
        </div>
      </Section>

      {/* Problems You Solve */}
      <Section variant="dark-alt">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Typical Challenges Without ekkOS</h2>
              <ul className="space-y-4 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-electric-400 mt-1">•</span>
                  <span>AI agents forget past interactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-400 mt-1">•</span>
                  <span>Context resets every session</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-400 mt-1">•</span>
                  <span>Hard to build learning behaviors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-400 mt-1">•</span>
                  <span>Engineering cost to home-roll memory logic</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">What ekkOS Provides</h2>
              <ul className="space-y-4 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-electric-400 mt-1">•</span>
                  <span>Episodic memory that persists</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-400 mt-1">•</span>
                  <span>Pattern intelligence for long-term strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-400 mt-1">•</span>
                  <span>API-first integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-400 mt-1">•</span>
                  <span>Predictable, measurable outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* How ekkOS Works */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">How ekkOS Works</h2>
          <p className="text-lg text-neutral-700 mb-4">
            ekkOS structures experience into episodes and patterns, allowing agents and applications to recall past events, learn useful behaviors, and improve over time. The platform exposes REST APIs, SDKs, and integrations so teams can deploy memory-enabled AI with minimal overhead.
          </p>
          <div className="text-center mt-6">
            <Button href="https://ekkos.dev/docs" variant="outline" className="px-6 py-3">
              View Developer Documentation
            </Button>
          </div>
        </div>
      </Section>

      {/* What Makes ekkOS Different - The Golden Loop */}
      <Section variant="dark-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">The Golden Loop™</h2>
          <p className="text-lg text-neutral-300 mb-8 text-center">
            Other MCP servers store. ekkOS learns. Here's the difference.
          </p>

          {/* Golden Loop Visual */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 rounded-lg bg-navy-800 border border-navy-700">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-electric-500/20 flex items-center justify-center">
                <span className="text-electric-400 font-bold">1</span>
              </div>
              <div className="text-sm font-semibold text-white">Retrieve</div>
              <div className="text-xs text-neutral-400">Find relevant patterns</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-navy-800 border border-navy-700">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-electric-500/20 flex items-center justify-center">
                <span className="text-electric-400 font-bold">2</span>
              </div>
              <div className="text-sm font-semibold text-white">Apply</div>
              <div className="text-xs text-neutral-400">Use the solution</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-navy-800 border border-navy-700">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-electric-500/20 flex items-center justify-center">
                <span className="text-electric-400 font-bold">3</span>
              </div>
              <div className="text-sm font-semibold text-white">Measure</div>
              <div className="text-xs text-neutral-400">Track if it worked</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-navy-800 border border-navy-700">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-electric-500/20 flex items-center justify-center">
                <span className="text-electric-400 font-bold">4</span>
              </div>
              <div className="text-sm font-semibold text-white">Learn</div>
              <div className="text-xs text-neutral-400">Update patterns</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-xl font-bold mb-3 text-electric-400">Remembers</h3>
              <p className="text-neutral-300">
                Every interaction is captured and structured. Your AI remembers context between sessions, across tools, and over time.
              </p>
            </Card>
            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-xl font-bold mb-3 text-electric-400">Learns</h3>
              <p className="text-neutral-300">
                Patterns are extracted from experiences and refined over time. What works gets promoted. What fails gets demoted.
              </p>
            </Card>
            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-xl font-bold mb-3 text-electric-400">Improves</h3>
              <p className="text-neutral-300">
                Your AI gets smarter with every interaction. The more you use it, the better it performs.
              </p>
            </Card>
          </div>
          <div className="mt-8 p-6 bg-navy-900 rounded-lg border border-navy-700">
            <p className="text-neutral-300 text-center">
              <strong className="text-white">The Difference:</strong> After 100 uses, static memory is exactly where it started. ekkOS has learned from 100 outcomes — promoting what worked, demoting what didn't. That's compound intelligence.
            </p>
          </div>
        </div>
      </Section>

      {/* Trust Signals */}
      <Section variant="dark-alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Built in Toronto — SOC 2 compliant</h2>
          <p className="text-lg text-neutral-300">
            ekkOS is built in Toronto and adheres to SOC 2 controls and enterprise security posture, ready for serious integrations.
          </p>
        </div>
      </Section>

      {/* Short Narrative Block */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-neutral-700 leading-relaxed">
            Most AI memory solutions today are retrieval based and depend on ad-hoc integrations. ekkOS captures experience as structured episodes and patterns that improve over time. This enables AI agents to retain context across sessions, reduce engineering burden, and deliver more intelligent behavior without engineers having to build custom memory logic from scratch.
          </p>
        </div>
      </Section>

      {/* Who Should Use ekkOS */}
      <Section variant="dark-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Who Should Use ekkOS</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-xl font-bold mb-3">AI Product Teams</h3>
              <p className="text-neutral-300">
                Build AI-powered products that learn and improve from user interactions over time.
              </p>
            </Card>
            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-xl font-bold mb-3">Autonomous Agent Developers</h3>
              <p className="text-neutral-300">
                Create agents that maintain context, learn from experience, and demonstrate continuity.
              </p>
            </Card>
            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-xl font-bold mb-3">Enterprise AI Innovation Teams</h3>
              <p className="text-neutral-300">
                Deploy cognitive infrastructure at scale with enterprise security and compliance.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Pilot Success Criteria */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Pilot Success Criteria</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-electric-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Agents retain multi-session context</h3>
                <p className="text-neutral-600">Your AI systems remember past interactions and build on previous conversations.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-electric-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Measurable improvement in task continuity</h3>
                <p className="text-neutral-600">Track and measure how memory improves agent performance over time as patterns compound.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-electric-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Speed of integration (2–3 week pilot)</h3>
                <p className="text-neutral-600">Get up and running quickly with our API-first approach and comprehensive documentation.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to build stateful AI?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Request a paid pilot and see how ekkOS transforms your AI systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
              Request a Paid Pilot
            </Button>
            <Button href="/contact" variant="secondary" className="text-lg px-8 py-4">
              Contact Sales / Request Demo
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
