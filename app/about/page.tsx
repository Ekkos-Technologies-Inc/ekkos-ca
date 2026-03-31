import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brutal-bg relative pb-40">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none z-0"></div>

      {/* HEADER */}
      <section className="relative pt-32 pb-24 z-10 border-b-8 border-brutal-white bg-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="brutal-tag border-brutal-neon-pink text-brutal-neon-pink mb-8">MISSION: BRIEFING_V01</div>
          <h1 className="brutal-heading text-6xl md:text-9xl text-white leading-none mb-10 italic">
            OUR <br/>
            <span className="text-brutal-neon-pink not-italic">VISION.</span>
          </h1>
          <p className="text-2xl font-bold text-brutal-gray-light uppercase font-mono max-w-3xl leading-tight">
            We are building the memory infrastructure for the next generation of autonomous systems.
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="py-32 relative z-10 border-b-8 border-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div className="brutal-card bg-brutal-white text-brutal-black p-10 md:p-16 mb-16 transform -rotate-1 shadow-[20px_20px_0px_0px_#000]">
                <h2 className="brutal-heading text-4xl mb-10">THE_COGNITIVE_GAP</h2>
                <div className="space-y-8 text-xl font-bold font-mono tracking-tight uppercase leading-snug">
                  <p>In the current AI landscape, intelligence is ephemeral. Every inference happens in a vacuum. Every session starts with an amnesiac assistant.</p>
                  <p>We see this as the fundamental ceiling for AGI. For machine intelligence to truly evolve, it must possess a persistent, evolving, and structural sense of past experience.</p>
                  <p className="text-brutal-blue border-l-8 border-brutal-blue pl-8">Ekkos was founded to bridge this gap. We provide the "long-term memory" that allows AI to compound its knowledge over time.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="brutal-card border-brutal-neon-cyan p-8">
                  <h3 className="brutal-heading text-xl mb-4 text-white">THE PRINCIPLE</h3>
                  <p className="font-mono text-sm text-brutal-gray-light">Knowledge should be a lattice, not a list. We build data structures that mirror conceptual understanding, not just text matching.</p>
                </div>
                <div className="brutal-card border-brutal-neon-pink p-8">
                  <h3 className="brutal-heading text-xl mb-4 text-white">THE EXECUTION</h3>
                  <p className="font-mono text-sm text-brutal-gray-light">We leverage high-dimensional vector spaces and graph-theoretic traversals to deliver the right context at the exact moment of inference.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="space-y-12">
                <div className="border-l-8 border-brutal-white pl-8">
                  <div className="text-[80px] font-black leading-none text-white/5 font-mono mb-[-40px]">01</div>
                  <h4 className="brutal-heading text-2xl mb-2 text-brutal-neon-cyan">LOCUS: TORONTO</h4>
                  <p className="font-mono text-xs text-brutal-gray-light uppercase">OPERATIONS BASE: ONTARIO, CANADA</p>
                </div>
                <div className="border-l-8 border-brutal-white pl-8">
                  <div className="text-[80px] font-black leading-none text-white/5 font-mono mb-[-40px]">02</div>
                  <h4 className="brutal-heading text-2xl mb-2 text-brutal-neon-pink">TEAM: 01</h4>
                  <p className="font-mono text-xs text-brutal-gray-light uppercase">CORE SUBSTRATE ENGINEERS</p>
                </div>
                <div className="border-l-8 border-brutal-white pl-8">
                  <div className="text-[80px] font-black leading-none text-white/5 font-mono mb-[-40px]">03</div>
                  <h4 className="brutal-heading text-2xl mb-2 text-brutal-green">SINCE: 2024</h4>
                  <p className="font-mono text-xs text-brutal-gray-light uppercase">ORIGIN_TIME: ALPHA_IGNITION</p>
                </div>
              </div>

              <div className="mt-20 brutal-card bg-brutal-neon-cyan p-1 transform rotate-3">
                <div className="bg-brutal-black p-8 brutal-border border-brutal-black text-center">
                  <h5 className="brutal-heading text-3xl text-brutal-neon-cyan mb-4 italic">JOIN_US</h5>
                  <p className="font-mono text-[10px] text-white/60 mb-8 tracking-widest uppercase">WE ARE ALWAYS LOOKING FOR SUBSTRATE ARCHITECTS.</p>
                  <Link href="/careers" className="brutal-button bg-brutal-white text-brutal-black text-sm w-full">
                    VIEW_OPEN_REQS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERFACE & PULSE */}
      <section className="py-32 relative z-10 border-b-8 border-brutal-black bg-brutal-bg overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="brutal-tag border-brutal-neon-cyan text-brutal-neon-cyan mb-8">INTERFACE: CLI_NATIVE</div>
              <h2 className="brutal-heading text-5xl md:text-7xl text-white mb-8">THE <span className="text-brutal-neon-cyan">PULSE.</span></h2>
              <div className="space-y-6 font-mono font-bold text-lg text-brutal-gray-light uppercase tracking-tighter max-w-xl border-l-4 border-brutal-neon-cyan pl-6 py-2">
                <p>Ekkos does not trap you in a web dashboard. We are a substrate that runs where you build.</p>
                <p>Our native CLI interface streams realtime telemetry, knowledge graph traversals, and cognitive hydration directly to your terminal. It's intelligence you can monitor, pipe, and script.</p>
              </div>
              <div className="mt-10 flex gap-4">
                <div className="brutal-tag border-white text-white"># DEPLOYED_VIA_NPM</div>
                <div className="brutal-tag border-white text-white"># ZERO_LATENCY</div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full relative">
              <div className="absolute inset-0 bg-brutal-neon-cyan transform rotate-1 translate-x-2 translate-y-2"></div>
              <div className="brutal-card bg-[#0A0A0A] border-brutal-neon-cyan p-2 relative z-10">
                <div className="relative w-full aspect-[4/3] border-2 border-white/20 bg-black overflow-hidden">
                  <Image
                    src="/terminal.png"
                    alt="ekkOS CLI Pulse Terminal Interface"
                    fill
                    className="object-cover object-left-top"
                  />
                  {/* Scanline overlay for image */}
                  <div className="absolute inset-0 bg-scanline opacity-20 mix-blend-screen pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-32 relative z-10 bg-brutal-white text-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="brutal-heading text-5xl md:text-7xl mb-8 italic">THE <span className="text-brutal-blue not-italic">ARCHITECT.</span></h2>
              <div className="space-y-6 font-mono font-bold text-xl uppercase tracking-tighter max-w-2xl border-l-8 border-brutal-black pl-8 py-4">
                <p>Ekkos is led by builders who understand that software is no longer just instructions—it is structurally mapped intelligence.</p>
                <p>We are engineering the standard for AGI persistence.</p>
              </div>
            </div>
            
            <div className="w-full md:w-auto relative group transform rotate-2 hover:rotate-0 transition-transform">
              <div className="absolute inset-0 bg-brutal-black translate-x-4 translate-y-4"></div>
              <div className="brutal-card bg-brutal-black border-brutal-black p-2 relative z-10">
                <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-brutal-white overflow-hidden bg-brutal-white">
                  <Image
                    src="/seann-macdougall.png"
                    alt="Seann MacDougall — Founder & CEO, EKKOS Technologies Inc."
                    fill
                    className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Scanline overlay for image */}
                  <div className="absolute inset-0 bg-scanline opacity-30 mix-blend-overlay pointer-events-none"></div>
                </div>
                <div className="pt-6 pb-2 text-center text-brutal-white font-mono">
                  <h3 className="text-2xl font-black uppercase tracking-widest text-brutal-neon-cyan mb-1">Seann MacDougall</h3>
                  <p className="text-xs uppercase tracking-[0.3em] opacity-80">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
