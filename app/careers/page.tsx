import Link from 'next/link'

export default function CareersPage() {
  const roles = [
    { title: 'COGNITIVE_ARCHITECT', type: 'FULL_TIME', location: 'TORONTO / REMOTE' },
    { title: 'SUBSTRATE_ENGINEER', type: 'FULL_TIME', location: 'REMOTE' },
    { title: 'GRAPH_THEORIST', type: 'CONTRACT', location: 'REMOTE' },
    { title: 'NEURAL_INTERFACE_DESIGNER', type: 'FULL_TIME', location: 'TORONTO' },
  ];

  return (
    <div className="min-h-screen bg-brutal-bg relative pb-40 text-white">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none z-0"></div>

      {/* HEADER */}
      <section className="relative pt-32 pb-24 z-10 border-b-8 border-brutal-white bg-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="brutal-tag border-brutal-neon-pink text-brutal-neon-pink mb-8">HIRING: SUBSTRATE_EXPANSION</div>
          <h1 className="brutal-heading text-6xl md:text-9xl text-white leading-none mb-10 italic">
            JOIN THE <br/>
            <span className="text-brutal-neon-pink not-italic">ENGINE.</span>
          </h1>
          <p className="text-2xl font-bold text-brutal-gray-light uppercase font-mono max-w-3xl leading-tight">
            We are looking for builders who think in layers, graphs, and vectors. Help us define the memory of AGI.
          </p>
        </div>
      </section>

      {/* ROLES */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-6">
            {roles.map((role) => (
              <div key={role.title} className="brutal-card border-white/10 hover:border-brutal-neon-pink hover:bg-brutal-neon-pink/5 flex flex-col md:flex-row justify-between items-center gap-8 group cursor-pointer transition-all">
                <div>
                  <div className="brutal-tag border-brutal-neon-pink text-brutal-neon-pink text-[8px] mb-3">{role.type}</div>
                  <h3 className="brutal-heading text-3xl text-white group-hover:text-glow-pink">{role.title}</h3>
                  <p className="font-mono text-xs text-brutal-gray-light mt-2 tracking-widest">{role.location}</p>
                </div>
                <div className="brutal-button bg-transparent border-white/20 group-hover:border-brutal-neon-pink group-hover:text-brutal-neon-pink text-sm">
                  APPLY_UPLINK ➔
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-32 bg-brutal-white border-y-8 border-brutal-black relative z-10 text-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="brutal-heading text-4xl md:text-7xl mb-12 italic underline decoration-brutal-neon-pink underline-offset-[16px]">BEYOND_FLAT_CODE</h2>
          <p className="text-2xl font-bold font-mono tracking-tighter uppercase max-w-4xl mx-auto mb-16 leading-tight">
            At ekkOS, we don't just ship features. We research the mathematical foundations of memory and how it can be scaled to trillions of tokens without loss of coherence. 
          </p>
          <div className="font-mono text-sm font-black bg-brutal-black text-white inline-block px-10 py-4 transform skew-x-12">
            STAY_CURIOUS. STAY_STRUCTURAL.
          </div>
        </div>
      </section>
    </div>
  )
}
