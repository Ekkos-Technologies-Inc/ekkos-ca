'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/technology', label: 'TECHNOLOGY' },
  { href: '/about', label: 'ABOUT' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [uptime, setUptime] = useState('00:00:00:00')

  useEffect(() => {
    const start = Date.now()
    const timer = setInterval(() => {
      const diff = Date.now() - start
      const h = Math.floor(diff / 3600000).toString().padStart(2, '0')
      const m = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0')
      const s = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0')
      const ms = Math.floor((diff % 1000) / 10).toString().padStart(2, '0')
      setUptime(`${h}:${m}:${s}:${ms}`)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-brutal-black border-b-4 border-brutal-white">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 outline-none group mb-1">
              <div className="bg-brutal-white text-brutal-black font-black text-2xl md:text-3xl px-3 py-1 tracking-tighter group-hover:bg-brutal-neon-cyan group-hover:text-brutal-black transition-colors transform -skew-x-6">
                ekkOS
              </div>
            </Link>
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-brutal-neon-cyan opacity-80">
              <span className="w-2 h-2 bg-brutal-neon-cyan rounded-full animate-pulse" />
              UPTIME: {uptime}
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono font-bold text-brutal-white hover:text-brutal-neon-cyan transition-colors uppercase tracking-widest text-xs outline-none relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brutal-neon-cyan transition-all group-hover:w-full" />
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4">
               <Link href="https://ekkos.dev" className="brutal-button text-xs py-2 px-6 border-brutal-neon-cyan text-brutal-neon-cyan hover:bg-brutal-neon-cyan hover:text-brutal-black brutal-shadow-cyan">
                UPLINK ➔
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-brutal-white border-2 border-brutal-white bg-brutal-black active:bg-brutal-neon-cyan active:text-brutal-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
              {mobileMenuOpen ? (
                <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeLinejoin="miter" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brutal-black border-b-4 border-brutal-white border-t-4 absolute w-full left-0 top-20 sm:top-24 z-50">
          <div className="px-6 pt-4 pb-12 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-4 text-2xl font-black text-brutal-white border-b-2 border-brutal-gray hover:text-brutal-neon-cyan uppercase tracking-widest font-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://ekkos.dev"
              className="block w-full text-center brutal-button mt-8 text-brutal-neon-cyan border-brutal-neon-cyan"
              onClick={() => setMobileMenuOpen(false)}
            >
              UPLINK TO PLATFORM
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
