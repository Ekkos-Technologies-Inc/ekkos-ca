import Link from 'next/link'

export default function CustomersPage() {
  const categories = [
    { name: 'AUTONOMOUS_AGENTS', desc: 'Providing the persistent substrate for long-running agent loops.' },
    { name: 'ROBOTICS_LABS', desc: 'Hardened memory for localized and distributed mechanical intelligence.' },
    { name: 'ENTERPRISE_DEV', desc: 'Accelerating legacy codebase refactors through historical conceptual mapping.' },
    { name: 'AGI_RESEARCH', desc: 'Building the data structures required for cross-domain transfer learning.' },
  ];

  return (
    <div className="min-h-screen bg-brutal-bg relative pb-40 text-white">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none z-0"></div>

      {/* HEADER */}
      <section className="relative pt-32 pb-24 z-10 border-b-8 border-brutal-white bg-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center md:text-left">
          <div className="brutal-tag border-brutal-green text-brutal-green mb-8">ECOSYSTEM: ACTIVE_DEPLOYMENTS</div>
          <h1 className="brutal-heading text-6xl md:text-9xl text-white leading-none mb-10 italic">
            DOMAIN <br/>
            <span className="text-brutal-green not-italic">PARTNERS.</span>
          </h1>
          <p className="text-2xl font-bold text-brutal-gray-light uppercase font-mono max-w-3xl leading-tight">
            From solo agents to global conglomerates. We empower those building the future of autonomy.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((c) => (
              <div key={c.name} className="brutal-card border-white/10 hover:border-brutal-green hover:shadow-[10px_10px_0px_0px_#00FF0020] transition-all bg-black/60 group">
                <h3 className="brutal-heading text-3xl mb-4 group-hover:text-brutal-green">{c.name}</h3>
                <p className="font-mono text-lg text-brutal-gray-light leading-tight uppercase tracking-tighter">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY TEASER */}
      <section className="py-32 bg-brutal-white border-y-8 border-brutal-black relative z-10 text-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="brutal-card border-brutal-black bg-brutal-yellow p-12 transform -rotate-1 shadow-[15px_15px_0px_0px_#000]">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="brutal-tag bg-brutal-black text-white mb-6">CASE_STUDY: ALPHA_BOT_X</div>
                <h2 className="brutal-heading text-5xl mb-8">90%_REDUCTION_IN_TOKEN_LATENCY</h2>
                <p className="text-xl font-bold font-mono tracking-tighter uppercase mb-10">
                  By implementing the ekkOS pattern retrieval layer, Alpha Bot X reduced its need to re-scan massive context windows, saving thousands in monthly API spend while increasing reasoning accuracy by 45%.
                </p>
                <Link href="/contact" className="brutal-button bg-brutal-black text-white hover:bg-white hover:text-black">
                  READ_THE_WHITE_PAPER
                </Link>
              </div>
              <div className="w-64 h-64 bg-brutal-black flex items-center justify-center border-4 border-brutal-black relative overflow-hidden">
                 <div className="absolute inset-0 bg-grid opacity-20" />
                 <span className="text-brutal-yellow font-black text-8xl transform rotate-12 italic">EKK</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
