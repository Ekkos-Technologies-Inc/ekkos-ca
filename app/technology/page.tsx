import Link from 'next/link';

export default function TechnologyPage() {
  const layers = [
    { id: 'L1', name: 'WORKING', desc: 'Real-time session context & local state buffer.' },
    { id: 'L2', name: 'EPISODIC', desc: 'Chronological conversation history & temporal mapping.' },
    { id: 'L3', name: 'SEMANTIC', desc: 'Vector-indexed knowledge embeddings for broad lookup.' },
    { id: 'L4', name: 'PATTERNS', desc: 'Validated problem/solution pairs for reusable logic.' },
    { id: 'L5', name: 'PROCEDURAL', desc: 'Step-by-step guides & systematic workflow templates.' },
    { id: 'L6', name: 'COLLECTIVE', desc: 'Aggregated cross-user intelligence & global standards.' },
    { id: 'L7', name: 'META', desc: 'Pattern effectiveness, usage metrics, and success rates.' },
    { id: 'L8', name: 'CODEBASE', desc: 'Structural repository context & file-dependency graphs.' },
    { id: 'L9', name: 'DIRECTIVES', desc: 'Fixed rules (MUST/NEVER/PREFER) for behavioral alignment.' },
    { id: 'L10', name: 'CONFLICT', desc: 'Resolution data for handling contradictory instructions.' },
    { id: 'L11', name: 'SECRETS', desc: 'Encrypted vault for credentials and sensitive tokens.' },
    { id: 'L12', name: 'STRATEGIC GOALS', desc: 'Persistent objectives & plan-linked execution for multi-step intent.' },
  ];

  return (
    <div className="min-h-screen bg-brutal-bg relative pb-40">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none z-0"></div>

      {/* HEADER */}
      <section className="relative pt-32 pb-24 z-10 border-b-8 border-brutal-white bg-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="brutal-tag border-brutal-neon-cyan text-brutal-neon-cyan mb-8">SYS_ARCH: SCHEMATICS_V4.2</div>
          <h1 className="brutal-heading text-6xl md:text-9xl text-white leading-none mb-10 italic">
            THE <br/>
            <span className="text-brutal-neon-cyan not-italic">SUBSTRATE.</span>
          </h1>
          <p className="text-2xl font-bold text-brutal-gray-light uppercase font-mono max-w-3xl leading-tight">
            The technical blueprint for persistent machine memory. 12 layers of structured intelligence, engineered for zero-latency retrieval.
          </p>
        </div>
      </section>

      {/* 12 LAYERS SCHEMATIC */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="brutal-heading text-4xl md:text-6xl mb-20 text-center italic underline decoration-8 underline-offset-[20px] decoration-brutal-neon-pink">
            MEMORY_ARCHITECTURE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {layers.map((layer) => (
              <div key={layer.id} className="brutal-card-hover border-white/20 hover:border-brutal-neon-cyan group">
                <div className="hud-corner corner-tl opacity-0 group-hover:opacity-100" />
                <div className="hud-corner corner-br opacity-0 group-hover:opacity-100" />
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-black font-mono text-white/5 group-hover:text-brutal-neon-cyan/20 transition-colors">{layer.id}</span>
                  <div className="brutal-tag border-brutal-gray text-brutal-gray-light group-hover:border-brutal-neon-cyan group-hover:text-brutal-neon-cyan">STATUS: NOMINAL</div>
                </div>
                <h3 className="brutal-heading text-2xl mb-4 text-white group-hover:text-glow-cyan transition-all">{layer.name}</h3>
                <p className="font-mono text-sm text-brutal-gray-light leading-relaxed group-hover:text-white transition-colors">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE TECH STACK */}
      <section className="py-32 bg-brutal-white border-y-8 border-brutal-black relative z-10 text-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="brutal-heading text-5xl md:text-7xl mb-10 leading-none italic">
                TECHNICAL <br/>
                <span className="text-brutal-blue not-italic">INTEGRITY.</span>
              </h2>
              <ul className="space-y-8 font-mono text-lg font-bold uppercase tracking-tight">
                <li className="flex items-center gap-6 border-b-4 border-brutal-black pb-4">
                  <span className="bg-brutal-black text-white px-3 py-1 text-2xl">01</span>
                  GRAPH-THEORETIC RETRIEVAL VIA NEO4J
                </li>
                <li className="flex items-center gap-6 border-b-4 border-brutal-black pb-4">
                  <span className="bg-brutal-black text-white px-3 py-1 text-2xl">02</span>
                  HYBRID VECTOR SEARCH (1536-DIM)
                </li>
                <li className="flex items-center gap-6 border-b-4 border-brutal-black pb-4">
                  <span className="bg-brutal-black text-white px-3 py-1 text-2xl">03</span>
                  REAL-TIME SSE STREAMING INTERCEPTION
                </li>
                <li className="flex items-center gap-6 border-b-4 border-brutal-black pb-4">
                  <span className="bg-brutal-black text-white px-3 py-1 text-2xl">04</span>
                  AES-256-GCM ENCRYPTED SECRET VAULTING
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="brutal-card bg-brutal-black border-brutal-black brutal-shadow-cyan p-10 transform rotate-2">
                <div className="font-mono text-[10px] text-brutal-neon-cyan mb-6 overflow-hidden h-64 opacity-50">
                  {`[UPLINK_ESTABLISHED]
[AUTH] SECURE_HANDSHAKE_COMPLETE
[MODEL] GEMINI_3.5_PRO_ACTIVE
[STREAM] ATTACHED_TO_GATEWAY
[MEMORY] HYDRATING_LAYERS_1_THRU_12...
[L1] SUCCESS
[L2] SUCCESS
[L3] SUCCESS
[L4] FORGING_ACTIVE
[L5] SUCCESS
[L6] GLOBAL_SYNC_ENABLED
[L7] CALIBRATING_SUCCESS_RATES...
[L8] MAP_GENERATED
[L9] POLICIES_ENFORCED
[L10] RESOLVED
[L11] LOCKED
--------------------------------
> READY_FOR_INFERENCE_OPTIMIZATION
--------------------------------
while (true) {
  const context = await ekkOS.retrieve();
  const solution = await agent.solve(context);
  await ekkOS.forge(solution);
  await ekkOS.measure();
}`}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brutal-black to-transparent" />
                <div className="relative z-10 text-center pt-4">
                   <div className="brutal-tag bg-brutal-neon-cyan text-brutal-black border-brutal-black text-xs">LIVE_RUNTIME_ENV</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 text-center">
        <h2 className="brutal-heading text-4xl md:text-6xl text-white mb-12">
          READY TO <span className="text-brutal-neon-cyan italic">UPLINK?</span>
        </h2>
        <Link href="https://ekkos.dev" className="brutal-button text-2xl px-12 py-6 bg-brutal-neon-cyan text-brutal-black border-brutal-neon-cyan hover:bg-white hover:text-black transform hover:-translate-y-2">
          INITIALIZE_CONNECTION
        </Link>
      </section>
    </div>
  );
}
