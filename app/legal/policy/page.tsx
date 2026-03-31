import Link from 'next/link'

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-brutal-bg relative pb-40 text-white font-mono">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none z-0"></div>

      {/* HEADER */}
      <section className="relative pt-32 pb-24 z-10 border-b-8 border-brutal-white bg-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="brutal-tag border-brutal-gray text-brutal-gray-light mb-8">LEGAL_DOC: GOVERNANCE_POLICY</div>
          <h1 className="brutal-heading text-4xl md:text-7xl text-white leading-none font-sans">
            GOVERNANCE. <br/>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="brutal-card bg-black/40 border-white/10 p-10 space-y-12">
            <div>
              <h2 className="brutal-heading text-2xl mb-6 text-brutal-neon-cyan">01_SYSTEM_ETHICS</h2>
              <p className="text-brutal-gray-light leading-relaxed">ekkOS is designed as a neutral cognitive substrate. We do not engage in unauthorized behavior modification or shadow-prompting. The system enforces directives as absolute logic.</p>
            </div>
            <div>
              <h2 className="brutal-heading text-2xl mb-6 text-brutal-neon-cyan">02_NEUTRALITY</h2>
              <p className="text-brutal-gray-light leading-relaxed">Our memory layers are strictly partitioned. Collective layers are built from sanitized, anonymized high-success patterns only.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
