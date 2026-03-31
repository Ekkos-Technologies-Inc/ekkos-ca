import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brutal-bg relative pb-40 text-white font-mono">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none z-0"></div>

      {/* HEADER */}
      <section className="relative pt-32 pb-24 z-10 border-b-8 border-brutal-white bg-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="brutal-tag border-brutal-gray text-brutal-gray-light mb-8">LEGAL_DOC: TERMS_OF_SERVICE</div>
          <h1 className="brutal-heading text-4xl md:text-7xl text-white leading-none font-sans">
            TERMS. <br/>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="brutal-card bg-black/40 border-white/10 p-10 space-y-12">
            <div>
              <h2 className="brutal-heading text-2xl mb-6 text-brutal-neon-cyan">USAGE_LOGIC</h2>
              <p className="text-brutal-gray-light leading-relaxed">By accessing the ekkOS substrate, you agree to abide by the system-level directives. Unauthorized reverse engineering of the 12-layer architecture is strictly prohibited.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
