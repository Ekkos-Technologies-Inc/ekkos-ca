import Link from 'next/link'

export default function SecurityPage() {
  const protocols = [
    { id: 'SEC-01', name: 'ENCRYPTION_AT_REST', status: 'AES-256-GCM', desc: 'All memory layers are encrypted using enterprise-grade GCM protocols before disk-write.' },
    { id: 'SEC-02', name: 'TENANT_ISOLATION', status: 'VPC_SEGMENTED', desc: 'Strict logical separation of user data environments. No cross-contamination of memory buffers.' },
    { id: 'SEC-03', name: 'AUDIT_LOGGING', status: 'IMMUTABLE', desc: 'Every memory access, retrieval, and forgery is recorded in a tamper-proof audit substrate.' },
    { id: 'SEC-04', name: 'SECRET_ZERO_TRUST', status: 'ACTIVE', desc: 'Encrypted secret vaulting with JIT (Just-In-Time) credential injection for agent runtimes.' },
  ];

  return (
    <div className="min-h-screen bg-brutal-bg relative pb-40">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none z-0"></div>

      {/* HEADER */}
      <section className="relative pt-32 pb-24 z-10 border-b-8 border-brutal-white bg-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="brutal-tag border-brutal-neon-cyan text-brutal-neon-cyan mb-8">SEC_PROTOCOL: HARDENED_V1</div>
          <h1 className="brutal-heading text-6xl md:text-9xl text-white leading-none mb-10 italic">
            HARDENED <br/>
            <span className="text-brutal-neon-cyan not-italic">SUBSTRATE.</span>
          </h1>
          <p className="text-2xl font-bold text-brutal-gray-light uppercase font-mono max-w-3xl leading-tight">
            Security is not a feature. It is the fundamental requirement for persistent machine intelligence.
          </p>
        </div>
      </section>

      {/* PROTOCOLS */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {protocols.map((p) => (
              <div key={p.id} className="brutal-card border-white/20 hover:border-brutal-neon-cyan transition-colors bg-black/40 backdrop-blur-md">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-xs font-bold text-brutal-neon-cyan px-2 py-1 bg-brutal-neon-cyan/10 border border-brutal-neon-cyan">{p.id}</span>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">STATUS: {p.status}</span>
                </div>
                <h3 className="brutal-heading text-3xl mb-6 text-white">{p.name}</h3>
                <p className="font-mono text-sm text-brutal-gray-light leading-relaxed mb-8">
                  {p.desc}
                </p>
                <div className="w-full h-1 bg-white/5 relative">
                  <div className="absolute inset-y-0 left-0 bg-brutal-neon-cyan w-full opacity-20" />
                  <div className="absolute inset-y-0 left-0 bg-brutal-neon-cyan w-[20%] shadow-[0_0_10px_#00F0FF]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-32 bg-brutal-white border-y-8 border-brutal-black relative z-10 text-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="brutal-heading text-4xl md:text-7xl mb-12 italic underline decoration-brutal-blue underline-offset-[16px]">SOVEREIGN_DATA</h2>
          <p className="text-2xl font-bold font-mono tracking-tighter uppercase max-w-4xl mx-auto mb-16 leading-tight">
            Your intelligence belongs to you. ekkOS never uses private memory layers for global training. Your engineering decisions stay within your tenant boundary.
          </p>
          <div className="inline-flex gap-8">
            <div className="brutal-tag border-brutal-black bg-brutal-black text-white px-6 py-2 text-sm">SOC2_COMPLIANT_READY</div>
            <div className="brutal-tag border-brutal-black bg-brutal-black text-white px-6 py-2 text-sm">GDPR_ALIGNED</div>
          </div>
        </div>
      </section>
    </div>
  )
}
