import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Ekkos Technologies Inc. | ekkOS - AI Memory Infrastructure',
  description: 'The cognitive substrate and memory infrastructure for agents, robotics, apps, and enterprise AI systems. Event-sourced memory, episodic segmentation, pattern intelligence.',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Ekkos Technologies Inc. | ekkOS',
    description: 'The cognitive substrate and memory infrastructure for intelligent systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



