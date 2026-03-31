import Link from 'next/link'

const navigation = {
  product: [
    { name: 'Platform', href: 'https://ekkos.dev' },
    { name: 'Documentation', href: 'https://docs.ekkos.dev' },
    { name: 'Technology', href: '/technology' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Security', href: '/security' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-brutal-black border-t-8 border-brutal-white relative overflow-hidden" aria-labelledby="footer-heading">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-12 md:pt-20 pb-6 md:pb-10 relative z-10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-20 border-b-4 border-brutal-gray pb-10 md:pb-16">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="inline-block group outline-none">
              <div className="bg-brutal-white text-brutal-black font-black text-4xl md:text-5xl px-3 md:px-4 py-2 tracking-tighter group-hover:bg-brutal-neon-cyan transition-colors border-4 border-brutal-white transform -rotate-1 shadow-[6px_6px_0px_0px_#00F0FF] md:shadow-[8px_8px_0px_0px_#00F0FF]">
                ekkOS
              </div>
            </Link>
            <p className="text-xl font-bold leading-relaxed text-brutal-white max-w-xs uppercase font-mono tracking-tighter">
              THE COGNITIVE SUBSTRATE FOR MACHINE INTELLIGENCE.
            </p>
            <div className="flex flex-col gap-2 font-mono text-[10px] text-brutal-gray-light uppercase">
              <div>LATENCY: &lt; 45ms</div>
              <div>MEMORY LAYERS: 11 ACTIVE</div>
              <div>SUBSTRATE STATUS: OPTIMIZED</div>
            </div>
          </div>
          
          <div className="mt-12 md:mt-16 grid grid-cols-2 gap-8 md:gap-12 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-brutal-neon-cyan mb-6 md:mb-8 border-b-2 border-brutal-neon-cyan pb-2 inline-block">Product</h3>
                <ul role="list" className="space-y-4 md:space-y-5">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm md:text-base font-bold text-brutal-white hover:text-brutal-neon-cyan transition-colors uppercase font-mono outline-none group flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brutal-gray group-hover:bg-brutal-neon-cyan" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-brutal-neon-cyan mb-6 md:mb-8 border-b-2 border-brutal-neon-cyan pb-2 inline-block">Company</h3>
                <ul role="list" className="space-y-4 md:space-y-5">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm md:text-base font-bold text-brutal-white hover:text-brutal-neon-cyan transition-colors uppercase font-mono outline-none group flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brutal-gray group-hover:bg-brutal-neon-cyan" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-brutal-neon-cyan mb-6 md:mb-8 border-b-2 border-brutal-neon-cyan pb-2 inline-block">Legal</h3>
                <ul role="list" className="space-y-4 md:space-y-5">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm md:text-base font-bold text-brutal-white hover:text-brutal-neon-cyan transition-colors uppercase font-mono outline-none group flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brutal-gray group-hover:bg-brutal-neon-cyan" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <p className="text-[10px] text-center md:text-left font-mono font-bold text-brutal-gray-light uppercase tracking-widest">
            &copy; {new Date().getFullYear()} EKKOS TECHNOLOGIES INC. NO 09923847-CA. 
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="brutal-tag border-brutal-neon-cyan text-brutal-neon-cyan">REGION: NORTH_AMERICA_EAST</div>
            <div className="brutal-tag border-brutal-neon-pink text-brutal-neon-pink">PROTO: EKK-X3</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
