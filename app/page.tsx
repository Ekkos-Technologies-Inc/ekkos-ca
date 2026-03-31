import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const memoryLayers = [
    { id: 'L1', name: 'WORKING', status: 'ACTIVE', color: 'text-brutal-neon-cyan' },
    { id: 'L2', name: 'EPISODIC', status: 'SYNCHRONIZED', color: 'text-white' },
    { id: 'L3', name: 'SEMANTIC', status: 'INDEXED', color: 'text-white' },
    { id: 'L4', name: 'PATTERNS', status: 'FORGING', color: 'text-brutal-neon-pink' },
    { id: 'L5', name: 'PROCEDURAL', status: 'OPTIMIZED', color: 'text-white' },
    { id: 'L6', name: 'COLLECTIVE', status: 'GLOBAL', color: 'text-brutal-green' },
    { id: 'L7', name: 'META', status: 'LEARNING', color: 'text-brutal-neon-cyan' },
    { id: 'L8', name: 'CODEBASE', status: 'ATTACHED', color: 'text-white' },
    { id: 'L9', name: 'DIRECTIVES', status: 'ENFORCED', color: 'text-brutal-neon-pink' },
    { id: 'L10', name: 'CONFLICT', status: 'RESOLVED', color: 'text-white' },
    { id: 'L11', name: 'SECRETS', status: 'ENCRYPTED', color: 'text-brutal-yellow' },
  ];

  return (
    <div className="min-h-screen bg-brutal-bg relative selection:bg-brutal-neon-cyan selection:text-brutal-black">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none z-0"></div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-40 overflow-hidden z-10 border-b-8 border-brutal-white brutal-gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="brutal-tag mb-10 border-brutal-neon-cyan text-brutal-neon-cyan text-xs tracking-[0.3em] bg-brutal-neon-cyan/5 px-4 py-2">
                &gt; INITIALIZING_COMPONUND_INTELLIGENCE_V3
              </div>
              <h1 className="brutal-heading text-5xl sm:text-7xl lg:text-[100px] leading-[0.85] text-white mb-8 md:mb-10 italic">
                STRUCTURED <br/>
                <span className="text-brutal-neon-cyan not-italic tracking-normal">MACHINE</span> <br/>
                <span className="bg-white text-black px-4 inline-block transform skew-x-6 not-italic">MEMORY.</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-brutal-gray-light mb-12 leading-tight uppercase max-w-xl font-mono tracking-tighter">
                Stop starting over. Give your AI agents persistent, structural memory that evolves across every session.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-8">
                <Link href="https://ekkos.dev" className="brutal-button text-base md:text-xl px-6 md:px-10 py-4 md:py-5 bg-brutal-neon-cyan text-brutal-black border-brutal-neon-cyan brutal-shadow-cyan hover:bg-brutal-black hover:text-white">
                  UPLINK ➔
                </Link>
                <Link href="https://docs.ekkos.dev" className="brutal-button text-base md:text-xl px-6 md:px-10 py-4 md:py-5 bg-brutal-black text-white border-white hover:bg-white hover:text-black">
                  SCHEMATICS
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="brutal-card border-brutal-neon-cyan p-0 bg-black/80 backdrop-blur-xl shadow-[20px_20px_0px_0px_#00F0FF20]">
                <div className="bg-brutal-neon-cyan text-brutal-black font-mono font-black text-xs px-4 py-2 flex justify-between items-center">
                  <span>MEMORY_LAYER_STATUS_HUD</span>
                  <span className="flex gap-1">
                    <span className="w-2 h-2 bg-brutal-black rounded-full animate-ping" />
                    LIVE
                  </span>
                </div>
                <div className="p-6 space-y-3 font-mono text-[10px]">
                  {memoryLayers.map(layer => (
                    <div key={layer.id} className="flex items-center justify-between group border-b border-white/5 pb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-brutal-gray-light">{layer.id}</span>
                        <span className={`font-bold tracking-widest ${layer.color}`}>{layer.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40">[{layer.status}]</span>
                        <div className="w-16 h-1 bg-white/10 relative overflow-hidden">
                          <div className={`absolute inset-0 bg-current opacity-50 ${layer.color.replace('text-', 'bg-')}`} style={{ width: Math.random() * 100 + '%' }} />
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 flex justify-between items-center text-brutal-neon-cyan font-black italic text-xs">
                    <span>COGNITIVE_LOAD: 14.2%</span>
                    <span>THROUGHPUT: 4.2GB/s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-brutal-white border-b-8 border-brutal-black py-4 md:py-6 overflow-hidden relative z-10 flex transform -skew-y-1 mt-[-20px] shadow-2xl">
        <div className="whitespace-nowrap flex animate-[marquee_25s_linear_infinite]">
          <span className="text-brutal-black font-mono font-black text-2xl md:text-4xl mx-6 md:mx-12 tracking-tighter">ZERO-SHOT TRANSFER LEARNING • MULTI-HOP GRAPHRAG • THE GOLDEN LOOP • O(1) PATTERN EVOLUTION • CROSS-LAYER SYNC • </span>
          <span className="text-brutal-black font-mono font-black text-2xl md:text-4xl mx-6 md:mx-12 tracking-tighter">ZERO-SHOT TRANSFER LEARNING • MULTI-HOP GRAPHRAG • THE GOLDEN LOOP • O(1) PATTERN EVOLUTION • CROSS-LAYER SYNC • </span>
        </div>
      </div>

      {/* THE PROBLEM / THE SOLUTION */}
      <section className="py-16 md:py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-10">
            <div className="brutal-card bg-brutal-red/10 border-brutal-red p-6 sm:p-10 relative overflow-hidden group">
              <div className="hud-corner corner-tl border-brutal-red" />
              <div className="hud-corner corner-tr border-brutal-red" />
              <div className="hud-corner corner-bl border-brutal-red" />
              <div className="hud-corner corner-br border-brutal-red" />
              <div className="text-brutal-red font-mono font-bold text-xs mb-4 md:mb-6 tracking-[0.2em] md:tracking-[0.4em] underline decoration-4 underline-offset-8">FAILURE_STATE: LINEAR_MEMORY</div>
              <h2 className="brutal-heading text-3xl md:text-4xl mb-6 md:mb-8 text-brutal-red">THE COGNITIVE CEILING</h2>
              <p className="text-lg md:text-xl font-bold leading-relaxed font-mono tracking-tighter text-white opacity-80">
                Most AI assistants have a "flat" memory. You fix a memory leak in Python, and they memorize those exact words. Ask for help with a leak in Rust tomorrow? They draw a blank. Linear memory scales poorly.
              </p>
            </div>

            <div className="brutal-card bg-brutal-neon-cyan/5 border-brutal-neon-cyan p-6 sm:p-10 relative overflow-hidden group shadow-[10px_10px_0px_0px_#00F0FF20] md:shadow-[15px_15px_0px_0px_#00F0FF20]">
              <div className="hud-corner corner-tl" />
              <div className="hud-corner corner-tr" />
              <div className="hud-corner corner-bl" />
              <div className="hud-corner corner-br" />
              <div className="text-brutal-neon-cyan font-mono font-bold text-xs mb-4 md:mb-6 tracking-[0.2em] md:tracking-[0.4em] underline decoration-4 underline-offset-8">ACTIVE_STATE: STRUCTURAL_MEMORY</div>
              <h2 className="brutal-heading text-3xl md:text-4xl mb-6 md:mb-8 text-white text-glow-cyan">THE SUBSTRATE</h2>
              <p className="text-lg md:text-xl font-bold leading-relaxed font-mono tracking-tighter text-white opacity-90">
                ekkOS doesn't just memorize your code; it maps your concepts. We separate the <span className="bg-brutal-neon-cyan text-brutal-black px-2">implementation</span> from the <span className="text-brutal-neon-cyan">abstract principle</span>, creating a multi-dimensional knowledge graph of your engineering decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-16 md:py-32 bg-brutal-white border-y-8 border-brutal-black relative z-10 text-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
            <h2 className="brutal-heading text-5xl md:text-8xl max-w-3xl leading-[0.85] italic">
              ENGINEERED FOR <br/>
              <span className="not-italic text-brutal-blue">AUTONOMY.</span>
            </h2>
            <div className="font-mono text-xs font-bold uppercase tracking-widest border-l-4 border-brutal-black pl-4 md:pl-6 mb-2 md:mb-4">
              &gt; PHASE 3 PROTOCOL <br/>
              &gt; COMP compounding_enabled: TRUE
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col">
              <div className="text-[80px] md:text-[120px] font-black leading-none text-brutal-black/5 font-mono mb-[-40px] md:mb-[-60px]">01</div>
              <div className="bg-brutal-black text-white p-6 md:p-8 border-4 border-brutal-black brutal-shadow-cyan relative group">
                <h3 className="brutal-heading text-2xl md:text-3xl mb-4 md:mb-6 text-brutal-neon-cyan">THE GOLDEN LOOP</h3>
                <p className="font-bold text-base md:text-lg font-mono tracking-tighter leading-tight opacity-80 group-hover:opacity-100 transition-opacity">
                  Try ➔ Measure ➔ Evolve. Every task outcome is evaluated in O(1) time. Successful fixes are autonomously promoted from draft concepts to active, structural laws.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-[80px] md:text-[120px] font-black leading-none text-brutal-black/5 font-mono mb-[-40px] md:mb-[-60px]">02</div>
              <div className="bg-brutal-black text-white p-6 md:p-8 border-4 border-brutal-black brutal-shadow-pink relative group">
                <h3 className="brutal-heading text-2xl md:text-3xl mb-4 md:mb-6 text-brutal-neon-pink">GRAPH-RAG</h3>
                <p className="font-bold text-base md:text-lg font-mono tracking-tighter leading-tight opacity-80 group-hover:opacity-100 transition-opacity">
                  We extract the invisible "DNA" of a solution (Concepts, Technologies, Error Types) into a Neo4j graph. When you search, ekkOS performs multi-hop traversals to bridge conceptual gaps.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-[80px] md:text-[120px] font-black leading-none text-brutal-black/5 font-mono mb-[-40px] md:mb-[-60px]">03</div>
              <div className="bg-brutal-black text-white p-6 md:p-8 border-4 border-brutal-black shadow-[6px_6px_0px_0px_#00FF00] relative group">
                <h3 className="brutal-heading text-2xl md:text-3xl mb-4 md:mb-6 text-brutal-green">ZERO-SHOT TRANSFER</h3>
                <p className="font-bold text-base md:text-lg font-mono tracking-tighter leading-tight opacity-80 group-hover:opacity-100 transition-opacity">
                  Knowledge compounds. A distributed systems principle you forged in AWS on Monday automatically accelerates a local microservice problem in Docker on Wednesday.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-40 bg-brutal-bg relative z-10 text-center px-4 overflow-hidden border-b-8 border-brutal-white">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex gap-2 mb-8 md:mb-10">
            <div className="w-3 h-3 bg-brutal-neon-cyan animate-ping" />
            <div className="w-3 h-3 bg-brutal-neon-pink animate-ping [animation-delay:0.2s]" />
            <div className="w-3 h-3 bg-brutal-green animate-ping [animation-delay:0.4s]" />
          </div>
          <h2 className="brutal-heading text-4xl md:text-6xl lg:text-8xl text-white mb-8 md:mb-12 leading-[0.85]">
            AMNESIA IS <br/>
            <span className="text-brutal-red italic">OBSOLETE.</span>
          </h2>
          <p className="text-lg md:text-2xl font-bold text-brutal-gray-light mb-12 md:mb-16 uppercase font-mono tracking-tight max-w-2xl mx-auto border-y-4 border-white/10 py-4 md:py-6">
            DEPLOY THE COGNITIVE SUBSTRATE. <br/>
            COMPATIBLE WITH CURSOR, WINDSURF, CLAUDE CODE, AND 74+ MCP TOOLS.
          </p>
          <Link href="https://ekkos.dev" className="brutal-button text-xl md:text-3xl px-8 md:px-16 py-5 md:py-8 bg-brutal-neon-cyan text-brutal-black border-brutal-neon-cyan transform hover:-translate-y-4 hover:shadow-[15px_15px_0px_0px_#00F0FF40] md:hover:shadow-[20px_20px_0px_0px_#00F0FF40] font-black italic">
            INITIALIZE_UPLINK
          </Link>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  )
}
