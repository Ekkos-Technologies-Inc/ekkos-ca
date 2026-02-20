import { Section } from '@/components/Section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Principles | ekkOS Technologies Inc.',
  description: 'The principles that guide ekkOS. Memory infrastructure built on trust, transparency, and technical honesty.',
}

export default function PolicyPage() {
  return (
    <>
      {/* Hero - Bold Statement */}
      <Section variant="dark" className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-500/20 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-500"></span>
            </span>
            <span className="text-electric-400 font-semibold text-sm">Live Document</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
            AI Should Get Smarter<br />
            <span className="text-electric-400">With</span> You, Not <span className="text-neutral-500">About</span> You
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-300 max-w-2xl mx-auto">
            These aren&apos;t marketing promises. They&apos;re architectural decisions
            enforced by code, verified by audits, and visible in our open-source repositories.
          </p>
        </div>
      </Section>

      {/* The Problem - Data-Driven */}
      <Section className="py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                The Year is 2026.<br />
                <span className="text-neutral-400">Your AI Still Forgets Everything.</span>
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Every conversation starts from zero. Every coding assistant makes the same
                mistakes. Developers call it <strong>&quot;context rot&quot;</strong> — the frustrating
                reality that AI tools are <em>stateless by design</em>.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                Research from METR found that traditional AI coding assistants create a
                <strong> 19% productivity loss</strong> because small context windows force
                constant manual prompting that destroys flow state.
              </p>
              <p className="text-lg text-neutral-600">
                We built ekkOS because memory shouldn&apos;t be a luxury — it should be
                infrastructure. And infrastructure should respect the people who depend on it.
              </p>
            </div>
            <div className="space-y-4">
              {/* Stats Cards */}
              <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-2xl p-6 border border-red-200">
                <div className="text-5xl font-black text-red-500 mb-2">60,000×</div>
                <div className="text-neutral-700">AI intelligence has scaled since ChatGPT launched</div>
              </div>
              <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-2xl p-6 border border-amber-200">
                <div className="text-5xl font-black text-amber-500 mb-2">100×</div>
                <div className="text-neutral-700">Memory capacity has scaled in the same period</div>
              </div>
              <div className="bg-gradient-to-br from-electric-500/10 to-electric-600/5 rounded-2xl p-6 border border-electric-200">
                <div className="text-5xl font-black text-electric-500 mb-2">600×</div>
                <div className="text-neutral-700">The memory gap that ekkOS exists to close</div>
              </div>
            </div>
          </div>

          {/* Code Block */}
          <div className="mt-16 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 text-white">
            <div className="flex items-center gap-2 mb-4 text-neutral-400 text-sm">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-4 font-mono">the_problem.ts</span>
            </div>
            <div className="font-mono text-sm space-y-3 text-neutral-300">
              <div className="text-neutral-500">// Traditional AI: stateless by design</div>
              <div><span className="text-red-400">session_1</span>: <span className="text-green-400">&quot;I prefer TypeScript strict mode&quot;</span></div>
              <div><span className="text-red-400">session_2</span>: <span className="text-green-400">&quot;Our API uses snake_case&quot;</span></div>
              <div><span className="text-red-400">session_3</span>: <span className="text-green-400">&quot;We fixed that auth bug yesterday&quot;</span></div>
              <div className="pt-2 text-neutral-500">// Session 4: AI has forgotten all of it</div>
              <div className="pt-4 text-neutral-500">// ekkOS: memory as infrastructure</div>
              <div><span className="text-electric-400">ekkOS</span>.<span className="text-yellow-400">remembers</span>(<span className="text-green-400">&quot;all of it&quot;</span>)</div>
              <div><span className="text-electric-400">ekkOS</span>.<span className="text-yellow-400">learns</span>(<span className="text-green-400">&quot;from mistakes&quot;</span>)</div>
              <div><span className="text-electric-400">ekkOS</span>.<span className="text-yellow-400">getsSmarter</span>(<span className="text-green-400">&quot;over time&quot;</span>)</div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Industry Problem */}
      <Section variant="light" className="py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              &quot;Context Engineering&quot; Is Now an Entire Industry
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Developers spend hours structuring prompts, manually segmenting code into chunks,
              and fighting the <strong>&quot;lost-in-the-middle&quot; problem</strong> where AI loses
              track of details buried in conversations. This shouldn&apos;t be your job.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3">The Repetition Tax</h3>
              <p className="text-neutral-600 text-sm">
                Every session starts over. You re-explain your codebase, your preferences,
                your conventions. The AI that helped you yesterday is a stranger today.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-bold mb-3">The Paradox</h3>
              <p className="text-neutral-600 text-sm">
                More context should help. Instead, output quality <em>degrades</em> as you add
                more — models pull irrelevant details from earlier prompts and lose focus.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold mb-3">The Hidden Cost</h3>
              <p className="text-neutral-600 text-sm">
                A KV cache miss costs 10× more than a hit. Agentic AI generates 100× more
                tokens. Without smart memory, inference costs explode.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Principles - Big Cards */}
      <Section className="py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Four Principles. Zero Compromise.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Principle 1 */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-electric-200">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-electric-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                1
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-bold mb-4">We Cannot See Your Memory</h3>
                <p className="text-neutral-600 mb-6">
                  Not &quot;we won&apos;t&quot; — <strong>we can&apos;t</strong>. Row-level security
                  is enforced at the Postgres layer. Every query is physically incapable of
                  returning another user&apos;s data. Your memories are encrypted with keys
                  derived from your identity. Even our engineers with full database access
                  see only encrypted blobs they cannot decrypt.
                </p>
                <div className="flex items-center gap-2 text-sm text-electric-600 font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Verified by production security audit
                </div>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-electric-200">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-electric-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                2
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-bold mb-4">Your Memory Travels With You</h3>
                <p className="text-neutral-600 mb-6">
                  Full export. Full portability. One click downloads everything — patterns,
                  episodes, directives, secrets (encrypted) — in documented JSON format.
                  Switch to a competitor tomorrow and take every byte with you. We&apos;d
                  rather earn your loyalty than trap you into it.
                </p>
                <div className="flex items-center gap-2 text-sm text-electric-600 font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  ekkOS_Export available in every tier
                </div>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-electric-200">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-electric-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                3
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-bold mb-4">Collective Learning, Individual Privacy</h3>
                <p className="text-neutral-600 mb-6">
                  When you discover something valuable — a debugging pattern, an architectural
                  insight, a gotcha — you can share the <em>structure</em> without sharing
                  your <em>data</em>. &quot;Always check for null before accessing nested properties&quot;
                  helps everyone. Your actual code stays yours.
                </p>
                <div className="flex items-center gap-2 text-sm text-electric-600 font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Automatic PII scrubbing on collective patterns
                </div>
              </div>
            </div>

            {/* Principle 4 */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-electric-200">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-electric-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                4
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-bold mb-4">Delete Means Delete</h3>
                <p className="text-neutral-600 mb-6">
                  When you delete something, it&apos;s gone. Not archived. Not soft-deleted for
                  90 days. Not retained for &quot;business analytics.&quot; Purged from primary
                  storage immediately, from backups within 30 days. Cryptographically
                  unrecoverable. Your right to be forgotten is a button click.
                </p>
                <div className="flex items-center gap-2 text-sm text-electric-600 font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  GDPR Article 17 compliant by default
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What We Will Never Do - Dark Grid */}
      <Section variant="dark" className="py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            The &quot;Never&quot; List
          </h2>
          <p className="text-neutral-400 text-center mb-16 max-w-2xl mx-auto">
            Some things aren&apos;t negotiable. Not for investors. Not for acquirers.
            Not for anyone.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Sell Your Data',
                desc: 'Not to advertisers. Not to data brokers. Not to AI training companies. Not for any amount of money.',
                icon: '💰'
              },
              {
                title: 'Train on Your Memory',
                desc: 'Your memories don\'t train our models or anyone else\'s. Your intellectual property remains yours.',
                icon: '🧠'
              },
              {
                title: 'Build Shadow Profiles',
                desc: 'No tracking non-users. No data collection from people who haven\'t explicitly signed up.',
                icon: '👤'
              },
              {
                title: 'Use Dark Patterns',
                desc: 'No tricks to keep you subscribed. No buried cancel buttons. No "are you sure?" guilt trips. Cancel in two clicks.',
                icon: '🪤'
              },
              {
                title: 'Surprise Price Hikes',
                desc: 'Your tier is your tier. Changes announced 90 days minimum. Grandfathered pricing for existing customers.',
                icon: '📈'
              },
              {
                title: 'Weaponize Memory',
                desc: 'No selling to surveillance companies. No government backdoors. Memory is for helping people, not hunting them.',
                icon: '🎯'
              },
            ].map((item, i) => (
              <div key={i} className="bg-neutral-800/50 backdrop-blur rounded-2xl p-6 border border-neutral-700 hover:border-red-500/50 transition-colors group">
                <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-red-400">Never:</span> {item.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How We Make Money - Transparent */}
      <Section className="py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How We Actually Make Money
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              When a company&apos;s business model is unclear, you&apos;re usually the product.
              Here&apos;s exactly how ekkOS generates revenue.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-6 items-start bg-white rounded-2xl p-8 shadow-md border border-neutral-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-black text-2xl">$</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Subscriptions</h3>
                <p className="text-neutral-600">
                  You pay for compute, storage, and features. Free tier for individuals.
                  Pro tier for power users. Team tier for organizations. The value exchange
                  is clear: you pay money, we provide infrastructure.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start bg-white rounded-2xl p-8 shadow-md border border-neutral-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-black text-2xl">B</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Enterprise Contracts</h3>
                <p className="text-neutral-600">
                  Organizations deploy ekkOS for their engineering teams. Custom SLAs,
                  dedicated support, SSO integration, on-premise deployment options.
                  Volume pricing for large deployments.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start bg-white rounded-2xl p-8 shadow-md border border-neutral-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-black text-2xl">∅</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">That&apos;s It</h3>
                <p className="text-neutral-600">
                  No advertising revenue. No data brokerage deals. No &quot;strategic partnerships&quot;
                  that compromise your privacy. No investor pressure to monetize your data.
                  Just software that works, sold honestly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Enforcement Table */}
      <Section variant="light" className="py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Policies Enforced by Architecture
          </h2>
          <p className="text-lg text-neutral-600 text-center mb-16 max-w-2xl mx-auto">
            Trust shouldn&apos;t require faith. Every commitment below is enforced at the
            infrastructure level — not by policy documents, but by code you can audit.
          </p>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="py-5 px-6 text-left font-bold text-neutral-900">Commitment</th>
                    <th className="py-5 px-6 text-left font-bold text-neutral-900">Technical Enforcement</th>
                    <th className="py-5 px-6 text-left font-bold text-neutral-900">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="py-5 px-6 font-medium">Complete data isolation</td>
                    <td className="py-5 px-6 text-neutral-600">PostgreSQL RLS on every table. Queries physically cannot return other users&apos; data.</td>
                    <td className="py-5 px-6"><span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Verified</span></td>
                  </tr>
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="py-5 px-6 font-medium">Encryption at rest</td>
                    <td className="py-5 px-6 text-neutral-600">AES-256-GCM with per-user key derivation. Secrets layer has additional envelope encryption.</td>
                    <td className="py-5 px-6"><span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Verified</span></td>
                  </tr>
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="py-5 px-6 font-medium">Immutable audit trail</td>
                    <td className="py-5 px-6 text-neutral-600">Every write creates evidence chain entry. Append-only. Tamper-evident logging.</td>
                    <td className="py-5 px-6"><span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Verified</span></td>
                  </tr>
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="py-5 px-6 font-medium">Rate limiting</td>
                    <td className="py-5 px-6 text-neutral-600">Per-tier limits at API gateway. No exceptions, including for internal requests.</td>
                    <td className="py-5 px-6"><span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Verified</span></td>
                  </tr>
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="py-5 px-6 font-medium">Hard deletion</td>
                    <td className="py-5 px-6 text-neutral-600">DELETE CASCADE on foreign keys. Backup rotation ensures complete purge within 30 days.</td>
                    <td className="py-5 px-6"><span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Verified</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* MCP Standard */}
      <Section className="py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-electric-100 text-electric-700 rounded-full text-sm font-semibold mb-6">
                Built on Open Standards
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                MCP: The Memory Protocol
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                ekkOS implements the <strong>Model Context Protocol (MCP)</strong> — an open
                standard for AI memory infrastructure. This means you&apos;re not locked into
                our implementation. Any MCP-compatible system can read your exported data.
              </p>
              <p className="text-lg text-neutral-600">
                We believe memory infrastructure should be as interoperable as HTTP.
                Proprietary lock-in is how companies extract value from users instead of
                providing it.
              </p>
            </div>
            <div className="bg-neutral-900 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-electric-500"></div>
                <span className="font-mono text-sm text-neutral-400">mcp://</span>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-electric-400">→</span>
                  <span className="text-neutral-300">ekkOS_Search</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-electric-400">→</span>
                  <span className="text-neutral-300">ekkOS_Forge</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-electric-400">→</span>
                  <span className="text-neutral-300">ekkOS_Recall</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-electric-400">→</span>
                  <span className="text-neutral-300">ekkOS_Export</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-electric-400">→</span>
                  <span className="text-neutral-300">+ 61 more tools</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-700">
                <p className="text-neutral-400 text-sm">
                  65 MCP tools, all documented, all auditable
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Open Source */}
      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Open by Default</h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Our VS Code extension, SDK, and MCP implementation are open source.
              Read every line of code that touches your data. The protocol we use is
              documented and standardized. No black boxes. No &quot;trust us&quot; security.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://github.com/ekkos-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 font-semibold rounded-xl hover:bg-neutral-100 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
              <a
                href="https://docs.ekkos.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                Read the Docs
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Questions? Skeptical? Good.
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            We built ekkOS for people who read the fine print. If anything here is
            unclear, or you want to verify a claim yourself, we&apos;re here to help.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-electric-500 text-white font-semibold rounded-xl hover:bg-electric-600 transition-colors"
            >
              Talk to a Human
            </a>
            <a
              href="/security"
              className="inline-block px-8 py-4 border-2 border-neutral-300 text-neutral-700 font-semibold rounded-xl hover:bg-neutral-100 transition-colors"
            >
              View Security Audit
            </a>
          </div>
          <p className="text-sm text-neutral-400 mt-12">
            Last updated: January 2026 · Version 2.0 · <a href="https://github.com/ekkos-technologies" className="hover:text-neutral-600 underline">View commit history</a>
          </p>
        </div>
      </Section>
    </>
  )
}
