import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brutal-bg relative pb-40 text-white font-mono">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none z-0"></div>

      {/* HEADER */}
      <section className="relative pt-32 pb-24 z-10 border-b-8 border-brutal-white bg-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="brutal-tag border-brutal-neon-cyan text-brutal-neon-cyan mb-8">SIGNAL: ESTABLISH_UPLINK</div>
          <h1 className="brutal-heading text-6xl md:text-9xl text-white leading-none mb-10 italic font-sans">
            CONNECT. <br/>
          </h1>
          <p className="text-2xl font-bold text-brutal-gray-light uppercase max-w-3xl leading-tight">
            Ready to integrate the substrate into your ecosystem? Send a signal.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl font-sans">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="brutal-card border-brutal-neon-cyan bg-black/60 p-10 mb-10">
                <h2 className="brutal-heading text-3xl mb-8 text-white">DIRECT_UPLINK</h2>
                <form className="space-y-8 font-mono">
                  <div>
                    <label className="block text-xs font-black text-brutal-neon-cyan uppercase mb-2 tracking-[0.2em]">IDENTIFIER:</label>
                    <input type="text" placeholder="NAME / ORG" className="w-full bg-brutal-gray border-4 border-brutal-black px-4 py-3 text-white outline-none focus:border-brutal-neon-cyan transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-brutal-neon-cyan uppercase mb-2 tracking-[0.2em]">COMM_CHANNEL:</label>
                    <input type="email" placeholder="EMAIL_ADDRESS" className="w-full bg-brutal-gray border-4 border-brutal-black px-4 py-3 text-white outline-none focus:border-brutal-neon-cyan transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-brutal-neon-cyan uppercase mb-2 tracking-[0.2em]">DATA_PAYLOAD:</label>
                    <textarea rows={4} placeholder="TRANSMISSION_DETAILS" className="w-full bg-brutal-gray border-4 border-brutal-black px-4 py-3 text-white outline-none focus:border-brutal-neon-cyan transition-colors" />
                  </div>
                  <button type="submit" className="brutal-button bg-brutal-neon-cyan text-brutal-black border-brutal-neon-cyan w-full text-xl py-5">
                    EXECUTE_TRANSMISSION ➔
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-10">
              <div className="brutal-card border-white/10 hover:border-white transition-all group">
                <h3 className="brutal-heading text-xl mb-4 text-white">GENERAL_INQUIRIES</h3>
                <p className="text-brutal-neon-cyan font-mono text-2xl font-black group-hover:text-glow-cyan">hello@ekkos.dev</p>
              </div>
              
              <div className="brutal-card border-white/10 hover:border-white transition-all group">
                <h3 className="brutal-heading text-xl mb-4 text-white">SECURITY_ALERTS</h3>
                <p className="text-brutal-neon-pink font-mono text-2xl font-black group-hover:text-glow-pink">security@ekkos.dev</p>
              </div>

              <div className="brutal-card border-white/10 hover:border-white transition-all group">
                <h3 className="brutal-heading text-xl mb-4 text-white">ENTERPRISE_SUPPORT</h3>
                <p className="text-brutal-green font-mono text-2xl font-black shadow-[0_0_10px_rgba(0,255,0,0.2)]">uplink.ekkos.ca</p>
              </div>

              <div className="pt-10 border-t-4 border-white/5">
                <div className="text-[100px] font-black text-white/5 font-mono leading-none select-none">SIGNAL</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
